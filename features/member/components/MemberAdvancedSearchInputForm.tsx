import { useRouter } from 'next/router'
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import {
  CustomButton,
  CustomDropDown,
  CustomTextField,
} from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import {
  ages,
  genders,
  getMembersAction,
  IMemberQuery,
  maritalStatuses,
  resetMember,
  setAdvancedSearchFormData,
} from '../index'

const MemberAdvancedSearchInputForm: FC = () => {
  const { route, query } = useRouter()

  const dispatch = useAppDispatch()

  const { advancedSearchFormData } = useAppSelector((state) => state.member)

  const [values, setValues] = useState<IMemberQuery>({
    fullName: '',
    gender: '',
    maritalStatus: '',
    age: '',
    'cell.dateJoined[gte]': '',
    'cell.dateJoined[lte]': '',
  })

  const { gender, fullName, maritalStatus, age } = values

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    dispatch(setAdvancedSearchFormData({ ...values, [name]: value }))
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

  useEffect(() => {
    const cell =
      route === '/cells/[id]' && typeof query.id === 'string' ? query.id : ''

    if (advancedSearchFormData === null) {
      setValues({
        'cell.cell': cell,
      })
    } else {
      const newAdvancedSearchFormData = {
        ...advancedSearchFormData,
        'cell.cell': cell,
      }
      setValues(newAdvancedSearchFormData)
    }
  }, [advancedSearchFormData])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CustomTextField
          label={'Name'}
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
          <CustomDropDown
            label={'Filter By Marital Status'}
            name={'maritalStatus'}
            isRequired={false}
            changeHandler={handleChange}
            values={maritalStatuses}
            currentValue={maritalStatus ? maritalStatus : ''}
          />
          <CustomDropDown
            label={'Filter By Age'}
            name={'age'}
            isRequired={false}
            changeHandler={handleChange}
            values={ages}
            currentValue={age ? age : ''}
          />
        </div>
        <div>
          <div className="text-center text-sm font-semibold mt-10 mb-5 text-primary">
            Filter By Date Joined (Cell)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <CustomTextField
              label={'From'}
              type={'date'}
              name={'cell.dateJoined[gte]'}
              value={
                values['cell.dateJoined[gte]']
                  ? values['cell.dateJoined[gte]']
                  : ''
              }
              isRequired={false}
              changeHandler={handleChange}
            />
            <CustomTextField
              label={'To'}
              type={'date'}
              name={'cell.dateJoined[lte]'}
              value={
                values['cell.dateJoined[lte]']
                  ? values['cell.dateJoined[lte]']
                  : ''
              }
              isRequired={false}
              changeHandler={handleChange}
            />
          </div>
        </div>
        <div className="mt-10">
          <CustomButton value="Search" />
        </div>
        <button
          disabled={advancedSearchFormData === null}
          onClick={() => dispatch(resetMember())}
          className={`my-10 p-3 rounded text-center w-full ${
            advancedSearchFormData === null
              ? 'bg-gray-200 text-black cursor-not-allowed'
              : 'bg-tertiary hover:bg-secondary text-white'
          }`}
        >
          Clear Filter
        </button>
      </form>
    </>
  )
}

export default MemberAdvancedSearchInputForm
