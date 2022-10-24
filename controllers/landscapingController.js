const catchAsync = require("../utils/catchAsync");
const renderPage = require("../utils/renderPage");

const industry = "Landscaping";

exports.homePage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Home Page",
    "landscaping/home",
    "5e420b50c528062bf2233571",
    industry
  );
});

exports.aboutUsPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "About Us",
    "landscaping/aboutUs",
    "5e44b764f37b474b1cca29a9",
    industry
  );
});

exports.servicesPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Services",
    "landscaping/services",
    "5e44b80af37b473d24ca2e80",
    industry
  );
});

exports.projectsPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Projects",
    "landscaping/projects",
    "5e44b9e0e3f0530b85b19832",
    industry
  );
});

exports.contactPage = catchAsync(async (req, res, next) => {
  await renderPage(
    req,
    res,
    next,
    "Contact",
    "landscaping/contact",
    "5e44b9ebe3f053f776b19860",
    industry
  );
});
