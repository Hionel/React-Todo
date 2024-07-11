import { Navigate, createBrowserRouter } from "react-router-dom";

import App from "../App";
import Auth from "../components/auth/Auth";
import Login from "../components/auth/Login/Login";
import Register from "../components/auth/Register/Register";
import ResetPassword from "../components/auth/ResetPassword/ResetPassword";
import HomeComponent from "../components/homepage/HomeComponent";
import CreateComponent from "../components/homepage/CreateComponent/CreateComponent";
import ListComponent from "../components/homepage/ListComponent/ListComponent";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Navigate replace to="/authentication" />,
			},
			{
				path: "authentication",
				element: <Auth />,
				children: [
					{
						index: true,
						element: <Login />,
					},
					{
						path: "register",
						element: <Register />,
					},
					{
						path: "reset-password",
						element: <ResetPassword />,
					},
				],
			},
			{
				path: "homepage",
				element: <HomeComponent />,
				children: [
					{
						path: "create",
						element: <CreateComponent />,
					},
					{
						path: "list",
						element: <ListComponent />,
					},
				],
			},
		],
	},
];
const Routes = createBrowserRouter(routes);

export default Routes;
