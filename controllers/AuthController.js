const User = require("../models/User")
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken")


exports.signup = async (req, res) => {
    const password = await bcrypt.hash(req.body.password, saltRounds)
    const data = {...req.body, password}
  const user =  await User.create(data)
    res.json({ user })
}

exports.login = async (req,res) => {
    const users = await User.findOne({email: req.body.email});
    if(!users) {
        res.status(404).json({ error: "User not found"});

        return;
    }
if(! await bcrypt.compare(req.body.password, users.password)) {
    res.status(404).json({ error: "User not found"});

    return;
}

const token = await jwt.sign({users}, 'fake-jwt-secret')
    res.json ({users, access_token: token})
}