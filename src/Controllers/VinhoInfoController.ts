
import {vinhoInfoService} from "../Service/VinhoInfoService.js"


 const VinhoInfoController = {
  
    async criarVinhoInfo(req, res){
       try {
        const vinhoInfo = await vinhoInfoService.criarVinhoInfo(req)
        res.status(200).json(vinhoInfo)

       } catch (error) {

        res.status(404, console.log(error))
        
       }

    },

    async listarTodosVinhoInfo(res){
        try {
            const listaVinhoInfo = vinhoInfoService.listarTodosVinhoInfo()
            res.status(200).json(listaVinhoInfo)
        } catch (error) {
            res.status(400).json('deu erro')
        }
    }

}


export  {VinhoInfoController}