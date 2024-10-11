import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import errorHandler from "./error/errorHandler.js";
const PORT = process.env.PORT
const app = express();
app.use(cors())
//allows body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router)

app.use(errorHandler)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
