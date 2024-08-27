import { FormFieldProps } from "@/types"

export const FormField: React.FC<FormFieldProps> = ({ type, placeholder, name, register, error, valueAsNumber }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        // Spread the register props into the input, so it is connected to the form state
        {...register(name, { valueAsNumber })}
      />
      {error && <span className="error-message">{error?.message}</span>}
    </>
  )
}
