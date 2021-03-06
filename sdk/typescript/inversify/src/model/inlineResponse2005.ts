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
import { CollectionStatus } from './collectionStatus';
import { User } from './user';


export interface InlineResponse2005 { 
    status?: CollectionStatus;
    /**
     * 评分
     */
    rating?: number;
    /**
     * 评论
     */
    comment?: string;
    /**
     * 收藏隐私
     */
    _private?: InlineResponse2005.PrivateEnum;
    /**
     * 标签
     */
    tag?: Array<string>;
    /**
     * 完成话数
     */
    ep_status?: number;
    /**
     * 上次更新时间
     */
    lasttouch?: number;
    user?: User;
}
export namespace InlineResponse2005 {
    export type PrivateEnum = 0 | 1;
    export const PrivateEnum = {
        NUMBER_0: 0 as PrivateEnum,
        NUMBER_1: 1 as PrivateEnum
    }
}
