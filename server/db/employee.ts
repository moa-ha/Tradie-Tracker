import db from './connection'
import { Employee, EmployeeData } from '../../models/employees'

export async function getEmployees() {
  const employees = await db('employees')
  return employees as Employee[]
}
