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
exports.TradeV2ToJSON = exports.TradeV2FromJSONTyped = exports.TradeV2FromJSON = exports.instanceOfTradeV2 = exports.TradeV2TypeEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.TradeV2TypeEnum = {
    Bid: 'BID',
    Ask: 'ASK'
};
/**
 * Check if a given object implements the TradeV2 interface.
 */
function instanceOfTradeV2(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTradeV2 = instanceOfTradeV2;
function TradeV2FromJSON(json) {
    return TradeV2FromJSONTyped(json, false);
}
exports.TradeV2FromJSON = TradeV2FromJSON;
function TradeV2FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'base': !(0, runtime_1.exists)(json, 'base') ? undefined : json['base'],
        'clientOrderId': !(0, runtime_1.exists)(json, 'client_order_id') ? undefined : json['client_order_id'],
        'counter': !(0, runtime_1.exists)(json, 'counter') ? undefined : json['counter'],
        'feeBase': !(0, runtime_1.exists)(json, 'fee_base') ? undefined : json['fee_base'],
        'feeCounter': !(0, runtime_1.exists)(json, 'fee_counter') ? undefined : json['fee_counter'],
        'isBuy': !(0, runtime_1.exists)(json, 'is_buy') ? undefined : json['is_buy'],
        'orderId': !(0, runtime_1.exists)(json, 'order_id') ? undefined : json['order_id'],
        'pair': !(0, runtime_1.exists)(json, 'pair') ? undefined : json['pair'],
        'price': !(0, runtime_1.exists)(json, 'price') ? undefined : json['price'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
        'timestamp': !(0, runtime_1.exists)(json, 'timestamp') ? undefined : json['timestamp'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'volume': !(0, runtime_1.exists)(json, 'volume') ? undefined : json['volume'],
    };
}
exports.TradeV2FromJSONTyped = TradeV2FromJSONTyped;
function TradeV2ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'base': value.base,
        'client_order_id': value.clientOrderId,
        'counter': value.counter,
        'fee_base': value.feeBase,
        'fee_counter': value.feeCounter,
        'is_buy': value.isBuy,
        'order_id': value.orderId,
        'pair': value.pair,
        'price': value.price,
        'sequence': value.sequence,
        'timestamp': value.timestamp,
        'type': value.type,
        'volume': value.volume,
    };
}
exports.TradeV2ToJSON = TradeV2ToJSON;
//# sourceMappingURL=TradeV2.js.map