import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
