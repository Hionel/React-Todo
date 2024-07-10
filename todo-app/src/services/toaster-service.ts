import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Type } from "../interfaces/ISnackbar";

export const showToaster = (
	type: Type,
	message: string,
	duration: number = 5000
) => {
	toast[type](`${message}`, {
		position: "top-right",
		autoClose: duration,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		theme: "light",
		transition: Slide,
	});
};
