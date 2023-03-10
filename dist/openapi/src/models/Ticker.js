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
exports.TickerToJSON = exports.TickerFromJSONTyped = exports.TickerFromJSON = exports.instanceOfTicker = exports.TickerStatusEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.TickerStatusEnum = {
    Active: 'ACTIVE',
    Postonly: 'POSTONLY',
    Disabled: 'DISABLED'
};
/**
 * Check if a given object implements the Ticker interface.
 */
function instanceOfTicker(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTicker = instanceOfTicker;
function TickerFromJSON(json) {
    return TickerFromJSONTyped(json, false);
}
exports.TickerFromJSON = TickerFromJSON;
function TickerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'ask': !(0, runtime_1.exists)(json, 'ask') ? undefined : json['ask'],
        'bid': !(0, runtime_1.exists)(json, 'bid') ? undefined : json['bid'],
        'lastTrade': !(0, runtime_1.exists)(json, 'last_trade') ? undefined : json['last_trade'],
        'pair': !(0, runtime_1.exists)(json, 'pair') ? undefined : json['pair'],
        'rolling24HourVolume': !(0, runtime_1.exists)(json, 'rolling_24_hour_volume') ? undefined : json['rolling_24_hour_volume'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'timestamp': !(0, runtime_1.exists)(json, 'timestamp') ? undefined : json['timestamp'],
    };
}
exports.TickerFromJSONTyped = TickerFromJSONTyped;
function TickerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ask': value.ask,
        'bid': value.bid,
        'last_trade': value.lastTrade,
        'pair': value.pair,
        'rolling_24_hour_volume': value.rolling24HourVolume,
        'status': value.status,
        'timestamp': value.timestamp,
    };
}
exports.TickerToJSON = TickerToJSON;
//# sourceMappingURL=Ticker.js.map