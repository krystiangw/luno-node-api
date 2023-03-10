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
exports.CandleToJSON = exports.CandleFromJSONTyped = exports.CandleFromJSON = exports.instanceOfCandle = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the Candle interface.
 */
function instanceOfCandle(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCandle = instanceOfCandle;
function CandleFromJSON(json) {
    return CandleFromJSONTyped(json, false);
}
exports.CandleFromJSON = CandleFromJSON;
function CandleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'close': !(0, runtime_1.exists)(json, 'close') ? undefined : json['close'],
        'high': !(0, runtime_1.exists)(json, 'high') ? undefined : json['high'],
        'low': !(0, runtime_1.exists)(json, 'low') ? undefined : json['low'],
        'open': !(0, runtime_1.exists)(json, 'open') ? undefined : json['open'],
        'timestamp': !(0, runtime_1.exists)(json, 'timestamp') ? undefined : json['timestamp'],
        'volume': !(0, runtime_1.exists)(json, 'volume') ? undefined : json['volume'],
    };
}
exports.CandleFromJSONTyped = CandleFromJSONTyped;
function CandleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'close': value.close,
        'high': value.high,
        'low': value.low,
        'open': value.open,
        'timestamp': value.timestamp,
        'volume': value.volume,
    };
}
exports.CandleToJSON = CandleToJSON;
//# sourceMappingURL=Candle.js.map