import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import {
  CustomButton,
  CustomDropDown,
  CustomTextField,
} from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { ICell } from '../../cell'
import {
  addMemberAction,
  editMemberAction,
  genders,
  IBaseMember,
  IMember,
  maritalStatuses,
  nearestRelativeRelationships,
} from '../index'

const MemberInputForm: FC<{
  member?: IMember
  cellName?: ICell['name']
  cellId?: ICell['_id']
}> = ({ member, cellId, cellName }) => {
  const dispatch = useAppDispatch()

  const [values, setValues] = useState<IBaseMember>({
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
    phoneNumber: '',
    nearestRelative: {
      name: '',
      relationship: '',
      phoneNumber: '',
    },
    cell: {
      cell: cellId ? cellId : '',
      dateJoined: '',
    },
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
    phoneNumber,
    cell,
    nearestRelative,
  } = values

  useEffect(() => {
    if (member) {
      setValues(member)
    }
  }, [member])

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target
  //   setValues({ ...values, [name]: value })
  // }

  // const handleNestedOnChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target

  //   const [property, nestedProperty] = name.split('.')

  //   setValues({
  //     ...values,
  //     [property]: {
  //       // @ts-ignore
  //       ...values[property],
  //       [nestedProperty]: value,
  //     },
  //   })
  // }

  const handleDeepUpdate = (obj: any, path: string[], value: any) => {
    let current = obj
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]]
    }
    current[path[path.length - 1]] = value
    return obj
  }

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const path = name.split('.')
    setValues((prev) => ({
      ...prev,
      ...handleDeepUpdate(prev, path, value),
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (member) {
      dispatch(editMemberAction({ id: member._id, member: values }))
    } else {
      dispatch(addMemberAction(values))
    }
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
            changeHandler={onChange}
          />
          <CustomTextField
            label={'First Name'}
            type={'text'}
            name={'firstName'}
            value={firstName ? firstName : ''}
            isRequired={false}
            changeHandler={onChange}
          />
          <CustomTextField
            label={'Other Names'}
            type={'text'}
            name={'otherNames'}
            value={otherNames ? otherNames : ''}
            isRequired={false}
            changeHandler={onChange}
          />
          <CustomDropDown
            label={'Gender/Sex'}
            name={'gender'}
            isRequired={true}
            changeHandler={onChange}
            values={genders}
            currentValue={gender ? gender : ''}
          />
          <CustomTextField
            label={'Date Of Birth'}
            type={'date'}
            name={'dateOfBirth'}
            value={dateOfBirth ? dateOfBirth : ''}
            isRequired={false}
            changeHandler={onChange}
          />
          <CustomDropDown
            label={'Marital Status'}
            name={'maritalStatus'}
            isRequired={false}
            changeHandler={onChange}
            values={maritalStatuses}
            currentValue={maritalStatus ? maritalStatus : ''}
          />
          <CustomTextField
            label={'Occupation'}
            type={'text'}
            name={'occupation'}
            value={occupation ? occupation : ''}
            isRequired={false}
            changeHandler={onChange}
          />
          <CustomTextField
            label={'Email'}
            type={'email'}
            name={'email'}
            value={email ? email : ''}
            isRequired={false}
            changeHandler={onChange}
          />

          <CustomTextField
            label={'Phone Number'}
            type={'tel'}
            name={'phoneNumber'}
            value={phoneNumber ? phoneNumber : ''}
            isRequired={false}
            changeHandler={onChange}
          />

          <CustomTextField
            label={'Postal Address'}
            type={'text'}
            name={'postalAddress'}
            value={postalAddress ? postalAddress : ''}
            isRequired={false}
            changeHandler={onChange}
          />
          <CustomTextField
            label={'Home Address'}
            type={'text'}
            name={'homeAddress'}
            value={homeAddress ? homeAddress : ''}
            isRequired={false}
            changeHandler={onChange}
          />
          <CustomTextField
            label={'Home Address'}
            type={'text'}
            name={'homeAddress'}
            value={homeAddress ? homeAddress : ''}
            isRequired={false}
            changeHandler={onChange}
          />
        </div>
        <div className="my-5">
          <h3 className="text-center font-semibold mb-3 text-secondary">
            Nearest Relative Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <CustomTextField
              label={'Name'}
              type={'text'}
              name={'nearestRelative.name'}
              value={nearestRelative?.name ? nearestRelative?.name : ''}
              isRequired={false}
              changeHandler={onChange}
            />
            <CustomDropDown
              label={'Relationship'}
              name={'nearestRelative.relationship'}
              isRequired={false}
              changeHandler={onChange}
              values={nearestRelativeRelationships}
              currentValue={
                values.nearestRelative?.relationship
                  ? values.nearestRelative?.relationship
                  : ''
              }
            />

            <CustomTextField
              label={'Phone Number'}
              type={'tel'}
              name={'nearestRelative.phoneNumber'}
              value={
                nearestRelative?.phoneNumber ? nearestRelative?.phoneNumber : ''
              }
              isRequired={false}
              changeHandler={onChange}
            />
          </div>
        </div>
        <div className="my-5">
          <h3 className="text-center font-semibold mb-3 text-secondary">
            Cell Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="cell.cell" className="block">
                <span className="block text-sm font-semibold text-slate-700">
                  Cell Name
                </span>
              </label>

              <input
                type="text"
                id="cell.cell"
                name="cell.cell"
                value={cellName}
                disabled
                readOnly
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-primary"
                required
              />
            </div>
            <CustomTextField
              label={'Date Joined'}
              type={'date'}
              name={'cell.dateJoined'}
              value={cell?.dateJoined ? cell?.dateJoined : ''}
              isRequired={false}
              changeHandler={onChange}
            />
          </div>
        </div>
        <CustomButton value={!member ? 'Add Member' : 'Update Member'} />
      </form>
    </section>
  )
}

export default MemberInputForm
