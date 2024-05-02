import request from 'superagent'
import { Employee } from '../../models/employees'
const rootUrl = '/api/v1/'

// to assign employee to each job

export async function getEmployees(): Promise<Employee[]> {
  const res = await request.get(`${rootUrl}/manager`)
  return res.body.employees as Employee[]
}
