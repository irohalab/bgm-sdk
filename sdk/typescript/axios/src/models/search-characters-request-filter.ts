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
 * 不同条件之间是 `且` 的关系
 * @export
 * @interface SearchCharactersRequestFilter
 */
export interface SearchCharactersRequestFilter {
    /**
     * 无权限的用户会直接忽略此字段，不会返回 R18 角色。  默认或者 `null` 会返回包含 R18 的所有搜索结果。  `true` 只会返回 R18 角色。  `false` 只会返回非 R18 角色。 
     * @type {boolean}
     * @memberof SearchCharactersRequestFilter
     */
    'nsfw'?: boolean;
}

