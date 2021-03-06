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
 * 响应状态（HTTP 状态码都为 200）
 */
export interface StatusCode { 
    /**
     * 当前请求的地址
     */
    request?: string;
    /**
     * 状态码 <br> 200 OK <br> 202 Accepted <br> 304 Not Modified <br> 30401 Not Modified: Collection already exists <br> 400 Bad Request <br> 40001 Error: Nothing found with that ID <br> 401 Unauthorized <br> 40101 Error: Auth failed over 5 times <br> 40102 Error: Username is not an Email address <br> 405 Method Not Allowed <br> 404 Not Found
     */
    code?: StatusCode.CodeEnum;
    /**
     * 状态信息
     */
    error?: string;
}
export namespace StatusCode {
    export type CodeEnum = 200 | 202 | 304 | 30401 | 400 | 40001 | 401 | 40101 | 40102 | 405 | 404;
    export const CodeEnum = {
        NUMBER_200: 200 as CodeEnum,
        NUMBER_202: 202 as CodeEnum,
        NUMBER_304: 304 as CodeEnum,
        NUMBER_30401: 30401 as CodeEnum,
        NUMBER_400: 400 as CodeEnum,
        NUMBER_40001: 40001 as CodeEnum,
        NUMBER_401: 401 as CodeEnum,
        NUMBER_40101: 40101 as CodeEnum,
        NUMBER_40102: 40102 as CodeEnum,
        NUMBER_405: 405 as CodeEnum,
        NUMBER_404: 404 as CodeEnum
    }
}
