import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { CustomButton, CustomTextField } from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { addCellAction, IBaseCell, ICell } from '../index'

const CellInputForm: FC<{ cell?: ICell }> = ({ cell }) => {
  const dispatch = useAppDispatch()

  const [values, setValues] = useState<IBaseCell>({
    name: '',
  })

  const { name } = values

  useEffect(() => {
    if (cell) {
      setValues(cell)
    }
  }, [dispatch, cell])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (cell) {
      // const { _id: id } = cell
      // dispatch(editDepartmentAction({ id, department: values }))
    } else {
      dispatch(addCellAction(values))
    }
  }

  return (
    <section className="shadow-md p-3 rounded-md mt-5">
      <div className="text-2xl text-secondary font-extrabold mb-10">
        {!cell ? 'Add A New Cell' : 'Edit Cell'}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 mb-5">
          <CustomTextField
            label={'Cell Name'}
            type={'text'}
            name={'name'}
            value={name ? name : ''}
            isRequired={true}
            changeHandler={handleChange}
          />
        </div>
        <CustomButton value={!cell ? 'Add Cell' : 'Update Cell'} />
      </form>
    </section>
  )
}

export default CellInputForm
