import { useState } from "react";
import {
	ILoginData,
	IRegisterData,
	IResetPasswordData,
} from "../../interfaces/auth/IFormData";
import {
	IValidationFormState,
	// IValidationMessage,
	rules as validationRules,
} from "../maps/validationsMap";

interface IUseForm {
	formData: ILoginData | IRegisterData | IResetPasswordData;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	errors: IValidationFormState;
}

const useFormInput = (
	initialState: ILoginData | IRegisterData | IResetPasswordData
): IUseForm => {
	const [formData, setFormData] = useState(initialState);
	const [errors, setErrors] = useState({} as IValidationFormState);

	const validateField = (id: string, value: string) => {
		console.log(id, value);

		if (validationRules[id as keyof typeof validationRules]) {
			let validationResult;
			if (id === "confirmPassword") {
				validationResult = validationRules[id as keyof typeof validationRules](
					value as never,
					formData.password
				);
			} else {
				validationResult = validationRules[id as keyof typeof validationRules](
					value as never
				);
			}

			setErrors({
				...errors,
				[id]: validationResult,
			});
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;

		setFormData({
			...formData,
			[id]: value,
		});
		validateField(id, value);
	};

	return { formData, handleInputChange, errors };
};

export default useFormInput;
