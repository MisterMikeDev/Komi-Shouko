import { config } from "dotenv";
config();
import { describe, it, expect } from "@jest/globals";
import {
    noNegativeNumber,
    getColorByPing,
    getEmojiByPing,
    RoundedTimeStamp,
    timeStampConverter
} from "../src/Helpers";
import { Emojis } from "../src/Data/Emojis";

const {
    Ping1: AppallingPing,
    Ping2: BadPing,
    Ping3: RegularPing,
    Ping4: GoodPing,
    Ping5: AwesomePing
} = Emojis.Ping;

describe("Komi Shouko tests", () => {
    it("noNegaive function return alway a positive number", () => {
        expect(noNegativeNumber(-1)).toBe(0);
        expect(noNegativeNumber(0)).toBe(0);
        expect(noNegativeNumber(1)).toBe(1);
    });
    it("getColorByPing function return a color by ping", () => {
        expect(getColorByPing(-1)).toBe("#2BFF00");
        expect(getColorByPing(0)).toBe("#2BFF00");
        expect(getColorByPing(60)).toBe("#2BFF00");
        expect(getColorByPing(61)).toBe("#FFF300");
        expect(getColorByPing(100)).toBe("#FFF300");
        expect(getColorByPing(101)).toBe("#FF9B00");
        expect(getColorByPing(150)).toBe("#FF9B00");
        expect(getColorByPing(151)).toBe("#FF0000");
        expect(getColorByPing(200)).toBe("#FF0000");
        expect(getColorByPing(201)).toBe("#930000");
        expect(getColorByPing(300)).toBe("#930000");
    });
    it("getEmojiByPing function return a emoji by ping", () => {
        expect(getEmojiByPing(-1)).toBe(AwesomePing);
        expect(getEmojiByPing(0)).toBe(AwesomePing);
        expect(getEmojiByPing(60)).toBe(AwesomePing);
        expect(getEmojiByPing(61)).toBe(GoodPing);
        expect(getEmojiByPing(100)).toBe(GoodPing);
        expect(getEmojiByPing(101)).toBe(RegularPing);
        expect(getEmojiByPing(150)).toBe(RegularPing);
        expect(getEmojiByPing(151)).toBe(BadPing);
        expect(getEmojiByPing(200)).toBe(BadPing);
        expect(getEmojiByPing(201)).toBe(AppallingPing);
        expect(getEmojiByPing(300)).toBe(AppallingPing);
    });
    it("timeStampConverter function return a timestamp", () => {
        expect(timeStampConverter(1628600000000)).toBe(1628600000);
        expect(timeStampConverter("1628600000000")).toBe(1628600000);
    });
    it("RoundedTimeStamp function return a timestamp", () => {
        expect(
            RoundedTimeStamp(1628600000000, {
                itsForDiscord: false,
                type: "shortDateAndTime"
            })
        ).toBe(1628600000);
        expect(
            RoundedTimeStamp(1628600000000, {
                itsForDiscord: false,
                type: "shortDate"
            })
        ).toBe(1628600000);
        expect(
            RoundedTimeStamp(1628600000000, {
                itsForDiscord: false,
                type: "longDateAndTime"
            })
        ).toBe(1628600000);
        expect(
            RoundedTimeStamp(1628600000000, {
                itsForDiscord: true,
                type: "shortDate"
            })
        ).toBe("<t:1628600000:d>");
        expect(
            RoundedTimeStamp(1628600000000, {
                itsForDiscord: true,
                type: "longDateAndTime"
            })
        ).toBe("<t:1628600000:F>");
        expect(
            RoundedTimeStamp(1628600000000, {
                itsForDiscord: true,
                type: "relativeTime"
            })
        ).toBe("<t:1628600000:R>");
    });
});
