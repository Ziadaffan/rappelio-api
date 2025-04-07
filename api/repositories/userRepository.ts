import { IUserDocument, User } from "../db/models/user";

export class UserRepository {
  private static singleton: UserRepository;

  private constructor() {}

  public static instance(): UserRepository {
    if (!UserRepository.singleton) {
      UserRepository.singleton = new UserRepository();
    }
    return UserRepository.singleton;
  }

  public async findAll(): Promise<IUserDocument[]> {
    return User.find({}).sort({ createdAt: -1 });
  }

  public async findById(id: string): Promise<IUserDocument | null> {
    return User.findById(id);
  }

  public async register(user: IUserDocument): Promise<IUserDocument> {
    return User.create(user);
  }

  public async update(id: string, user: IUserDocument): Promise<IUserDocument | null> {
    return User.findByIdAndUpdate(id, user, { new: true });
  }

  public async delete(id: string): Promise<IUserDocument | null> {
    return User.findByIdAndDelete(id);
  }

  public async findByEmail(email: string): Promise<IUserDocument | null> {
    return User.findOne({ email });
  }
}
