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
import * as runtime from '../runtime';
import type { GetFeeInfoResponse, GetOrder2Response, GetOrderResponse, ListOrders2Response, ListOrdersResponse, ListUserTradesResponse, PostLimitOrderResponse, PostMarketOrderResponse, StopOrderResponse } from '../models';
export interface GetFeeInfoRequest {
    pair: string;
}
export interface GetOrderRequest {
    id: string;
}
export interface GetOrderV2Request {
    id: string;
}
export interface GetOrderV3Request {
    id?: string;
    clientOrderId?: string;
}
export interface ListOrdersRequest {
    state?: ListOrdersStateEnum;
    pair?: string;
    createdBefore?: number;
    limit?: number;
}
export interface ListOrdersV2Request {
    pair?: string;
    closed?: boolean;
    createdBefore?: number;
    limit?: number;
}
export interface ListUserTradesRequest {
    pair: string;
    since?: string;
    before?: string;
    afterSeq?: number;
    beforeSeq?: number;
    sortDesc?: boolean;
    limit?: number;
}
export interface PostLimitOrderRequest {
    pair: string;
    type: PostLimitOrderTypeEnum;
    volume: string;
    price: string;
    timeInForce?: PostLimitOrderTimeInForceEnum;
    postOnly?: boolean;
    stopPrice?: string;
    stopDirection?: PostLimitOrderStopDirectionEnum;
    baseAccountId?: number;
    counterAccountId?: number;
    timestamp?: number;
    ttl?: number;
    clientOrderId?: string;
}
export interface PostMarketOrderRequest {
    pair: string;
    type: PostMarketOrderTypeEnum;
    counterVolume?: string;
    baseVolume?: string;
    baseAccountId?: number;
    counterAccountId?: number;
    timestamp?: number;
    ttl?: number;
    clientOrderId?: string;
}
export interface StopOrderRequest {
    orderId: string;
}
/**
 * OrdersApi - interface
 *
 * @export
 * @interface OrdersApiInterface
 */
export interface OrdersApiInterface {
    /**
     * Returns the fees and 30 day trading volume (as of midnight) for a given currency pair.  For complete details, please see <a href=\"en/countries\">Fees & Features</a>.  Permissions required: <code>Perm_R_Orders</code>
     * @summary Get fee information
     * @param {string} pair Get fee information about this pair.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApiInterface
     */
    getFeeInfoRaw(requestParameters: GetFeeInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFeeInfoResponse>>;
    /**
     * Returns the fees and 30 day trading volume (as of midnight) for a given currency pair.  For complete details, please see <a href=\"en/countries\">Fees & Features</a>.  Permissions required: <code>Perm_R_Orders</code>
     * Get fee information
     */
    getFeeInfo(requestParameters: GetFeeInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFeeInfoResponse>;
    /**
     * Get an Order\'s details by its ID.  Permissions required: <code>Perm_R_Orders</code>
     * @summary Get order
     * @param {string} id Order reference
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApiInterface
     */
    getOrderRaw(requestParameters: GetOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetOrderResponse>>;
    /**
     * Get an Order\'s details by its ID.  Permissions required: <code>Perm_R_Orders</code>
     * Get order
     */
    getOrder(requestParameters: GetOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetOrderResponse>;
    /**
     * Get the details for an order.  Permissions required: <code>Perm_R_Orders</code>
     * @summary Get Order v2
     * @param {string} id Order reference
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApiInterface
     */
    getOrderV2Raw(requestParameters: GetOrderV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetOrder2Response>>;
    /**
     * Get the details for an order.  Permissions required: <code>Perm_R_Orders</code>
     * Get Order v2
     */
    getOrderV2(requestParameters: GetOrderV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetOrder2Response>;
    /**
     * Get the details for an order by order reference or client order ID. Exactly one of the two parameters must be provided, otherwise an error is returned. Permissions required: <code>Perm_R_Orders</code>
     * @summary Get Order v3
     * @param {string} [id] Order reference
     * @param {string} [clientOrderId] Client Order ID has the value that was passed in when the Order was posted.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApiInterface
     */
    getOrderV3Raw(requestParameters: GetOrderV3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetOrder2Response>>;
    /**
     * Get the details for an order by order reference or client order ID. Exactly one of the two parameters must be provided, otherwise an error is returned. Permissions required: <code>Perm_R_Orders</code>
     * Get Order v3
     */
    getOrderV3(requestParameters: GetOrderV3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetOrder2Response>;
    /**
     * Returns a list of the most recently placed Orders. Users can specify an optional <code>state=PENDING</code> parameter to restrict the results to only open Orders. Users can also specify the market by using the optional currency pair parameter.  Permissions required: <code>Perm_R_Orders</code>
     * @summary List orders
     * @param {'PENDING' | 'COMPLETE'} [state] Filter to only orders of this state
     * @param {string} [pair] Filter to only orders of this currency pair
     * @param {number} [createdBefore] Filter to orders created before this timestamp (Unix milliseconds)
     * @param {number} [limit] Limit to this many orders
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApiInterface
     */
    listOrdersRaw(requestParameters: ListOrdersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListOrdersResponse>>;
    /**
     * Returns a list of the most recently placed Orders. Users can specify an optional <code>state=PENDING</code> parameter to restrict the results to only open Orders. Users can also specify the market by using the optional currency pair parameter.  Permissions required: <code>Perm_R_Orders</code>
     * List orders
     */
    listOrders(requestParameters: ListOrdersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListOrdersResponse>;
    /**
     * Returns a list of the most recently placed orders ordered from newest to oldest. This endpoint will list up to 100 most recent open orders by default.  Permissions required: <Code>Perm_R_Orders</Code>
     * @summary List Orders v2
     * @param {string} [pair] Filter to only orders of this currency pair.
     * @param {boolean} [closed] If true, will return closed orders instead of open orders.
     * @param {number} [createdBefore] Filter to orders created before this timestamp (Unix milliseconds)
     * @param {number} [limit] Limit to this many orders
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApiInterface
     */
    listOrdersV2Raw(requestParameters: ListOrdersV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListOrders2Response>>;
    /**
     * Returns a list of the most recently placed orders ordered from newest to oldest. This endpoint will list up to 100 most recent open orders by default.  Permissions required: <Code>Perm_R_Orders</Code>
     * List Orders v2
     */
    listOrdersV2(requestParameters: ListOrdersV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListOrders2Response>;
    /**
     * Returns a list of the recent Trades for a given currency pair for this user, sorted by oldest first. If <code>before</code> is specified, then Trades are returned sorted by most-recent first.  <code>type</code> in the response indicates the type of Order that was placed to participate in the trade. Possible types: <code>BID</code>, <code>ASK</code>.  If <code>is_buy</code> in the response is true, then the Order which completed the trade (market taker) was a Bid Order.  Results of this query may lag behind the latest data.  Permissions required: <code>Perm_R_Orders</code>
     * @summary List trades
     * @param {string} pair Filter to trades of this currency pair.
     * @param {string} [since] Filter to trades on or after this timestamp (Unix milliseconds).
     * @param {string} [before] Filter to trades before this timestamp (Unix milliseconds).
     * @param {number} [afterSeq] Filter to trades from (including) this sequence number. Default behaviour is not to include this filter.
     * @param {number} [beforeSeq] Filter to trades before (excluding) this sequence number. Default behaviour is not to include this filter.
     * @param {boolean} [sortDesc] If set to true, sorts trades in descending order, otherwise ascending order will be assumed.
     * @param {number} [limit] Limit to this number of trades (default 100).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApiInterface
     */
    listUserTradesRaw(requestParameters: ListUserTradesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListUserTradesResponse>>;
    /**
     * Returns a list of the recent Trades for a given currency pair for this user, sorted by oldest first. If <code>before</code> is specified, then Trades are returned sorted by most-recent first.  <code>type</code> in the response indicates the type of Order that was placed to participate in the trade. Possible types: <code>BID</code>, <code>ASK</code>.  If <code>is_buy</code> in the response is true, then the Order which completed the trade (market taker) was a Bid Order.  Results of this query may lag behind the latest data.  Permissions required: <code>Perm_R_Orders</code>
     * List trades
     */
    listUserTrades(requestParameters: ListUserTradesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListUserTradesResponse>;
    /**
     * <b>Warning!</b> Orders cannot be reversed once they have executed. Please ensure your program has been thoroughly tested before submitting Orders.  If no <code>base_account_id</code> or <code>counter_account_id</code> are specified, your default base currency or counter currency account will be used. You can find your Account IDs by calling the <a href=\"#operation/getBalances\">Balances</a> API.  Permissions required: <code>Perm_W_Orders</code>
     * @summary Post Limit Order
     * @param {string} pair The currency pair to trade.
     * @param {'BID' | 'ASK'} type &lt;code&gt;BID&lt;/code&gt; for a bid (buy) limit order&lt;br&gt; &lt;code&gt;ASK&lt;/code&gt; for an ask (sell) limit order
     * @param {string} volume Amount of cryptocurrency to buy or sell as a decimal string in units of the currency.
     * @param {string} price Limit price as a decimal string in units of ZAR/BTC.
     * @param {'GTC' | 'IOC' | 'FOK'} [timeInForce] &lt;code&gt;GTC&lt;/code&gt; Good \&#39;Til Cancelled. The order remains open until it is filled or cancelled by the user.&lt;/br&gt; &lt;code&gt;IOC&lt;/code&gt; Immediate Or Cancel. The part of the order that cannot be filled immediately will be cancelled. Cannot be post-only.&lt;/br&gt; &lt;code&gt;FOK&lt;/code&gt; Fill Or Kill. If the order cannot be filled immediately and completely it will be cancelled before any trade. Cannot be post-only.
     * @param {boolean} [postOnly] Post-only Orders will be cancelled if they would otherwise have traded immediately. For example, if there\&#39;s a bid at ZAR 100,000 and you place a post-only ask at ZAR 100,000, your order will be cancelled instead of trading. If the best bid is ZAR 100,000 and you place a post-only ask at ZAR 101,000, your order won\&#39;t trade but will go into the order book.
     * @param {string} [stopPrice] Trigger trade price to activate this order as a decimal string. If this is set then this is treated as a Stop Limit Order and &#x60;stop_direction&#x60; is expected to be set too.
     * @param {'BELOW' | 'ABOVE' | 'RELATIVE_LAST_TRADE'} [stopDirection] Side of the trigger price to activate the order. This should be set if &#x60;stop_price&#x60; is also set.  &#x60;RELATIVE_LAST_TRADE&#x60; will automatically infer the direction based on the last trade price and the stop price. If last trade price is less than stop price then stop direction is ABOVE otherwise is BELOW.
     * @param {number} [baseAccountId] The base currency Account to use in the trade.
     * @param {number} [counterAccountId] The counter currency Account to use in the trade.
     * @param {number} [timestamp] Unix timestamp in milliseconds of when the request was created and sent.
     * @param {number} [ttl] Specifies the number of milliseconds after timestamp the request is valid for. If &#x60;timestamp&#x60; is not specified, &#x60;ttl&#x60; will not be used.
     * @param {string} [clientOrderId] Client order ID. May only contain alphanumeric (0-9, a-z, or A-Z) and special characters (_ ; , . -). Maximum length: 255. It will be available in read endpoints, so you can use it to reconcile Luno with your internal system. Values must be unique across all your successful order creation endpoint calls; trying to create an order with the same &#x60;client_order_id&#x60; as one of your past orders will result in a HTTP 409 Conflict response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApiInterface
     */
    postLimitOrderRaw(requestParameters: PostLimitOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostLimitOrderResponse>>;
    /**
     * <b>Warning!</b> Orders cannot be reversed once they have executed. Please ensure your program has been thoroughly tested before submitting Orders.  If no <code>base_account_id</code> or <code>counter_account_id</code> are specified, your default base currency or counter currency account will be used. You can find your Account IDs by calling the <a href=\"#operation/getBalances\">Balances</a> API.  Permissions required: <code>Perm_W_Orders</code>
     * Post Limit Order
     */
    postLimitOrder(requestParameters: PostLimitOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostLimitOrderResponse>;
    /**
     * A Market Order executes immediately, and either buys as much of the asset that can be bought for a set amount of fiat currency, or sells a set amount of the asset for as much as possible.  <b>Warning!</b> Orders cannot be reversed once they have executed. Please ensure your program has been thoroughly tested before submitting Orders.  If no <code>base_account_id</code> or <code>counter_account_id</code> are specified, the default base currency or counter currency account will be used. Users can find their account IDs by calling the <a href=\"#operation/getBalances\">Balances</a> request.  Permissions required: <code>Perm_W_Orders</code>
     * @summary Post Market Order
     * @param {string} pair The currency pair to trade.
     * @param {'BUY' | 'SELL'} type &lt;code&gt;BUY&lt;/code&gt; to buy an asset&lt;br&gt; &lt;code&gt;SELL&lt;/code&gt; to sell an asset
     * @param {string} [counterVolume] For a &lt;code&gt;BUY&lt;/code&gt; order: amount of the counter currency to use (e.g. how much EUR to use to buy BTC in the BTC/EUR market)
     * @param {string} [baseVolume] For a &lt;code&gt;SELL&lt;/code&gt; order: amount of the base currency to use (e.g. how much BTC to sell for EUR in the BTC/EUR market)
     * @param {number} [baseAccountId] The base currency account to use in the trade.
     * @param {number} [counterAccountId] The counter currency account to use in the trade.
     * @param {number} [timestamp] Unix timestamp in milliseconds of when the request was created and sent.
     * @param {number} [ttl] Specifies the number of milliseconds after timestamp the request is valid for. If &#x60;timestamp&#x60; is not specified, &#x60;ttl&#x60; will not be used.
     * @param {string} [clientOrderId] Client order ID. May only contain alphanumeric (0-9, a-z, or A-Z) and special characters (_ ; , . -). Maximum length: 255. It will be available in read endpoints, so you can use it to reconcile Luno with your internal system. Values must be unique across all your successful order creation endpoint calls; trying to create an order with the same &#x60;client_order_id&#x60; as one of your past orders will result in a HTTP 409 Conflict response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApiInterface
     */
    postMarketOrderRaw(requestParameters: PostMarketOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostMarketOrderResponse>>;
    /**
     * A Market Order executes immediately, and either buys as much of the asset that can be bought for a set amount of fiat currency, or sells a set amount of the asset for as much as possible.  <b>Warning!</b> Orders cannot be reversed once they have executed. Please ensure your program has been thoroughly tested before submitting Orders.  If no <code>base_account_id</code> or <code>counter_account_id</code> are specified, the default base currency or counter currency account will be used. Users can find their account IDs by calling the <a href=\"#operation/getBalances\">Balances</a> request.  Permissions required: <code>Perm_W_Orders</code>
     * Post Market Order
     */
    postMarketOrder(requestParameters: PostMarketOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostMarketOrderResponse>;
    /**
     * Request to cancel an Order.  <b>Note!</b>: Once an Order has been completed, it can not be reversed. The return value from this request will indicate if the Stop request was successful or not.  Permissions required: <code>Perm_W_Orders</code>
     * @summary Cancel Order
     * @param {string} orderId The Order identifier as a string.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApiInterface
     */
    stopOrderRaw(requestParameters: StopOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StopOrderResponse>>;
    /**
     * Request to cancel an Order.  <b>Note!</b>: Once an Order has been completed, it can not be reversed. The return value from this request will indicate if the Stop request was successful or not.  Permissions required: <code>Perm_W_Orders</code>
     * Cancel Order
     */
    stopOrder(requestParameters: StopOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StopOrderResponse>;
}
/**
 *
 */
export declare class OrdersApi extends runtime.BaseAPI implements OrdersApiInterface {
    /**
     * Returns the fees and 30 day trading volume (as of midnight) for a given currency pair.  For complete details, please see <a href=\"en/countries\">Fees & Features</a>.  Permissions required: <code>Perm_R_Orders</code>
     * Get fee information
     */
    getFeeInfoRaw(requestParameters: GetFeeInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFeeInfoResponse>>;
    /**
     * Returns the fees and 30 day trading volume (as of midnight) for a given currency pair.  For complete details, please see <a href=\"en/countries\">Fees & Features</a>.  Permissions required: <code>Perm_R_Orders</code>
     * Get fee information
     */
    getFeeInfo(requestParameters: GetFeeInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFeeInfoResponse>;
    /**
     * Get an Order\'s details by its ID.  Permissions required: <code>Perm_R_Orders</code>
     * Get order
     */
    getOrderRaw(requestParameters: GetOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetOrderResponse>>;
    /**
     * Get an Order\'s details by its ID.  Permissions required: <code>Perm_R_Orders</code>
     * Get order
     */
    getOrder(requestParameters: GetOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetOrderResponse>;
    /**
     * Get the details for an order.  Permissions required: <code>Perm_R_Orders</code>
     * Get Order v2
     */
    getOrderV2Raw(requestParameters: GetOrderV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetOrder2Response>>;
    /**
     * Get the details for an order.  Permissions required: <code>Perm_R_Orders</code>
     * Get Order v2
     */
    getOrderV2(requestParameters: GetOrderV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetOrder2Response>;
    /**
     * Get the details for an order by order reference or client order ID. Exactly one of the two parameters must be provided, otherwise an error is returned. Permissions required: <code>Perm_R_Orders</code>
     * Get Order v3
     */
    getOrderV3Raw(requestParameters: GetOrderV3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetOrder2Response>>;
    /**
     * Get the details for an order by order reference or client order ID. Exactly one of the two parameters must be provided, otherwise an error is returned. Permissions required: <code>Perm_R_Orders</code>
     * Get Order v3
     */
    getOrderV3(requestParameters?: GetOrderV3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetOrder2Response>;
    /**
     * Returns a list of the most recently placed Orders. Users can specify an optional <code>state=PENDING</code> parameter to restrict the results to only open Orders. Users can also specify the market by using the optional currency pair parameter.  Permissions required: <code>Perm_R_Orders</code>
     * List orders
     */
    listOrdersRaw(requestParameters: ListOrdersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListOrdersResponse>>;
    /**
     * Returns a list of the most recently placed Orders. Users can specify an optional <code>state=PENDING</code> parameter to restrict the results to only open Orders. Users can also specify the market by using the optional currency pair parameter.  Permissions required: <code>Perm_R_Orders</code>
     * List orders
     */
    listOrders(requestParameters?: ListOrdersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListOrdersResponse>;
    /**
     * Returns a list of the most recently placed orders ordered from newest to oldest. This endpoint will list up to 100 most recent open orders by default.  Permissions required: <Code>Perm_R_Orders</Code>
     * List Orders v2
     */
    listOrdersV2Raw(requestParameters: ListOrdersV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListOrders2Response>>;
    /**
     * Returns a list of the most recently placed orders ordered from newest to oldest. This endpoint will list up to 100 most recent open orders by default.  Permissions required: <Code>Perm_R_Orders</Code>
     * List Orders v2
     */
    listOrdersV2(requestParameters?: ListOrdersV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListOrders2Response>;
    /**
     * Returns a list of the recent Trades for a given currency pair for this user, sorted by oldest first. If <code>before</code> is specified, then Trades are returned sorted by most-recent first.  <code>type</code> in the response indicates the type of Order that was placed to participate in the trade. Possible types: <code>BID</code>, <code>ASK</code>.  If <code>is_buy</code> in the response is true, then the Order which completed the trade (market taker) was a Bid Order.  Results of this query may lag behind the latest data.  Permissions required: <code>Perm_R_Orders</code>
     * List trades
     */
    listUserTradesRaw(requestParameters: ListUserTradesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListUserTradesResponse>>;
    /**
     * Returns a list of the recent Trades for a given currency pair for this user, sorted by oldest first. If <code>before</code> is specified, then Trades are returned sorted by most-recent first.  <code>type</code> in the response indicates the type of Order that was placed to participate in the trade. Possible types: <code>BID</code>, <code>ASK</code>.  If <code>is_buy</code> in the response is true, then the Order which completed the trade (market taker) was a Bid Order.  Results of this query may lag behind the latest data.  Permissions required: <code>Perm_R_Orders</code>
     * List trades
     */
    listUserTrades(requestParameters: ListUserTradesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListUserTradesResponse>;
    /**
     * <b>Warning!</b> Orders cannot be reversed once they have executed. Please ensure your program has been thoroughly tested before submitting Orders.  If no <code>base_account_id</code> or <code>counter_account_id</code> are specified, your default base currency or counter currency account will be used. You can find your Account IDs by calling the <a href=\"#operation/getBalances\">Balances</a> API.  Permissions required: <code>Perm_W_Orders</code>
     * Post Limit Order
     */
    postLimitOrderRaw(requestParameters: PostLimitOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostLimitOrderResponse>>;
    /**
     * <b>Warning!</b> Orders cannot be reversed once they have executed. Please ensure your program has been thoroughly tested before submitting Orders.  If no <code>base_account_id</code> or <code>counter_account_id</code> are specified, your default base currency or counter currency account will be used. You can find your Account IDs by calling the <a href=\"#operation/getBalances\">Balances</a> API.  Permissions required: <code>Perm_W_Orders</code>
     * Post Limit Order
     */
    postLimitOrder(requestParameters: PostLimitOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostLimitOrderResponse>;
    /**
     * A Market Order executes immediately, and either buys as much of the asset that can be bought for a set amount of fiat currency, or sells a set amount of the asset for as much as possible.  <b>Warning!</b> Orders cannot be reversed once they have executed. Please ensure your program has been thoroughly tested before submitting Orders.  If no <code>base_account_id</code> or <code>counter_account_id</code> are specified, the default base currency or counter currency account will be used. Users can find their account IDs by calling the <a href=\"#operation/getBalances\">Balances</a> request.  Permissions required: <code>Perm_W_Orders</code>
     * Post Market Order
     */
    postMarketOrderRaw(requestParameters: PostMarketOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostMarketOrderResponse>>;
    /**
     * A Market Order executes immediately, and either buys as much of the asset that can be bought for a set amount of fiat currency, or sells a set amount of the asset for as much as possible.  <b>Warning!</b> Orders cannot be reversed once they have executed. Please ensure your program has been thoroughly tested before submitting Orders.  If no <code>base_account_id</code> or <code>counter_account_id</code> are specified, the default base currency or counter currency account will be used. Users can find their account IDs by calling the <a href=\"#operation/getBalances\">Balances</a> request.  Permissions required: <code>Perm_W_Orders</code>
     * Post Market Order
     */
    postMarketOrder(requestParameters: PostMarketOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostMarketOrderResponse>;
    /**
     * Request to cancel an Order.  <b>Note!</b>: Once an Order has been completed, it can not be reversed. The return value from this request will indicate if the Stop request was successful or not.  Permissions required: <code>Perm_W_Orders</code>
     * Cancel Order
     */
    stopOrderRaw(requestParameters: StopOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StopOrderResponse>>;
    /**
     * Request to cancel an Order.  <b>Note!</b>: Once an Order has been completed, it can not be reversed. The return value from this request will indicate if the Stop request was successful or not.  Permissions required: <code>Perm_W_Orders</code>
     * Cancel Order
     */
    stopOrder(requestParameters: StopOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StopOrderResponse>;
}
/**
 * @export
 */
export declare const ListOrdersStateEnum: {
    readonly Pending: "PENDING";
    readonly Complete: "COMPLETE";
};
export type ListOrdersStateEnum = typeof ListOrdersStateEnum[keyof typeof ListOrdersStateEnum];
/**
 * @export
 */
export declare const PostLimitOrderTypeEnum: {
    readonly Bid: "BID";
    readonly Ask: "ASK";
};
export type PostLimitOrderTypeEnum = typeof PostLimitOrderTypeEnum[keyof typeof PostLimitOrderTypeEnum];
/**
 * @export
 */
export declare const PostLimitOrderTimeInForceEnum: {
    readonly Gtc: "GTC";
    readonly Ioc: "IOC";
    readonly Fok: "FOK";
};
export type PostLimitOrderTimeInForceEnum = typeof PostLimitOrderTimeInForceEnum[keyof typeof PostLimitOrderTimeInForceEnum];
/**
 * @export
 */
export declare const PostLimitOrderStopDirectionEnum: {
    readonly Below: "BELOW";
    readonly Above: "ABOVE";
    readonly RelativeLastTrade: "RELATIVE_LAST_TRADE";
};
export type PostLimitOrderStopDirectionEnum = typeof PostLimitOrderStopDirectionEnum[keyof typeof PostLimitOrderStopDirectionEnum];
/**
 * @export
 */
export declare const PostMarketOrderTypeEnum: {
    readonly Buy: "BUY";
    readonly Sell: "SELL";
};
export type PostMarketOrderTypeEnum = typeof PostMarketOrderTypeEnum[keyof typeof PostMarketOrderTypeEnum];
//# sourceMappingURL=OrdersApi.d.ts.map