const express = require("express");
const siteController = require("../controllers/siteController");

const router = express.Router();

router.route("/").get(siteController.getAllSites).post(siteController.createSite);

router.route("/:id").get(siteController.getSite);

module.exports = router;
