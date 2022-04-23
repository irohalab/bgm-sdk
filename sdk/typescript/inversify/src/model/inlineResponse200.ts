/**
 * Bangumi API
 * 你可以在 <https://api.bgm.tv/v0/oauth/> 生成一个 Access Token  ## 建议客户端开发者指定一个带有 APP 名称和版本的 User Agent，而非使用 HTTP 请求库默认的 UA  各种请求库的默认 UA 在未来可能会被禁用。 
 *
 * The version of the OpenAPI document: 2022-04-23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SubjectBase } from './subjectBase';
import { SubjectCollection } from './subjectCollection';


export interface InlineResponse200 { 
    /**
     * 番剧标题
     */
    name?: string;
    /**
     * 章节 ID
     */
    subject_id?: number;
    /**
     * 完成话数
     */
    ep_status?: number;
    /**
     * 完成卷数（书籍）
     */
    vol_status?: any | null;
    /**
     * 上次更新时间
     */
    lasttouch?: number;
    subject?: SubjectBase & object | null;
}
