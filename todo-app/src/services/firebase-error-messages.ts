type FirebaseErrorCode =
	| "auth/invalid-email"
	| "auth/invalid-credential"
	| "auth/user-not-found"
	| "auth/wrong-password"
	| "auth/email-already-in-use"
	| "auth/weak-password"
	| "firestore/permission-denied"
	| "storage/unauthenticated"
	| string; // Include string to cover any other potential error codes

// Define a type for the error messages mapping
interface IErrorMessages {
	[key: FirebaseErrorCode]: string;
}

const errorMessages: IErrorMessages = {
	"auth/invalid-email":
		"The email address is not valid. Please enter a valid email address.",
	"auth/invalid-credential": "Email or password is incorrect",
	"auth/user-not-found": "No account found with this email address.",
	"auth/wrong-password": "Incorrect password. Please try again.",
	"auth/email-already-in-use":
		"The email address is already in use. Please use a different email.",
	"auth/weak-password":
		"The password is too weak. Please choose a stronger password.",
	"firestore/permission-denied":
		"You do not have permission to perform this action.",
	"storage/unauthenticated": "You must be logged in to perform this action.",
	// Add other error codes and messages as needed
};

const getErrorMessage = (code: FirebaseErrorCode) => {
	console.log(errorMessages[code]);
	return errorMessages[code] || "An unknown error occurred. Please try again.";
};

export default getErrorMessage;
