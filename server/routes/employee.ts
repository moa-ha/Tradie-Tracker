import { Router } from 'express'
import * as db from '../db/jobs.ts'
import { getSchedule, getEmployee } from '../db/employee.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const employee = await getEmployee(Number(id))
    res.json(employee)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
router.get('/:id/schedule', async (req, res) => {
  try {
    const { id } = req.params
    const schedule = await getSchedule(Number(id))

    res.json(schedule)
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

router.get('')
export default router
