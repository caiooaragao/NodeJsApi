import { Router } from "express";


const router = Router()

router.post('/vinhos', (req,res)=>{
    res.status(201).send()
})

export { router }