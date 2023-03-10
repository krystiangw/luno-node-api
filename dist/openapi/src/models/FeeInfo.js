"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Luno API
 * The Luno API provides developers with a wealth of financial information provided through the Luno platform.  Through this secure system developers can:  <ul>    <li>Create accounts for trading in cryptocurrencies</li>    <li>Access current and historic cryptocurrency market data</li>    <li>Submit trade orders and view order status</li>    <li>Buy and sell Bitcoin and Ethereum</li>    <li>Send and receive Bitcoin and Ethereum</li>    <li>Generate Bitcoin and Ethereum wallet addresses</li>  </ul>   The Luno API brings the world of Bitcoin and Ethereum to your doorstep.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeInfoToJSON = exports.FeeInfoFromJSONTyped = exports.FeeInfoFromJSON = exports.instanceOfFeeInfo = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the FeeInfo interface.
 */
function instanceOfFeeInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFeeInfo = instanceOfFeeInfo;
function FeeInfoFromJSON(json) {
    return FeeInfoFromJSONTyped(json, false);
}
exports.FeeInfoFromJSON = FeeInfoFromJSON;
function FeeInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'makerFee': !(0, runtime_1.exists)(json, 'maker_fee') ? undefined : json['maker_fee'],
        'takerFee': !(0, runtime_1.exists)(json, 'taker_fee') ? undefined : json['taker_fee'],
        'thirtyDayVolume': !(0, runtime_1.exists)(json, 'thirty_day_volume') ? undefined : json['thirty_day_volume'],
    };
}
exports.FeeInfoFromJSONTyped = FeeInfoFromJSONTyped;
function FeeInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maker_fee': value.makerFee,
        'taker_fee': value.takerFee,
        'thirty_day_volume': value.thirtyDayVolume,
    };
}
exports.FeeInfoToJSON = FeeInfoToJSON;
//# sourceMappingURL=FeeInfo.js.map