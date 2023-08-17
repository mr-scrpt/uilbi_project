import { AppDispatchType } from 'app/provider/StoreProvider'
import { useDispatch } from 'react-redux'

export const useAppDispatch: () => AppDispatchType = useDispatch
