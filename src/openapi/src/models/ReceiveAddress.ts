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

import { exists, mapValues } from '../runtime';
import type { AddressMeta } from './AddressMeta';
import {
    AddressMetaFromJSON,
    AddressMetaFromJSONTyped,
    AddressMetaToJSON,
} from './AddressMeta';

/**
 * AddressResp wallet address response body
 * @export
 * @interface ReceiveAddress
 */
export interface ReceiveAddress {
    /**
     * 
     * @type {string}
     * @memberof ReceiveAddress
     */
    accountId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReceiveAddress
     */
    address?: string;
    /**
     * 
     * @type {Array<AddressMeta>}
     * @memberof ReceiveAddress
     */
    addressMeta?: Array<AddressMeta>;
    /**
     * 
     * @type {string}
     * @memberof ReceiveAddress
     */
    asset?: string;
    /**
     * 
     * @type {string}
     * @memberof ReceiveAddress
     */
    assignedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof ReceiveAddress
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReceiveAddress
     */
    qrCodeUri?: string;
    /**
     * 
     * @type {string}
     * @memberof ReceiveAddress
     */
    receiveFee?: string;
    /**
     * 
     * @type {string}
     * @memberof ReceiveAddress
     */
    totalReceived?: string;
    /**
     * 
     * @type {string}
     * @memberof ReceiveAddress
     */
    totalUnconfirmed?: string;
}

/**
 * Check if a given object implements the ReceiveAddress interface.
 */
export function instanceOfReceiveAddress(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReceiveAddressFromJSON(json: any): ReceiveAddress {
    return ReceiveAddressFromJSONTyped(json, false);
}

export function ReceiveAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReceiveAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'addressMeta': !exists(json, 'address_meta') ? undefined : ((json['address_meta'] as Array<any>).map(AddressMetaFromJSON)),
        'asset': !exists(json, 'asset') ? undefined : json['asset'],
        'assignedAt': !exists(json, 'assigned_at') ? undefined : json['assigned_at'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'qrCodeUri': !exists(json, 'qr_code_uri') ? undefined : json['qr_code_uri'],
        'receiveFee': !exists(json, 'receive_fee') ? undefined : json['receive_fee'],
        'totalReceived': !exists(json, 'total_received') ? undefined : json['total_received'],
        'totalUnconfirmed': !exists(json, 'total_unconfirmed') ? undefined : json['total_unconfirmed'],
    };
}

export function ReceiveAddressToJSON(value?: ReceiveAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'address': value.address,
        'address_meta': value.addressMeta === undefined ? undefined : ((value.addressMeta as Array<any>).map(AddressMetaToJSON)),
        'asset': value.asset,
        'assigned_at': value.assignedAt,
        'name': value.name,
        'qr_code_uri': value.qrCodeUri,
        'receive_fee': value.receiveFee,
        'total_received': value.totalReceived,
        'total_unconfirmed': value.totalUnconfirmed,
    };
}

