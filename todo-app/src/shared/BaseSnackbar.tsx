import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ISnackbar from "../interfaces/ISnackbar";

const BaseSnackbar = (props: ISnackbar) => {
	const { isOpen, type, message, duration = 6000 } = props;
	console.log(isOpen);
	const [snackState, setSnackState] = useState(isOpen);

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === "clickaway") {
			return;
		}

		setSnackState(false);
	};

	return (
		<div>
			<Snackbar
				open={snackState}
				autoHideDuration={duration}
				onClose={handleClose}
			>
				<Alert
					onClose={handleClose}
					severity={type}
					variant="filled"
					sx={{ width: "100%" }}
				>
					{message}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default BaseSnackbar;
