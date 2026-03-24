import mongoose from 'mongoose';

const tutorialSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    content:{
        type:String,
        required:true,
    }
})

const Tutorial  = mongoose.model("Tutorial",tutorialSchema);
export default Tutorial;