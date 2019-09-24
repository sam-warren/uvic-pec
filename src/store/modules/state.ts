import { ClubSignUpFormTypes, EmergencyContactTypes } from "./types";

export const ClubSignUpFormState: ClubSignUpFormTypes = {
    firstName: "",
    lastName: "",
    birthdate: "",
    isUvicStudent: false,
    studentNumber: "",
    medicalConditions: "",
    password: "",
};

export const EmergencyContactState: EmergencyContactTypes = {
    firstName: "",
    lastName: "",
    relation: "",
    phoneNumber: "",
};
