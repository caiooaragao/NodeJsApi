import {vinhoInfoModel} from "../Models/VinhoInfoModel"

const VinhoInfoRepository = {
    async criarVinhoInfo(req:any){
        try {
            const vinhoInfoService = {
                nome:req.body.nome,
                brand:req.body.brand,
                year:req.body.year
            }

            const response = vinhoInfoModel.create(vinhoInfoService)
            return response
        } catch (error) {
            return error
        }

    },

    async listarTodosVinhoInfo(){
        try {
            const response = vinhoInfoModel.find()
            return response
            console.log('vinho infos pesquisados')
        } catch (error) {
            return error
            console.log(error)
        }
    },

    async listarVinhoInfoPorId(vinhoId:string){
        try {
            const response = vinhoInfoModel.findById(vinhoId)
            return response
        } catch (error) {
            console.log(error)
            return error
        }
    },
    
    async editarVinhoInfoPorId(vinhoId:string){
        try {
            const response = vinhoInfoModel.findByIdAndUpdate(vinhoId)
            console.log('update succesfull', response)
            return response
        } catch (error) {
            
            console.log(error)
            return error
        }
    },
    async deletarVinhoInfoNome(nome){
        try {
            const response = vinhoInfoModel.deleteOne(nome)
        } catch (error) {
            
        }
    }
}
export {VinhoInfoRepository}