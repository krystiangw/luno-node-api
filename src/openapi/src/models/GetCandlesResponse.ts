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
import type { Candle } from './Candle';
import {
    CandleFromJSON,
    CandleFromJSONTyped,
    CandleToJSON,
} from './Candle';

/**
 * GetCandlesResponse response
 * @export
 * @interface GetCandlesResponse
 */
export interface GetCandlesResponse {
    /**
     * 
     * @type {Array<Candle>}
     * @memberof GetCandlesResponse
     */
    candles?: Array<Candle>;
    /**
     * Duration in seconds
     * @type {number}
     * @memberof GetCandlesResponse
     */
    duration?: number;
    /**
     * 
     * @type {string}
     * @memberof GetCandlesResponse
     */
    pair?: string;
}

/**
 * Check if a given object implements the GetCandlesResponse interface.
 */
export function instanceOfGetCandlesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCandlesResponseFromJSON(json: any): GetCandlesResponse {
    return GetCandlesResponseFromJSONTyped(json, false);
}

export function GetCandlesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCandlesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'candles': !exists(json, 'candles') ? undefined : ((json['candles'] as Array<any>).map(CandleFromJSON)),
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'pair': !exists(json, 'pair') ? undefined : json['pair'],
    };
}

export function GetCandlesResponseToJSON(value?: GetCandlesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'candles': value.candles === undefined ? undefined : ((value.candles as Array<any>).map(CandleToJSON)),
        'duration': value.duration,
        'pair': value.pair,
    };
}
