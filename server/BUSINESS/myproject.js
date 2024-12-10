const jwt = require('jsonwebtoken');
const codeschema = require('../MODEL/codeschema');

const myproject = async (req, res) => {
    const token = req.cookies.token;

    try {
        if (!token) {
            return res.status(401).send({ msg: 'Unauthorized: No token provided' });
        }

        // Decode the token to get the userId
        const decoded = jwt.verify(token, 'key'); // Replace 'your_secret_key' with your actual secret key
        const userId = decoded.userId; // Adjust this if your token structure is different

        // Fetch projects associated with the userId
        const projects = await codeschema.find({ userId });

        // Send back the projects or a success message
       
        res.send({ projects });
      
    } catch (error) {
        console.error('Error fetching project names:', error);
        res.status(500).send({ msg: 'Error fetching projects' });
    }
};

module.exports = myproject;
