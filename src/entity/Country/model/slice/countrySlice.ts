import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CountryData } from '@/entity/Country/type/country.type'

import { CountryState } from '../../type/state.type'
import { fetchCountryData } from '../service/fetchCountyData/fetchCountryData'

const initialState: CountryState = {
  data: [],
  isLoading: false,
  error: undefined,
}

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountryData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(
      fetchCountryData.fulfilled,
      (state, action: PayloadAction<CountryData[]>) => {
        state.isLoading = false
        state.error = undefined

        state.data = action.payload
      }
    )
    builder.addCase(fetchCountryData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: countryAction } = countrySlice
export const { reducer: countryReducer } = countrySlice
