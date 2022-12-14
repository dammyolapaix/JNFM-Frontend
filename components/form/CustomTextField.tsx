import { ChangeEvent } from 'react'

interface ICustomTextFieldProps {
  label?: string
  placeholder?: string
  name: string
  type: string
  isRequired: boolean
  value?: string
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const CustomTextField = ({
  label,
  placeholder,
  name,
  type,
  isRequired,
  value,
  changeHandler,
}: ICustomTextFieldProps) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block">
          <span className="block text-sm font-semibold text-slate-700">
            {label} {isRequired && '*'}
          </span>
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        onChange={changeHandler}
        placeholder={!placeholder ? label : placeholder}
        value={value ? value : ''}
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-primary"
        // required=true
        // {isRequired && required}
      />
    </div>
  )
}

export default CustomTextField
