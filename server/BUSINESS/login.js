const UserSchema=require('../MODEL/signup');
const jwt =require('jsonwebtoken');

const login =async (req, res) => {

try{
const {username,password}=req.body;

const checkuser=await UserSchema.findOne({username:username});

if(checkuser==null){

    res.send({
        success: false,
        msg:'User not found'
    })
}else{

if(checkuser.password==password){
    const token=jwt.sign({userId:checkuser._id},'key');
    res.send({
        success: true,
        msg:'login',
        token:token
    })
    
}else{
    res.send({
        success: false,
        msg:'incorrect password'
    })
}

}



}catch(e){
    console.log('error:'+e);
    
}



}

module.exports = login