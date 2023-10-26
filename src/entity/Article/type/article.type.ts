import { User } from '@/entity/User'

export enum ArticleBlockVariantEnum {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export interface IArticleBase {
  id: string
  variant: ArticleBlockVariantEnum
}

export interface IArticleBlockCode extends IArticleBase {
  variant: ArticleBlockVariantEnum.CODE
  code: string
}

export interface IArticleBlockImg extends IArticleBase {
  variant: ArticleBlockVariantEnum.IMAGE
  src: string
  title: string
}

export interface IArticleBlockText extends IArticleBase {
  variant: ArticleBlockVariantEnum.TEXT
  paragraphs: string[]
  title?: string
}

export type ArticleBlockVariantType =
  | IArticleBlockCode
  | IArticleBlockImg
  | IArticleBlockText

export enum ArticleTagEnum {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export interface IArticle {
  id: string
  user: User
  tagsId: string[]
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  blocks: ArticleBlockVariantType[]
}
