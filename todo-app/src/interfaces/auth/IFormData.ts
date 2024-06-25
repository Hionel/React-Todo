export interface ILoginData {
	email: string;
	password: string;
}

export interface IRegisterData {
	email: string;
	password: string;
	confirmPassword: string;
	firstName: string;
	lastName: string;
	age: number;
}

export interface IResetPasswordData {
	email: string;
	password: string;
	confirmPassword: string;
}
