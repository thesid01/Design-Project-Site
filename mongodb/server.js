
const mongoose=require('mongoose');  
const url="mongodb://localhost:27017/productdb";  
    
mongoose.connect(url,{useNewUrlParser:true},(err)=>{  
    if(err){  
        console.log('Error in connection');  
    }else{  
        console.log('Connected!');  
    }  
})  
module.exports=mongoose;  