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
import type { FundsMove } from './FundsMove';
import {
    FundsMoveFromJSON,
    FundsMoveFromJSONTyped,
    FundsMoveToJSON,
} from './FundsMove';

/**
 * ListMovesResponse response
 * @export
 * @interface ListMovesResponse
 */
export interface ListMovesResponse {
    /**
     * 
     * @type {Array<FundsMove>}
     * @memberof ListMovesResponse
     */
    moves?: Array<FundsMove>;
}

/**
 * Check if a given object implements the ListMovesResponse interface.
 */
export function instanceOfListMovesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListMovesResponseFromJSON(json: any): ListMovesResponse {
    return ListMovesResponseFromJSONTyped(json, false);
}

export function ListMovesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListMovesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'moves': !exists(json, 'moves') ? undefined : ((json['moves'] as Array<any>).map(FundsMoveFromJSON)),
    };
}

export function ListMovesResponseToJSON(value?: ListMovesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'moves': value.moves === undefined ? undefined : ((value.moves as Array<any>).map(FundsMoveToJSON)),
    };
}
