import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { protect, isAdmin } from '../middleware/authMiddleware.js'

// to register the user
router.route('/').post(registerUser).get(protect, isAdmin, getUsers)
// to login the user
router.post('/login', authUser)
// to protect the middleware we need to give the first argument
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router
  .route('/:id')
  .delete(protect, isAdmin, deleteUser)
  .get(protect, isAdmin, getUserById)
  .put(protect, isAdmin, updateUser)
export default router
