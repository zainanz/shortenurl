import express from "express";
import router from "./routes/routes.js";

const PORT = process.env.PORT
const app = express();

//allows body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
