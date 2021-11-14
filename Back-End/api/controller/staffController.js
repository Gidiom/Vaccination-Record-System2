// const mongoose = require('.');
const User = require('../database/Staff')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const Users = mongoose.model('Users');

const signup = (req, res) => {
    let newUser = new User({
        username: req.body.username,
        fullname: req.body.firstname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        password: req.body.password
    });
    User.create(newUser, function (err, user) {
        // console.log('users ----');
        // console.log(user);
        if (err) {
            res.json({ success: false, message: 'failed to register user' })
            return
        } else {
            res.status(200).json(user)

        }
        // console.log(newUser);
    })
};
const signin = (req, res) => {
    const user = User.findOne({ email: req.body.email });
    console.log(user);
    // throw error when email is wrong
    if (!user) return res.status(400).json({ error: "Email is wrong" });
    // check for password correctness
    const validPassword = bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
        return res.status(400).json({ error: "Password is wrong" });

    const token = jwt.sign(
        // payload data
        {
            name: req.body.email
        },
        process.env.JWT_SECRET
    );

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