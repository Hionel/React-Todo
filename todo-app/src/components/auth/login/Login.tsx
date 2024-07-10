import useFormInput from "../../../services/customHooks/useFormInput";
import { useNavigation } from "../../../services/customHooks/useNavigation";
import { signIn } from "../../../services/authentication-service";

import Form from "../../../shared/BaseForm";
import BaseCard from "../../../shared/BaseCard";
// import BaseSnackbar from "../../../shared/BaseSnackbar";
import AuthNavigation from "../AuthNavigation";

import { loginNavMap } from "../../../services/maps/componentNavigationMaps";
import { getLoginFormMap } from "../../../services/maps/formsMaps";

import { ILoginData } from "../../../interfaces/auth/IFormData";
import { IFormProperties } from "../../../interfaces/IFormMap";
import { INavigationMap } from "../../../interfaces/INavigationMap";
import { Type } from "../../../interfaces/ISnackbar";
import { showToaster } from "../../../services/toaster-service";

// interface ILoginState {
// 	formData: ILoginData;
// }

const Login: React.FC = () => {
	const pageTitle = "Login";
	const navigate = useNavigation();

	const { formData, handleInputChange } = useFormInput({
		email: "",
		password: "",
	});

	// const [isPending, setIsPending] = useState<boolean>(false);

	const componentNavigation: INavigationMap[] = loginNavMap;
	const loginFormMap: IFormProperties[] = getLoginFormMap(
		formData,
		handleInputChange
	);
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			// setIsPending(true);
			const data = await signIn(formData as ILoginData);
			if (data instanceof Error) throw data;
			showToaster(Type.success, "Login successful!");
			// setIsPending(false);
			navigate("/homepage");
		} catch (error) {
			console.log(error);
			// setIsPending(false);
			showToaster(Type.error, "Invalid Credentials!");
		}
	};

	return (
		<>
			<BaseCard cardTitle={pageTitle}>
				<section className="card_main_container">
					<Form
						buttonText="Login"
						formInputsMap={loginFormMap}
						onSubmit={handleLogin}
					/>
				</section>
				<section className="card_action_container displayFlex">
					<AuthNavigation links={componentNavigation} />
				</section>
			</BaseCard>
		</>
	);
};

export default Login;
