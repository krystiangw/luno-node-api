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
exports.GetMoveResponseToJSON = exports.GetMoveResponseFromJSONTyped = exports.GetMoveResponseFromJSON = exports.instanceOfGetMoveResponse = exports.GetMoveResponseStatusEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.GetMoveResponseStatusEnum = {
    Created: 'CREATED',
    Moving: 'MOVING',
    Successful: 'SUCCESSFUL',
    Failed: 'FAILED'
};
/**
 * Check if a given object implements the GetMoveResponse interface.
 */
function instanceOfGetMoveResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGetMoveResponse = instanceOfGetMoveResponse;
function GetMoveResponseFromJSON(json) {
    return GetMoveResponseFromJSONTyped(json, false);
}
exports.GetMoveResponseFromJSON = GetMoveResponseFromJSON;
function GetMoveResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'clientMoveId': !(0, runtime_1.exists)(json, 'client_move_id') ? undefined : json['client_move_id'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : json['created_at'],
        'creditAccountId': !(0, runtime_1.exists)(json, 'credit_account_id') ? undefined : json['credit_account_id'],
        'debitAccountId': !(0, runtime_1.exists)(json, 'debit_account_id') ? undefined : json['debit_account_id'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : json['updated_at'],
    };
}
exports.GetMoveResponseFromJSONTyped = GetMoveResponseFromJSONTyped;
function GetMoveResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'client_move_id': value.clientMoveId,
        'created_at': value.createdAt,
        'credit_account_id': value.creditAccountId,
        'debit_account_id': value.debitAccountId,
        'id': value.id,
        'status': value.status,
        'updated_at': value.updatedAt,
    };
}
exports.GetMoveResponseToJSON = GetMoveResponseToJSON;
//# sourceMappingURL=GetMoveResponse.js.map