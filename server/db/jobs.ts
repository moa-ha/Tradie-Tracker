import db from './connection'
import { JobData, Job } from '../../models/jobs'

export async function getJobs() {
  const jobs = await db('jobs')
  return jobs as Job[]
}

export async function getJobById(id: number) {
  return await db('jobs').where({ id }).first()
}

export async function delJob(id: number) {
  await db('jobs').where({ id }).del()
}
