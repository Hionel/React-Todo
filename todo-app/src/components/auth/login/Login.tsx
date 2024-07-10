import useFormInput from "../../../services/customHooks/useFormInput";
import { useNavigation } from "../../../services/customHooks/useNavigation";
import { signIn } from "../../../services/authentication-service";

import Form from "../../../shared/BaseForm";
import BaseCard from "../../../shared/BaseCard";
import AuthNavigation from "../AuthNavigation";

import { loginNavMap } from "../../../services/maps/componentNavigationMaps";
import { getLoginFormMap } from "../../../services/maps/formsMaps";

import { ILoginData } from "../../../interfaces/auth/IFormData";
import { IFormProperties } from "../../../interfaces/IFormMap";
import { INavigationMap } from "../../../interfaces/INavigationMap";

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
	const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const response = await signIn(formData as ILoginData);
		if (response instanceof Error) return;
		navigate("/homepage");
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
