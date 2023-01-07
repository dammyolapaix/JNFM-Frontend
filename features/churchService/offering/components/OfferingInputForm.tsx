import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import {
  CustomButton,
  CustomDropDown,
  CustomTextField,
} from '../../../../components'
import { useAppDispatch } from '../../../../hooks'
import { IBaseOffering } from '../index'
import { IOfferingType } from '../offeringType'

const OfferingInputForm: FC<{
  offering?: IBaseOffering
  offeringTypes: IOfferingType[]
}> = ({ offering, offeringTypes }) => {
  const dispatch = useAppDispatch()

  const [values, setValues] = useState<IBaseOffering>({
    date: '',
    amount: 0,
    churchService: '',
    offeringType: '',
  })

  const { amount, churchService, date, offeringType } = values

  useEffect(() => {
    if (offering) {
      setValues(offering)
    }
  }, [offering])

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
      //   dispatch(addChurchServiceAction(values))
    }
  }

  return (
    <section className="shadow-md p-3 rounded-md mt-5">
      <div className="text-2xl text-secondary font-extrabold mb-10">
        {!offering ? 'Add New Offering' : 'Edit Offering'}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <CustomDropDown
            label={'Type of offerings'}
            name={'offeringType'}
            isRequired={true}
            changeHandler={handleChange}
            values={offeringTypes.map((offeringType) => ({
              value: offeringType._id,
              label: offeringType.name,
            }))}
            currentValue={
              offeringType && typeof offeringType === 'string'
                ? offeringType
                : ''
            }
          />
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
        </div>
        <CustomButton
          value={!churchService ? 'Add Offering' : 'Update Offering'}
        />
      </form>
    </section>
  )
}

export default OfferingInputForm
