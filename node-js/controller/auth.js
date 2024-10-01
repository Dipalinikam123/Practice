const model = require('../model/user')
const fs = require('fs')
const bcrypt = require('bcrypt')

const privateKey = fs.readFileSync('E:/ReactPractice/Practice/node-js/private.key', 'utf-8')
const User = model.User

const jwt = require('jsonwebtoken')

exports.createUser = async (req, res) => {
    try {
        // Log the incoming request body
        console.log('---body', req.body);

        // Create a new user instance
        const user = new User(req.body);

        // Generate a JWT token
        const token = jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'RS256' });
        user.token = token;

        // Hash the password asynchronously
        const hash = await bcrypt.hash(req.body.password, 10);
        user.password = hash;
        console.log("---hash--", user.password);

        // Save the user to the database
        const doc = await user.save();

        // Respond with the created document
        res.status(201).json({token});
    } catch (err) {
        console.error('Error creating user:', err);
        // Respond with an error if the save fails
        res.status(400).json({ message: 'Failed to create user', error: err });
    }
};


exports.login = async (req, res) => {
    try {

        const doc = await User.findOne({ email: req.body.email });
        // res.status(201).json(doc)
        const isAuth = bcrypt.compareSync(req.body.password, doc.password);
        if (isAuth) {
            const token = jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'RS256' });
            doc.token=token;
            await doc.save();
            return res.json({ token });
        }
        else{
            res.sendStatus(401)

        }

    } catch (err) {
        console.error('Error login user:', err);
        res.status(401).json({ message: 'Failed to login user', error: err });
    }


}