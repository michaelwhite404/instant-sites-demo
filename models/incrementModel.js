const { model, Schema } = require("mongoose");

const incrementSchema = new Schema({
  modelName: { type: String, required: true, unique: true },
  idx: { type: Number, default: 0, min: 0 },
  start: { type: Number, default: 0, min: 0 },
});

incrementSchema.statics.getNextId = async function (modelName, start) {
  let incr = await this.findOne({ modelName });

  if (!incr) incr = await new this({ modelName, start, idx: start }).save();
  const number = incr.idx;
  incr.idx++;
  await incr.save();
  return number;
};

const Increment = model("Increment", incrementSchema);

module.exports = Increment;
