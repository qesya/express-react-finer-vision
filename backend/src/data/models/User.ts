import { DataTypes, Model } from 'sequelize'
import sequelize from '../database'

class User extends Model {
  public id!: number
  public firstName!: string
  public surname!: string
  public email!: string
  public telephoneNumber!: string
  public gender!: string
  public dateOfBirth!: Date
  public comments!: string | null
}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    telephoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'User'
  }
)

export default User
