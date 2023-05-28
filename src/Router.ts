import { Router } from "express";
import { VinhoInfoController } from "./Controllers/VinhoInfoController";

const router = Router()

/* router.post('/vinhos', (req,res)=>{
    res.status(201).send()

}) */

router.route('/vinhoinfo').post((req,res) => VinhoInfoController.criarVinhoInfo(req,res))
router.route('/vinhoinfo').get((req, res)=> VinhoInfoController.listarTodosVinhoInfo(req) )

export { router }