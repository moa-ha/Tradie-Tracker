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

export default router
