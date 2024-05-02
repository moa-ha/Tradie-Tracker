import request from 'superagent'
import { Job, JobData } from '../../models/jobs'
import { Employee } from '../../models/employees'

const rootUrl = '/api/v1/'

//for managers

export async function getJobs(): Promise<Job[]> {
  const res = await request.get(`${rootUrl}/manager`)
  return res.body.jobs as Job[]
}

export async function getJobById(id: number) {
  const res = await request.get(`${rootUrl}/manager/${id}`)
  return res.body
}

export async function deleteJob(id: number) {
  await request.delete(`${rootUrl}/manager/${id}`)
}

export async function editJobById(input: Job) {
  const id = input.id
  await request.patch(`${rootUrl}/manager/${id}`).send(input)
}

export async function createJob(data: JobData) {
  await request.post(`${rootUrl}/manager`).send(data)
}

export async function getCompletedJobs() {
  const res = await request.get(`${rootUrl}/manager/completed`)
  return res.body as Job[]
}

// for employees
export async function getScheduleById(id: number) {
  const res = await request.get(`${rootUrl}/employee/${id}`)
  return res.body
}

export async function getTask(employeeId: number, jobId: number) {
  const res = await request.get(`${rootUrl}/employee/${employeeId}/${jobId}`)
  return res.body
}

export async function submitJob(input: Job) {
  const employeeId = input.employee_id
  const jobId = input.id
  await request.patch(`${rootUrl}/employee/${employeeId}/${jobId}`).send(input)
}
