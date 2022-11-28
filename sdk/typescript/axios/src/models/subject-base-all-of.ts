/* tslint:disable */
/* eslint-disable */
/**
 * Bangumi API
 * 你可以在 <https://api.bgm.tv/v0/oauth/> 生成一个 Access Token  ## 建议客户端开发者指定一个带有 APP 名称和版本的 User Agent，而非使用 HTTP 请求库默认的 UA  各种请求库的默认 UA 在未来可能会被禁用。 
 *
 * The version of the OpenAPI document: 2022-05-3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { SubjectBaseAllOfImages } from './subject-base-all-of-images';

/**
 * 
 * @export
 * @interface SubjectBaseAllOf
 */
export interface SubjectBaseAllOf {
    /**
     * 条目中文名称
     * @type {string}
     * @memberof SubjectBaseAllOf
     */
    'name_cn'?: string;
    /**
     * 剧情简介
     * @type {string}
     * @memberof SubjectBaseAllOf
     */
    'summary'?: string;
    /**
     * 放送开始日期
     * @type {string}
     * @memberof SubjectBaseAllOf
     */
    'air_date'?: string;
    /**
     * 放送星期
     * @type {number}
     * @memberof SubjectBaseAllOf
     */
    'air_weekday'?: number;
    /**
     * 
     * @type {SubjectBaseAllOfImages}
     * @memberof SubjectBaseAllOf
     */
    'images'?: SubjectBaseAllOfImages;
}

