import { FieldError, UseFormRegister } from "react-hook-form"
import { z, ZodType } from "zod"

// Expected data structure for the form
export type FormData = {
  email: string,
  githubUrl: string,
  yearsOfExperience: number,
  password: string,
  confirmPassword: string,
}

// Expected props for the form field component
export type FormFieldProps = {
  type: string,
  placeholder: string,
  name: ValidFieldNames,
  register: UseFormRegister<FormData>, // Function from rhf used to register the input field with the form
  error: FieldError | undefined,
  valueAsNumber?: boolean,
}

// Each input name
export type ValidFieldNames = 'email' | 'githubUrl' | 'yearsOfExperience' | 'password' | 'confirmPassword'

// z is an instance of the Zod object
// UserSchema represents a Zod type that corresponds to the structure defined by the FormData type
export const UserSchema: ZodType<FormData> = z
  .object({
    email: z
      .string()
      .email(),
    githubUrl: z
      .string()
      // .url() // disabled because it requires a protocol (http, https) in the string to approve the validation
      .includes('github.com', { message: 'Invalid GitHub URL' }),
    yearsOfExperience: z
      .number({ required_error: 'required field', invalid_type_error: 'Years of experience is required' }),
    password: z
      .string()
      .min(6, { message: 'Password is too short' })
      .max(20, { message: 'Password is too long' }),
    confirmPassword: z
      .string(),
  })
  .refine(data => (data.password === data.confirmPassword), {
    message: 'Passwords do not match',
    path: ['confirmPassword'] // path to the field where the error would be associated
  })