import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import {
  CustomButton,
  CustomDropDown,
  CustomTextField,
} from '../../../components'
import {
  getCashBooksAction,
  ICashBookQuery,
  resetCashBook,
  setAdvancedSearchFormData,
} from '../index'
import { useAppDispatch, useAppSelector } from '../../../hooks'

const CashBookAdvancedSearchInputForm: FC = () => {
  const dispatch = useAppDispatch()

  const { advancedSearchFormData } = useAppSelector((state) => state.cashBook)

  const [values, setValues] = useState<ICashBookQuery>({
    debitCredit: '',
    date: '',
    month: '',
    quarter: '',
    year: '',
    fromDate: '',
    toDate: '',
    account: '',
  })

  const { debitCredit, date, quarter, month, year, fromDate, toDate, account } =
    values

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    dispatch(setAdvancedSearchFormData({ ...values, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let data: ICashBookQuery = {}
    for (let key in values) {
      // @ts-ignore
      if (values[key]) {
        // @ts-ignore
        data[key] = values[key]
      }
    }

    dispatch(getCashBooksAction(data))
  }

  useEffect(() => {
    if (advancedSearchFormData === null) {
      setValues({})
    } else {
      setValues(advancedSearchFormData)
    }
  }, [advancedSearchFormData])

  const debitCredits = [
    {
      value: 'Debit',
      label: 'Debit',
    },
    {
      value: 'Credit',
      label: 'Credit',
    },
  ]

  // const days = [
  //   {
  //     value: 'Today',
  //     label: 'Today',
  //   },
  //   {
  //     value: 'Yesterday',
  //     label: 'Yesterday',
  //   },
  //   {
  //     value: 'Last 2 days',
  //     label: 'Last 2 days',
  //   },
  //   {
  //     value: 'Last 3 days',
  //     label: 'Last 3 days',
  //   },
  //   {
  //     value: 'Last 4 days',
  //     label: 'Last 4 days',
  //   },
  //   {
  //     value: 'Last 6 days',
  //     label: 'Last 6 days',
  //   },
  //   {
  //     value: 'Last 7 days',
  //     label: 'Last 7 days',
  //   },
  // ]

  // const weeks = [
  //   {
  //     value: 'This Week',
  //     label: 'This Week',
  //   },
  //   {
  //     value: 'Last Week',
  //     label: 'Last Week',
  //   },
  //   {
  //     value: 'Last 3 Weeks',
  //     label: 'Last 3 Weeks',
  //   },
  //   {
  //     value: 'Last 4 Weeks',
  //     label: 'Last 4 Weeks',
  //   },
  // ]

  const months = [
    {
      value: 'This Month',
      label: 'This Month',
    },
    {
      value: 'Last Month',
      label: 'Last Month',
    },
    // {
    //   value: 'Last 2 Months',
    //   label: 'Last 2 Months',
    // },
    {
      value: 'Last 3 Months',
      label: 'Last 3 Months',
    },
    // {
    //   value: 'Last 4 Months',
    //   label: 'Last 4 Months',
    // },
    // {
    //   value: 'Last 5 Months',
    //   label: 'Last 5 Months',
    // },
    {
      value: 'Last 6 Months',
      label: 'Last 6 Months',
    },
    // {
    //   value: 'Last 7 Months',
    //   label: 'Last 7 Months',
    // },
    // {
    //   value: 'Last 8 Months',
    //   label: 'Last 8 Months',
    // },
    // {
    //   value: 'Last 9 Months',
    //   label: 'Last 9 Months',
    // },
    // {
    //   value: 'Last 10 Months',
    //   label: 'Last 10 Months',
    // },
    // {
    //   value: 'Last 11 Months',
    //   label: 'Last 11 Months',
    // },
    {
      value: 'Last 12 Months',
      label: 'Last 12 Months',
    },
  ]

  const quarters = [
    {
      value: 'Q1',
      label: '1st Quarter',
    },
    {
      value: 'Q2',
      label: '2nd Quarter',
    },
    {
      value: 'Q3',
      label: '3rd Quarter',
    },
    {
      value: 'Q4',
      label: '4th Quarter',
    },
  ]

  const years = [
    {
      value: 'This Year',
      label: 'This Year',
    },
    {
      value: 'Last Year',
      label: 'Last Year',
    },
    // {
    //   value: 'Last 2 Years',
    //   label: 'Last 2 Years',
    // },
    // {
    //   value: 'Last 3 Years',
    //   label: 'Last 3 Years',
    // },
    // {
    //   value: 'Last 4 Years',
    //   label: 'Last 4 Years',
    // },
    // {
    //   value: 'Last 5 Years',
    //   label: 'Last 5 Years',
    // },
    // {
    //   value: 'Last 6 Years',
    //   label: 'Last 6 Years',
    // },
    // {
    //   value: 'Last 7 Years',
    //   label: 'Last 7 Years',
    // },
    // {
    //   value: 'Last 8 Years',
    //   label: 'Last 8 Years',
    // },
    // {
    //   value: 'Last 9 Years',
    //   label: 'Last 9 Years',
    // },
    // {
    //   value: 'Last 10 Years',
    //   label: 'Last 10 Years',
    // },
  ]

  const accounts = [
    {
      value: 'offering',
      label: 'Offering',
    },
    {
      value: 'welfare',
      label: 'Welfare',
    },
    {
      value: 'tithe',
      label: 'Tithe',
    },
    {
      value: 'specialContribution',
      label: 'Special Contribution',
    },
  ]

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <CustomDropDown
            label={'Filter By Debit/Credit'}
            name={'debitCredit'}
            isRequired={false}
            changeHandler={handleChange}
            values={debitCredits}
            currentValue={debitCredit ? debitCredit : ''}
          />
          {/* <CustomDropDown
            label={'Filter By Week'}
            name={'gender'}
            isRequired={true}
            changeHandler={() => 'ddd'}
            values={weeks}
            currentValue={''}
          /> */}
          <CustomDropDown
            label={'Filter By Month'}
            name={'month'}
            isRequired={false}
            changeHandler={handleChange}
            values={months}
            currentValue={month ? month : ''}
          />
          <CustomDropDown
            label={'Filter By Quarter'}
            name={'quarter'}
            isRequired={false}
            changeHandler={handleChange}
            values={quarters}
            currentValue={quarter ? quarter : ''}
          />
          <CustomDropDown
            label={'Filter By Year'}
            name={'year'}
            isRequired={false}
            changeHandler={handleChange}
            values={years}
            currentValue={year ? year : ''}
          />
          <CustomTextField
            label={'Filter By Specific Date'}
            type={'date'}
            name={'date'}
            value={date ? date : ''}
            isRequired={false}
            changeHandler={handleChange}
          />
          <CustomDropDown
            label={'Filter By Account'}
            name={'account'}
            isRequired={false}
            changeHandler={handleChange}
            values={accounts}
            currentValue={account ? account : ''}
          />
        </div>
        <div>
          <div className="text-center text-sm font-semibold mt-10 mb-5 text-primary">
            Filter By Date Range
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <CustomTextField
              label={'From'}
              type={'date'}
              name={'fromDate'}
              value={fromDate ? fromDate : ''}
              isRequired={false}
              changeHandler={handleChange}
            />
            <CustomTextField
              label={'To'}
              type={'date'}
              name={'toDate'}
              value={toDate ? toDate : ''}
              isRequired={false}
              changeHandler={handleChange}
            />
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <CustomTextField
            label={'Filter By Amount'}
            type={'number'}
            name={'otherNames'}
            value={''}
            isRequired={false}
            changeHandler={() => 'ddd'}
          />
          <CustomDropDown
            label={'Filter By Account'}
            name={'gender'}
            isRequired={true}
            changeHandler={() => 'ddd'}
            values={genders}
            currentValue={''}
          />
        </div> */}
        {/* <CustomTextField
          label={'Filter By Naration'}
          type={'text'}
          name={'otherNames'}
          value={''}
          isRequired={false}
          changeHandler={() => 'ddd'}
        /> */}
        <div className="mt-10">
          <CustomButton value="Search" />
        </div>
      </form>
      <button
        disabled={advancedSearchFormData === null}
        onClick={() => dispatch(resetCashBook())}
        className={`my-10 p-3 rounded text-center w-full ${
          advancedSearchFormData === null
            ? 'bg-gray-200 text-black cursor-not-allowed'
            : 'bg-tertiary hover:bg-secondary text-white'
        }`}
      >
        Clear Filter
      </button>
    </>
  )
}

export default CashBookAdvancedSearchInputForm
