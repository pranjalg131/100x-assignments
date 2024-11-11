const Admin = require('../db').Admin;

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;

    const existingUser = await Admin.findOne({username});

    if(!existingUser){
        return res.status(403).send();
    }

    if(existingUser.password != password){
        return res.status(403).send();
    }

    next();
}

module.exports = adminMiddleware;