/**
 * Bangumi API
 * 你可以在 <https://api.bgm.tv/v0/oauth/> 生成一个 Access Token  ## 建议客户端开发者指定一个带有 APP 名称和版本的 User Agent，而非使用 HTTP 请求库默认的 UA  各种请求库的默认 UA 在未来可能会被禁用。 
 *
 * The version of the OpenAPI document: 2022-04-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PersonCareer } from './personCareer';
import { PersonImages } from './personImages';
import { PersonType } from './personType';


export interface Person { 
    id: number;
    name: string;
    /**
     * `1`, `2`, `3` 表示 `个人`, `公司`, `组合`
     */
    type: PersonType;
    career: Array<PersonCareer>;
    /**
     * object with some size of images, this object maybe `null`
     */
    images?: PersonImages;
    short_summary: string;
    locked: boolean;
}
