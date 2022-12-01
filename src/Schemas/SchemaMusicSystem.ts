import { model, Schema } from "mongoose";
export default model(
    "KomiMusic",
    new Schema({
        ServerID: { type: String, required: true, default: "" },
        MusicChannelID: { type: String, required: true, default: "" },
        MusicMessageID: { type: String, required: true, default: "" },
    })
);
