export interface loginFormData {
    email: string;
    password: string;
}

export interface signupFormData extends loginFormData {
    display_name: string; 
}