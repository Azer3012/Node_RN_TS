
import express from  "express";
import { createTask, editTask, getAllCompletedTask, getAllTaskByCategory, getAllTasks, getTaskForToday, toggleTaskStatus } from "../controllers/taskController";
import { authentificationMiddleware } from "../middleware";

const taskRoutes=express.Router()

taskRoutes.use(authentificationMiddleware as any)

taskRoutes.route('/').get(getAllTasks as any)
taskRoutes.route('/taskByCategory/:id').get(getAllTaskByCategory as any)
taskRoutes.route('/completed').get(getAllCompletedTask as any)
taskRoutes.route('/today').get(getTaskForToday as any)
taskRoutes.route('/create').post(createTask as any)
taskRoutes.route('/update/:id').put(toggleTaskStatus as any)
taskRoutes.route('/edit/:id').put(editTask as any)


export default taskRoutes;