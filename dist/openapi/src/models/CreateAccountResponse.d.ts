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
 * @interface CreateAccountResponse
 */
export interface CreateAccountResponse {
    /**
     *
     * @type {string}
     * @memberof CreateAccountResponse
     */
    currency?: string;
    /**
     *
     * @type {string}
     * @memberof CreateAccountResponse
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof CreateAccountResponse
     */
    name?: string;
}
/**
 * Check if a given object implements the CreateAccountResponse interface.
 */
export declare function instanceOfCreateAccountResponse(value: object): boolean;
export declare function CreateAccountResponseFromJSON(json: any): CreateAccountResponse;
export declare function CreateAccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAccountResponse;
export declare function CreateAccountResponseToJSON(value?: CreateAccountResponse | null): any;
//# sourceMappingURL=CreateAccountResponse.d.ts.map