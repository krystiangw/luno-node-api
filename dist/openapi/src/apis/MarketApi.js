"use strict";
/* tslint:disable */
/* eslint-disable */
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class MarketApi extends runtime.BaseAPI {
    /**
     * Get candlestick market data from the specified time until now, from the oldest to the most recent.  Permissions required: <code>MP_None</code>
     * Get candles
     */
    async getCandlesRaw(requestParameters, initOverrides) {
        if (requestParameters.pair === null || requestParameters.pair === undefined) {
            throw new runtime.RequiredError('pair', 'Required parameter requestParameters.pair was null or undefined when calling getCandles.');
        }
        if (requestParameters.since === null || requestParameters.since === undefined) {
            throw new runtime.RequiredError('since', 'Required parameter requestParameters.since was null or undefined when calling getCandles.');
        }
        if (requestParameters.duration === null || requestParameters.duration === undefined) {
            throw new runtime.RequiredError('duration', 'Required parameter requestParameters.duration was null or undefined when calling getCandles.');
        }
        const queryParameters = {};
        if (requestParameters.pair !== undefined) {
            queryParameters['pair'] = requestParameters.pair;
        }
        if (requestParameters.since !== undefined) {
            queryParameters['since'] = requestParameters.since;
        }
        if (requestParameters.duration !== undefined) {
            queryParameters['duration'] = requestParameters.duration;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/api/exchange/1/candles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.GetCandlesResponseFromJSON)(jsonValue));
    }
    /**
     * Get candlestick market data from the specified time until now, from the oldest to the most recent.  Permissions required: <code>MP_None</code>
     * Get candles
     */
    async getCandles(requestParameters, initOverrides) {
        const response = await this.getCandlesRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * This request returns the best 100 `bids` and `asks`, for the currency pair specified, in the Order Book.  `asks` are sorted by price ascending and `bids` are sorted by price descending.  Multiple orders at the same price are aggregated.
     * Get top order book
     */
    async getOrderBookRaw(requestParameters, initOverrides) {
        if (requestParameters.pair === null || requestParameters.pair === undefined) {
            throw new runtime.RequiredError('pair', 'Required parameter requestParameters.pair was null or undefined when calling getOrderBook.');
        }
        const queryParameters = {};
        if (requestParameters.pair !== undefined) {
            queryParameters['pair'] = requestParameters.pair;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/api/1/orderbook_top`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.GetOrderBookResponseFromJSON)(jsonValue));
    }
    /**
     * This request returns the best 100 `bids` and `asks`, for the currency pair specified, in the Order Book.  `asks` are sorted by price ascending and `bids` are sorted by price descending.  Multiple orders at the same price are aggregated.
     * Get top order book
     */
    async getOrderBook(requestParameters, initOverrides) {
        const response = await this.getOrderBookRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * This request returns all `bids` and `asks`, for the currency pair specified, in the Order Book.  `asks` are sorted by price ascending and `bids` are sorted by price descending.  Multiple orders at the same price are not aggregated.  <b>WARNING:</b> This may return a large amount of data. Users are recommended to use the <a href=\"#operation/getOrderBookTop\">top 100 bids and asks</a> or the <a href=\"#tag/Streaming-API\">Streaming API</a>.
     * Get full order book
     */
    async getOrderBookFullRaw(requestParameters, initOverrides) {
        if (requestParameters.pair === null || requestParameters.pair === undefined) {
            throw new runtime.RequiredError('pair', 'Required parameter requestParameters.pair was null or undefined when calling getOrderBookFull.');
        }
        const queryParameters = {};
        if (requestParameters.pair !== undefined) {
            queryParameters['pair'] = requestParameters.pair;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/api/1/orderbook`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.GetOrderBookResponseFromJSON)(jsonValue));
    }
    /**
     * This request returns all `bids` and `asks`, for the currency pair specified, in the Order Book.  `asks` are sorted by price ascending and `bids` are sorted by price descending.  Multiple orders at the same price are not aggregated.  <b>WARNING:</b> This may return a large amount of data. Users are recommended to use the <a href=\"#operation/getOrderBookTop\">top 100 bids and asks</a> or the <a href=\"#tag/Streaming-API\">Streaming API</a>.
     * Get full order book
     */
    async getOrderBookFull(requestParameters, initOverrides) {
        const response = await this.getOrderBookFullRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Returns the latest ticker indicators for the specified currency pair.  Please see the <a href=\"#tag/currency \">Currency list</a> for the complete list of supported currency pairs.
     * Get ticker for currency pair
     */
    async getTickerRaw(requestParameters, initOverrides) {
        if (requestParameters.pair === null || requestParameters.pair === undefined) {
            throw new runtime.RequiredError('pair', 'Required parameter requestParameters.pair was null or undefined when calling getTicker.');
        }
        const queryParameters = {};
        if (requestParameters.pair !== undefined) {
            queryParameters['pair'] = requestParameters.pair;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/api/1/ticker`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.GetTickerResponseFromJSON)(jsonValue));
    }
    /**
     * Returns the latest ticker indicators for the specified currency pair.  Please see the <a href=\"#tag/currency \">Currency list</a> for the complete list of supported currency pairs.
     * Get ticker for currency pair
     */
    async getTicker(requestParameters, initOverrides) {
        const response = await this.getTickerRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Returns the latest ticker indicators from all active Luno exchanges.  Please see the <a href=\"#tag/currency \">Currency list</a> for the complete list of supported currency pairs.
     * List tickers for all currency pairs
     */
    async getTickersRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.pair) {
            queryParameters['pair'] = requestParameters.pair.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/api/1/tickers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ListTickersResponseFromJSON)(jsonValue));
    }
    /**
     * Returns the latest ticker indicators from all active Luno exchanges.  Please see the <a href=\"#tag/currency \">Currency list</a> for the complete list of supported currency pairs.
     * List tickers for all currency pairs
     */
    async getTickers(requestParameters = {}, initOverrides) {
        const response = await this.getTickersRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Returns a list of recent trades for the specified currency pair. At most 100 trades are returned per call and never trades older than 24h. The trades are sorted from newest to oldest.  Please see the <a href=\"#tag/currency \">Currency list</a> for the complete list of supported currency pairs.
     * List recent trades
     */
    async listTradesRaw(requestParameters, initOverrides) {
        if (requestParameters.pair === null || requestParameters.pair === undefined) {
            throw new runtime.RequiredError('pair', 'Required parameter requestParameters.pair was null or undefined when calling listTrades.');
        }
        const queryParameters = {};
        if (requestParameters.pair !== undefined) {
            queryParameters['pair'] = requestParameters.pair;
        }
        if (requestParameters.since !== undefined) {
            queryParameters['since'] = requestParameters.since;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/api/1/trades`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ListTradesResponseFromJSON)(jsonValue));
    }
    /**
     * Returns a list of recent trades for the specified currency pair. At most 100 trades are returned per call and never trades older than 24h. The trades are sorted from newest to oldest.  Please see the <a href=\"#tag/currency \">Currency list</a> for the complete list of supported currency pairs.
     * List recent trades
     */
    async listTrades(requestParameters, initOverrides) {
        const response = await this.listTradesRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * List all supported markets parameter information like price scale, min and max order volumes and market ID.
     * Get markets info
     */
    async marketsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.pair) {
            queryParameters['pair'] = requestParameters.pair.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/api/exchange/1/markets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.MarketsInfoResponseFromJSON)(jsonValue));
    }
    /**
     * List all supported markets parameter information like price scale, min and max order volumes and market ID.
     * Get markets info
     */
    async markets(requestParameters = {}, initOverrides) {
        const response = await this.marketsRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
exports.MarketApi = MarketApi;
//# sourceMappingURL=MarketApi.js.map