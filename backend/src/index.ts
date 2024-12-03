import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { response } from "./helpers/response";
import publicRouter from "./routes/public.route";
const app = express();
configDotenv();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

/* public */ 
app.use('/api/v1/public' , publicRouter);

app.use((req, res) => {
    res.status(404).send(response(404, "Route not found"));
});

mongoose.connect(process.env.MONGO_URI! , {dbName : "Tasks"})
.then(()=>{
    app.listen(port, () => console.log("Listening on port 8000"))
})
.catch((err) => console.log(err))
