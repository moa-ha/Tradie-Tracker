import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/jobs.ts'
import { getEmployees } from '../db/employee.ts'

const router = Router()

// get employee lists to assign

router.get('/', async (req, res) => {
  try {
    const jobsPromise = db.getJobs()
    const employeesPromise = getEmployees()

    const jobs = await jobsPromise
    const employees = await employeesPromise

    res.json({ jobs, employees })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// comment out but keep in case employee table to be called separately on same page
// router.get('/', async (req, res) => {
//   try {
//     const jobs = await db.getJobs()
//     res.json(jobs)
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })

router.get('/completed', async (req, res) => {
  try {
    const completedJobs = await db.getCompletedJobs()
    res.json(completedJobs)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const job = await db.getJobById(Number(id))

    res.json(job)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.delJob(Number(id))
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    await db.editJob(req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body
    await db.addJobs(data)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router
