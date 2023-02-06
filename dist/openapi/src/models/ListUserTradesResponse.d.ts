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
import type { TradeV2 } from './TradeV2';
/**
 * ListUserTradesResponse response for /api/1/listtrades
 * @export
 * @interface ListUserTradesResponse
 */
export interface ListUserTradesResponse {
    /**
     *
     * @type {Array<TradeV2>}
     * @memberof ListUserTradesResponse
     */
    trades?: Array<TradeV2>;
}
/**
 * Check if a given object implements the ListUserTradesResponse interface.
 */
export declare function instanceOfListUserTradesResponse(value: object): boolean;
export declare function ListUserTradesResponseFromJSON(json: any): ListUserTradesResponse;
export declare function ListUserTradesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListUserTradesResponse;
export declare function ListUserTradesResponseToJSON(value?: ListUserTradesResponse | null): any;
//# sourceMappingURL=ListUserTradesResponse.d.ts.map