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



/**
 * 电影类型 - `0` 为 其他 - `1` 为 日剧 - `2` 为 欧美剧 - `3` 为 华语剧 - `6001` 为 电视剧 - `6002` 为 电影 - `6003` 为 演出 - `6004` 为 综艺
 * @export
 * @enum {string}
 */

export const SubjectRealCategory = {
    Other: 0,
    JP: 1,
    EN: 2,
    CN: 3,
    TV: 6001,
    Movie: 6002,
    Live: 6003,
    Show: 6004
} as const;

export type SubjectRealCategory = typeof SubjectRealCategory[keyof typeof SubjectRealCategory];



