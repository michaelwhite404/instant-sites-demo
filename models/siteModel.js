const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cellPhone: {
      type: String,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    suite: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    slug: {
      type: String,
    },
    industry: {
      type: String,
      required: true,
    },
    fullAddress: {
      type: String,
    },
    customId: {
      type: Number,
      unique: true,
    },
    status: {
      type: String,
      default: "Pending",
      required: true,
      enum: ["Sold", "Pending", "Declined"],
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
