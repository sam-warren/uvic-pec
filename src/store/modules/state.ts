import { ClubSignUpFormTypes, EmergencyContactTypes } from "./types";

export const ClubSignUpFormState: ClubSignUpFormTypes = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthdate: "",
    isUvicStudent: false,
    studentNumber: "",
    medicalConditions: "",
};

export const EmergencyContactState: EmergencyContactTypes = {
    firstName: "",
    lastName: "",
    relation: "",
    phoneNumber: "",
};
