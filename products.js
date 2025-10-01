const express = require("express")
const route = express.Router()
const controls = require('../controls/productcontrol.js')
route.get("/",controls.getcontrol)
route.get("/:id",controls.getid)
route.post("/",controls.postcontrol)
module.exports = route