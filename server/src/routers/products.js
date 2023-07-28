import express from "express";
import { getAll, get, remove, create, update } from "../controllers/products";
import { checkPermission } from "../middleware/CheckPermission";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", checkPermission, create);
router.delete("/products/:id", checkPermission, remove);
router.patch("/products/:id", checkPermission, update);

export default router;
