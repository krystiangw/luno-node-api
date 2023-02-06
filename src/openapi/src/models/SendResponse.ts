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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SendResponse
 */
export interface SendResponse {
    /**
     * 
     * @type {boolean}
     * @memberof SendResponse
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SendResponse
     */
    withdrawalId?: string;
}

/**
 * Check if a given object implements the SendResponse interface.
 */
export function instanceOfSendResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SendResponseFromJSON(json: any): SendResponse {
    return SendResponseFromJSONTyped(json, false);
}

export function SendResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'withdrawalId': !exists(json, 'withdrawal_id') ? undefined : json['withdrawal_id'],
    };
}

export function SendResponseToJSON(value?: SendResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'withdrawal_id': value.withdrawalId,
    };
}
