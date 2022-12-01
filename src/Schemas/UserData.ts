import { Schema, model } from "mongoose";

const userDataSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  badges: {
    type: Array,
    default: [],
    required: true,
  },
  isBlacklisted: {
    type: Boolean,
    default: false,
    required: true,
  },
  loggedIn: {
    type: Object,
    default: {
      isLogged: false,
      loggedAs: "",
    },
    required: true,
  },
});

export default model("userData", userDataSchema);
