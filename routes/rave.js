const router = require("express").Router()
const raveController = require("./../controllers/rave")

router.post("/", raveController.postRave)
router.get("/:txnId", raveController.verify)

module.exports = router