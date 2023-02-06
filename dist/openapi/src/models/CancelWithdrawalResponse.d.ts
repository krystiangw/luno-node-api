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
 * CancelWithdrawalResponse response
 * @export
 * @interface CancelWithdrawalResponse
 */
export interface CancelWithdrawalResponse {
    /**
     * Amount to withdraw
     * @type {string}
     * @memberof CancelWithdrawalResponse
     */
    amount?: string;
    /**
     * Unix time the withdrawal was initiated, in milliseconds
     * @type {string}
     * @memberof CancelWithdrawalResponse
     */
    createdAt?: string;
    /**
     * Withdrawal currency.
     * @type {string}
     * @memberof CancelWithdrawalResponse
     */
    currency?: string;
    /**
     * External ID has the value that was passed in when the Withdrawal request was posted.
     * @type {string}
     * @memberof CancelWithdrawalResponse
     */
    externalId?: string;
    /**
     * Withdrawal fee
     * @type {string}
     * @memberof CancelWithdrawalResponse
     */
    fee?: string;
    /**
     *
     * @type {string}
     * @memberof CancelWithdrawalResponse
     */
    id?: string;
    /**
     * Status
     * @type {string}
     * @memberof CancelWithdrawalResponse
     */
    status?: CancelWithdrawalResponseStatusEnum;
    /**
     * Type distinguishes between different withdrawal methods where more than one is supported
     * for the given currency.
     * @type {string}
     * @memberof CancelWithdrawalResponse
     */
    type?: string;
}
/**
 * @export
 */
export declare const CancelWithdrawalResponseStatusEnum: {
    readonly Pending: "PENDING";
    readonly Processing: "PROCESSING";
    readonly Completed: "COMPLETED";
    readonly Cancelled: "CANCELLED";
    readonly Waiting: "WAITING";
    readonly Cancelling: "CANCELLING";
    readonly Unknown: "UNKNOWN";
};
export type CancelWithdrawalResponseStatusEnum = typeof CancelWithdrawalResponseStatusEnum[keyof typeof CancelWithdrawalResponseStatusEnum];
/**
 * Check if a given object implements the CancelWithdrawalResponse interface.
 */
export declare function instanceOfCancelWithdrawalResponse(value: object): boolean;
export declare function CancelWithdrawalResponseFromJSON(json: any): CancelWithdrawalResponse;
export declare function CancelWithdrawalResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelWithdrawalResponse;
export declare function CancelWithdrawalResponseToJSON(value?: CancelWithdrawalResponse | null): any;
//# sourceMappingURL=CancelWithdrawalResponse.d.ts.map