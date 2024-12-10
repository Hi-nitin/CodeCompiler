const UserProject = require('../MODEL/codeschema')
const codesaver = async (req, res) => {

    const { userId, projectName, projectCode } = req.body;

    // Validate input
    if (!userId || !projectName || !projectCode) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newProject = new UserProject({
            userId,
            projectName,
            projectCode
        });

        const savedProject = await newProject.save();
        res.status(201).json({message:'project saved'});
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ message: 'Server error' });
    }

}

module.exports = codesaver