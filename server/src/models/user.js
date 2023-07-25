import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
            
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            enum: ["admin", "member"],
            default: "member",
        }
    },
    { timestamps: true, versionKey: false }
);
export default mongoose.model("User", userSchema);