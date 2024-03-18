import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        unique:true,
    },
    photo:{
        type:String,
    },
    role:{
        type:String,
        default:"user",
    },
},
{timestamps:true}
);

export default mongoose.model("User",userSchema)