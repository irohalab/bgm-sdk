/**
 * Bangumi API
 * 你可以在 <https://api.bgm.tv/v0/oauth/> 生成一个 Access Token  ## 建议客户端开发者指定一个带有 APP 名称和版本的 User Agent，而非使用 HTTP 请求库默认的 UA  各种请求库的默认 UA 在未来可能会被禁用。 
 *
 * The version of the OpenAPI document: 2022-04-19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * - `1`: 想看 - `2`: 看过 - `3`: 在看 - `4`: 搁置 - `5`: 抛弃
 */
export type CollectionType = 1 | 2 | 3 | 4 | 5;

export const CollectionType = {
    NUMBER_1: 1 as CollectionType,
    NUMBER_2: 2 as CollectionType,
    NUMBER_3: 3 as CollectionType,
    NUMBER_4: 4 as CollectionType,
    NUMBER_5: 5 as CollectionType
}
