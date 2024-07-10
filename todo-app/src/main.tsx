import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ToastContainer></ToastContainer>
		<RouterProvider router={Routes}></RouterProvider>
	</React.StrictMode>
);
