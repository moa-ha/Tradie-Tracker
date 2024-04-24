import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/jobs.ts'
import { useParams } from 'react-router-dom'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const jobs = await db.getJobs()
    res.json(jobs)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const job = await db.getJobById(Number(id))
    console.log(job)

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

router.post('/manager', async (req, res) => {
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
