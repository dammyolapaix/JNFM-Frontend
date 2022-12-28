import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { CustomButton, CustomTextField } from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { IBaseDepartment, IDepartment } from '../index'

const DepartmentInputForm: FC<{ department?: IDepartment }> = ({
  department,
}) => {
  const dispatch = useAppDispatch()

  const [values, setValues] = useState<IBaseDepartment>({
    name: '',
  })

  const { name } = values

  useEffect(() => {
    if (department) {
      setValues(department)
    }
  }, [dispatch, department])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (department) {
      //   Dispatch editDepartmentAction goes here
    } else {
      //   Dispatch addDepartmentAction goes here
    }
  }

  return (
    <section className="shadow-md p-3 rounded-md mt-5">
      <div className="text-2xl text-secondary font-extrabold mb-10">
        {!department ? 'Add A New Department' : 'Edit Department'}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 mb-5">
          <CustomTextField
            label={'Department Name'}
            type={'text'}
            name={'Department Name'}
            value={name ? name : ''}
            isRequired={true}
            changeHandler={handleChange}
          />
        </div>
        <CustomButton
          value={!department ? 'Add Department' : 'Update Department'}
        />
      </form>
    </section>
  )
}

export default DepartmentInputForm
