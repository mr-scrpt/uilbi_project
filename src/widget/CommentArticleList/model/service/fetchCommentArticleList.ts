import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { CommentType } from 'entity/Comment'

export const fetchCommentArticleListById = createAsyncThunk<
  CommentType[],
  string | undefined,
  ThunkConfigType<string>
>('commentList/fetchCommentArticleListById', async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI
  if (!articleId) {
    rejectWithValue('error')
  }

  try {
    const response = await extra.api.get<CommentType[]>('/comments', {
      params: {
        articleId,
        _expand: 'user',
      },
    })
    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
