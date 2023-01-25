import {
  CustomButton,
  CustomDropDown,
  CustomTextField,
} from '../../../components'

export default function IncomeAdvancedSearchForm() {
  const days = [
    {
      value: 'Today',
      label: 'Today',
    },
    {
      value: 'Yesterday',
      label: 'Yesterday',
    },
    {
      value: 'Last 2 days',
      label: 'Last 2 days',
    },
    {
      value: 'Last 3 days',
      label: 'Last 3 days',
    },
    {
      value: 'Last 4 days',
      label: 'Last 4 days',
    },
    {
      value: 'Last 6 days',
      label: 'Last 6 days',
    },
    {
      value: 'Last 7 days',
      label: 'Last 7 days',
    },
  ]

  const weeks = [
    {
      value: 'This Week',
      label: 'This Week',
    },
    {
      value: 'Last Week',
      label: 'Last Week',
    },
    {
      value: 'Last 3 Weeks',
      label: 'Last 3 Weeks',
    },
    {
      value: 'Last 4 Weeks',
      label: 'Last 4 Weeks',
    },
  ]

  const months = [
    {
      value: 'This Month',
      label: 'This Month',
    },
    {
      value: 'Last Month',
      label: 'Last Month',
    },
    {
      value: 'Last 3 Months',
      label: 'Last 3 Months',
    },
    {
      value: 'Last 4 Months',
      label: 'Last 4 Months',
    },
    {
      value: 'Last 5 Months',
      label: 'Last 5 Months',
    },
    {
      value: 'Last 6 Months',
      label: 'Last 6 Months',
    },
    {
      value: 'Last 7 Months',
      label: 'Last 7 Months',
    },
    {
      value: 'Last 8 Months',
      label: 'Last 8 Months',
    },
    {
      value: 'Last 9 Months',
      label: 'Last 9 Months',
    },
    {
      value: 'Last 10 Months',
      label: 'Last 10 Months',
    },
    {
      value: 'Last 11 Months',
      label: 'Last 11 Months',
    },
    {
      value: 'Last 12 Months',
      label: 'Last 12 Months',
    },
  ]

  const quaters = [
    {
      value: '1st Quater',
      label: '1st Quater',
    },
    {
      value: '2nd Quarter',
      label: '2nd Quarter',
    },
    {
      value: '3rd Quarter',
      label: '3rd Quarter',
    },
    {
      value: '4th Quarter',
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
    {
      value: 'Last 2 Years',
      label: 'Last 2 Years',
    },
    {
      value: 'Last 3 Years',
      label: 'Last 3 Years',
    },
    {
      value: 'Last 4 Years',
      label: 'Last 4 Years',
    },
    {
      value: 'Last 5 Years',
      label: 'Last 5 Years',
    },
    {
      value: 'Last 6 Years',
      label: 'Last 6 Years',
    },
    {
      value: 'Last 7 Years',
      label: 'Last 7 Years',
    },
    {
      value: 'Last 8 Years',
      label: 'Last 8 Years',
    },
    {
      value: 'Last 9 Years',
      label: 'Last 9 Years',
    },
    {
      value: 'Last 10 Years',
      label: 'Last 10 Years',
    },
  ]

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
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <CustomDropDown
          label={'Filter By Day'}
          name={'gender'}
          isRequired={true}
          changeHandler={() => 'ddd'}
          values={days}
          currentValue={''}
        />
        <CustomDropDown
          label={'Filter By Week'}
          name={'gender'}
          isRequired={true}
          changeHandler={() => 'ddd'}
          values={weeks}
          currentValue={''}
        />
        <CustomDropDown
          label={'Filter By Month'}
          name={'gender'}
          isRequired={true}
          changeHandler={() => 'ddd'}
          values={months}
          currentValue={''}
        />
        <CustomDropDown
          label={'Filter By Quarter'}
          name={'gender'}
          isRequired={true}
          changeHandler={() => 'ddd'}
          values={quaters}
          currentValue={''}
        />
        <CustomDropDown
          label={'Filter By Year'}
          name={'gender'}
          isRequired={true}
          changeHandler={() => 'ddd'}
          values={years}
          currentValue={''}
        />
        <CustomTextField
          label={'Filter By Specific Date'}
          type={'date'}
          name={'dateOfBirth'}
          value={''}
          isRequired={false}
          changeHandler={() => 'ddd'}
        />
      </div>
      <div className="my-3">
        <div className="text-center text-sm font-semibold text-slate-700">
          Filter By Date Range
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <CustomTextField
            label={'From'}
            type={'date'}
            name={'dateOfBirth'}
            value={''}
            isRequired={false}
            changeHandler={() => 'ddd'}
          />
          <CustomTextField
            label={'To'}
            type={'date'}
            name={'dateOfBirth'}
            value={''}
            isRequired={false}
            changeHandler={() => 'ddd'}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
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
      </div>
      <CustomTextField
        label={'Filter By Naration'}
        type={'text'}
        name={'otherNames'}
        value={''}
        isRequired={false}
        changeHandler={() => 'ddd'}
      />
      <div className="my-10">
        <CustomButton value="Search" />
      </div>
    </>
  )
}
