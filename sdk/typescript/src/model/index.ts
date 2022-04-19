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
import { Creator } from './creator';
import { Stat } from './stat';


export interface Index { 
    id: number;
    title: string;
    desc: string;
    /**
     * 收录条目总数
     */
    total?: number;
    /**
     * 目录评论及收藏数
     */
    stat: Stat;
    created_at: string;
    creator: Creator;
    ban: boolean;
    nsfw: boolean;
}
