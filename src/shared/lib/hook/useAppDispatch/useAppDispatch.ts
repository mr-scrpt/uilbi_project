import { AppDispatchType } from 'app/provider/StoreProvider/type/dispatch.type'
import { useDispatch } from 'react-redux'

export const useAppDispatch: () => AppDispatchType = useDispatch
