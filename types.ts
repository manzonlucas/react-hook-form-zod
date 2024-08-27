import { FieldError, UseFormRegister } from "react-hook-form"

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