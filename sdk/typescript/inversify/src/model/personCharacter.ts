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
import { CharacterType } from './characterType';
import { PersonImages } from './personImages';


export interface PersonCharacter { 
    id: number;
    name: string;
    /**
     * 角色，机体，舰船，组织...
     */
    type: CharacterType;
    /**
     * object with some size of images, this object maybe `null`
     */
    images?: PersonImages | null;
    subject_id: number;
    subject_name: string;
    subject_name_cn: string;
}
