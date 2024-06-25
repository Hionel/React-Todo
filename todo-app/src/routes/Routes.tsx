import {
	Route,
	Navigate,
	createRoutesFromElements,
	createBrowserRouter,
} from "react-router-dom";

import Auth from "../components/auth/Auth";
import Login from "../components/auth/Login/Login";
import Register from "../components/auth/Register/Register";
import ResetPassword from "../components/auth/ResetPassword/ResetPassword";
import ErrorComponent from "../components/ErrorComponent";

const Routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route errorElement={<ErrorComponent />}>
				<Route index element={<Navigate replace to="/authentication" />} />

				<Route path="/authentication" element={<Auth />}>
					<Route index element={<Login />}></Route>
					<Route path="/authentication/register" element={<Register />}></Route>
					<Route
						path="/authentication/reset-password"
						element={<ResetPassword />}
					></Route>
				</Route>
				<Route />
			</Route>
		</Route>
	)
);

export default Routes;
