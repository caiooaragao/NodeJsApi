

const express = require('express') 


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
