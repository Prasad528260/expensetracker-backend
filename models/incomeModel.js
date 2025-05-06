const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxLength: 50 },
    amount: { type: Number, required: true, trim: true, maxLength: 20 },
    type: { type: String, default: "income" },
    date: { type: Date, required: true, trim: true, default: Date.now },
    category: { type: String, required: true, trim: true },
    description: { type: String, trim: true, maxLength: 20, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Income", incomeSchema);
