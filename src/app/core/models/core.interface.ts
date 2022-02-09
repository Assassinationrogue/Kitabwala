export interface UserInfo{
    email: string;
    password: string;
}

export interface SignupStatus {
    newUser: boolean;
    existingUser: boolean;
    existingUserLoggedIn: boolean;
    newUserLoggedIn: boolean;
}