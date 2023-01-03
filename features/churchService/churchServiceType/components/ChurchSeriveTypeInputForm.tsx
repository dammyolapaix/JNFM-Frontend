import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { CustomButton, CustomTextField } from '../../../../components'
import { IBaseChurchServiceType } from '../index'

const ChurchSeriveTypeInputForm: FC<{
  churchServiceType?: IBaseChurchServiceType
}> = ({ churchServiceType }) => {
  const [values, setValues] = useState<IBaseChurchServiceType>({
    name: '',
  })

  const { name } = values

  useEffect(() => {
    if (churchServiceType) {
      setValues(churchServiceType)
    }
  }, [churchServiceType])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (churchServiceType) {
      // Action dispatch for edit goes here
    } else {
      // Action dispatch for add goes here
    }
  }

  return (
    <section className="shadow-md p-3 rounded-md mt-5">
      <div className="text-2xl text-secondary font-extrabold mb-10">
        {!churchServiceType
          ? 'Add A New church Service Type'
          : 'Edit Church Service Type'}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-5 mb-5">
          <CustomTextField
            label={'Name of Church Service Type'}
            type={'text'}
            name={'name'}
            value={name ? name : ''}
            isRequired={true}
            changeHandler={handleChange}
          />
        </div>
        <CustomButton
          value={
            !churchServiceType
              ? 'Add Church Service Type'
              : 'Update Church Service Type'
          }
        />
      </form>
    </section>
  )
}

export default ChurchSeriveTypeInputForm
