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



/**
 * 收藏状态名称
 * @export
 * @enum {string}
 */

export const CollectionStatusName = {
    Wish: '想做',
    Collect: '做过',
    Doing: '在做',
    OnHold: '搁置',
    Dropped: '抛弃'
} as const;

export type CollectionStatusName = typeof CollectionStatusName[keyof typeof CollectionStatusName];



