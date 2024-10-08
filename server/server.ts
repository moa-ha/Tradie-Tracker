import express from 'express'
import * as Path from 'node:path'

import manager from './routes/manager'
import employee from './routes/employee'
import jobs from './routes/jobs'

const server = express()

server.use(express.json())

server.use('/api/v1/manager', manager)
server.use('/api/v1/employee', employee)
server.use('/api/v1/jobs', jobs)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
