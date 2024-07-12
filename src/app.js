import express from 'express'
import cookieParser from 'cookie-parser'

import authRouter from './routes/auth.routes.js'
import taskRouter from './routes/task.routes.js'

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api', authRouter)
app.use('/api', taskRouter)

export default app
