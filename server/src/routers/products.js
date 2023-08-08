import express from "express";
import { getAll, get, remove, create, update } from "../controllers/products";
import { checkPermission } from "../middleware/CheckPermission";

const router = express.Router();






router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", create);
router.delete("/products/:id", remove);
router.patch("/products/:id", update);

export default router;
