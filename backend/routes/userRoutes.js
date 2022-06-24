import express from 'express'
const router = express.Router()
import {authUser,getUserProfile,registerUser,updateUserProfile} from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'

// to register the user
router.post('',registerUser)
// to login the user 
router.post('/login',authUser)
// to protect the middleware we need to give the first argument 
router.route('/profile')
      .get(protect,getUserProfile)
      .put(protect, updateUserProfile)



export default router