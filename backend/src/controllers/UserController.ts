import { type Request, type Response } from 'express'
import { validationResult } from 'express-validator'
import UserService from '../services/UserService'

class UserController {
  static async createUser (req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      firstName,
      surname,
      email,
      telephoneNumber,
      gender,
      dateOfBirth,
      comments
    } = req.body

    try {
      const user = await UserService.createUser(
        firstName,
        surname,
        email,
        telephoneNumber,
        gender,
        dateOfBirth,
        comments
      )
      return res.status(201).json({
        status: 'success',
        message: 'User created successfully',
        user
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  static async getAllUsers (req: Request, res: Response): Promise<Response> {
    try {
      const users = await UserService.getAllUsers()
      return res.status(200).json({
        status: 'success',
        message: 'Users fetched successfully',
        users
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  static async getUserById (req: Request, res: Response): Promise<Response> {
    const { userId } = req.params

    try {
      const user = await UserService.getUserById(userId)

      if (user == null) {
        return res.status(404).json({
          status: 'error',
          message: 'User not found'
        })
      }

      return res.status(200).json({
        status: 'success',
        message: 'User fetched successfully',
        user
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

export default UserController
