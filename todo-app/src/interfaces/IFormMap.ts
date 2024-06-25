// import { IValidationMessage } from "../services/maps/validationsMap";

export interface IFormMap {
	formInputsMap: IFormProperties[];
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	buttonText: string;
	formValidationState: boolean;
}

export interface IFormProperties {
	id: string;
	type: string;
	label: string;
	value: string | number | Date | undefined;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	// onBlur: (event: React.FocusEvent<HTMLInputElement>) => IValidationMessage;
	error?: boolean;
	hintText?: string | null;
}
