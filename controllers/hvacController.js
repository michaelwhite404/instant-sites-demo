const catchAsync = require("../utils/catchAsync");
const renderPage = require("../utils/renderPage");

const industry = "HVAC";

exports.homePage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Home Page",
    "hvac/home",
    "5eb9d8354fe4d737f614ff30",
    industry
  );
});

exports.aboutPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "About",
    "hvac/about",
    "5ebae2b93eeced51933a3dd2",
    industry
  );
});

exports.contactPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Contact",
    "hvac/contact",
    "5ebe0cd550dc652c26b92b40",
    industry
  );
});

exports.residentialPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Residential",
    "hvac/residential",
    "5ebb84d61e38b50c7001d50f",
    industry
  );
});

exports.commercialPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Commercial",
    "hvac/commercial",
    "5ebb85652e1e07590bc1a557",
    industry
  );
});

/****** RESIDENTIAL */
exports.acServiceRepairPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "AC Service and Repair",
    "hvac/residential/acServiceRepair",
    "5ebdf96aebf515a2b38e6348",
    industry
  );
});

exports.acInstallPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Air Conditioning Installation",
    "hvac/residential/acInstall",
    "5ebe3902f4e8e1120f208e0e",
    industry
  );
});

exports.blowerDoorPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Blower Door Testing",
    "hvac/residential/blowerDoor",
    "5ec1ac8530e18882348c3966",
    industry
  );
});

exports.boilersPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Boilers",
    "hvac/residential/boilers",
    "5ec1b2ad3687b0397fd5ad93",
    industry
  );
});

exports.centralAirPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Central Air",
    "hvac/residential/centralAir",
    "5ec1b3fa8e275c16840fac99",
    industry
  );
});

exports.dehumidificationPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Dehumidification",
    "hvac/residential/dehumidification",
    "5ec1b6273687b05eead5ae38",
    industry
  );
});

exports.ductCleaningPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Duct Cleaning",
    "hvac/residential/ductCleaning",
    "5ec1b89e73138d31ee04a607",
    industry
  );
});

exports.furnacesPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Furnaces",
    "hvac/residential/furnaces",
    "5ec1e1713f1e745ed8f02bd3",
    industry
  );
});

exports.heatPumpsPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Heat Pumps",
    "hvac/residential/heatPumps",
    "5ec1e26473138d05aa04c1bf",
    industry
  );
});

exports.heatingPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Heating Service and Repair",
    "hvac/residential/heating",
    "5ec1e3cd989482406e8b1b59",
    industry
  );
});

exports.homeEnergyPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Home Energy Audit and Solutions",
    "hvac/residential/homeEnergy",
    "5ec1e4a9c3db1e23ed679250",
    industry
  );
});

exports.humidificationPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Humidification",
    "hvac/residential/humidification",
    "5ec1e62373c277c6bbc3c137",
    industry
  );
});

/****** COMMERCIAL */

exports.airDistributionPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Air Distribution System Sanitation",
    "hvac/commercial/airDistribution",
    "5ec1ec27a160654e33f25246",
    industry
  );
});

exports.energyManagementPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Energy Management and Recovery Controls",
    "hvac/commercial/energyManagement",
    "5ec635b7e2d02e951124c4c7",
    industry
  );
});

exports.commercialKitchenPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Commercial Kitchen Ventilation",
    "hvac/commercial/commercialKitchen",
    "5ec637e1df53aa75fddc3826",
    industry
  );
});

exports.airRotationPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Air Rotation Units",
    "hvac/commercial/airRotation",
    "5ec639cd9818913905047024",
    industry
  );
});

exports.chillersCoolingPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Chillers and Cooling Towers",
    "hvac/commercial/chillersCooling",
    "5ec63c268ff98d65465915ed",
    industry
  );
});

exports.commercialRefrigerationPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Commercial Refrigeration",
    "hvac/commercial/commercialRefrigeration",
    "5ec63cf402d99e85cb676748",
    industry
  );
});

exports.groundSourcePage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Ground Source Heat Pumps",
    "hvac/commercial/groundSource",
    "5ec63e23fe35e2051eb1e5cd",
    industry
  );
});

exports.hotWaterPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Hot Water and Steam Boilers",
    "hvac/commercial/hotWater",
    "5ec6405542de904276d48a35",
    industry
  );
});

exports.indoorAirQualityPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Indoor Air Quality Engineering",
    "hvac/commercial/indoorAirQuality",
    "5ec6419802d99e52eb6790d8",
    industry
  );
});

exports.humidityControlsPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Humidity Controls",
    "hvac/commercial/humidityControls",
    "5ec642c1df53aa4f14dc731e",
    industry
  );
});

exports.iceEpuipmentPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Ice Equipment",
    "hvac/commercial/iceEpuipment",
    "5ec64423e2d02e2ff42519fc",
    industry
  );
});

exports.productAreaPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Product Area Ventilation",
    "hvac/commercial/productArea",
    "5ec645922a878546531f866b",
    industry
  );
});
