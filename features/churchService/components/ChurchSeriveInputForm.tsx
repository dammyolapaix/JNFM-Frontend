import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import {
  CustomButton,
  CustomDropDown,
  CustomTextField,
} from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { IChurchServiceType } from '../churchServiceType'
import { addChurchServiceAction, IBaseChurchService } from '../index'

const ChurchSeriveInputForm: FC<{
  churchService?: IBaseChurchService
  churchServiceTypes: IChurchServiceType[]
}> = ({ churchService, churchServiceTypes }) => {
  const dispatch = useAppDispatch()

  const [values, setValues] = useState<IBaseChurchService>({
    date: '',
    endsAt: '',
    startsAt: '',
    churchServiceType: '',
  })

  const { date, endsAt, startsAt, churchServiceType } = values

  useEffect(() => {
    if (churchService) {
      setValues(churchService)
    }
  }, [churchService])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (churchService) {
      // Action dispatch for edit goes here
    } else {
      dispatch(addChurchServiceAction(values))
    }
  }

  return (
    <section className="shadow-md p-3 rounded-md mt-5">
      <div className="text-2xl text-secondary font-extrabold mb-10">
        {!churchService ? 'Add A New church Service' : 'Edit Church Service'}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <CustomDropDown
            label={'Type of church service'}
            name={'churchServiceType'}
            isRequired={true}
            changeHandler={handleChange}
            values={churchServiceTypes.map((churchServiceType) => ({
              value: churchServiceType._id,
              label: churchServiceType.name,
            }))}
            currentValue={
              churchServiceType && typeof churchServiceType === 'string'
                ? churchServiceType
                : ''
            }
          />
          <CustomTextField
            label={'Date'}
            type={'date'}
            name={'date'}
            value={date ? date : ''}
            isRequired={true}
            changeHandler={handleChange}
          />
          {/* <CustomTextField
            label={'Starts At'}
            type={'date'}
            name={'startsAt'}
            value={startsAt ? startsAt : ''}
            isRequired={false}
            changeHandler={handleChange}
          />
          <CustomTextField
            label={'Ends At'}
            type={'date'}
            name={'endsAt'}
            value={endsAt ? endsAt : ''}
            isRequired={false}
            changeHandler={handleChange}
          /> */}
        </div>
        <CustomButton
          value={
            !churchService ? 'Add Church Service' : 'Update Church Service'
          }
        />
      </form>
    </section>
  )
}

export default ChurchSeriveInputForm
