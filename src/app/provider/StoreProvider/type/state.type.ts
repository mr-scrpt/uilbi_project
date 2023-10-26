import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { ArticleFeedState, ArticleState } from '@/entity/Article'
// import { ArticleRecomendedState } from 'entity/ArticleRecomended'
import { CounterState } from '@/entity/Counter'
import { CountryState } from '@/entity/Country'
import { CurrencyState } from '@/entity/Currency'
import { ModalState } from '@/entity/Modal'
import { ProfileState } from '@/entity/Profile'
import { TagsState } from '@/entity/Tags/type/state.type'
import { UserState } from '@/entity/User'
import { AuthState } from '@/feature/AuthByUserName'
import { CommentCreatorState } from '@/feature/CommentCreator'
import { ProfileEditorState } from '@/feature/ProfileEditor'
import { ScrollManagerState } from '@/feature/ScrollManager'
import { rtkApi } from '@/shared/api/rtkApi'
import { CommentArticleListState } from '@/widget/CommentArticleList'

export interface StateSchema {
  counter: CounterState
  user: UserState
  modal: ModalState
  country: CountryState
  currency: CurrencyState
  scrollManager: ScrollManagerState
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  login?: AuthState
  profile?: ProfileState
  profileEditor?: ProfileEditorState
  article?: ArticleState
  articleFeed?: ArticleFeedState
  // articleRecomended?: ArticleRecomendedState
  commentAticleList?: CommentArticleListState
  commentCreator?: CommentCreatorState
  tags?: TagsState
}
export type StateSchemaParital = DeepPartial<StateSchema>
export type ReducerListMapObject = ReducersMapObject<StateSchema>
export type ReducerPartial = DeepPartial<ReducerListMapObject>

export type StateSchemaKeys = keyof StateSchema
