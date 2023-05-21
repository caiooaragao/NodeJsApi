import mongoose from 'mongoose';

const vinhoInfoSchema = new mongoose.Schema({
    nome:{
        type:String,
       // required: [true, "Nome do empresa é um campo obrigatório"],

    },
    brand:{
        type:String
    },
    year:{
        type:Number
    }
},{
    collection:'vinho'

})

const vinhoInfoModel = mongoose.model('VinhoInfo', vinhoInfoSchema)

module.exports = { vinhoInfoModel, vinhoInfoSchema }
export {vinhoInfoModel, vinhoInfoSchema}