import jwt from "jsonwebtoken";
import { IUserDocument } from "../db/models/user";
import { UserService } from "./userService";
import { Gender } from "../controllers/authController";

export class AuthService {
  private static singleton: AuthService;
  private userService: UserService;

  private constructor() {
    this.userService = UserService.instance();
  }

  public static instance(): AuthService {
    if (!AuthService.singleton) {
      AuthService.singleton = new AuthService();
    }
    return AuthService.singleton;
  }

  public async login(email: string, password: string): Promise<{ token: string } | null> {
    const user = await this.userService.findByEmail(email);
    
    const bool = await user?.comparePassword(password);

    if (!user || !bool) {
      return null;
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "");
    return { token };
  }

  public async register(userData: {
    name: string;
    email: string;
    password: string;
    dateOfBirth: Date;
    gender: Gender;
  }): Promise<{ success: boolean; message: string }> {
    const existingUser = await this.userService.findByEmail(userData.email);

    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    if (userData.gender !== Gender.MALE && userData.gender !== Gender.FEMALE) {
      return { success: false, message: "Invalid gender" };
    }

    await this.userService.register(userData as IUserDocument);
    return { success: true, message: "User created successfully" };
  }
} 