const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "name is required"],
    },

    email: {
      type: String,
      require: [true, "email is required"],
    },
    enquiry: {
      typ: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactModel", ContactSchema);
