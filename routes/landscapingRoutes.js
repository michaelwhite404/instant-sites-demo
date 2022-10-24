const express = require("express");

const landscapingController = require("../controllers/landscapingController");

const router = express.Router();

router.get("/:customId/:slug/", landscapingController.homePage);
router.get("/:customId/:slug/about-us", landscapingController.aboutUsPage);
router.get("/:customId/:slug/services", landscapingController.servicesPage);
router.get("/:customId/:slug/projects", landscapingController.projectsPage);
router.get("/:customId/:slug/contact", landscapingController.contactPage);

module.exports = router;
