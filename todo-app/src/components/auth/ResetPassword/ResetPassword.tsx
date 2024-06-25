import React, { useEffect } from "react";
import Form from "../../../shared/BaseForm";

import useFormInput from "../../../services/customHooks/useFormInput";

import BaseCard from "../../../shared/BaseCard";
import AuthNavigation from "../../../components/auth/AuthNavigation";
import { resetPasswordNavMap } from "../../../services/maps/componentNavigationMaps";

import { IFormProperties } from "../../../interfaces/IFormMap";
import { getResetPasswordFormMap } from "../../../services/maps/formsMaps";
import { IResetPasswordData } from "../../../interfaces/auth/IFormData";
import { INavigationMap } from "../../../interfaces/INavigationMap";
import { validateForm } from "../../../services/maps/validationsMap";

const ResetPassword: React.FC = () => {
	const { formData, handleInputChange, errors } = useFormInput({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [formValidity, setFormValidity] = React.useState<boolean>(false);

	const pageTitle = "Reset Your Password";
	const componentNavigation: INavigationMap[] = resetPasswordNavMap;
	const resetPasswordFormMap: IFormProperties[] = getResetPasswordFormMap(
		formData as IResetPasswordData,
		handleInputChange,
		errors
	);

	useEffect(() => {
		const isFormValid = validateForm(errors, formData);
		setFormValidity(isFormValid);
	}, [errors, formData]);

	const handleReset = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData);
	};

	const resetPasswordMain = (
		<Form
			buttonText="Send Reset Link"
			formInputsMap={resetPasswordFormMap}
			onSubmit={handleReset}
			formValidationState={formValidity}
		/>
	);

	return (
		<BaseCard
			cardTitle={pageTitle}
			cardMain={resetPasswordMain}
			cardActions={<AuthNavigation links={componentNavigation} />}
		></BaseCard>
	);
};

export default ResetPassword;
