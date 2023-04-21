import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { CustomButton, CustomTextField } from '../../../../components'
import { useAppDispatch } from '../../../../hooks'
import { addWelfareAction, IBaseWelfare } from '../index'

const WelfareInputForm: FC<{
  welfare?: IBaseWelfare
}> = ({ welfare }) => {
  const dispatch = useAppDispatch()

  const [values, setValues] = useState<IBaseWelfare>({
    amount: 0,
    date: '',
    member: '6399eabbc4d02ad18bc3eae9', // Adding a static member, will changes this later to a dynamic member
  })

  const { amount, date, member } = values

  useEffect(() => {
    if (welfare) {
      setValues(welfare)
    }
  }, [welfare])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (welfare) {
      // Action dispatch for edit goes here
    } else {
      dispatch(addWelfareAction(values))
    }
  }

  return (
    <section className="shadow-md p-3 rounded-md mt-5">
      <div className="text-2xl text-secondary font-extrabold mb-10">
        {!welfare ? 'Add A New Welfare' : 'Edit Welfare'}
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
        <CustomButton value={!welfare ? 'Add Welfare' : 'Update Welfare'} />
      </form>
    </section>
  )
}

export default WelfareInputForm
