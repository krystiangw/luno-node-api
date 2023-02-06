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
exports.ListUserTradesResponseToJSON = exports.ListUserTradesResponseFromJSONTyped = exports.ListUserTradesResponseFromJSON = exports.instanceOfListUserTradesResponse = void 0;
const runtime_1 = require("../runtime");
const TradeV2_1 = require("./TradeV2");
/**
 * Check if a given object implements the ListUserTradesResponse interface.
 */
function instanceOfListUserTradesResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfListUserTradesResponse = instanceOfListUserTradesResponse;
function ListUserTradesResponseFromJSON(json) {
    return ListUserTradesResponseFromJSONTyped(json, false);
}
exports.ListUserTradesResponseFromJSON = ListUserTradesResponseFromJSON;
function ListUserTradesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'trades': !(0, runtime_1.exists)(json, 'trades') ? undefined : (json['trades'].map(TradeV2_1.TradeV2FromJSON)),
    };
}
exports.ListUserTradesResponseFromJSONTyped = ListUserTradesResponseFromJSONTyped;
function ListUserTradesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'trades': value.trades === undefined ? undefined : (value.trades.map(TradeV2_1.TradeV2ToJSON)),
    };
}
exports.ListUserTradesResponseToJSON = ListUserTradesResponseToJSON;
//# sourceMappingURL=ListUserTradesResponse.js.map