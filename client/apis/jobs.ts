import request from 'superagent'
import { Job } from '../../models/jobs'

const rootUrl = '/api/v1/'

export async function getJobs(): Promise<Job[]> {
  const res = await request.get(`${rootUrl}/manager`)
  return res.body as Job[]
}

export async function getJobById(id: number) {
  const res = await request.get(`${rootUrl}/manager/${id}`)
  return res.body
}

export async function deleteJob(id: number) {
  await request.delete(`${rootUrl}/manager/${id}`)
}
