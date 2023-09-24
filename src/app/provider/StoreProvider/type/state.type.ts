import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { ArticleState } from 'entity/Article'
import { CounterState } from 'entity/Counter'
import { CountryState } from 'entity/Country'
import { CurrencyState } from 'entity/Currency'
import { ModalState } from 'entity/Modal'
import { ProfileState } from 'entity/Profile'
import { UserState } from 'entity/User'
import { AuthState } from 'feature/AuthByUserName'
import { CommentCreatorState } from 'feature/CommentCreator'
import { ProfileEditorState } from 'feature/ProfileEditor'
import { ScrollManagerState } from 'feature/ScrollManager'
import { CommentArticleListState } from 'widget/CommentArticleList'
import { FeedArticleState } from 'widget/FeedArticle'

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
  commentAticleList?: CommentArticleListState
  commentCreator?: CommentCreatorState
  feedArticle?: FeedArticleState
}
export type StateSchemaParital = DeepPartial<StateSchema>
export type ReducerListMapObject = ReducersMapObject<StateSchema>
export type ReducerPartial = DeepPartial<ReducerListMapObject>

export type StateSchemaKeys = keyof StateSchema
