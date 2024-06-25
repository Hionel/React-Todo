import React from "react";

import { INavigationMap } from "../../interfaces/INavigationMap";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";

interface AuthNavigationProps {
	links: INavigationMap[];
}

const AuthNavigation: React.FC<AuthNavigationProps> = ({ links }) => {
	return (
		<nav className="auth_navigation displayFlex">
			{links.map((link, index) => (
				<Button
					key={index}
					component={RouterLink}
					to={link.path}
					color="primary"
					variant="text"
					size="small"
				>
					{link.text}
				</Button>
			))}
		</nav>
	);
};

export default AuthNavigation;
