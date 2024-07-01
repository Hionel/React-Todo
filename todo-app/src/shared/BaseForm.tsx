import React from "react";
import { TextField } from "@mui/material";

import Button from "@mui/material/Button";

import { IFormMap } from "../interfaces/IFormMap";

const Form: React.FC<IFormMap> = ({
	formInputsMap,
	onSubmit,
	buttonText,
	formValidationState,
}) => {
	return (
		<div className="form_wrapper displayFlex">
			<form className="form_style displayFlex" onSubmit={onSubmit}>
				{formInputsMap.map(
					({ id, type, label, value, onChange, error, hintText }) => {
						return (
							<TextField
								variant="standard"
								key={id}
								id={id}
								type={type}
								label={label}
								value={value}
								onChange={onChange}
								className="form_input"
								error={!error}
								helperText={hintText}
							/>
						);
					}
				)}
				<Button
					className="base_button"
					type="submit"
					component="button"
					color="primary"
					variant="contained"
					size="medium"
					disabled={!formValidationState}
				>
					{buttonText}
				</Button>
			</form>
		</div>
	);
};
export default Form;
