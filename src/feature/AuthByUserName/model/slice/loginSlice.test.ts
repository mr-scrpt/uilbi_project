import { DeepPartial } from '@reduxjs/toolkit'

import { loginByUserName } from '../service/login/login.thunk'
import { AuthState } from '../type/state.type'
import { loginAction, loginReducer } from './loginSlice'

describe('Login Slice', () => {
  test('should be set username', () => {
    const username = 'test name'
    const data = { username }
    const state: DeepPartial<AuthState> = { data }
    const result = loginReducer(
      state as AuthState,
      loginAction.setUserName(username)
    )
    expect(result.data).toEqual(data)
  })

  test('should be set password', () => {
    const password = '1234'
    const data = { password }
    const state: DeepPartial<AuthState> = { data }
    const result = loginReducer(
      state as AuthState,
      loginAction.setPassword(password)
    )
    console.log('result =>>', result)
    expect(result.data).toEqual(data)
  })

  test('should be pending', () => {
    const isLoading = false
    const action = { type: loginByUserName.pending.type }
    const data = { isLoading }
    const state: DeepPartial<AuthState> = data
    const result = loginReducer(state as AuthState, action)
    expect(result).toEqual({
      error: '',
      isLoading: true,
    })
  })

  test('should be error', () => {
    const error: string = ''
    const action = {
      type: loginByUserName.rejected.type,
      payload: 'some error',
    }
    const data = { error }
    const state: DeepPartial<AuthState> = data
    const result = loginReducer(state as AuthState, action)
    expect(result).toEqual({
      error: 'some error',
      isLoading: false,
    })
  })
})
