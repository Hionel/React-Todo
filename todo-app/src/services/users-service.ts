import { IRegisterData } from "../interfaces/auth/IFormData";

import { firebaseFirestore } from "./firebase/firebase-service";
import { collection, addDoc } from "firebase/firestore";

export const createUserDocument = async (userData: IRegisterData) => {
	try {
		const docRef = await addDoc(collection(firebaseFirestore, "Users"), {
			email: userData.email,
			firstName: userData.firstName,
			lastName: userData.lastName,
			age: userData.age,
			creationDate: new Date(),
		});

		if (!docRef)
			throw new Error("Something went wrong while creating the user document!");

		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};
