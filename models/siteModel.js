const mongoose = require("mongoose");
const slugify = require("slugify");
const Increment = require("./incrementModel");

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
    fullName: {
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
      enum: ["Landscaping", "Martial Arts", "HVAC"],
    },
    fullAddress: {
      type: String,
    },
    customId: {
      type: Number,
      unique: true,
      immutable: true,
    },
    status: {
      type: String,
      default: "Pending",
      required: true,
      enum: ["Sold", "Pending", "Declined"],
    },
    createdAt: {
      type: Date,
      immutable: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

siteSchema.pre("save", async function (next) {
  let suite, afterStreetComma, afterSuiteComma;

  this.slug = slugify(this.businessName, { lower: true });

  if (this.suite) {
    suite = this.suite;
    afterStreetComma = "";
    afterSuiteComma = ", ";
  } else {
    suite = "";
    afterStreetComma = ",";
    afterSuiteComma = "";
  }

  this.fullAddress = `${this.streetAddress}${afterStreetComma} ${suite}${afterSuiteComma}${this.city}, ${this.state} ${this.zip}`;

  this.fullName = `${this.firstName} ${this.lastName}`;

  if (this.isNew) {
    this.createdAt = new Date().toISOString();
    const id = await Increment.getNextId("Site", 1);
    this.customId = id; // Incremented
  }
  next();
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
