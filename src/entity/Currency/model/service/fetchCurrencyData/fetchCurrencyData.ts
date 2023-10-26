import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from '@/app/provider/StoreProvider'

import { CurrencyData } from '../../../type/currency.type'

export const fetchCurrencyData = createAsyncThunk<
  CurrencyData[],
  void,
  ThunkConfigType<string>
>('currency/fetchCurrencyData', async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const response = await extra.api.get<CurrencyData[]>('/currency')

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('api-error-currency-message')
  }
})
