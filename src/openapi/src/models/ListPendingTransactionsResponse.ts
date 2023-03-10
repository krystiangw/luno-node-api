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
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';

/**
 * ListPendingTransactionsResponse
 * @export
 * @interface ListPendingTransactionsResponse
 */
export interface ListPendingTransactionsResponse {
    /**
     * 
     * @type {string}
     * @memberof ListPendingTransactionsResponse
     */
    currency?: string;
    /**
     * 
     * @type {string}
     * @memberof ListPendingTransactionsResponse
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ListPendingTransactionsResponse
     */
    name?: string;
    /**
     * 
     * @type {Array<Transaction>}
     * @memberof ListPendingTransactionsResponse
     */
    pending?: Array<Transaction>;
    /**
     * 
     * @type {Array<Transaction>}
     * @memberof ListPendingTransactionsResponse
     */
    transactions?: Array<Transaction>;
}

/**
 * Check if a given object implements the ListPendingTransactionsResponse interface.
 */
export function instanceOfListPendingTransactionsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListPendingTransactionsResponseFromJSON(json: any): ListPendingTransactionsResponse {
    return ListPendingTransactionsResponseFromJSONTyped(json, false);
}

export function ListPendingTransactionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListPendingTransactionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pending': !exists(json, 'pending') ? undefined : ((json['pending'] as Array<any>).map(TransactionFromJSON)),
        'transactions': !exists(json, 'transactions') ? undefined : ((json['transactions'] as Array<any>).map(TransactionFromJSON)),
    };
}

export function ListPendingTransactionsResponseToJSON(value?: ListPendingTransactionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency': value.currency,
        'id': value.id,
        'name': value.name,
        'pending': value.pending === undefined ? undefined : ((value.pending as Array<any>).map(TransactionToJSON)),
        'transactions': value.transactions === undefined ? undefined : ((value.transactions as Array<any>).map(TransactionToJSON)),
    };
}

