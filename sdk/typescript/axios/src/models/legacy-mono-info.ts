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
import type { LegacyMonoInfoAlias } from './legacy-mono-info-alias';
// May contain unused imports in some cases
// @ts-ignore
import type { LegacyMonoInfoSource } from './legacy-mono-info-source';

/**
 * 人物信息
 * @export
 * @interface LegacyMonoInfo
 */
export interface LegacyMonoInfo {
    /**
     * 生日
     * @type {string}
     * @memberof LegacyMonoInfo
     */
    'birth'?: string;
    /**
     * 身高
     * @type {string}
     * @memberof LegacyMonoInfo
     */
    'height'?: string;
    /**
     * 性别
     * @type {string}
     * @memberof LegacyMonoInfo
     */
    'gender'?: string;
    /**
     * 
     * @type {LegacyMonoInfoAlias}
     * @memberof LegacyMonoInfo
     */
    'alias'?: LegacyMonoInfoAlias;
    /**
     * 
     * @type {LegacyMonoInfoSource}
     * @memberof LegacyMonoInfo
     */
    'source'?: LegacyMonoInfoSource;
    /**
     * 简体中文名
     * @type {string}
     * @memberof LegacyMonoInfo
     */
    'name_cn'?: string;
    /**
     * 声优
     * @type {string}
     * @memberof LegacyMonoInfo
     */
    'cv'?: string;
}

