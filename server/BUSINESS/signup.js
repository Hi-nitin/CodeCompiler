const Userschema = require('../MODEL/signup');

const signup = async (req, res) => {

    try {
        const mydata = {
            name: req.body.firstname + ' ' + req.body.lastname,
            username: req.body.username,
            password: req.body.password
        }

const checkuser=await Userschema.findOne({username:mydata.username});
if(checkuser==null){
      const newuser = new Userschema(mydata);
        const saveduser = await newuser.save();
        console.log(saveduser);
   res.send({
    success:true
   })
}else{

    res.send({
        success:false,
        msg:'duplicate user'
       })
       console.log('duplicate');
       
    
}


   

    } catch (error) {
        console.log('error:' + error);

    }
}

module.exports = signup