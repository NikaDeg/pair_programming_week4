const express = require("express");
const app = express();
const tourRouter = require("./routes/tourRouter.js");
const userRouter = require("./routes/userRouter.js");
const morgan=require('morgan')
const authMiddleware=require('./middleware/auth.js');


// app.use(tourRouter);
// Middleware to parse JSON
app.use(express.json());
app.use(morgan('short'))
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


app.use('/api/tours', tourRouter);
app.use('/api/users', authMiddleware, userRouter);


const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});