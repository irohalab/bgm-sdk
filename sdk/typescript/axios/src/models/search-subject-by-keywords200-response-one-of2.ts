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
import type { LegacySubjectLarge } from './legacy-subject-large';

/**
 * 
 * @export
 * @interface SearchSubjectByKeywords200ResponseOneOf2
 */
export interface SearchSubjectByKeywords200ResponseOneOf2 {
    /**
     * 总条数
     * @type {number}
     * @memberof SearchSubjectByKeywords200ResponseOneOf2
     */
    'results'?: number;
    /**
     * 结果列表
     * @type {Array<LegacySubjectLarge>}
     * @memberof SearchSubjectByKeywords200ResponseOneOf2
     */
    'list'?: Array<LegacySubjectLarge>;
}

