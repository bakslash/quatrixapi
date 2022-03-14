const express =require('express')
const loginController =require('../controllers/personnel')
const router=express.Router()




router.get('/',loginController.getPersonnel)
router.post('/login',loginController.login)
router.post('/register',loginController.admin)





module.exports =router