import db from './connection'
import { Employee, EmployeeData } from '../../models/employees'

export async function getEmployees() {
  const employees = await db('employees')
  return employees as Employee[]
}

export async function getSchedule(id: number) {
  return db('employees')
    .where('employees.id', id)
    .join('jobs', 'jobs.employee_id', 'employees.id')
    .select(
      'jobs.id as jobId',
      'jobs.title as title',
      'jobs.description as description',
      'jobs.location as location',
      'jobs.date as date',
      'jobs.time as time',
      'jobs.complete as complete',
      'jobs.quotation as quotation',
      'jobs.manhour as manhour',
      'jobs.review as review',
      'jobs.employee_id as employee',
      'jobs.client_id as client',
      'jobs.manager_id as manager',
    )
}
export async function getEmployee(id: number) {
  return await db('employees').where({ id }).first()
}
