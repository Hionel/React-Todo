import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getErrorMessage from "./firebase-error-messages";
export default interface IToasterParams {
	type: Type;
	message: string;
	duration?: number;
	pauseOnHover?: boolean;
}

export enum Type {
	error = "error",
	success = "success",
	info = "info",
	warning = "warning",
}

export const showToaster = (
	type: Type,
	message: string,
	duration: number = 5000,
	pauseOnHover: boolean = true
) => {
	if (Type.error === type) {
		message = getErrorMessage(message);
	}

	toast[type](`${message}`, {
		position: "top-right",
		autoClose: duration,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: pauseOnHover,
		draggable: false,
		progress: undefined,
		theme: "light",
		transition: Slide,
	});
};
