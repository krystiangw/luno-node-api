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
import type { Transaction } from './Transaction';
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
export declare function instanceOfListPendingTransactionsResponse(value: object): boolean;
export declare function ListPendingTransactionsResponseFromJSON(json: any): ListPendingTransactionsResponse;
export declare function ListPendingTransactionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListPendingTransactionsResponse;
export declare function ListPendingTransactionsResponseToJSON(value?: ListPendingTransactionsResponse | null): any;
//# sourceMappingURL=ListPendingTransactionsResponse.d.ts.map