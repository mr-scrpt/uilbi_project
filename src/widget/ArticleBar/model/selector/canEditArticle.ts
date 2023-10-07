import { createSelector } from '@reduxjs/toolkit'
import { getArticleData } from 'entity/Article'
import { getUserAuthData } from 'entity/User'

export const canEditArticle = createSelector(
  getArticleData,
  getUserAuthData,
  (article, user) => {
    if (!article?.user || !user) {
      return false
    }
    console.log('art user', article, user)
    return article.user.id === user.id
  }
)
