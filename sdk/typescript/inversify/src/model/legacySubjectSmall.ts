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
import { LegacySubjectSmallCollection } from './legacySubjectSmallCollection';
import { LegacySubjectSmallImages } from './legacySubjectSmallImages';
import { LegacySubjectSmallRating } from './legacySubjectSmallRating';


export interface LegacySubjectSmall { 
    /**
     * 条目 ID
     */
    id?: number;
    /**
     * 条目地址
     */
    url?: string;
    /**
     * 条目类型 - `1` 为 书籍 - `2` 为 动画 - `3` 为 音乐 - `4` 为 游戏 - `6` 为 三次元  没有 `5`
     */
    type?: LegacySubjectSmall.TypeEnum;
    /**
     * 条目名称
     */
    name?: string;
    /**
     * 条目中文名称
     */
    name_cn?: string;
    /**
     * 剧情简介
     */
    summary?: string;
    /**
     * 放送开始日期
     */
    air_date?: string;
    /**
     * 放送星期
     */
    air_weekday?: number;
    images?: LegacySubjectSmallImages;
    /**
     * 话数
     */
    eps?: number;
    /**
     * 话数
     */
    eps_count?: number;
    rating?: LegacySubjectSmallRating;
    /**
     * 排名
     */
    rank?: number;
    collection?: LegacySubjectSmallCollection;
}
export namespace LegacySubjectSmall {
    export type TypeEnum = 1 | 2 | 3 | 4 | 6;
    export const TypeEnum = {
        Book: 1 as TypeEnum,
        Anime: 2 as TypeEnum,
        Music: 3 as TypeEnum,
        Game: 4 as TypeEnum,
        Real: 6 as TypeEnum
    }
}
