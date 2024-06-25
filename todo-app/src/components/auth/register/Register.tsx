import React, { useEffect, useState } from "react";
import Form from "../../../shared/BaseForm";

import useFormInput from "../../../services/customHooks/useFormInput";
import AuthNavigation from "../AuthNavigation";
import BaseCard from "../../../shared/BaseCard";

import { getRegisterFormMap } from "../../../services/maps/formsMaps";

import { IFormProperties } from "../../../interfaces/IFormMap";
import { IRegisterData } from "../../../interfaces/auth/IFormData";
import { regiterNavMap } from "../../../services/maps/componentNavigationMaps";
import { INavigationMap } from "../../../interfaces/INavigationMap";
import { validateForm } from "../../../services/maps/validationsMap";

const Register: React.FC = () => {
	const { formData, handleInputChange, errors } = useFormInput({
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
		age: 0,
	});

	const [formValidity, setFormValidity] = useState<boolean>(false);

	const pageTitle = "Register";
	const componentNavigation: INavigationMap[] = regiterNavMap;
	const registerFormMap: IFormProperties[] = getRegisterFormMap(
		formData as IRegisterData,
		handleInputChange,
		errors
	);

	useEffect(() => {
		// console.log("Use effect triggered");
		const isFormValid = validateForm(errors, formData);
		setFormValidity(isFormValid);
	}, [errors, formData]);

	const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData);
	};

	const registerMain = (
		<Form
			buttonText="Register"
			formInputsMap={registerFormMap}
			onSubmit={handleRegister}
			formValidationState={formValidity}
		/>
	);

	return (
		<BaseCard
			cardTitle={pageTitle}
			cardMain={registerMain}
			cardActions={<AuthNavigation links={componentNavigation} />}
		></BaseCard>
	);
};

export default Register;
