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
import { BloodType } from './bloodType';
import { PersonCareer } from './personCareer';
import { PersonImages } from './personImages';
import { PersonType } from './personType';
import { Stat } from './stat';


export interface PersonDetail { 
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
    summary: string;
    locked: boolean;
    /**
     * currently it\'s latest user comment time, it will be replaced by wiki modified date in the future
     */
    last_modified: string;
    /**
     * server parsed infobox, a map from key to string or tuple null if server infobox is not valid
     */
    infobox?: Array<object>;
    /**
     * parsed from wiki, maybe null
     */
    gender?: string;
    /**
     * parsed from wiki, maybe null, `1, 2, 3, 4` for `A, B, AB, O`
     */
    blood_type?: BloodType;
    /**
     * parsed from wiki, maybe `null`
     */
    birth_year?: number;
    /**
     * parsed from wiki, maybe `null`
     */
    birth_mon?: number;
    /**
     * parsed from wiki, maybe `null`
     */
    birth_day?: number;
    stat: Stat;
}
