import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    images: {
        type: [String],
        validate: {
            validator: (v) => v.length <= 10, // Limit to 10 images
            message: "A car can have at most 10 images",
        },
    },


},
    {
        timestamps: true,
    },
);

const Car=mongoose.model("Car",carSchema);

export default Car;