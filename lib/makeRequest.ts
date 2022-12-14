import axios from 'axios'

const makeRequest = axios.create({
  baseURL: process?.env?.NEXT_PUBLIC_BACKEND_API,
  headers: { 'Content-type': 'application/json' },
})

export default makeRequest
