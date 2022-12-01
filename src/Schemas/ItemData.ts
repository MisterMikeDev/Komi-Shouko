import { model, Schema } from "mongoose";

const ItemSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  Item: {
    type: Object,
    required: true,
    default: {},
  },
});

export default model("ItemData", ItemSchema);
