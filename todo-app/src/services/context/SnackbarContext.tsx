// import React, { createContext, useState, ReactNode } from "react";
// import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";

// import ISnackbarContextType from "../../interfaces/ISnackbarContextType";

// const SnackbarContext = createContext<ISnackbarContextType | undefined>(
// 	undefined
// );

// interface SnackbarProviderProps {
// 	children: ReactNode;
// }

// export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
// 	children,
// }) => {
// 	const [snackbarOpen, setSnackbarOpen] = useState(false);
// 	const [message, setMessage] = useState("");
// 	const [type, setType] = useState<"success" | "info" | "warning" | "error">(
// 		"info"
// 	);

// 	const showMessage = (
// 		msg: string,
// 		sev: "success" | "info" | "warning" | "error" = "info"
// 	) => {
// 		setMessage(msg);
// 		setType(sev);
// 		setSnackbarOpen(true);
// 	};

// 	const handleClose = () => {
// 		setSnackbarOpen(false);
// 	};

// 	return (
// 		<SnackbarContext.Provider value={{ showMessage }}>
// 			{children}
// 			<Snackbar
// 				open={snackbarOpen}
// 				autoHideDuration={6000}
// 				onClose={handleClose}
// 			>
// 				<Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
// 					{message}
// 				</Alert>
// 			</Snackbar>
// 		</SnackbarContext.Provider>
// 	);
// };

// export default SnackbarContext;
