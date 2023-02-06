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
exports.PostLimitOrderResponseToJSON = exports.PostLimitOrderResponseFromJSONTyped = exports.PostLimitOrderResponseFromJSON = exports.instanceOfPostLimitOrderResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PostLimitOrderResponse interface.
 */
function instanceOfPostLimitOrderResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostLimitOrderResponse = instanceOfPostLimitOrderResponse;
function PostLimitOrderResponseFromJSON(json) {
    return PostLimitOrderResponseFromJSONTyped(json, false);
}
exports.PostLimitOrderResponseFromJSON = PostLimitOrderResponseFromJSON;
function PostLimitOrderResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'orderId': !(0, runtime_1.exists)(json, 'order_id') ? undefined : json['order_id'],
    };
}
exports.PostLimitOrderResponseFromJSONTyped = PostLimitOrderResponseFromJSONTyped;
function PostLimitOrderResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'order_id': value.orderId,
    };
}
exports.PostLimitOrderResponseToJSON = PostLimitOrderResponseToJSON;
//# sourceMappingURL=PostLimitOrderResponse.js.map