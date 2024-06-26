import React from "react";
import Form from "../../../shared/BaseForm";
import BaseCard from "../../../shared/BaseCard";
import AuthNavigation from "../AuthNavigation";

import { loginNavMap } from "../../../services/maps/componentNavigationMaps";
import { getLoginFormMap } from "../../../services/maps/formsMaps";

import { ILoginData } from "../../../interfaces/auth/IFormData";
import { IFormProperties } from "../../../interfaces/IFormMap";
import { INavigationMap } from "../../../interfaces/INavigationMap";

import useFormInput from "../../../services/customHooks/useFormInput";

import { signIn } from "../../../services/authentication-service";
import { useNavigation } from "../../../services/customHooks/useNavigation";

const Login: React.FC = () => {
	const navigate = useNavigation();
	const { formData, handleInputChange, errors, formValidity } = useFormInput({
		email: "",
		password: "",
	});

	const pageTitle = "Login";
	const componentNavigation: INavigationMap[] = loginNavMap;
	const loginFormMap: IFormProperties[] = getLoginFormMap(
		formData,
		handleInputChange,
		errors
	);
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const userData = await signIn(formData as ILoginData);
		if (!userData) return;

		navigate("/homepage");
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
