import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    applicationNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    shop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },

    instrument: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instrument",
      required: true,
    },

    applicationType: {
      type: String,
      enum: ["FRESH", "RE_VERIFICATION"],
      required: true,
    },

    reason: {
      type: String,
      enum: [
        "ROUTINE_EXPIRY",
        "REPAIR",
        "DISMANTLING",
        "REINSTALLATION",
      ],
    },

    status: {
      type: String,
      enum: [
        "VERIFICATION_PENDING",
        "VERIFIED",
        "REJECTED",
      ],
      default: "SUBMITTED",
    },

    remarks: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;