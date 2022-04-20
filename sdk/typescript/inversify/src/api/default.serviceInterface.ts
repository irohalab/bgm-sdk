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
import { Headers } from '../Headers';
import { Observable } from 'rxjs';
import { CharacterDetail } from '../model/characterDetail';
import { CharacterPerson } from '../model/characterPerson';
import { CollectionStatusType } from '../model/collectionStatusType';
import { CollectionType } from '../model/collectionType';
import { DetailedRevision } from '../model/detailedRevision';
import { EpStatusType } from '../model/epStatusType';
import { EpType } from '../model/epType';
import { EpisodeDetail } from '../model/episodeDetail';
import { ErrorDetail } from '../model/errorDetail';
import { Index } from '../model/index';
import { InlineResponse200 } from '../model/inlineResponse200';
import { InlineResponse2001 } from '../model/inlineResponse2001';
import { InlineResponse2002 } from '../model/inlineResponse2002';
import { InlineResponse2003 } from '../model/inlineResponse2003';
import { InlineResponse2004 } from '../model/inlineResponse2004';
import { InlineResponse2005 } from '../model/inlineResponse2005';
import { InlineResponse2006 } from '../model/inlineResponse2006';
import { Me } from '../model/me';
import { PagedEpisode } from '../model/pagedEpisode';
import { PagedIndexSubject } from '../model/pagedIndexSubject';
import { PagedRevision } from '../model/pagedRevision';
import { PagedUserCollection } from '../model/pagedUserCollection';
import { PersonCharacter } from '../model/personCharacter';
import { PersonDetail } from '../model/personDetail';
import { PersonRevision } from '../model/personRevision';
import { PolApiV0ModelsRelatedSubject } from '../model/polApiV0ModelsRelatedSubject';
import { PolApiV0ModelsSubjectRelatedSubject } from '../model/polApiV0ModelsSubjectRelatedSubject';
import { RelatedCharacter } from '../model/relatedCharacter';
import { RelatedPerson } from '../model/relatedPerson';
import { ResponseGroup } from '../model/responseGroup';
import { StatusCode } from '../model/statusCode';
import { Subject1 } from '../model/subject1';
import { SubjectRevision } from '../model/subjectRevision';
import { SubjectType } from '../model/subjectType';
import { SubjectType1 } from '../model/subjectType1';
import { SubjectTypeName } from '../model/subjectTypeName';
import { User } from '../model/user';
import HttpResponse from '../HttpResponse';


export interface DefaultServiceInterface {
    /**
    * 批量更新收视进度
    * 
    * @param subjectId 条目 ID
    * @param watchedEps 如看到 123 话则 POST &#x60;123&#x60; &lt;br&gt; 书籍条目传 watched_eps 与 watched_vols 至少其一
    * @param watchedVols 如看到第 3 卷则 POST &#x60;3&#x60;, 仅对书籍条目有效
    */

    batchUpdateEpisodeStatusBySubjectId(subjectId: number, watchedEps: string, watchedVols?: string, observe?: 'body', headers?: Headers): Observable<StatusCode>;
    batchUpdateEpisodeStatusBySubjectId(subjectId: number, watchedEps: string, watchedVols?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<StatusCode>>;
    /**
    * 每日放送
    * 
    */

    getCalendar(observe?: 'body', headers?: Headers): Observable<Array<InlineResponse2004>>;
    getCalendar(observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<InlineResponse2004>>>;
    /**
    * Get Character Detail
    * cache with 60s
    * @param characterId 
    */

    getCharacterById(characterId: number, observe?: 'body', headers?: Headers): Observable<CharacterDetail>;
    getCharacterById(characterId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<CharacterDetail>>;
    /**
    * Get Character Revision
    * 
    * @param revisionId 
    */

    getCharacterRevisionByRevisionId(revisionId: number, observe?: 'body', headers?: Headers): Observable<DetailedRevision>;
    getCharacterRevisionByRevisionId(revisionId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<DetailedRevision>>;
    /**
    * Get Character Revisions
    * 
    * @param characterId 
    * @param limit 
    * @param offset 
    */

    getCharacterRevisions(characterId: number, limit?: number, offset?: number, observe?: 'body', headers?: Headers): Observable<PagedRevision>;
    getCharacterRevisions(characterId: number, limit?: number, offset?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<PagedRevision>>;
    /**
    * 获取指定条目收藏信息
    * 
    * @param subjectId 条目 ID
    */

    getCollectionBySubjectId(subjectId: number, observe?: 'body', headers?: Headers): Observable<InlineResponse2006>;
    getCollectionBySubjectId(subjectId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<InlineResponse2006>>;
    /**
    * Get Episode
    * 
    * @param episodeId 
    */

    getEpisodeById(episodeId: number, observe?: 'body', headers?: Headers): Observable<EpisodeDetail>;
    getEpisodeById(episodeId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<EpisodeDetail>>;
    /**
    * Get Episode Revision
    * 
    * @param revisionId 
    */

    getEpisodeRevisionByRevisionId(revisionId: number, observe?: 'body', headers?: Headers): Observable<DetailedRevision>;
    getEpisodeRevisionByRevisionId(revisionId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<DetailedRevision>>;
    /**
    * Get Episode Revisions
    * 
    * @param episodeId 
    * @param limit 
    * @param offset 
    */

    getEpisodeRevisions(episodeId: number, limit?: number, offset?: number, observe?: 'body', headers?: Headers): Observable<PagedRevision>;
    getEpisodeRevisions(episodeId: number, limit?: number, offset?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<PagedRevision>>;
    /**
    * 更新收视进度
    * 
    * @param id 章节 ID
    * @param status 收视类型，参考 [EpStatusType](#model-EpStatusType)
    */

    getEpisodeStatus(id: number, status: EpStatusType, observe?: 'body', headers?: Headers): Observable<StatusCode>;
    getEpisodeStatus(id: number, status: EpStatusType, observe?: 'response', headers?: Headers): Observable<HttpResponse<StatusCode>>;
    /**
    * Get Episodes
    * 
    * @param subjectId 
    * @param type 参照章节的&#x60;type&#x60;
    * @param limit 
    * @param offset 
    */

    getEpisodes(subjectId: number, type?: EpType, limit?: number, offset?: number, observe?: 'body', headers?: Headers): Observable<PagedEpisode>;
    getEpisodes(subjectId: number, type?: EpType, limit?: number, offset?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<PagedEpisode>>;
    /**
    * Get Index By Id
    * 
    * @param indexId 
    */

    getIndexById(indexId: number, observe?: 'body', headers?: Headers): Observable<Index>;
    getIndexById(indexId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Index>>;
    /**
    * Get Index Subjects
    * 
    * @param indexId 
    * @param type 
    * @param limit 
    * @param offset 
    */

    getIndexSubjectsByIndexId(indexId: number, type?: SubjectType1, limit?: number, offset?: number, observe?: 'body', headers?: Headers): Observable<PagedIndexSubject>;
    getIndexSubjectsByIndexId(indexId: number, type?: SubjectType1, limit?: number, offset?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<PagedIndexSubject>>;
    /**
    * Get Person
    * cache with 60s
    * @param personId 
    */

    getPersonById(personId: number, observe?: 'body', headers?: Headers): Observable<PersonDetail>;
    getPersonById(personId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<PersonDetail>>;
    /**
    * Get Person Revision
    * 
    * @param revisionId 
    */

    getPersonRevisionByRevisionId(revisionId: number, observe?: 'body', headers?: Headers): Observable<PersonRevision>;
    getPersonRevisionByRevisionId(revisionId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<PersonRevision>>;
    /**
    * Get Person Revisions
    * 
    * @param personId 
    * @param limit 
    * @param offset 
    */

    getPersonRevisions(personId: number, limit?: number, offset?: number, observe?: 'body', headers?: Headers): Observable<PagedRevision>;
    getPersonRevisions(personId: number, limit?: number, offset?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<PagedRevision>>;
    /**
    * Get Subject Characters
    * 
    * @param subjectId 
    */

    getRelatedCharactersBySubjectId(subjectId: number, observe?: 'body', headers?: Headers): Observable<Array<RelatedCharacter>>;
    getRelatedCharactersBySubjectId(subjectId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<RelatedCharacter>>>;
    /**
    * get character related persons
    * 
    * @param characterId 
    */

    getRelatedPersonsByCharacterId(characterId: number, observe?: 'body', headers?: Headers): Observable<Array<CharacterPerson>>;
    getRelatedPersonsByCharacterId(characterId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<CharacterPerson>>>;
    /**
    * get person related characters
    * 
    * @param personId 
    */

    getRelatedPersonsByPersonId(personId: number, observe?: 'body', headers?: Headers): Observable<Array<PersonCharacter>>;
    getRelatedPersonsByPersonId(personId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<PersonCharacter>>>;
    /**
    * Get Subject Persons
    * 
    * @param subjectId 
    */

    getRelatedPersonsBySubjectId(subjectId: number, observe?: 'body', headers?: Headers): Observable<Array<RelatedPerson>>;
    getRelatedPersonsBySubjectId(subjectId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<RelatedPerson>>>;
    /**
    * get character related subjects
    * 
    * @param characterId 
    */

    getRelatedSubjectsByCharacterId(characterId: number, observe?: 'body', headers?: Headers): Observable<Array<PolApiV0ModelsRelatedSubject>>;
    getRelatedSubjectsByCharacterId(characterId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<PolApiV0ModelsRelatedSubject>>>;
    /**
    * get person related subjects
    * 
    * @param personId 
    */

    getRelatedSubjectsByPersonId(personId: number, observe?: 'body', headers?: Headers): Observable<Array<PolApiV0ModelsRelatedSubject>>;
    getRelatedSubjectsByPersonId(personId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<PolApiV0ModelsRelatedSubject>>>;
    /**
    * Get Subject Relations
    * 
    * @param subjectId 
    */

    getRelatedSubjectsBySubjectId(subjectId: number, observe?: 'body', headers?: Headers): Observable<Array<PolApiV0ModelsSubjectRelatedSubject>>;
    getRelatedSubjectsBySubjectId(subjectId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<PolApiV0ModelsSubjectRelatedSubject>>>;
    /**
    * 条目搜索
    * 
    * @param keywords 关键词 &lt;br&gt; 需要 URL Encode
    * @param type 条目类型，参考 [SubjectType](#model-SubjectType)
    * @param responseGroup 返回数据大小，参考 [ResponseGroup](#model-ResponseGroup) &lt;br&gt; 默认为 small
    * @param start 开始条数
    * @param maxResults 每页条数 &lt;br&gt; 最多 25
    */

    getSearchSubjectBykeywords(keywords: string, type?: SubjectType, responseGroup?: ResponseGroup, start?: number, maxResults?: number, observe?: 'body', headers?: Headers): Observable<InlineResponse2005>;
    getSearchSubjectBykeywords(keywords: string, type?: SubjectType, responseGroup?: ResponseGroup, start?: number, maxResults?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<InlineResponse2005>>;
    /**
    * 获取条目
    * cache with 300s
    * @param subjectId 
    */

    getSubjectById(subjectId: number, observe?: 'body', headers?: Headers): Observable<Subject1>;
    getSubjectById(subjectId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Subject1>>;
    /**
    * Get Subject Revision
    * 
    * @param revisionId 
    */

    getSubjectRevisionByRevisionId(revisionId: number, observe?: 'body', headers?: Headers): Observable<SubjectRevision>;
    getSubjectRevisionByRevisionId(revisionId: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<SubjectRevision>>;
    /**
    * Get Subject Revisions
    * 
    * @param subjectId 
    * @param limit 
    * @param offset 
    */

    getSubjectRevisions(subjectId: number, limit?: number, offset?: number, observe?: 'body', headers?: Headers): Observable<PagedRevision>;
    getSubjectRevisions(subjectId: number, limit?: number, offset?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<PagedRevision>>;
    /**
    * Get User
    * 返回当前 Access Token 对应的用户信息
    */

    getUser(observe?: 'body', headers?: Headers): Observable<Me>;
    getUser(observe?: 'response', headers?: Headers): Observable<HttpResponse<Me>>;
    /**
    * 用户信息
    * 
    * @param username 用户名 &lt;br&gt; 也可使用 UID
    */

    getUserByUsername(username: string, observe?: 'body', headers?: Headers): Observable<User>;
    getUserByUsername(username: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<User>>;
    /**
    * 用户收藏统计
    * 
    * @param username 用户名 &lt;br&gt; 也可使用 UID
    * @param appId [https://bgm.tv/dev/app](https://bgm.tv/dev/app) 申请到的 App ID
    */

    getUserCollectionStatusByUsername(username: string, appId: string, observe?: 'body', headers?: Headers): Observable<Array<InlineResponse2002>>;
    getUserCollectionStatusByUsername(username: string, appId: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<InlineResponse2002>>>;
    /**
    * 用户收藏概览
    * 
    * @param username 用户名 &lt;br&gt; 也可使用 UID
    * @param subjectType 条目类型，详见 [SubjectTypeName](#model-SubjectTypeName)
    * @param appId [https://bgm.tv/dev/app](https://bgm.tv/dev/app) 申请到的 App ID
    * @param maxResults 显示条数 &lt;br&gt; 最多 25
    */

    getUserCollectionsBySubjectType(username: string, subjectType: SubjectTypeName, appId: string, maxResults?: number, observe?: 'body', headers?: Headers): Observable<Array<InlineResponse2001>>;
    getUserCollectionsBySubjectType(username: string, subjectType: SubjectTypeName, appId: string, maxResults?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<InlineResponse2001>>>;
    /**
    * 用户收藏
    * 
    * @param username 用户名 &lt;br&gt; 也可使用 UID
    * @param cat 收藏类型 &lt;br&gt; watching &#x3D; 在看的动画与三次元条目 &lt;br&gt; all_watching &#x3D; 在看的动画三次元与书籍条目
    * @param ids 收藏条目 ID &lt;br&gt; 批量查询收藏状态，将条目 ID 以半角逗号分隔，如 1,2,4,6
    * @param responseGroup medium / small &lt;br&gt; 默认为 medium。small 时不返回条目详细信息
    */

    getUserCollectionsByUsername(username: string, cat: 'watching' | 'all_watching', ids?: string, responseGroup?: 'small' | 'medium', observe?: 'body', headers?: Headers): Observable<Array<InlineResponse200>>;
    getUserCollectionsByUsername(username: string, cat: 'watching' | 'all_watching', ids?: string, responseGroup?: 'small' | 'medium', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<InlineResponse200>>>;
    /**
    * 获取用户收藏
    * 获取对应用户的收藏，查看私有收藏需要access token。
    * @param username 设置了 username 后无法使用UID
    * @param subjectType 条目类型，默认为全部  具体含义见 [SubjectType](#model-SubjectType)
    * @param type 收藏类型，默认为全部  具体含义见 [CollectionType](#model-CollectionType)
    * @param limit 
    * @param offset 
    */

    getUserCollectionsByUsername1(username: string, subjectType?: SubjectType1, type?: CollectionType, limit?: number, offset?: number, observe?: 'body', headers?: Headers): Observable<PagedUserCollection>;
    getUserCollectionsByUsername1(username: string, subjectType?: SubjectType1, type?: CollectionType, limit?: number, offset?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<PagedUserCollection>>;
    /**
    * 用户收视进度
    * 
    * @param username 用户名 &lt;br&gt; 也可使用 UID
    * @param subjectId 条目 ID &lt;br&gt; 获取指定条目收视进度
    */

    getUserProgressByUsername(username: string, subjectId?: number, observe?: 'body', headers?: Headers): Observable<Array<InlineResponse2003>>;
    getUserProgressByUsername(username: string, subjectId?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<InlineResponse2003>>>;
    /**
    * 管理收藏
    * 管理收藏。Content-type必须为multipart/form-data或application/x-www-form-urlencoded，参数都得放在body里。
    * @param subjectId 条目 ID
    * @param action 收藏动作 &lt;br&gt; create &#x3D; 添加收藏 &lt;br&gt; update &#x3D; 更新收藏 &lt;br&gt; 可以统一使用 &#x60;update&#x60;，系统会自动判断需要新建还是更新收藏
    * @param status 
    * @param comment 简评
    * @param tags 标签 &lt;br&gt; 以半角空格分割
    * @param rating 评分 &lt;br&gt; 1-10 &lt;br&gt; 不填默认重置为未评分
    * @param privacy 收藏隐私 &lt;br&gt; 0 &#x3D; 公开 &lt;br&gt; 1 &#x3D; 私密 &lt;br&gt; 不填默认为0
    */

    updateCollectionBySubjectIdWithAction(subjectId: number, action: 'create' | 'update', status: CollectionStatusType, comment?: string, tags?: string, rating?: number, privacy?: number, observe?: 'body', headers?: Headers): Observable<InlineResponse2006>;
    updateCollectionBySubjectIdWithAction(subjectId: number, action: 'create' | 'update', status: CollectionStatusType, comment?: string, tags?: string, rating?: number, privacy?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<InlineResponse2006>>;
    /**
    * 更新收视进度
    * 
    * @param id 章节 ID
    * @param status 收视类型，参考 [EpStatusType](#model-EpStatusType)
    * @param epId 使用 POST 批量更新 &lt;br&gt; 将章节以半角逗号分隔，如 &#x60;3697,3698,3699&#x60;。请求时 URL 中的 ep_id 为最后一个章节 ID
    */

    updateEpisodeStatus(id: number, status: EpStatusType, epId?: string, observe?: 'body', headers?: Headers): Observable<StatusCode>;
    updateEpisodeStatus(id: number, status: EpStatusType, epId?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<StatusCode>>;
}
