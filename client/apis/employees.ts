import request from 'superagent'
import { Employee } from '../../models/employees'
const rootUrl = '/api/v1/'

// to assign employee to each job

export async function getEmployees(): Promise<Employee[]> {
  const res = await request.get(`${rootUrl}/manager`)
  return res.body.employees as Employee[]
}

export async function getSchedule(id: number) {
  const res = await request.get(`${rootUrl}/employee/${id}/schedule`)
  return res.body
}

// export async function getEmployeeById(id: number) {
//   const res = await request.get()
// }
