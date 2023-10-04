import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { ArticleState } from 'entity/Article'
import { ArticleFeedState } from 'entity/ArticleFeed/type/state.type'
import { CounterState } from 'entity/Counter'
import { CountryState } from 'entity/Country'
import { CurrencyState } from 'entity/Currency'
import { ModalState } from 'entity/Modal'
import { ProfileState } from 'entity/Profile'
import { TagsState } from 'entity/Tags/type/state.type'
import { UserState } from 'entity/User'
import { AuthState } from 'feature/AuthByUserName'
import { CommentCreatorState } from 'feature/CommentCreator'
import { ProfileEditorState } from 'feature/ProfileEditor'
import { ScrollManagerState } from 'feature/ScrollManager'
import { CommentArticleListState } from 'widget/CommentArticleList'

export interface StateSchema {
  counter: CounterState
  user: UserState
  modal: ModalState
  country: CountryState
  currency: CurrencyState
  scrollManager: ScrollManagerState

  login?: AuthState
  profile?: ProfileState
  profileEditor?: ProfileEditorState
  article?: ArticleState
  articleFeed?: ArticleFeedState
  commentAticleList?: CommentArticleListState
  commentCreator?: CommentCreatorState
  tags?: TagsState
}
export type StateSchemaParital = DeepPartial<StateSchema>
export type ReducerListMapObject = ReducersMapObject<StateSchema>
export type ReducerPartial = DeepPartial<ReducerListMapObject>

export type StateSchemaKeys = keyof StateSchema
