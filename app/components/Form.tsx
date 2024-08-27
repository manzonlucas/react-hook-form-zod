import { useForm } from "react-hook-form"
import { FormField } from "./FormField"
import { FormData } from "@/types"

export const Form = () => {
  // The useForm hook provides form-related functions
  // Type it to define the shape of the form data
  const { register, handleSubmit, formState: { errors }, setError } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <h1 className="text-3xl font-bold">
        Zod & React-Hook-Form
      </h1>
      <div className="grid col-auto">
        <FormField
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />

        <FormField
          type="text"
          placeholder="GitHub URL"
          name="githubUrl"
          register={register}
          error={errors.githubUrl}
        />
        <FormField
          type="number"
          placeholder="Years of experience (1-10)"
          name="yearsOfExperience"
          register={register}
          error={errors.yearsOfExperience}
        />
        <FormField
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
        />
        <FormField
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  )
}