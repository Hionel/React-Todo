import React from "react";
import { signUserOut } from "../../services/authentication-service";
import { useNavigation } from "../../services/customHooks/useNavigation";
import AppHeader from "../AppHeader";
import { Outlet } from "react-router-dom";

const HomeComponent: React.FC = () => {
	const navigate = useNavigation();
	const pages = [
		{
			name: "Create",
			navigateToPage: () => navigate("/homepage/create"),
		},
		{
			name: "List",
			navigateToPage: () => navigate("/homepage/list"),
		},
	];

	const handleLogout = async () => {
		await signUserOut();
		navigate("/authentication");
	};

	const handleIconClick = () => {
		navigate("/homepage");
	};

	return (
		<>
			<AppHeader
				pages={pages}
				handleIconClick={handleIconClick}
				handleLogout={handleLogout}
			></AppHeader>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default HomeComponent;
