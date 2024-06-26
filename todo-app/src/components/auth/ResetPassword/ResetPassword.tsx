import React from "react";
import Form from "../../../shared/BaseForm";

import useFormInput from "../../../services/customHooks/useFormInput";

import BaseCard from "../../../shared/BaseCard";
import AuthNavigation from "../../../components/auth/AuthNavigation";
import { resetPasswordNavMap } from "../../../services/maps/componentNavigationMaps";

import { IFormProperties } from "../../../interfaces/IFormMap";
import { getResetPasswordFormMap } from "../../../services/maps/formsMaps";
import { IResetPasswordData } from "../../../interfaces/auth/IFormData";
import { INavigationMap } from "../../../interfaces/INavigationMap";

const ResetPassword: React.FC = () => {
	const { formData, handleInputChange, errors, formValidity } = useFormInput({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const pageTitle = "Reset Your Password";
	const componentNavigation: INavigationMap[] = resetPasswordNavMap;
	const resetPasswordFormMap: IFormProperties[] = getResetPasswordFormMap(
		formData as IResetPasswordData,
		handleInputChange,
		errors
	);

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
