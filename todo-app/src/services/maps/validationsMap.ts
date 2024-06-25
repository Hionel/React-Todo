import {
	ILoginData,
	IRegisterData,
	IResetPasswordData,
} from "../../interfaces/auth/IFormData";

const EMAIL_PATTERN = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const NAMES_PATTERN = new RegExp(/^[^\d\s]+$/);
const PASSWORD_PATTERN = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
const PHONE_PATTERN = new RegExp(/^\d{10}$/);
const MIN_AGE = 18;
const MAX_AGE = 100;

export interface IValidationFormState {
	[key: string]: IValidationMessage;
}

export interface IValidationMessage {
	success: boolean;
	message: string | null;
}

export const validateForm = (
	errors: IValidationFormState,
	formData: ILoginData | IRegisterData | IResetPasswordData
) => {
	const errorsArray: IValidationMessage[] = Object.values(errors);
	if (errorsArray.length < 1) return false;
	if (errorsArray.length !== Object.entries(formData).length) return false;

	const hasErrors = errorsArray.some((error) => !error.success);
	if (hasErrors) {
		console.log("Form has errors");
		return false;
	}
	return true;
};

const validateEmail = (value: string): IValidationMessage => {
	if (!value) {
		return {
			success: false,
			message: "Please fill in the email!",
		};
	} else if (!EMAIL_PATTERN.test(value)) {
		return {
			success: false,
			message: "Email must be in a valid format!",
		};
	}
	return { success: true, message: "" };
};

const validatePassword = (value: string): IValidationMessage => {
	if (!value) {
		return {
			success: false,
			message: "Please fill in the password!",
		};
	} else if (!PASSWORD_PATTERN.test(value)) {
		return {
			success: false,
			message:
				"Password must be at least 8 characters long and contain at least one letter and one number!",
		};
	}
	return { success: true, message: "" };
};

const validatePhone = (value: string): IValidationMessage => {
	if (!value) {
		return {
			success: false,
			message: "Please fill in the phone number!",
		};
	} else if (!PHONE_PATTERN.test(value)) {
		return {
			success: false,
			message: "Phone number must be a 10-digit number!",
		};
	}
	return { success: true, message: "" };
};

const validateAge = (value: number): IValidationMessage => {
	if (!value) return { success: false, message: "Please fill in the age!" };

	if (isNaN(value)) return { success: false, message: "Age must be a number!" };
	if (value.toString().startsWith("0"))
		return {
			success: false,
			message: "Age cannot start with 0!",
		};
	if (value < MIN_AGE)
		return {
			success: false,
			message: `Must be older than ${MIN_AGE} years old!`,
		};

	if (value > MAX_AGE)
		return {
			success: false,
			message: `Age must be less that ${MAX_AGE} years old!`,
		};

	return { success: true, message: "" };
};

const validateConfirmPassword = (
	value: string,
	password?: string
): IValidationMessage => {
	if (!value) {
		return {
			success: false,
			message: "Please fill in the confirm password!",
		};
	} else if (value !== password) {
		return {
			success: false,
			message: "Confirm password does not match the password!",
		};
	}
	return { success: true, message: "" };
};

const validateFirstName = (value: string): IValidationMessage => {
	if (!value)
		return {
			success: false,
			message: "Please fill in the first name!",
		};

	if (!NAMES_PATTERN.test(value))
		return {
			success: false,
			message: "First name must not include numbers!",
		};

	if (value.length < 2)
		return {
			success: false,
			message: "First name must have at least 2 charachters!",
		};

	return { success: true, message: "" };
};

const validateLastName = (value: string): IValidationMessage => {
	if (!value)
		return {
			success: false,
			message: "Please fill in the last name!",
		};

	if (!NAMES_PATTERN.test(value))
		return {
			success: false,
			message: "Last name must not include numbers!",
		};

	if (value.length < 2)
		return {
			success: false,
			message: "Last name must have at least 2 charachters!",
		};

	return { success: true, message: "" };
};

export const rules = {
	email: validateEmail,
	password: validatePassword,
	phone: validatePhone,
	age: validateAge,
	confirmPassword: validateConfirmPassword,
	firstName: validateFirstName,
	lastName: validateLastName,
};
