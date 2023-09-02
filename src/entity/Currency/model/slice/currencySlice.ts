import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CountryData } from 'entity/Country/type/country.type'

import { CurrencyState } from '../../type/state.type'
import { fetchCurrencyData } from '../service/fetchCurrencyData/fetchCurrencyData'

const initialState: CurrencyState = {
  data: [],
  isLoading: false,
  error: undefined,
}

export const currencySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencyData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(
      fetchCurrencyData.fulfilled,
      (state, action: PayloadAction<CountryData[]>) => {
        state.isLoading = false
        state.error = undefined

        state.data = action.payload
      }
    )
    builder.addCase(fetchCurrencyData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: currencyAction } = currencySlice
export const { reducer: currencyReducer } = currencySlice
