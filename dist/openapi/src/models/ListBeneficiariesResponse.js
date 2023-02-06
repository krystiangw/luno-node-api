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
exports.ListBeneficiariesResponseToJSON = exports.ListBeneficiariesResponseFromJSONTyped = exports.ListBeneficiariesResponseFromJSON = exports.instanceOfListBeneficiariesResponse = void 0;
const runtime_1 = require("../runtime");
const Beneficiary_1 = require("./Beneficiary");
/**
 * Check if a given object implements the ListBeneficiariesResponse interface.
 */
function instanceOfListBeneficiariesResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfListBeneficiariesResponse = instanceOfListBeneficiariesResponse;
function ListBeneficiariesResponseFromJSON(json) {
    return ListBeneficiariesResponseFromJSONTyped(json, false);
}
exports.ListBeneficiariesResponseFromJSON = ListBeneficiariesResponseFromJSON;
function ListBeneficiariesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'beneficiaries': !(0, runtime_1.exists)(json, 'beneficiaries') ? undefined : (json['beneficiaries'].map(Beneficiary_1.BeneficiaryFromJSON)),
    };
}
exports.ListBeneficiariesResponseFromJSONTyped = ListBeneficiariesResponseFromJSONTyped;
function ListBeneficiariesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'beneficiaries': value.beneficiaries === undefined ? undefined : (value.beneficiaries.map(Beneficiary_1.BeneficiaryToJSON)),
    };
}
exports.ListBeneficiariesResponseToJSON = ListBeneficiariesResponseToJSON;
//# sourceMappingURL=ListBeneficiariesResponse.js.map