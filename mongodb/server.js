
const mongoose=require('mongoose');  
const url="mongodb://thesid01:thesid01@ds149672.mlab.com:49672/casa";  
    
mongoose.connect(url,{useNewUrlParser:true},(err)=>{  
    if(err){  
        console.log('Error in connection');  
    }else{  
        console.log('Connected!');  
    }  
})  
module.exports=mongoose;  
