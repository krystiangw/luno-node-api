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
 * GetMoveResponse response for GET /1/move
 * @export
 * @interface GetMoveResponse
 */
export interface GetMoveResponse {
    /**
     * The assets quantity to move from the debit account to credit account. This is always a positive value.
     * @type {string}
     * @memberof GetMoveResponse
     */
    amount?: string;
    /**
     * User defined unique ID
     * @type {string}
     * @memberof GetMoveResponse
     */
    clientMoveId?: string;
    /**
     * Unix time the move was initiated, in milliseconds
     * @type {string}
     * @memberof GetMoveResponse
     */
    createdAt?: string;
    /**
     * The account to credit the funds to.
     * @type {string}
     * @memberof GetMoveResponse
     */
    creditAccountId?: string;
    /**
     * The account to debit the funds from.
     * @type {string}
     * @memberof GetMoveResponse
     */
    debitAccountId?: string;
    /**
     * Unique ID, defined by Luno
     * @type {string}
     * @memberof GetMoveResponse
     */
    id?: string;
    /**
     * Current status of the move.
     *
     * Status meaning:<br>
     * <code>CREATED</code> The move is awaiting execution.<br>
     * <code>MOVING</code> The funds have been reserved and the move is being executed.<br>
     * <code>SUCCESSFUL</code> The move has completed successfully and should be reflected in both accounts available
     * balance.<br>
     * <code>FAILED</code> The move has failed. There could be many reasons for this but the most likely is that the
     * debit account doesn't have enough available funds to move.<br>
     * @type {string}
     * @memberof GetMoveResponse
     */
    status?: GetMoveResponseStatusEnum;
    /**
     * Unix time the move was last updated, in milliseconds
     * @type {string}
     * @memberof GetMoveResponse
     */
    updatedAt?: string;
}
/**
 * @export
 */
export declare const GetMoveResponseStatusEnum: {
    readonly Created: "CREATED";
    readonly Moving: "MOVING";
    readonly Successful: "SUCCESSFUL";
    readonly Failed: "FAILED";
};
export type GetMoveResponseStatusEnum = typeof GetMoveResponseStatusEnum[keyof typeof GetMoveResponseStatusEnum];
/**
 * Check if a given object implements the GetMoveResponse interface.
 */
export declare function instanceOfGetMoveResponse(value: object): boolean;
export declare function GetMoveResponseFromJSON(json: any): GetMoveResponse;
export declare function GetMoveResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMoveResponse;
export declare function GetMoveResponseToJSON(value?: GetMoveResponse | null): any;
//# sourceMappingURL=GetMoveResponse.d.ts.map