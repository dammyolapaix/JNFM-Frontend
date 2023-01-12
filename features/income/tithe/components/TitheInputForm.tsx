import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { CustomButton, CustomTextField } from '../../../../components'
import { IBaseTithe } from '../index'

const TitheInputForm: FC<{
  tithe?: IBaseTithe
}> = ({ tithe }) => {
  const [values, setValues] = useState<IBaseTithe>({
    amount: 0,
    date: '',
    member: '',
  })

  const { amount, date, member } = values

  useEffect(() => {
    if (tithe) {
      setValues(tithe)
    }
  }, [tithe])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (tithe) {
      // Action dispatch for edit goes here
    } else {
      // Action dispatch for add goes here
    }
  }

  return (
    <section className="shadow-md p-3 rounded-md mt-5">
      <div className="text-2xl text-secondary font-extrabold mb-10">
        {!tithe ? 'Add A New Tithe' : 'Edit Tithe'}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <CustomTextField
            label={'Amount'}
            type={'number'}
            name={'amount'}
            value={amount ? amount.toString() : ''}
            isRequired={true}
            changeHandler={handleChange}
          />
          <CustomTextField
            label={'Date'}
            type={'date'}
            name={'date'}
            value={date ? date : ''}
            isRequired={true}
            changeHandler={handleChange}
          />
          <CustomTextField
            label={'Member'}
            type={'text'}
            name={'member'}
            value={member && typeof member === 'string' ? member : ''}
            isRequired={true}
            changeHandler={handleChange}
          />
        </div>
        <CustomButton value={!tithe ? 'Add Tithe' : 'Update Tithe'} />
      </form>
    </section>
  )
}

export default TitheInputForm
