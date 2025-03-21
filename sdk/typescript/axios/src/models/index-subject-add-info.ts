/* tslint:disable */
/* eslint-disable */
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



/**
 * 新增某条目到目录的请求信息
 * @export
 * @interface IndexSubjectAddInfo
 */
export interface IndexSubjectAddInfo {
    /**
     * 
     * @type {number}
     * @memberof IndexSubjectAddInfo
     */
    'subject_id'?: number;
    /**
     * 排序条件，越小越靠前
     * @type {number}
     * @memberof IndexSubjectAddInfo
     */
    'sort'?: number;
    /**
     * 
     * @type {string}
     * @memberof IndexSubjectAddInfo
     */
    'comment'?: string;
}

