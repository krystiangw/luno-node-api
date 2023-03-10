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
import type { CryptoDetails } from './CryptoDetails';
import type { TradeDetails } from './TradeDetails';
/**
 *
 * @export
 * @interface DetailFields
 */
export interface DetailFields {
    /**
     *
     * @type {CryptoDetails}
     * @memberof DetailFields
     */
    cryptoDetails?: CryptoDetails;
    /**
     *
     * @type {TradeDetails}
     * @memberof DetailFields
     */
    tradeDetails?: TradeDetails;
}
/**
 * Check if a given object implements the DetailFields interface.
 */
export declare function instanceOfDetailFields(value: object): boolean;
export declare function DetailFieldsFromJSON(json: any): DetailFields;
export declare function DetailFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetailFields;
export declare function DetailFieldsToJSON(value?: DetailFields | null): any;
//# sourceMappingURL=DetailFields.d.ts.map