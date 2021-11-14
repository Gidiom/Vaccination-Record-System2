// const mongoose = require('.');
const User = require('../database/Staff')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const Users = mongoose.model('Users');

const signup = async (req, res) => {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        res.json({ success: false, message: 'user with the email already exists.' })
    }
    let newUser = new User({
        username: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        password: req.body.password
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(req.body.password, salt);
    console.log(newUser.password);
    await newUser.save();
    res.json({ success: true, message: 'User created successfully' });

};
const signin = async (req, res) => {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    // console.log(user);
    // throw error when email is wrong
    if (!user) return res.status(400).json({ error: "Email is wrong" });
    // check for password correctness
    let validPassword = false;
    console.log(req.body.email);
    console.log(user.password);
    await bcrypt.compare(req.body.password, user.password).then((data) => {
        console.log('Inside promise');
        console.log(data);
        validPassword = data;

    }).catch((err) => { console.log('Bcrypt compare error') });
    if (!validPassword)
        return res.status(400).json({ error: "Password is wrong" });
    console.log()
    const token = jwt.sign(
        // payload data
        {
            name: req.body.email
        },
        process.env.JWT_SECRET
    );
    console.log('LINE 51')
    res.json({
        error: null,
        data: {
            jwttoken: token,
        },
    });


};


// Getting all 
const getAllUsers = (req, res) => {
    console.log('getAllUsers');
    try {
        User.find({}, function (err, users) {
            if (err) {
                res.send(err);
                return;
            }
            res.json(users);
        });
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = { signup, getAllUsers, signin } //signin