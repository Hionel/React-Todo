import { INavigationMap } from "../../interfaces/INavigationMap";

// Auth components ---------------------------------------

export const resetPasswordNavMap: INavigationMap[] = [
	{
		text: "Remembered your pass?",
		path: "/authentication",
	},
];

export const loginNavMap: INavigationMap[] = [
	{
		text: "Reset Password",
		path: "reset-password",
	},
	{
		text: "Register",
		path: "register",
	},
];

export const regiterNavMap = [
	{
		text: "Already have an account?",
		path: "/authentication",
	},
];

// -------------------------------------------------------
