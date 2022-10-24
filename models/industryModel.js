const mongoose = require("mongoose");

const industrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    color: {
      type: String,
    },
    mainImage: {
      type: String,
    },
    slug: String,
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { collection: "industries" }
);

const Industry = mongoose.model("Industry", industrySchema);

module.exports = Industry;
