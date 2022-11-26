import { Router } from "express";
import { getListAdminNotification, getUserListNotification } from "../controllers/notification";
import {jwtVerifyToken} from '../middlewares/jwtVerifyToken'
import {isAdmin} from '../middlewares/checkRole'
const router = Router()

router.get('/admin-notification',jwtVerifyToken,isAdmin,getListAdminNotification)
router.get('/user-notification',jwtVerifyToken,getUserListNotification)
export default router