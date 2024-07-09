export default interface ISnackbar {
	isOpen: boolean;
	type: Type;
	message: string;
	duration?: number;
}

export enum Type {
	error = "error",
	success = "success",
	info = "info",
	warning = "warning",
}
