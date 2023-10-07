import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { IArticle } from 'entity/Article'

export const fetchArticleRecomended = createAsyncThunk<
  IArticle[],
  void,
  ThunkConfigType<string>
>('recomendedArticle/fetchRecomendedArticle', async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI

  try {
    const response = await extra.api.get<IArticle[]>('/articles', {
      params: {
        _limit: 4,
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
