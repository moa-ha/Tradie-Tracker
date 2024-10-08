import db from './connection'
import { JobData, Job, Assign, SubmitJob } from '../../models/jobs'

//manager's page
export async function getJobs() {
  const jobs = await db('jobs')
  return jobs as Job[]
}

export async function getCompletedJobs() {
  const completedJobs = await db('jobs').where('complete', true)
  return completedJobs
}

export async function getJobById(id: number) {
  return await db('jobs').where({ id }).first()
}

export async function delJob(id: number) {
  await db('jobs').where({ id }).del()
}

export async function editJob(data: Job) {
  return await db('jobs').where('id', data.id).update(data)
}

export async function addJobs(data: JobData) {
  return await db('jobs').insert(data)
}

export async function assignEe(data: Assign) {
  await db('jobs')
    .where('id', data.id)
    .update({ employee_id: data.employee_id })
}

// employee's page

export async function getTask(employeeId: number, jobId: number) {
  return await db('jobs')
    .where('employee_id', employeeId)
    .andWhere('id', jobId)
    .first()
}
export async function submitJob(input: SubmitJob) {
  const id = input.id
  return await db('jobs').where({ id }).update(input)
}
