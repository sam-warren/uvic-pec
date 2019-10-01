import { AppTypes, CurrentUserTypes } from "./types";

export const AppState: AppTypes = {
    theme: "dark"
};

export const CurrentUserState: CurrentUserTypes = {
    uid: "",
    hasVerified: false,
    firstName: "",
    lastName: "",
    email: "",
    admin: false,
};
