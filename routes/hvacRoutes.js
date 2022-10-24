const express = require("express");

const hvacController = require("../controllers/hvacController");

const router = express.Router();

router.get("/:customId/:slug/", hvacController.homePage);
router.get("/:customId/:slug/about", hvacController.aboutPage);
router.get("/:customId/:slug/contact", hvacController.contactPage);
router.get("/:customId/:slug/residential", hvacController.residentialPage);
router.get("/:customId/:slug/commercial", hvacController.commercialPage);

// Residential
router.get(
  "/:customId/:slug/residential/ac-service-and-repair",
  hvacController.acServiceRepairPage
);
router.get(
  "/:customId/:slug/residential/air-conditioning-installation",
  hvacController.acInstallPage
);
router.get(
  "/:customId/:slug/residential/blower-door-testing",
  hvacController.blowerDoorPage
);
router.get("/:customId/:slug/residential/boilers", hvacController.boilersPage);
router.get(
  "/:customId/:slug/residential/central-air",
  hvacController.centralAirPage
);
router.get(
  "/:customId/:slug/residential/dehumidification",
  hvacController.dehumidificationPage
);
router.get(
  "/:customId/:slug/residential/duct-cleaning",
  hvacController.ductCleaningPage
);
router.get(
  "/:customId/:slug/residential/furnaces",
  hvacController.furnacesPage
);

router.get(
  "/:customId/:slug/residential/heat-pumps",
  hvacController.heatPumpsPage
);
router.get(
  "/:customId/:slug/residential/heating-service-and-repair",
  hvacController.heatingPage
);
router.get(
  "/:customId/:slug/residential/home-energy-audit-and-solutions",
  hvacController.homeEnergyPage
);
router.get(
  "/:customId/:slug/residential/humidification",
  hvacController.humidificationPage
);

// Commercial
router.get(
  "/:customId/:slug/commercial/air-distribution-system-sanitation",
  hvacController.airDistributionPage
);
router.get(
  "/:customId/:slug/commercial/energy-management-and-recovery-controls",
  hvacController.energyManagementPage
);
router.get(
  "/:customId/:slug/commercial/commercial-kitchen-ventilation",
  hvacController.commercialKitchenPage
);
router.get(
  "/:customId/:slug/commercial/air-rotation-units",
  hvacController.airRotationPage
);
router.get(
  "/:customId/:slug/commercial/chillers-and-cooling-towers",
  hvacController.chillersCoolingPage
);
router.get(
  "/:customId/:slug/commercial/commercial-refrigeration",
  hvacController.commercialRefrigerationPage
);
router.get(
  "/:customId/:slug/commercial/ground-source-heat-pumps",
  hvacController.groundSourcePage
);
router.get(
  "/:customId/:slug/commercial/hot-water-and-steam-boilers",
  hvacController.hotWaterPage
);
router.get(
  "/:customId/:slug/commercial/indoor-air-quality-engineering",
  hvacController.indoorAirQualityPage
);
router.get(
  "/:customId/:slug/commercial/humidity-controls",
  hvacController.humidityControlsPage
);
router.get(
  "/:customId/:slug/commercial/ice-equipment",
  hvacController.iceEpuipmentPage
);
router.get(
  "/:customId/:slug/commercial/product-area-ventilation",
  hvacController.productAreaPage
);
module.exports = router;
