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
 * @interface StopOrderResponse
 */
export interface StopOrderResponse {
    /**
     * 
     * @type {boolean}
     * @memberof StopOrderResponse
     */
    success?: boolean;
}

/**
 * Check if a given object implements the StopOrderResponse interface.
 */
export function instanceOfStopOrderResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StopOrderResponseFromJSON(json: any): StopOrderResponse {
    return StopOrderResponseFromJSONTyped(json, false);
}

export function StopOrderResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StopOrderResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function StopOrderResponseToJSON(value?: StopOrderResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
    };
}

