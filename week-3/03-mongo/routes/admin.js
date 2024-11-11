const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require('../db')
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    const admin = new Admin({
        username : username,
        password : password
    });

    await admin.save();

    res.status(201).json({
        message: 'Admin created successfully'
    });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    
    const input = req.body;

    let course = new Course({
        title : input.title,
        description : input.description,
        price : input.price,
        imageLink : input.imageLink
    })

    await course.save();

    course = await Course.findOne({title : input.title}) 

    res.status(201).json({
        message : 'Course created successfully',
        courseId : course.id
    })
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const courses = await Course.find();

    return res.status(200).json({
        courses
    })
    
});

module.exports = router;