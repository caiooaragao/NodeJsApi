console.log('app runing')

import express from 'express'
import { router } from './Router'

const app = express()
app.use(express.json())
app.use(router)

export { app }