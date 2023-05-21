/* import express from 'express' */

 const vinhoInfoController = require('../Controllers/VinhoInfoController')



/* import { vinhoInfoController } from '../Controllers/VinhoInfoController' */

const router = express.Router()




router.route('/vinhoinfo').post((req,res) => vinhoInfoController.criarVinhoInfo(req,res))
router.route('/vinhoinfo').get((req, res)=> vinhoInfoController.listarTodosVinhoInfo(req) )


module.exports = router

