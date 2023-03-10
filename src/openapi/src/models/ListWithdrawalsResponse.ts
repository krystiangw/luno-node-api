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
import type { Withdrawal } from './Withdrawal';
import {
    WithdrawalFromJSON,
    WithdrawalFromJSONTyped,
    WithdrawalToJSON,
} from './Withdrawal';

/**
 * ListWithdrawalsResponse response
 * @export
 * @interface ListWithdrawalsResponse
 */
export interface ListWithdrawalsResponse {
    /**
     * 
     * @type {Array<Withdrawal>}
     * @memberof ListWithdrawalsResponse
     */
    withdrawals?: Array<Withdrawal>;
}

/**
 * Check if a given object implements the ListWithdrawalsResponse interface.
 */
export function instanceOfListWithdrawalsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListWithdrawalsResponseFromJSON(json: any): ListWithdrawalsResponse {
    return ListWithdrawalsResponseFromJSONTyped(json, false);
}

export function ListWithdrawalsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListWithdrawalsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'withdrawals': !exists(json, 'withdrawals') ? undefined : ((json['withdrawals'] as Array<any>).map(WithdrawalFromJSON)),
    };
}

export function ListWithdrawalsResponseToJSON(value?: ListWithdrawalsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'withdrawals': value.withdrawals === undefined ? undefined : ((value.withdrawals as Array<any>).map(WithdrawalToJSON)),
    };
}

