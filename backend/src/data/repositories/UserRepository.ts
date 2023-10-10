import User from '../models/User'

class UserRepository {
  static async createUser (
    firstName: string,
    surname: string,
    email: string,
    telephoneNumber: string,
    gender: string,
    dateOfBirth: Date,
    comments: string | null
  ): Promise<User> {
    return await User.create({
      firstName,
      surname,
      email,
      telephoneNumber,
      gender,
      dateOfBirth,
      comments
    })
  }
}

export default UserRepository
