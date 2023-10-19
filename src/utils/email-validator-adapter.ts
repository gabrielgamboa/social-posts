import validator from 'validator'
import { EmailValidator } from '../presentation/controllers/create-user/create-user'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
