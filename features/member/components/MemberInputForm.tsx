import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import {
  CustomButton,
  CustomDropDown,
  CustomTextField,
} from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { addMemberAction, IMember, IMemberRequestQuery } from '../index'

const MemberInputForm: FC<{ member?: IMember }> = ({ member }) => {
  const dispatch = useAppDispatch()

  const [values, setValues] = useState<IMemberRequestQuery>({
    lastName: '',
    firstName: '',
    otherNames: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    occupation: '',
    postalAddress: '',
    homeAddress: '',
    email: '',
    'phoneNumbers.countryCode': '',
    'phoneNumbers.number': '',
  })

  const {
    gender,
    dateOfBirth,
    email,
    firstName,
    homeAddress,
    lastName,
    maritalStatus,
    occupation,
    otherNames,
    postalAddress,
  } = values

  const genders = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
  ]

  const countriesCode = [
    {
      value: '233',
      label: 'Ghana (233)',
    },
  ]

  const maritalStatuses = [
    {
      value: 'Single',
      label: 'Single',
    },
    {
      value: 'Married',
      label: 'Married',
    },
    {
      value: 'Divorced',
      label: 'Divorced',
    },
    {
      value: 'Widowed',
      label: 'Widowed',
    },
  ]

  useEffect(() => {
    if (member) {
      setValues(member)
    }
  }, [member])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addMemberAction(values))
  }

  return (
    <section className="shadow-md p-3 rounded-md mt-5">
      <div className="text-2xl text-secondary font-extrabold mb-10">
        {!member ? 'Add A New Member' : 'Edit Member'}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <CustomTextField
            label={'Surname/Family Name'}
            type={'text'}
            name={'lastName'}
            value={lastName ? lastName : ''}
            isRequired={true}
            changeHandler={handleChange}
          />
          <CustomTextField
            label={'First Name'}
            type={'text'}
            name={'firstName'}
            value={firstName ? firstName : ''}
            isRequired={false}
            changeHandler={handleChange}
          />
          <CustomTextField
            label={'Other Names'}
            type={'text'}
            name={'otherNames'}
            value={otherNames ? otherNames : ''}
            isRequired={false}
            changeHandler={handleChange}
          />
          <CustomDropDown
            label={'Gender/Sex'}
            name={'gender'}
            isRequired={true}
            changeHandler={handleChange}
            values={genders}
            currentValue={gender ? gender : ''}
          />
          <CustomTextField
            label={'Date Of Birth'}
            type={'date'}
            name={'dateOfBirth'}
            value={dateOfBirth ? dateOfBirth : ''}
            isRequired={false}
            changeHandler={handleChange}
          />
          <CustomDropDown
            label={'Marital Status'}
            name={'maritalStatus'}
            isRequired={false}
            changeHandler={handleChange}
            values={maritalStatuses}
            currentValue={maritalStatus ? maritalStatus : ''}
          />
          <CustomTextField
            label={'Occupation'}
            type={'text'}
            name={'occupation'}
            value={occupation ? occupation : ''}
            isRequired={false}
            changeHandler={handleChange}
          />
          <div className="flex">
            <div className="mr-1 w-4/12">
              <CustomDropDown
                label={'Country Code'}
                name={'phoneNumbers.countryCode'}
                isRequired={false}
                changeHandler={handleChange}
                values={countriesCode}
                currentValue={
                  values['phoneNumbers.countryCode']
                    ? values['phoneNumbers.countryCode']
                    : ''
                }
              />
            </div>
            <div className="ml-1 w-8/12">
              <CustomTextField
                label={'Phone Number'}
                type={'tel'}
                name={'phoneNumbers.number'}
                value={
                  values['phoneNumbers.number']
                    ? values['phoneNumbers.number']
                    : ''
                }
                isRequired={false}
                changeHandler={handleChange}
              />
            </div>
          </div>
          <CustomTextField
            label={'Postal Address'}
            type={'text'}
            name={'postalAddress'}
            value={postalAddress ? postalAddress : ''}
            isRequired={false}
            changeHandler={handleChange}
          />
          <CustomTextField
            label={'Home Address'}
            type={'text'}
            name={'homeAddress'}
            value={homeAddress ? homeAddress : ''}
            isRequired={false}
            changeHandler={handleChange}
          />
        </div>
        <CustomButton value={!member ? 'Add Member' : 'Update Member'} />
      </form>
    </section>
  )
}

export default MemberInputForm
