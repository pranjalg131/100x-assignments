const mongoose = require('mongoose');

const dbUrl = process.env.MONGODB_URL;
// Connect to MongoDB
mongoose.connect(dbUrl);

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    price : Number,
    imageLink : String
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [CourseSchema]
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}