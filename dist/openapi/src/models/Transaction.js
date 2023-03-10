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
exports.TransactionToJSON = exports.TransactionFromJSONTyped = exports.TransactionFromJSON = exports.instanceOfTransaction = exports.TransactionKindEnum = void 0;
const runtime_1 = require("../runtime");
const DetailFields_1 = require("./DetailFields");
/**
 * @export
 */
exports.TransactionKindEnum = {
    Fee: 'FEE',
    Transfer: 'TRANSFER',
    Exchange: 'EXCHANGE',
    Interest: 'INTEREST'
};
/**
 * Check if a given object implements the Transaction interface.
 */
function instanceOfTransaction(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransaction = instanceOfTransaction;
function TransactionFromJSON(json) {
    return TransactionFromJSONTyped(json, false);
}
exports.TransactionFromJSON = TransactionFromJSON;
function TransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !(0, runtime_1.exists)(json, 'account_id') ? undefined : json['account_id'],
        'available': !(0, runtime_1.exists)(json, 'available') ? undefined : json['available'],
        'availableDelta': !(0, runtime_1.exists)(json, 'available_delta') ? undefined : json['available_delta'],
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : json['balance'],
        'balanceDelta': !(0, runtime_1.exists)(json, 'balance_delta') ? undefined : json['balance_delta'],
        'currency': !(0, runtime_1.exists)(json, 'currency') ? undefined : json['currency'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'detailFields': !(0, runtime_1.exists)(json, 'detail_fields') ? undefined : (0, DetailFields_1.DetailFieldsFromJSON)(json['detail_fields']),
        'details': !(0, runtime_1.exists)(json, 'details') ? undefined : json['details'],
        'kind': !(0, runtime_1.exists)(json, 'kind') ? undefined : json['kind'],
        'reference': !(0, runtime_1.exists)(json, 'reference') ? undefined : json['reference'],
        'rowIndex': !(0, runtime_1.exists)(json, 'row_index') ? undefined : json['row_index'],
        'timestamp': !(0, runtime_1.exists)(json, 'timestamp') ? undefined : json['timestamp'],
    };
}
exports.TransactionFromJSONTyped = TransactionFromJSONTyped;
function TransactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'account_id': value.accountId,
        'available': value.available,
        'available_delta': value.availableDelta,
        'balance': value.balance,
        'balance_delta': value.balanceDelta,
        'currency': value.currency,
        'description': value.description,
        'detail_fields': (0, DetailFields_1.DetailFieldsToJSON)(value.detailFields),
        'details': value.details,
        'kind': value.kind,
        'reference': value.reference,
        'row_index': value.rowIndex,
        'timestamp': value.timestamp,
    };
}
exports.TransactionToJSON = TransactionToJSON;
//# sourceMappingURL=Transaction.js.map