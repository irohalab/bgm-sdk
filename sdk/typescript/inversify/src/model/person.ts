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
export namespace Person {
}
