import axios from 'axios'
import { ModalNameEnum, modalAction } from 'entity/Modal'
import { userAction } from 'entity/User'
import { AsyncThunk } from 'shared/lib/test'

import { loginByUserName } from './login.thunk'

jest.mock('axios')

const mockAxios = jest.mocked(axios)

describe('getLoginError', () => {
  test('should post method been called', async () => {
    const userData = { username: 'test', id: '123' }
    const thunk = new AsyncThunk(loginByUserName)
    thunk.api.post.mockResolvedValue(
      Promise.resolve({
        data: userData,
      })
    )

    await thunk.callThunk({
      username: 'test',
      password: 'test',
    })

    expect(mockAxios.post).toHaveBeenCalled()
  })

  test('should have fulfilled status', async () => {
    const userData = { username: 'test', id: '123' }
    const thunk = new AsyncThunk(loginByUserName)
    thunk.api.post.mockResolvedValue(
      Promise.resolve({
        data: userData,
      })
    )
    const result = await thunk.callThunk({
      username: 'test',
      password: 'test',
    })

    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(userData)
  })

  test('should been return rejected status', async () => {
    const thunk = new AsyncThunk(loginByUserName)
    thunk.api.post.mockResolvedValue(
      Promise.resolve({
        status: 403,
      })
    )

    const result = await thunk.callThunk({
      username: 'test',
      password: 'test',
    })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('api-error-login-message')
  })

  test('should been called dispatch inside thunk => set auth data', async () => {
    const userData = { username: 'test', id: '123' }
    const thunk = new AsyncThunk(loginByUserName)
    thunk.api.post.mockResolvedValue(
      Promise.resolve({
        data: userData,
      })
    )

    await thunk.callThunk({
      username: 'test',
      password: 'test',
    })

    expect(thunk.dispatch).toHaveBeenCalledWith(userAction.setAuth(userData))
  })

  test('should been called dispatch inside thunk => set modal data', async () => {
    const userData = { username: 'test', id: '123' }
    const thunk = new AsyncThunk(loginByUserName)
    thunk.api.post.mockResolvedValue(
      Promise.resolve({
        data: userData,
      })
    )

    await thunk.callThunk({
      username: 'test',
      password: 'test',
    })

    expect(thunk.dispatch).toHaveBeenCalledWith(
      modalAction.closeModal({ name: ModalNameEnum.LOGIN })
    )
  })
})
