import express from "express";
import { createCar, deleteCar, getAllCars, getCar, getUserCars, updateCar } from "../controllers/car.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router=express.Router();

router.get("/get-all-cars",getAllCars);
router.get("/get-user-cars",authMiddleware,getUserCars);
router.get("/get-car/:id",authMiddleware,getCar);

router.post("/create-car",authMiddleware,createCar);
router.put("/update-car/:id",authMiddleware,updateCar);
router.delete("/delete-car/:id",authMiddleware,deleteCar);


export default router;