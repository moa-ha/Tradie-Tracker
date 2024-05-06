export interface JobData {
  title: string
  description: string
  location: string
  date: string
  time: string
  complete: boolean
  quotation: number
  manhour: number
  review: string
  employee_id: number
  client_id: number
  manager_id: number
}

export interface Job extends JobData {
  id: number
}

export interface Assign {
  id: number
  employee_id: number
}
