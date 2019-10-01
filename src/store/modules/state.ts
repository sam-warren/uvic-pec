import { AppTypes, CurrentUserTypes } from "./types";

export const AppState: AppTypes = {
    formType: "logIn",
    theme: "dark"
};

export const CurrentUserState: CurrentUserTypes = {
    uid: "",
    firstName: "",
    lastName: "",
    email: "",
};
