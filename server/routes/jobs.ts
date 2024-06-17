import { Router } from 'express'
import * as db from '../db/jobs.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const job = await db.getJobById(id)
    res.json(job)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    await db.submitJob(req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router
