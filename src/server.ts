import {VinhoInfoController} from "./Controllers/VinhoInfoController.js"
const express = require('./express')
const router = express.Router()



router.route('/vinhoinfo').post((req,res) => VinhoInfoController.criarVinhoInfo(req,res))
router.route('/vinhoinfo').get((req, res)=> VinhoInfoController.listarTodosVinhoInfo(req) )






const app = express()


app.use(express.json())

app.listen(4001, function(){
    console.log('api runing')
})


const conn = require('./Database/DatabaseConnectMongo')
conn() 

// routes
const routes = require('./Routes/routes')
app.use('/api', routes)
 

console.log('hello world')