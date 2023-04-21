import { FC } from 'react'
import { IError } from '../interfaces'

const ErrorMessage: FC<{ errorMessage: IError['error'] }> = ({
  errorMessage,
}) => {
  return <p className="text-center text-red-600">{errorMessage}</p>
}

export default ErrorMessage
