import React from "react";
import { Outlet } from "react-router-dom";

const Auth: React.FC = () => {
	return (
		<section className="page displayFlex">
			<Outlet></Outlet>
		</section>
	);
};

export default Auth;
