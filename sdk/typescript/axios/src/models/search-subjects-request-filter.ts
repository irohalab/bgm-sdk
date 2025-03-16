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
import type { SubjectType } from './subject-type';

/**
 * 不同条件之间是 `且` 的关系
 * @export
 * @interface SearchSubjectsRequestFilter
 */
export interface SearchSubjectsRequestFilter {
    /**
     * 条目类型，参照 `SubjectType` enum，多值之间为 `或` 的关系。
     * @type {Array<SubjectType>}
     * @memberof SearchSubjectsRequestFilter
     */
    'type'?: Array<SubjectType>;
    /**
     * 公共标签。多个值之间为 `且` 关系。可以用 `-` 排除标签。比如 `-科幻` 可以排除科幻标签。
     * @type {Array<string>}
     * @memberof SearchSubjectsRequestFilter
     */
    'meta_tags'?: Array<string>;
    /**
     * 标签，可以多次出现。多值之间为 `且` 关系。
     * @type {Array<string>}
     * @memberof SearchSubjectsRequestFilter
     */
    'tag'?: Array<string>;
    /**
     * 播出日期/发售日期，日期必需为 `YYYY-MM-DD` 格式。多值之间为 `且` 关系。
     * @type {Array<string>}
     * @memberof SearchSubjectsRequestFilter
     */
    'air_date'?: Array<string>;
    /**
     * 用于搜索指定评分的条目，多值之间为 `且` 关系。
     * @type {Array<string>}
     * @memberof SearchSubjectsRequestFilter
     */
    'rating'?: Array<string>;
    /**
     * 用于搜索指定排名的条目，多值之间为 `且` 关系。
     * @type {Array<string>}
     * @memberof SearchSubjectsRequestFilter
     */
    'rank'?: Array<string>;
    /**
     * 无权限的用户会直接忽略此字段，不会返回R18条目。  默认或者 `null` 会返回包含 R18 的所有搜索结果。  `true` 只会返回 R18 条目。  `false` 只会返回非 R18 条目。 
     * @type {boolean}
     * @memberof SearchSubjectsRequestFilter
     */
    'nsfw'?: boolean;
}

