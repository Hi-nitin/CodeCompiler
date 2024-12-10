const jwt=require('jsonwebtoken')
const tokenchecker=(req,res)=>{

    const token = req.cookies.token; 

    console.log(token);
    

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Secret key used for signing the token
  const secretKey = 'key'; // Change this to your actual secret key

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.json({ message: 'Invalid token' });
    }

    // If token is valid, decoded contains the payload
    res.json({ message: 'Token is valid', data: decoded });
  });
}

module.exports=tokenchecker;