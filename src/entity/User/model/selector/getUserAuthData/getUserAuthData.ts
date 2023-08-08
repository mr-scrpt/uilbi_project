import { RootStateType } from 'app/provider/StoreProvider'

export const getUserAuthData = (state: RootStateType) => state.user?.authData
