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
exports.AddressMetaToJSON = exports.AddressMetaFromJSONTyped = exports.AddressMetaFromJSON = exports.instanceOfAddressMeta = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AddressMeta interface.
 */
function instanceOfAddressMeta(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAddressMeta = instanceOfAddressMeta;
function AddressMetaFromJSON(json) {
    return AddressMetaFromJSONTyped(json, false);
}
exports.AddressMetaFromJSON = AddressMetaFromJSON;
function AddressMetaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'label': !(0, runtime_1.exists)(json, 'label') ? undefined : json['label'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.AddressMetaFromJSONTyped = AddressMetaFromJSONTyped;
function AddressMetaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'label': value.label,
        'value': value.value,
    };
}
exports.AddressMetaToJSON = AddressMetaToJSON;
//# sourceMappingURL=AddressMeta.js.map