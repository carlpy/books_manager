import { Router } from "express";
import usersController from "../controllers/users.controller";

const router = Router()

router.get('/users', usersController.getAllUsers)
router.get('/users/:id', usersController.getUser)
router.post('/users', usersController.createUser)
router.put('/users', usersController.updateUser)
router.delete('/users:id', usersController.deletedUser)

export default router