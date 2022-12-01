import { Schema, model } from "mongoose";

const Configs = new Schema({
  ServerID: String,
  ServerName: String,
  ServerPrefix: {
    type: String,
    default: "k!",
  },
  ServerMessageJoin: {
    type: Boolean,
    default: false,
  },  
});

export default model("KomiServerData", Configs);
