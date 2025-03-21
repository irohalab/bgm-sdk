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


// May contain unused imports in some cases
// @ts-ignore
import type { Collection } from './collection';
// May contain unused imports in some cases
// @ts-ignore
import type { Images } from './images';
// May contain unused imports in some cases
// @ts-ignore
import type { Item } from './item';
// May contain unused imports in some cases
// @ts-ignore
import type { Rating } from './rating';
// May contain unused imports in some cases
// @ts-ignore
import type { SubjectType } from './subject-type';
// May contain unused imports in some cases
// @ts-ignore
import type { Tag } from './tag';

/**
 * 
 * @export
 * @interface Subject
 */
export interface Subject {
    /**
     * 
     * @type {number}
     * @memberof Subject
     */
    'id': number;
    /**
     * 
     * @type {SubjectType}
     * @memberof Subject
     */
    'type': SubjectType;
    /**
     * 
     * @type {string}
     * @memberof Subject
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Subject
     */
    'name_cn': string;
    /**
     * 
     * @type {string}
     * @memberof Subject
     */
    'summary': string;
    /**
     * 是否为书籍系列的主条目
     * @type {boolean}
     * @memberof Subject
     */
    'series': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Subject
     */
    'nsfw': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Subject
     */
    'locked': boolean;
    /**
     * air date in `YYYY-MM-DD` format
     * @type {string}
     * @memberof Subject
     */
    'date'?: string;
    /**
     * TV, Web, 欧美剧, DLC...
     * @type {string}
     * @memberof Subject
     */
    'platform': string;
    /**
     * 
     * @type {Images}
     * @memberof Subject
     */
    'images': Images;
    /**
     * 
     * @type {Array<Item>}
     * @memberof Subject
     */
    'infobox'?: Array<Item>;
    /**
     * 书籍条目的册数，由旧服务端从wiki中解析
     * @type {number}
     * @memberof Subject
     */
    'volumes': number;
    /**
     * 由旧服务端从wiki中解析，对于书籍条目为`话数`
     * @type {number}
     * @memberof Subject
     */
    'eps': number;
    /**
     * 数据库中的章节数量
     * @type {number}
     * @memberof Subject
     */
    'total_episodes': number;
    /**
     * 
     * @type {Rating}
     * @memberof Subject
     */
    'rating': Rating;
    /**
     * 
     * @type {Collection}
     * @memberof Subject
     */
    'collection': Collection;
    /**
     * 由维基人维护的 tag
     * @type {Array<string>}
     * @memberof Subject
     */
    'meta_tags': Array<string>;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof Subject
     */
    'tags': Array<Tag>;
}



