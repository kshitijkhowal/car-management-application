import Car from "../models/car.model.js";
import User from "../models/user.model.js";
import mongoose from "mongoose";

export const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserCars = async (req, res) => {
    const userId = req.user._id;
    try {
        const cars = await Car.find({ user:userId });
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
};

export const getCar = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid Car ID" });
    }
    try {
        const car = await Car.findById(id);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const createCar = async (req, res) => {
    const {title,description,tags} =req.body;
    const userId=req.user._id;
    if(!title || !description || !tags){
        return res.status(400).json({message:"All fields are required"});
    }
    try {
        const newCar=new Car({
            user:userId,
            title,
            description,
            tags,
        });
        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export const updateCar = async (req, res) => {
    const { id } = req.params;
    const { title, description, tags } = req.body;
    try {
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }
        car.title = title || car.title;
        car.description = description || car.description;
        car.tags = tags || car.tags;
        const updatedCar = await car.save();
        res.json(updatedCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteCar = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid Car ID" });
    }

    try {
        const car = await Car.findByIdAndDelete(id);
        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }
        res.status(200).json({ message: "Car deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
