import { body } from 'express-validator'

export const createUserValidation = [
  body('firstName').notEmpty().withMessage('First Name is required'),
  body('surname').notEmpty().withMessage('Surname is required'),
  body('email').isEmail().withMessage('Invalid Email Address'),
  body('telephoneNumber').notEmpty().withMessage('Telephone Number is required'),
  body('gender').optional().isIn(['Male', 'Female', 'Other']).withMessage('Invalid Gender'),
  body('dateOfBirth').notEmpty().withMessage('Date of Birth is required'),
  body('comments').notEmpty().withMessage('Comments is required')
]
