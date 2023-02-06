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
 * @interface OrderV2
 */
export interface OrderV2 {
    /**
     * Amount of base filled, this value is always positive.
     *
     * Use this field and `side` to determine credit or debit of funds.
     * @type {string}
     * @memberof OrderV2
     */
    base?: string;
    /**
     * Client Order ID has the value that was passed in when the Order was posted.
     * @type {string}
     * @memberof OrderV2
     */
    clientOrderId?: string;
    /**
     * Time of order completion (Unix milliseconds)
     *
     * This value is set at the time of this order leaving the order book,
     * either immediately upon posting or later on due to a trade or cancellation.
     * Whilst the order is still pending/live it will be 0.
     * @type {string}
     * @memberof OrderV2
     */
    completedTimestamp?: string;
    /**
     * Amount of counter filled, this value is always positive.
     *
     * Use this field and `side` to determine credit or debit of funds.
     * @type {string}
     * @memberof OrderV2
     */
    counter?: string;
    /**
     * Time of order creation (Unix milliseconds)
     * @type {string}
     * @memberof OrderV2
     */
    creationTimestamp?: string;
    /**
     * Time of order expiration (Unix milliseconds)
     *
     * This value is set at the time of processing a request from you to cancel the order, otherwise it will be 0.
     * @type {string}
     * @memberof OrderV2
     */
    expirationTimestamp?: string;
    /**
     * Base amount of fees to be charged
     * @type {string}
     * @memberof OrderV2
     */
    feeBase?: string;
    /**
     * Counter amount of fees to be charged
     * @type {string}
     * @memberof OrderV2
     */
    feeCounter?: string;
    /**
     * Limit price to transact
     * @type {string}
     * @memberof OrderV2
     */
    limitPrice?: string;
    /**
     * Limit volume to transact
     * @type {string}
     * @memberof OrderV2
     */
    limitVolume?: string;
    /**
     * The order reference
     * @type {string}
     * @memberof OrderV2
     */
    orderId?: string;
    /**
     * Specifies the market
     * @type {string}
     * @memberof OrderV2
     */
    pair?: string;
    /**
     * The intention of the order, whether to buy or sell funds in the market.
     *
     * You can use this to determine the flow of funds in the order.
     * @type {string}
     * @memberof OrderV2
     */
    side?: OrderV2SideEnum;
    /**
     * The current state of the order
     *
     * Status meaning:<br>
     * <code>AWAITING</code> The order is awaiting to enter the order book.<br>
     * <code>PENDING</code> The order is in the order book. Some trades may
     * have taken place but the order is not filled yet.<br>
     * <code>COMPLETE</code> The order is no longer in the order book. It has
     * been settled/filled or has been cancelled.
     * @type {string}
     * @memberof OrderV2
     */
    status?: OrderV2StatusEnum;
    /**
     * Direction to trigger the order
     * @type {string}
     * @memberof OrderV2
     */
    stopDirection?: OrderV2StopDirectionEnum;
    /**
     * Price to trigger the order
     * @type {string}
     * @memberof OrderV2
     */
    stopPrice?: string;
    /**
     * The Time in force option used when the LimitOrder was posted.
     *
     * Only returned on limit orders.<br>
     * <code>GTC</code> Good 'Til Cancelled. The order remains open until it is filled or cancelled by the user. (default)</br>
     * <code>IOC</code> Immediate Or Cancel. The part of the order that cannot be filled immediately will be cancelled. Cannot be post-only.</br>
     * <code>FOK</code> Fill Or Kill. If the order cannot be filled immediately and completely it will be cancelled before any trade. Cannot be post-only.
     * @type {string}
     * @memberof OrderV2
     */
    timeInForce?: string;
    /**
     * The order type
     * @type {string}
     * @memberof OrderV2
     */
    type?: OrderV2TypeEnum;
}
/**
 * @export
 */
export declare const OrderV2SideEnum: {
    readonly Buy: "BUY";
    readonly Sell: "SELL";
};
export type OrderV2SideEnum = typeof OrderV2SideEnum[keyof typeof OrderV2SideEnum];
/**
 * @export
 */
export declare const OrderV2StatusEnum: {
    readonly Awaiting: "AWAITING";
    readonly Pending: "PENDING";
    readonly Complete: "COMPLETE";
};
export type OrderV2StatusEnum = typeof OrderV2StatusEnum[keyof typeof OrderV2StatusEnum];
/**
 * @export
 */
export declare const OrderV2StopDirectionEnum: {
    readonly Above: "ABOVE";
    readonly Below: "BELOW";
};
export type OrderV2StopDirectionEnum = typeof OrderV2StopDirectionEnum[keyof typeof OrderV2StopDirectionEnum];
/**
 * @export
 */
export declare const OrderV2TypeEnum: {
    readonly Limit: "LIMIT";
    readonly Market: "MARKET";
    readonly StopLimit: "STOP_LIMIT";
};
export type OrderV2TypeEnum = typeof OrderV2TypeEnum[keyof typeof OrderV2TypeEnum];
/**
 * Check if a given object implements the OrderV2 interface.
 */
export declare function instanceOfOrderV2(value: object): boolean;
export declare function OrderV2FromJSON(json: any): OrderV2;
export declare function OrderV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderV2;
export declare function OrderV2ToJSON(value?: OrderV2 | null): any;
//# sourceMappingURL=OrderV2.d.ts.map