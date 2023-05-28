import { mainMongoCon} from './Database/DatabaseConnectMongo'
console.log('app runing')


import express from 'express'
import { router } from './Router'

const app = express()
app.use(express.json())
app.use(router)
const conn = require('./Database/DatabaseConnectMongo')
mainMongoCon() 

export { app }