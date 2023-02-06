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
exports.GetWithdrawalResponseToJSON = exports.GetWithdrawalResponseFromJSONTyped = exports.GetWithdrawalResponseFromJSON = exports.instanceOfGetWithdrawalResponse = exports.GetWithdrawalResponseStatusEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.GetWithdrawalResponseStatusEnum = {
    Pending: 'PENDING',
    Processing: 'PROCESSING',
    Completed: 'COMPLETED',
    Cancelled: 'CANCELLED',
    Waiting: 'WAITING',
    Cancelling: 'CANCELLING',
    Unknown: 'UNKNOWN'
};
/**
 * Check if a given object implements the GetWithdrawalResponse interface.
 */
function instanceOfGetWithdrawalResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGetWithdrawalResponse = instanceOfGetWithdrawalResponse;
function GetWithdrawalResponseFromJSON(json) {
    return GetWithdrawalResponseFromJSONTyped(json, false);
}
exports.GetWithdrawalResponseFromJSON = GetWithdrawalResponseFromJSON;
function GetWithdrawalResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : json['created_at'],
        'currency': !(0, runtime_1.exists)(json, 'currency') ? undefined : json['currency'],
        'externalId': !(0, runtime_1.exists)(json, 'external_id') ? undefined : json['external_id'],
        'fee': !(0, runtime_1.exists)(json, 'fee') ? undefined : json['fee'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.GetWithdrawalResponseFromJSONTyped = GetWithdrawalResponseFromJSONTyped;
function GetWithdrawalResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'created_at': value.createdAt,
        'currency': value.currency,
        'external_id': value.externalId,
        'fee': value.fee,
        'id': value.id,
        'status': value.status,
        'type': value.type,
    };
}
exports.GetWithdrawalResponseToJSON = GetWithdrawalResponseToJSON;
//# sourceMappingURL=GetWithdrawalResponse.js.map