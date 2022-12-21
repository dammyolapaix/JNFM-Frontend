import React, { FC } from 'react'

const CustomButton: FC<{ value: string }> = ({ value }) => {
  return (
    <input
      type="submit"
      value={value}
      className="bg-primary text-white text-xl p-3 rounded-md w-full text-center cursor-pointer hover:bg-tertiary"
    />
  )
}

export default CustomButton
