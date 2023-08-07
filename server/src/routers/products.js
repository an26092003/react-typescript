import express from "express";
import { getAll, get, remove, create, update } from "../controllers/products";
import { checkPermission } from "../middleware/CheckPermission";
import multer from 'multer'
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
router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", checkPermission, upload.single('image'), create);
router.delete("/products/:id", checkPermission, remove);
router.patch("/products/:id", checkPermission,upload.single('images'), update);

export default router;
