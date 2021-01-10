const router = require("express").Router()
const raveController = require("./../controllers/rave")

router.post("/", raveController.postRave)

module.exports = router