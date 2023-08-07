import express from "express";
import multer from "multer";
import { uploadImage } from "../controllers/upload";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary";
const router = express.Router();

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "img",
        format: "png, jpg",
    } 
});

export const upload = multer({ storage: storage });


router.post("/images/upload", upload.single("images"), uploadImage);
// router.delete("/images/:publicId", deleteImage);
// router.put("/images/:publicId", upload.single("images"), updateImage);

export default router;

