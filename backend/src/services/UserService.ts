import User from '../data/models/User'
import UserRepository from '../data/repositories/UserRepository'

class UserService {
  static async createUser (
    firstName: string,
    surname: string,
    email: string,
    telephoneNumber: string,
    gender: string,
    dateOfBirth: Date,
    comments: string | null
  ): Promise<User> {
    return await UserRepository.createUser(
      firstName,
      surname,
      email,
      telephoneNumber,
      gender,
      dateOfBirth,
      comments
    )
  }

  static async getAllUsers (): Promise<User[]> {
    return await User.findAll()
  }

  static async getUserById (userId: string): Promise<User | null> {
    return await User.findByPk(userId)
  }
}

export default UserService
