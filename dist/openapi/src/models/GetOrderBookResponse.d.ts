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
import type { OrderBookEntry } from './OrderBookEntry';
/**
 * 1/orderbook
 * 1/orderbook_top
 * @export
 * @interface GetOrderBookResponse
 */
export interface GetOrderBookResponse {
    /**
     * List of asks sorted from lowest to highest price
     * @type {Array<OrderBookEntry>}
     * @memberof GetOrderBookResponse
     */
    asks?: Array<OrderBookEntry>;
    /**
     * List of bids sorted from highest to lowest price
     * @type {Array<OrderBookEntry>}
     * @memberof GetOrderBookResponse
     */
    bids?: Array<OrderBookEntry>;
    /**
     * Unix timestamp in milliseconds
     * @type {number}
     * @memberof GetOrderBookResponse
     */
    timestamp?: number;
}
/**
 * Check if a given object implements the GetOrderBookResponse interface.
 */
export declare function instanceOfGetOrderBookResponse(value: object): boolean;
export declare function GetOrderBookResponseFromJSON(json: any): GetOrderBookResponse;
export declare function GetOrderBookResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOrderBookResponse;
export declare function GetOrderBookResponseToJSON(value?: GetOrderBookResponse | null): any;
//# sourceMappingURL=GetOrderBookResponse.d.ts.map