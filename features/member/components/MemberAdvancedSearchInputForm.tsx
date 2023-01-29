import { ChangeEvent, FC, FormEvent, useState } from 'react'
import {
  CustomButton,
  CustomDropDown,
  CustomTextField,
} from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { genders, getMembersAction, IMemberQuery } from '../index'

const MemberAdvancedSearchInputForm: FC = () => {
  const dispatch = useAppDispatch()

  const [values, setValues] = useState<IMemberQuery>({
    fullName: '',
    gender: '',
  })

  const { gender, fullName } = values

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let data: IMemberQuery = {}
    for (let key in values) {
      // @ts-ignore
      if (values[key]) {
        // @ts-ignore
        data[key] = values[key]
      }
    }

    dispatch(getMembersAction(data))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CustomTextField
          label={'First Name'}
          type={'text'}
          name={'fullName'}
          value={fullName ? fullName : ''}
          isRequired={false}
          changeHandler={handleChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          <CustomDropDown
            label={'Filter By Gender'}
            name={'gender'}
            isRequired={false}
            changeHandler={handleChange}
            values={genders}
            currentValue={gender ? gender : ''}
          />
        </div>
        <div className="mt-10">
          <CustomButton value="Search" />
        </div>
      </form>
    </>
  )
}

export default MemberAdvancedSearchInputForm
