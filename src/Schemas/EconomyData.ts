import { Schema, model } from "mongoose";

const economyDataSchema = new Schema({
    nickname: {
        type: String,
        required: true
    },
    cashMoney: {
        type: Number,
        default: 0,
        required: true
    },
    bankMoney: {
        type: Number,
        default: 0,
        required: true
    },
    items: {
        type: Array,
        default: [],
        required: true
    },
    pets: {
        type: Array,
        default: [],
        required: true
    },
    mineLocation: {
        type: String,
        default: "",
        required: true
    },
    lakeLocation: {
        type: String,
        default: "",
        required: true
    },
    fellingLocation: {
        type: String,
        default: "",
        required: true
    },
    plowLocation: {
        type: String,
        default: "",
        required: true
    }
});

export default model("economyData", economyDataSchema);
