import { Router } from 'express'
import * as db from '../db/jobs.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const job = await db.getScheduleById(Number(id))

    res.json(job)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:employeeId/:jobId', async (req, res) => {
  const employeeId = Number(req.params.employeeId)
  const jobId = Number(req.params.jobId)
  try {
    const data = await db.getTask(employeeId, jobId)
    res.json(data)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.patch('/:employeeId/:jobId', async (req, res) => {
  try {
    await db.submitJob(req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router
