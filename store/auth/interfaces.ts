export interface LoginState {
    username: string,
    password: string
}

export interface SignupState {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    accept: boolean
}