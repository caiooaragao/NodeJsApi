import {VinhoInfoRepository} from "../Repository/VinhoInfoRepository"



 // REGRAS DE NEGOCIO DENTRO DO SERVICE
const vinhoInfoService = {
   async criarVinhoInfo(vinhoData){
      // aqui pode fazer validaçoes antes de mandar pro branco de dados
      // ex:
      // hashedPassword = Hash(vinhoData.password)
      // vinhoinfoRepository.criarVinhoInfo(hashedPassword)
     return VinhoInfoRepository.criarVinhoInfo(vinhoData)
     

   },

   async listarTodosVinhoInfo(){
      return VinhoInfoRepository.listarTodosVinhoInfo()
      

   },
   async atualizarVinhoInfo(vinhoId){
    return VinhoInfoRepository.editarVinhoInfoPorId(vinhoId)
    
   },
   async listarVinhoInfoPorId(vinhoId){
    return VinhoInfoRepository.listarVinhoInfoPorId(vinhoId)
    
   },
   async deletarVinhoPorNome(nome){
    return VinhoInfoRepository.deletarVinhoInfoNome(nome)
    
   }
}

export {vinhoInfoService}