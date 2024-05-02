export interface EmployeeData {
  id: number
  name: string
  bio: string
  email: string
  phone: string
  rating: number
  company_id: number
  manager_id: number
}

export interface Employee extends EmployeeData {
  id: number
}
