const Site = require("../models/siteModel");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

exports.getAllSites = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Site.find(), req.query).filter().sort().limitFields().paginate();

  const sites = await features.query;

  res.status(200).json({
    status: "success",
    requestedAt: new Date(),
    count: sites.length,
    data: {
      sites,
    },
  });
});

exports.getSite = catchAsync(async (req, res, next) => {
  const site = await Site.findById(req.params.id);

  if (!site) {
    return next(new AppError("There is no site with that id", 404));
  }

  res.status(200).json({
    status: "success",
    requestedAt: new Date(),
    data: {
      site,
    },
  });
});

exports.createSite = catchAsync(async (req, res, next) => {
  const newSite = await Site.create(req.body);

  res.status(201).json({
    status: "success",
    requestedAt: new Date(),
    data: {
      newSite,
    },
  });
});
