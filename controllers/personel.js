const models = require('../models/index')

exports.login = async(req,res,next)=>{

    try{
    const user = await models.personel.findOne({
        
        where:{phone:req.body.phone}   
    })
    
}catch(err){
    console.log(err);
}
}