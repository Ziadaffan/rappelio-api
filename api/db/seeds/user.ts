import { IUser } from "../types/user";
import { Types } from "mongoose";

interface IUserSeed extends Partial<IUser> {
    _id: Types.ObjectId;
}

export const users: IUserSeed[] = [
    {
        _id: new Types.ObjectId("507f1f77bcf86cd799439011"),
        name: "Mira Affan",
        email: "miraaffan36@gmail.com",
        password: "$2b$10$UNEX4d4oOv0aKE.9UhlGhenzdn.7vZjIjmXPAPawJoPzRNIwSTGRS",
        dateOfBirth: new Date("2006-05-01"),
        gender: "female",
    },
    {
        _id: new Types.ObjectId("507f1f77bcf86cd799439012"),
        name: "Khaled affan",
        email: "k.affan1998@gmail.com",
        password: "$2b$10$UNEX4d4oOv0aKE.9UhlGhenzdn.7vZjIjmXPAPawJoPzRNIwSTGRS",
        dateOfBirth: new Date("1998-04-03"),
        gender: "male",
    },
    {
        _id: new Types.ObjectId("507f1f77bcf86cd799439013"),
        name: "Maria Fakoua",
        email: "fakoua.maria@gmail.com",
        password: "$2b$10$UNEX4d4oOv0aKE.9UhlGhenzdn.7vZjIjmXPAPawJoPzRNIwSTGRS",
        dateOfBirth: new Date("2004-12-30"),
        gender: "female",
    },
    {
        _id: new Types.ObjectId("507f1f77bcf86cd799439014"),
        name: "Ziada Affan",
        email: "ziadaffan92@gmail.com",
        password: "$2b$10$UNEX4d4oOv0aKE.9UhlGhenzdn.7vZjIjmXPAPawJoPzRNIwSTGRS",
        dateOfBirth: new Date("1992-01-01"),
        gender: "female",
    },
    {
        _id: new Types.ObjectId("507f1f77bcf86cd799439015"),
        name: "Lucas Petit",
        email: "lucas.petit@gmail.com",
        password: "$2b$10$UNEX4d4oOv0aKE.9UhlGhenzdn.7vZjIjmXPAPawJoPzRNIwSTGRS",
        dateOfBirth: new Date("1998-01-01"),
        gender: "male",
    }
];
