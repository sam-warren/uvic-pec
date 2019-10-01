export interface AppTypes {
    theme: string;
}

export interface CurrentUserTypes {
    uid: string;
    firstName: string;
    lastName: string;
    email: string;
    admin: boolean;
}

// export interface CurrentUserTypes {
//     firstName: string;
//     lastName: string;
//     birthdate: string;
//     isUvicStudent: boolean;
//     studentNumber?: string;
//     emergencyContact: {
//         firstName: string;
//         lastName: string;
//         relation: string;
//         phoneNumber: string;
//     };
//     medicalConditions: string[];
//     hasPaidEquipmentFee: boolean
// }
