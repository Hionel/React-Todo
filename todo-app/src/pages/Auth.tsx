import React from "react";
import Login from "../components/auth/login/Login";
import Register from "../components/auth/register/Register";
import RestPassword from "../components/auth/reset-password/RestPassword";

const Auth: React.FC = () => {
	return (
		<div>
			<h1>Auth</h1>
			<Login />
			<Register />
			<RestPassword />
		</div>
	);
};

export default Auth;
