/* tslint:disable */
/* eslint-disable */
/**
 * Bangumi API
 * 你可以在 <https://next.bgm.tv/demo/access-token> 生成一个 Access Token  ## [关于 User Agent](https://github.com/bangumi/api/blob/master/docs-raw/user%20agent.md)  如果你在使用中遇到了问题，请优先使用 GitHub issue 提交问题。在 bangumi 小组发帖可能无法得到及时反馈。 
 *
 * The version of the OpenAPI document: 2025-02-5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Images } from './images';
// May contain unused imports in some cases
// @ts-ignore
import type { Item } from './item';

/**
 * 同名字段意义同<a href=\"#model-Subject\">Subject</a>
 * @export
 * @interface IndexSubject
 */
export interface IndexSubject {
    /**
     * 
     * @type {number}
     * @memberof IndexSubject
     */
    'id': number;
    /**
     * 
     * @type {number}
     * @memberof IndexSubject
     */
    'type': number;
    /**
     * 
     * @type {string}
     * @memberof IndexSubject
     */
    'name': string;
    /**
     * 
     * @type {Images}
     * @memberof IndexSubject
     */
    'images'?: Images;
    /**
     * 
     * @type {Array<Item>}
     * @memberof IndexSubject
     */
    'infobox'?: Array<Item>;
    /**
     * 
     * @type {string}
     * @memberof IndexSubject
     */
    'date'?: string;
    /**
     * 
     * @type {string}
     * @memberof IndexSubject
     */
    'comment': string;
    /**
     * 
     * @type {string}
     * @memberof IndexSubject
     */
    'added_at': string;
}

