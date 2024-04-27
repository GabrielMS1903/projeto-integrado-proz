const express = require("express")
const router = express.Router()
const UserController = require("../controllers/UserController")
const checkUser = require("../../helper/verif").checkUser


router.get("/cadastro", UserController.cadastreFit)
router.post("/cadastro",  UserController.cadastreFitPost)
router.get("/logando", UserController.logFit)
router.post("/logando", UserController.logFitPost)
router.get("/logout", UserController.logout)

module.exports = router