import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { CustomButton, CustomTextField } from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { getMembersAction, IMemberQuery } from '../index'

const MemberAdvancedSearchInputForm: FC = () => {
  const dispatch = useAppDispatch()

  const [values, setValues] = useState<IMemberQuery>({
    fullName: '',
  })

  const { fullName } = values

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
        <div className="mt-10">
          <CustomButton value="Search" />
        </div>
      </form>
    </>
  )
}

export default MemberAdvancedSearchInputForm
