import { firebaseAuth } from "./firebase/firebase-service";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { createUserDocument } from "./users-service";
import { showToaster, Type } from "./toaster-service";
import getErrorMessage from "./firebase-error-messages";

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

		showToaster(Type.success, "Created user successfuly!");
		await createUserDocument(userData);
		return user;
	} catch (error) {
		let errorMessage: string;
		if (error instanceof FirebaseError) {
			errorMessage = getErrorMessage(error.code);
			// console.log(errorCode, errorMessage);
		} else {
			errorMessage = "An unexpected error occurred";
			// console.log("An unexpected error occurred", error);
		}
		showToaster(Type.error, errorMessage);
		return error;
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

		console.log("User Sign In Successfully !");
		return user;
	} catch (error) {
		console.log(error instanceof FirebaseError);
		let errorMessage: string;
		if (error instanceof FirebaseError) {
			console.log(error.code);
			errorMessage = getErrorMessage(error.code);
		} else {
			errorMessage = "An unexpected error occurred";
		}
		showToaster(Type.error, errorMessage);
		return error;
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
