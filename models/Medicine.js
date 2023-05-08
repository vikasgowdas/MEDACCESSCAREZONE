import mongoose from "mongoose";

const Medicine = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 50,
    },
    type: {
      type: String,
      required: [true, "Please provide company type"],
      maxlength: 50,
    },
    description: {
      type: String,
      // required: [true, "Please provide company name"],
      maxlength: 500,
    },
    price: {
      type: String,
      required: [true, "Please provide company price"],
      maxlength: 50,
    },
    // createdBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    //   // required: [true, 'Please provide user'],
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Medicine", Medicine);
