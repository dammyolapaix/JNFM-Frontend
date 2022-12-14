import React, { FC } from 'react'

interface ICustomButton {
  value: string
}

const CustomButton: FC<{ buttonProps: ICustomButton }> = ({
  buttonProps: { value },
}) => {
  return (
    <input
      type="submit"
      value={value}
      className="bg-blue-600 text-white text-xl p-3 rounded-md w-full text-center cursor-pointer hover:bg-blue-400"
    />
  )
}

export default CustomButton
