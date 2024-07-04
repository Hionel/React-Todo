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

	return (
		<BaseCard cardTitle={pageTitle}>
			<section className="card_main_container">
				<Form
					buttonText="Login"
					formInputsMap={loginFormMap}
					onSubmit={handleLogin}
					formValidationState={formValidity}
				/>
			</section>
			<section className="card_action_container displayFlex">
				<AuthNavigation links={componentNavigation} />
			</section>
		</BaseCard>
	);
};

export default Login;
