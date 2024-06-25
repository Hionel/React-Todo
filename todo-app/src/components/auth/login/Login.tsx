import React, { useEffect, useState } from "react";
import Form from "../../../shared/BaseForm";
import BaseCard from "../../../shared/BaseCard";
import AuthNavigation from "../AuthNavigation";

import useFormInput from "../../../services/customHooks/useFormInput";

import { loginNavMap } from "../../../services/maps/componentNavigationMaps";
import { getLoginFormMap } from "../../../services/maps/formsMaps";

import { IFormProperties } from "../../../interfaces/IFormMap";
import { INavigationMap } from "../../../interfaces/INavigationMap";
import { validateForm } from "../../../services/maps/validationsMap";

const Login: React.FC = () => {
	const { formData, handleInputChange, errors } = useFormInput({
		email: "",
		password: "",
	});
	const [formValidity, setFormValidity] = useState<boolean>(false);

	const pageTitle = "Login";
	const componentNavigation: INavigationMap[] = loginNavMap;
	const loginFormMap: IFormProperties[] = getLoginFormMap(
		formData,
		handleInputChange,
		errors
	);

	useEffect(() => {
		// console.log("Use effect triggered");
		const isFormValid = validateForm(errors, formData);
		setFormValidity(isFormValid);
	}, [errors, formData]);

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

	const loginMain = (
		<Form
			buttonText="Login"
			formInputsMap={loginFormMap}
			onSubmit={handleLogin}
			formValidationState={formValidity}
		/>
	);

	return (
		<BaseCard
			cardTitle={pageTitle}
			cardMain={loginMain}
			cardActions={<AuthNavigation links={componentNavigation} />}
		></BaseCard>
	);
};

export default Login;
