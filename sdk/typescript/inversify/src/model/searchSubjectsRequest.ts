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
import { SearchSubjectsRequestFilter } from './searchSubjectsRequestFilter';


export interface SearchSubjectsRequest { 
    keyword: string;
    /**
     * 排序规则  - `match` meilisearch 的默认排序，按照匹配程度 - `heat` 收藏人数 - `rank` 排名由高到低 - `score` 评分 
     */
    sort?: SearchSubjectsRequest.SortEnum;
    filter?: SearchSubjectsRequestFilter;
}
export namespace SearchSubjectsRequest {
    export type SortEnum = 'match' | 'heat' | 'rank' | 'score';
    export const SortEnum = {
        Match: 'match' as SortEnum,
        Heat: 'heat' as SortEnum,
        Rank: 'rank' as SortEnum,
        Score: 'score' as SortEnum
    }
}
