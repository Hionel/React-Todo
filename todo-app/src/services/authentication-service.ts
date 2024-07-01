import { firebaseAuth } from "./firebase/firebase-service";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { createUserDocument } from "./users-service";

import { ILoginData, IRegisterData } from "../interfaces/auth/IFormData";
import { FirebaseError } from "firebase/app";

export const createUserAuthentication = async (userData: IRegisterData) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			firebaseAuth,
			userData.email,
			userData.password
		);
		const user = userCredential.user;

		if (!user) throw new Error("Something went wrong while creating the user!");

		await createUserDocument(userData);
		return user;
	} catch (error) {
		if (error instanceof FirebaseError) {
			const errorCode = error.code;
			const errorMessage = error.message;
			// add notification
			console.log(errorCode, errorMessage);
		} else {
			console.log("An unexpected error occurred", error);
		}
	}
};

export const signIn = async (userData: ILoginData) => {
	console.log("User Sign In Started ! ");
	try {
		const userCredential = await signInWithEmailAndPassword(
			firebaseAuth,
			userData.email,
			userData.password
		);
		const user = userCredential.user;

		if (!user) throw new Error("User Not Found !");

		console.log("User Sign In Successfully !");
		console.log(user);
		return user;
	} catch (error) {
		if (error instanceof FirebaseError) {
			const errorCode = error.code;
			const errorMessage = error.message;
			// add notification
			console.log(errorCode, errorMessage);
		} else {
			console.log("An unexpected error occurred", error);
		}
	}
};

export const signUserOut = async () => {
	console.log("User Sign Out Started ! ");
	try {
		await signOut(firebaseAuth);
	} catch (error) {
		if (error instanceof FirebaseError) {
			const errorCode = error.code;
			const errorMessage = error.message;
			// add notification
			console.log(errorCode, errorMessage);
		} else {
			console.log("An unexpected error occurred", error);
		}
	}
};
