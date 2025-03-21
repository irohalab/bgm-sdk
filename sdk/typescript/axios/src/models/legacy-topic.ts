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
import type { LegacyUser } from './legacy-user';

/**
 * 讨论版
 * @export
 * @interface LegacyTopic
 */
export interface LegacyTopic {
    /**
     * ID
     * @type {number}
     * @memberof LegacyTopic
     */
    'id'?: number;
    /**
     * 地址
     * @type {string}
     * @memberof LegacyTopic
     */
    'url'?: string;
    /**
     * 标题
     * @type {string}
     * @memberof LegacyTopic
     */
    'title'?: string;
    /**
     * 所属对象（条目） ID
     * @type {number}
     * @memberof LegacyTopic
     */
    'main_id'?: number;
    /**
     * 发布时间
     * @type {number}
     * @memberof LegacyTopic
     */
    'timestamp'?: number;
    /**
     * 最后回复时间
     * @type {number}
     * @memberof LegacyTopic
     */
    'lastpost'?: number;
    /**
     * 回复数
     * @type {number}
     * @memberof LegacyTopic
     */
    'replies'?: number;
    /**
     * 
     * @type {LegacyUser}
     * @memberof LegacyTopic
     */
    'user'?: LegacyUser;
}

