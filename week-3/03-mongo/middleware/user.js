const User = require('../db').User

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;

    const existingUser = await User.findOne({username});

    if(!existingUser){
        return res.status(403).send();
    }

    if(existingUser.password != password){
        return res.status(403).send();
    }

    next();
}

module.exports = userMiddleware;