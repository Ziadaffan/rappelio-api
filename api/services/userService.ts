import { IUserDocument } from "../db/models/user";
import { UserRepository } from "../repositories/userRepository";
import bcrypt from "bcryptjs";

export class UserService {
  private static singleton: UserService;

  private constructor() {}

  public static instance(): UserService {
    if (!UserService.singleton) {
      UserService.singleton = new UserService();
    }
    return UserService.singleton;
  }

  public async findAll(): Promise<IUserDocument[] | null> {
    const users = await UserRepository.instance().findAll();
    if (!users) {
      return null;
    }

    return users;
  }

  public async findById(id: string): Promise<IUserDocument | null> {
    const user = await UserRepository.instance().findById(id);
    if (!user) {
      return null;
    }

    return user;
  }

  public async register(user: IUserDocument): Promise<IUserDocument> {
    return UserRepository.instance().register(user);
  }

  public async update(
    id: string,
    user: IUserDocument
  ): Promise<IUserDocument | null> {
    const updatedUser = await UserRepository.instance().update(id, user);

    if (!updatedUser) {
      return null;
    }

    return updatedUser;
  }

  public async delete(id: string): Promise<IUserDocument | null> {
    const deletedUser = await UserRepository.instance().delete(id);

    if (!deletedUser) {
      return null;
    }

    return deletedUser;
  }

  public async findByEmail(email: string): Promise<IUserDocument | null> {
    return UserRepository.instance().findByEmail(email);
  }

  public async updatePassword(
    id: string,
    password: string
  ): Promise<IUserDocument | null> {
    const user = await UserRepository.instance().findById(id);
    if (!user) {
      return null;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;

    return UserRepository.instance().update(id, user);
  }
}
