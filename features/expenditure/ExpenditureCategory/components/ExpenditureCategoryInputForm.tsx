import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import {
  IBaseExpenditureCategory,
  IExpenditureCategory,
  addExpenditureCategoryAction,
  resetExpenditureCategory,
} from '../index'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import {
  CustomButton,
  CustomTextField,
  QueryResult,
} from '../../../../components'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ExpenditureCategoryInputForm: FC<{
  expenditureCategory?: IExpenditureCategory
}> = ({ expenditureCategory }) => {
  const valuesProperties: IBaseExpenditureCategory = {
    name: '',
  }
  const [values, setValues] =
    useState<IBaseExpenditureCategory>(valuesProperties)
  const { name } = values

  const dispatch = useAppDispatch()
  const router = useRouter()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    expenditureCategory: expenditureCategoryCRUD,
  } = useAppSelector((state) => state.expenditureCategory)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (expenditureCategory) {
    } else {
      dispatch(addExpenditureCategoryAction(values))
    }
  }

  useEffect(() => {
    expenditureCategory && setValues(expenditureCategory)

    if (isSuccess && expenditureCategoryCRUD !== null) {
      toast.success('Category Added Successfully')
      dispatch(resetExpenditureCategory())
      router.push('/expenditures')
    }

    return () => {
      setValues(valuesProperties)
    }
  }, [dispatch, router, expenditureCategoryCRUD])

  const content = (
    <>
      <ToastContainer />
      <section className="shadow-md p-3 rounded-md mt-5">
        <div className="text-2xl text-secondary font-extrabold mb-10">
          {!expenditureCategory
            ? 'Add A New Expenditure Category'
            : 'Edit Expenditure Category'}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 mb-5">
            <CustomTextField
              label={'Category Name'}
              type={'text'}
              name={'name'}
              value={name ? name : ''}
              isRequired={true}
              changeHandler={handleChange}
            />
          </div>
          <CustomButton
            value={
              !expenditureCategory
                ? 'Add Expenditure Category'
                : 'Update Expenditure Category'
            }
          />
        </form>
      </section>
    </>
  )

  return (
    <>
      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      />
      {content}
    </>
  )
}

export default ExpenditureCategoryInputForm
