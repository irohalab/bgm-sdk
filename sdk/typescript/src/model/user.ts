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
import { UserAvatar } from './userAvatar';
import { UserGroup } from './userGroup';


/**
 * 用户信息
 */
export interface User { 
    /**
     * 用户 id
     */
    id?: number;
    /**
     * 用户主页地址
     */
    url?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 昵称
     */
    nickname?: string;
    avatar?: UserAvatar;
    /**
     * 签名
     */
    sign?: string;
    usergroup?: UserGroup;
}
