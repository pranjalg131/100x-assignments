const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const username = req.body.username;
    const password = req.body.password;

    const user = new User({
        username : username,
        password : password
    })

    await user.save();

    res.status(201).json({
        message: "User created successfully"
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    
    const username = req.headers.username;
    const courseId = req.params.courseId;

    const user = await User.findOne({username});
    const course = await Course.findById(courseId);

    user.purchasedCourses.push(course);

    await user.save();

    res.status(200).json({ message: "Course purchased successfully" });



});

router.get('/courses', async (req, res) => {
    
    const courses = await Course.find();

    res.status(200).json({
        courses
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {

    const username = req.headers.username;
    const user = await User.findOne({username});

    return res.status(200).json({
        purchasedCourses : user.purchasedCourses
    })
});

module.exports = router