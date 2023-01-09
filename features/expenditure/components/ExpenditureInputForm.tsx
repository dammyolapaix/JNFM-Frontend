import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import {
  CustomButton,
  CustomDropDown,
  CustomTextField,
} from '../../../components'
import { formatDateToddmYYY } from '../../../utils'
import { IChurchService } from '../../churchService'
import { IExpenditureCategory } from '../ExpenditureCategory'
import { IBaseExpenditure, IExpenditure } from '../index'

const ExpenditureInputForm: FC<{
  expenditure?: IExpenditure
  churchServices: IChurchService[]
  expenditureCategories: IExpenditureCategory[]
  churchServiceId?: IChurchService['_id']
}> = ({
  churchServices,
  churchServiceId,
  expenditureCategories,
  expenditure,
}) => {
  const [values, setValues] = useState<IBaseExpenditure>({
    amount: 0,
    date: '',
    naration: '',
    churchService: churchServiceId ? churchServiceId : '',
    expenditureCategory: '',
  })

  const { amount, date, naration, churchService, expenditureCategory } = values

  useEffect(() => {
    if (expenditure) {
      setValues(expenditure)
    }
  }, [expenditure])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (expenditure) {
      // Action dispatch for edit goes here
    } else {
      // Action dispatch for add goes here
    }
  }

  return (
    <section className="shadow-md p-3 rounded-md mt-5">
      <div className="text-2xl text-secondary font-extrabold mb-10">
        {!expenditure ? 'Add New Expenditure' : 'Edit Expenditure'}
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
            label={'Naration'}
            type={'text'}
            name={'naration'}
            value={naration ? naration : ''}
            isRequired={true}
            changeHandler={handleChange}
          />

          <CustomDropDown
            label={'Expenditure Category'}
            name={'expenditureCategory'}
            isRequired={true}
            changeHandler={handleChange}
            values={expenditureCategories.map((expenditureCategory) => ({
              value: expenditureCategory._id,
              label: expenditureCategory.name,
            }))}
            currentValue={
              expenditureCategory && typeof expenditureCategory === 'string'
                ? expenditureCategory
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

          {!churchServiceId && (
            <CustomDropDown
              label={'Church Service'}
              name={'churchService'}
              isRequired={false}
              changeHandler={handleChange}
              values={churchServices.map((churchService) => ({
                value: churchService._id,
                label: churchService.date
                  ? formatDateToddmYYY(churchService.date)
                  : '',
              }))}
              currentValue={
                churchService && typeof churchService === 'string'
                  ? churchService
                  : ''
              }
            />
          )}
        </div>
        <CustomButton
          value={!expenditure ? 'Add Expenditure' : 'Update Expenditure'}
        />
      </form>
    </section>
  )
}

export default ExpenditureInputForm
