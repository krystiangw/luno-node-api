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
 * @interface Transfer
 */
export interface Transfer {
    /**
     * Amount that has been credited or debited on the account. This is always a
     * positive value regardless of the transfer direction.
     * @type {string}
     * @memberof Transfer
     */
    amount?: string;
    /**
     * Unix timestamp the transfer was initiated, in milliseconds
     * @type {string}
     * @memberof Transfer
     */
    createdAt?: string;
    /**
     * Fee that has been charged by Luno with regards to this transfer.
     * This is not included in the `amount`.
     * For example, if you receive a transaction with the raw amount of 1 BTC
     * and we charge a `fee` of 0.003 BTC on this transaction you will be
     * credited the `amount` of 0.997 BTC.
     * @type {string}
     * @memberof Transfer
     */
    fee?: string;
    /**
     * Transfer unique identifier
     * @type {string}
     * @memberof Transfer
     */
    id?: string;
    /**
     * True for credit transfers, false for debits.
     * @type {boolean}
     * @memberof Transfer
     */
    inbound?: boolean;
    /**
     * When the transfer reflects an on-chain transaction this field will have
     * the transaction ID.
     * @type {string}
     * @memberof Transfer
     */
    transactionId?: string;
}
/**
 * Check if a given object implements the Transfer interface.
 */
export declare function instanceOfTransfer(value: object): boolean;
export declare function TransferFromJSON(json: any): Transfer;
export declare function TransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transfer;
export declare function TransferToJSON(value?: Transfer | null): any;
//# sourceMappingURL=Transfer.d.ts.map