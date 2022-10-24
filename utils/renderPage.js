const Site = require("../models/siteModel");
const AppError = require("./AppError");

module.exports = async (req, res, next, title, page, pageId, industry) => {
  const data = await Site.findOne({
    industry,
    customId: req.params.customId,
    slug: req.params.slug,
  }); /* .populate("industry", "name slug") */

  if (!data) {
    res.redirect("https://beyondinfinitymedia.agency");
    return next(new AppError("There is no site with that id", 404));
  }

  res.status(200).render(page, {
    title,
    data,
    pageId,
  });
};
