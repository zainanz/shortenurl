import express from "express";
import { tinyUrl } from "../controller/tinyurl.js";
const router = express.Router();


router.post("/tinyurl", tinyUrl)


export default router
