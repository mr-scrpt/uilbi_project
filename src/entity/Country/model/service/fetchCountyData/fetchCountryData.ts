import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from '@/app/provider/StoreProvider'
import { CountryData } from '@/entity/Country/type/country.type'

export const fetchCountryData = createAsyncThunk<
  CountryData[],
  void,
  ThunkConfigType<string>
>('country/fethcCountryData', async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const response = await extra.api.get<CountryData[]>('/country')

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('api-error-country-message')
  }
})
