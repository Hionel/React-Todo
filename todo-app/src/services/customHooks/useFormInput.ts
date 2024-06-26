import { useEffect, useState } from "react";
import {
	ILoginData,
	IRegisterData,
	IResetPasswordData,
} from "../../interfaces/auth/IFormData";
import {
	IValidationFormState,
	validateForm,
	rules as validationRules,
} from "../maps/validationsMap";

interface IUseFormResponse {
	formData: ILoginData | IRegisterData | IResetPasswordData;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	errors: IValidationFormState;
	formValidity: boolean;
}

const useFormInput = (
	initialState: ILoginData | IRegisterData | IResetPasswordData
): IUseFormResponse => {
	const [formData, setFormData] = useState(initialState);
	const [errors, setErrors] = useState({} as IValidationFormState);
	const [formValidity, setFormValidity] = useState<boolean>(false);

	const validateField = (id: string, value: string) => {
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

	useEffect(() => {
		const isFormValid = validateForm(errors, formData);
		setFormValidity(isFormValid);
	}, [errors, formData]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;

		setFormData({
			...formData,
			[id]: value,
		});
		validateField(id, value);
	};

	return { formData, handleInputChange, errors, formValidity };
};

export default useFormInput;
