import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { CommentType } from 'entity/Comment'
import { AddCommentType } from 'feature/CommentCreator/type/action.type'

export const addComment = createAsyncThunk<
  CommentType,
  AddCommentType,
  ThunkConfigType<string>
>('commentCreator/addComment', async (comment, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI

  try {
    const { data } = await extra.api.post<CommentType>('/comments', comment)
    if (!data) {
      throw new Error('no comment add')
    }
    return data
  } catch (e) {
    console.log('error', e)
    return rejectWithValue('error-add-comment')
  }
})
