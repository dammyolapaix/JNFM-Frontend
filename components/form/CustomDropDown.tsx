import { ChangeEvent } from 'react'

interface ICustomDropDownProps {
  label: string
  name: string
  isRequired: boolean
  changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void
  values: Array<{ value: string; label: string }>
  currentValue: string
}

const CustomDropDown = ({
  label,
  name,
  isRequired,
  changeHandler,
  values,
  currentValue,
}: ICustomDropDownProps) => {
  return (
    <>
      <label htmlFor={name} className="block">
        <span className="block text-sm font-semibold text-slate-700">
          {label} {isRequired && '*'}
        </span>
        <select
          id={name}
          name={name}
          onChange={changeHandler}
          value={currentValue}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-primary"
        >
          <option>{''}</option>
          {values.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </>
  )
}

export default CustomDropDown
