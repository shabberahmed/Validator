import { Router } from "express";
import { oneController } from "../controllers/mainController.js";

const route=Router()

route.post("/home",oneController)
export default route