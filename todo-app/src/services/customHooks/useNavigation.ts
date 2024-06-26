import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
	const navigate = useNavigate();

	return (url: string) => {
		navigate(url);
	};
};
