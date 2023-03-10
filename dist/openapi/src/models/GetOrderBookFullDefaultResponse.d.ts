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
 * @interface GetOrderBookFullDefaultResponse
 */
export interface GetOrderBookFullDefaultResponse {
    /**
     * Unique error reference
     * @type {string}
     * @memberof GetOrderBookFullDefaultResponse
     */
    code?: string;
    /**
     * Verbose error message
     * @type {string}
     * @memberof GetOrderBookFullDefaultResponse
     */
    message?: string;
}
/**
 * Check if a given object implements the GetOrderBookFullDefaultResponse interface.
 */
export declare function instanceOfGetOrderBookFullDefaultResponse(value: object): boolean;
export declare function GetOrderBookFullDefaultResponseFromJSON(json: any): GetOrderBookFullDefaultResponse;
export declare function GetOrderBookFullDefaultResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOrderBookFullDefaultResponse;
export declare function GetOrderBookFullDefaultResponseToJSON(value?: GetOrderBookFullDefaultResponse | null): any;
//# sourceMappingURL=GetOrderBookFullDefaultResponse.d.ts.map