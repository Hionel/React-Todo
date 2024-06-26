import React from "react";
import { signUserOut } from "../../services/authentication-service";
import { useNavigation } from "../../services/customHooks/useNavigation";

// interface HomeComponentProps {
// 	username: string;
// 	onLogout: () => void;
// }

const HomeComponent: React.FC = () => {
	const navigate = useNavigation();

	const handleLogout = async () => {
		console.log("logout");
		await signUserOut();
		navigate("/authentication");
	};
	return (
		<div>
			<header>
				<h1>Hello, username!</h1>
				<button onClick={handleLogout}>Logout</button>
			</header>
			<main>{/* Add your main content here */}</main>
		</div>
	);
};

export default HomeComponent;
