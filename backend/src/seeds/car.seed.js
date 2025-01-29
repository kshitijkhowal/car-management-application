import mongoose from "mongoose";
import dotenv from "dotenv";
import Car from "../models/car.model.js";
import User from "../models/user.model.js"; 

dotenv.config();

//conect to mongodb
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection failed:', error.message);
      process.exit(1);                          // to stop node itself
    }
};

const seedCars = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    // Connect to MongoDB
    await connectDB();

    // Fetch an existing user (assuming at least one user exists)
    const user = await User.findOne();

    if (!user) {
      console.log("No users found. Please add a user first.");
      return;
    }

    // Sample car data
    const cars = [
      {
        user: user._id,
        title: "Honda Civic",
        description: "A reliable sedan with excellent fuel efficiency.",
        tags: ["Sedan", "Honda", "Fuel Efficient"],
        images: [
          "https://example.com/car1-image1.jpg",
          "https://example.com/car1-image2.jpg",
        ],
      },
      {
        user: user._id,
        title: "Tesla Model S",
        description: "An electric car with cutting-edge technology.",
        tags: ["Electric", "Tesla", "Luxury"],
        images: [
          "https://example.com/car2-image1.jpg",
          "https://example.com/car2-image2.jpg",
          "https://example.com/car2-image3.jpg",
        ],
      },
      {
        user: user._id,
        title: "Ford Mustang",
        description: "A classic muscle car with a modern twist.",
        tags: ["Muscle", "Ford", "Performance"],
        images: [
          "https://example.com/car3-image1.jpg",
          "https://example.com/car3-image2.jpg",
        ],
      },
    ];

    // Delete existing cars
    await Car.deleteMany();
    console.log("Existing cars deleted.");

    // Insert new cars
    await Car.insertMany(cars);
    console.log("Car data seeded successfully.");

    // Close the connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding car data:", error);
    mongoose.connection.close();
  }
};

seedCars();
