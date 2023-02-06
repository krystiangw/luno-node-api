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
exports.GetOrderResponseToJSON = exports.GetOrderResponseFromJSONTyped = exports.GetOrderResponseFromJSON = exports.instanceOfGetOrderResponse = exports.GetOrderResponseTypeEnum = exports.GetOrderResponseStateEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.GetOrderResponseStateEnum = {
    Pending: 'PENDING',
    Complete: 'COMPLETE'
};
/**
 * @export
 */
exports.GetOrderResponseTypeEnum = {
    Buy: 'BUY',
    Sell: 'SELL',
    Bid: 'BID',
    Ask: 'ASK'
};
/**
 * Check if a given object implements the GetOrderResponse interface.
 */
function instanceOfGetOrderResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGetOrderResponse = instanceOfGetOrderResponse;
function GetOrderResponseFromJSON(json) {
    return GetOrderResponseFromJSONTyped(json, false);
}
exports.GetOrderResponseFromJSON = GetOrderResponseFromJSON;
function GetOrderResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'base': !(0, runtime_1.exists)(json, 'base') ? undefined : json['base'],
        'completedTimestamp': !(0, runtime_1.exists)(json, 'completed_timestamp') ? undefined : json['completed_timestamp'],
        'counter': !(0, runtime_1.exists)(json, 'counter') ? undefined : json['counter'],
        'creationTimestamp': !(0, runtime_1.exists)(json, 'creation_timestamp') ? undefined : json['creation_timestamp'],
        'expirationTimestamp': !(0, runtime_1.exists)(json, 'expiration_timestamp') ? undefined : json['expiration_timestamp'],
        'feeBase': !(0, runtime_1.exists)(json, 'fee_base') ? undefined : json['fee_base'],
        'feeCounter': !(0, runtime_1.exists)(json, 'fee_counter') ? undefined : json['fee_counter'],
        'limitPrice': !(0, runtime_1.exists)(json, 'limit_price') ? undefined : json['limit_price'],
        'limitVolume': !(0, runtime_1.exists)(json, 'limit_volume') ? undefined : json['limit_volume'],
        'orderId': !(0, runtime_1.exists)(json, 'order_id') ? undefined : json['order_id'],
        'pair': !(0, runtime_1.exists)(json, 'pair') ? undefined : json['pair'],
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
        'timeInForce': !(0, runtime_1.exists)(json, 'time_in_force') ? undefined : json['time_in_force'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.GetOrderResponseFromJSONTyped = GetOrderResponseFromJSONTyped;
function GetOrderResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'base': value.base,
        'completed_timestamp': value.completedTimestamp,
        'counter': value.counter,
        'creation_timestamp': value.creationTimestamp,
        'expiration_timestamp': value.expirationTimestamp,
        'fee_base': value.feeBase,
        'fee_counter': value.feeCounter,
        'limit_price': value.limitPrice,
        'limit_volume': value.limitVolume,
        'order_id': value.orderId,
        'pair': value.pair,
        'state': value.state,
        'time_in_force': value.timeInForce,
        'type': value.type,
    };
}
exports.GetOrderResponseToJSON = GetOrderResponseToJSON;
//# sourceMappingURL=GetOrderResponse.js.map