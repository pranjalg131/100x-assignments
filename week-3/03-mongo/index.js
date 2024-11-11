const dotenv = require('dotenv');
const express = require('express');

dotenv.config();
const app = express();

const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(express.json());
app.use("/admin", adminRouter)
app.use("/users", userRouter)

const port = process.env.PORT; 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
