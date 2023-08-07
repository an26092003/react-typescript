import express from "express";
import { getAll, get, remove, create, update } from "../controllers/products";
import { checkPermission } from "../middleware/CheckPermission";
import multer from 'multer'
import { upload } from "./upload";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", checkPermission, create);
router.delete("/products/:id", checkPermission, remove);
router.patch("/products/:id", checkPermission,upload.single('images'), update);

export default router;
