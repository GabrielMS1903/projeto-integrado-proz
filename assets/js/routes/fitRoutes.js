const express = require("express")
const router = express.Router()
const FitController = require("../controllers/FitController")
const checkUser = require("../../helper/verif").checkUser

router.get("/" ,FitController.showFit)
router.get("/saude", checkUser, FitController.saudeFit)
router.get("/sobre",  FitController.sobreFit)
router.get("/apoio", checkUser, FitController.apoioFit)
router.post("/apoio", FitController.apoioFitPost)

module.exports = router