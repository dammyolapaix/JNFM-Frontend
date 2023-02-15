import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useState } from 'react'
import { CustomTextField } from '../components'
import { makeRequest } from '../lib'

interface IBaseUser {
  firstName?: string
  lastName?: string
  otherNames?: string | undefined
  fullName?: string
  email?: string
  password?: string
}

interface IAuthRes {
  success: boolean
  token: string
}

const LoginPage: NextPage = () => {
  const [values, setValues] = useState<IBaseUser>({
    email: '',
    password: '',
  })

  const { email, password } = values

  const router = useRouter()

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {
      data: { success, token },
    } = await makeRequest.post<IAuthRes>('/auth/login', values, {
      withCredentials: true,
    })

    if (success && token) {
      router.push('/')
    }
  }

  return (
    <main>
      <div className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary text-white flex justify-center items-center min-h-screen">
        <div className="w-2/4 bg-white shadow-2xl p-5 text-primary rounded-md">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center text-2xl font-bold text-tertiary my-3">
              Login To Your Account
            </h3>
            <div className="my-3">
              <CustomTextField
                label={'Email'}
                type={'email'}
                name={'email'}
                value={email ? email : ''}
                isRequired={true}
                changeHandler={handleChange}
              />
            </div>
            <div className="my-3">
              <CustomTextField
                label={'Password'}
                type={'password'}
                name={'password'}
                value={password ? password : ''}
                isRequired={true}
                changeHandler={handleChange}
              />
            </div>
            <div className="mt-10 mb-5">
              <input
                type="submit"
                value="Login"
                className="bg-gradient-to-r  from-primary to-tertiary block w-full text-white p-3 rounded-md shadow-2xl cursor-pointer hover:bg-gradient-to-r hover:from-tertiary hover:to-secondary"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default LoginPage

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (req.cookies.token) {
    res.writeHead(302, { Location: '/' })
    res.end()
    return {
      props: {
        success: true,
      },
    }
  } else {
    return {
      props: {},
    }
  }
}
