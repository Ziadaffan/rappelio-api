import { Expose } from "class-transformer";
import { IUserDocument } from "../db/models/user";

export class UserDTO {
  @Expose()
  id!: string;

  @Expose()
  name!: string;

  @Expose()
  email!: string;

  @Expose()
  dateOfBirth!: Date;

  @Expose()
  gender!: string;

  constructor(partial: Partial<UserDTO> = {}) {
    Object.assign(this, partial);
  }
}

export const mapToUserDTO = (user: IUserDocument): UserDTO => {
  return new UserDTO({
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    dateOfBirth: user.dateOfBirth,
    gender: user.gender,
  });
};

export const mapToUserDTOs = (users: IUserDocument[]): UserDTO[] => {
  return users.map((user) => mapToUserDTO(user));
};
