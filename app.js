import express from "express";
import { urlencoded, json } from "express"; // Import urlencoded and json from express
import  mongoose  from "mongoose";
import  dotenv  from "dotenv";
import route from "./routes/userRoute.js";
import bodyParser from 'body-parser'
import studentRoute from "./routes/studentRoute.js";

const app = express();
dotenv.config(); // Load environment variables from .env

// Middleware
app.use(urlencoded({ extended: false })); // Parse urlencoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

// MongoDB connection
const port = process.env.PORT || 4001;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL)
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Routes
app.use("/api/user", route);
app.use("/api/student", studentRoute);

// Optional: Define additional routes if needed
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/api/v1/student', (req, res) => {
//   const userName = req.body.name;
//   const userEmail = req.body.email;
//   res.json({
//     success: true,
//     name: userName,
//     email: userEmail
//   });
// });

// app.post("/api/v1/register", (req, res) => {
//   const userName = req.body.name;
//   const userEmail = req.body.email;
//   res.json({
//     success: true,
//     name: userName,
//     email: userEmail
//   });
// });

