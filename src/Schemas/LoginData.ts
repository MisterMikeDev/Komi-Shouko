import { Schema, model } from "mongoose";

const userDataListSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model("userDataList", userDataListSchema);
