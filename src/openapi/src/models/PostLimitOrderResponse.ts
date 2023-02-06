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
 * @interface PostLimitOrderResponse
 */
export interface PostLimitOrderResponse {
    /**
     * Unique order identifier
     * @type {string}
     * @memberof PostLimitOrderResponse
     */
    orderId?: string;
}

/**
 * Check if a given object implements the PostLimitOrderResponse interface.
 */
export function instanceOfPostLimitOrderResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostLimitOrderResponseFromJSON(json: any): PostLimitOrderResponse {
    return PostLimitOrderResponseFromJSONTyped(json, false);
}

export function PostLimitOrderResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostLimitOrderResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderId': !exists(json, 'order_id') ? undefined : json['order_id'],
    };
}

export function PostLimitOrderResponseToJSON(value?: PostLimitOrderResponse | null): any {
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
