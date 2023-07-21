import express from "express";
import { createCategory, deleteCategory, getAllCategories, updateCategory } from "../controllers/categoryController";
import { authentificationMiddleware } from "../middleware/index";

const categoryRoutes=express.Router()

categoryRoutes.use(authentificationMiddleware as any)


categoryRoutes.route('/').get(getAllCategories as any);
categoryRoutes.route('/create').post(createCategory as any);
categoryRoutes.route('/remove/:id').delete(deleteCategory as any);
categoryRoutes.route('/update').put(updateCategory as any);

export default categoryRoutes;