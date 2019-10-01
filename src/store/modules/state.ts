import { AppTypes, CurrentUserTypes } from "./types";

export const AppState: AppTypes = {
    theme: "dark"
};

export const CurrentUserState: CurrentUserTypes = {
    uid: "",
    firstName: "",
    lastName: "",
    email: "",
    admin: false,
};
