
import mongoose from "mongoose";
import pkg from 'validator';
const { isEmail } = pkg;

const sch = mongoose.Schema({
    email: {
        type: String,
        required: [true, "please enter the email"],
        unique: [true,"email already exists"],
        validate: [isEmail, "please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "please enter the password"],
        minlength: [6, "minimum 6 chars needed"]
    }
});

export const xpress = mongoose.model("validation", sch);
