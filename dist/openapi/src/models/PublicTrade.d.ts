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
/**
 *
 * @export
 * @interface PublicTrade
 */
export interface PublicTrade {
    /**
     * Whether the taker was buying or not.
     * @type {boolean}
     * @memberof PublicTrade
     */
    isBuy?: boolean;
    /**
     * Price at which the asset traded at
     * @type {string}
     * @memberof PublicTrade
     */
    price?: string;
    /**
     * The ever incrementing trade identifier within a market
     * @type {number}
     * @memberof PublicTrade
     */
    sequence?: number;
    /**
     * Unix timestamp in milliseconds
     * @type {string}
     * @memberof PublicTrade
     */
    timestamp?: string;
    /**
     * Amount of assets traded
     * @type {string}
     * @memberof PublicTrade
     */
    volume?: string;
}
/**
 * Check if a given object implements the PublicTrade interface.
 */
export declare function instanceOfPublicTrade(value: object): boolean;
export declare function PublicTradeFromJSON(json: any): PublicTrade;
export declare function PublicTradeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicTrade;
export declare function PublicTradeToJSON(value?: PublicTrade | null): any;
//# sourceMappingURL=PublicTrade.d.ts.map