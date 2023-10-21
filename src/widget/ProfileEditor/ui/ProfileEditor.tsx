import {
  ProfileCard,
  fetchProfileData,
  profileReducer,
  selector as selectorProfile,
} from 'entity/Profile'
import { EditorBar } from 'feature/EditorBar'
import { selector as selectorProfileEditor } from 'feature/ProfileEditor'
import { getProfileEditorErrors } from 'feature/ProfileEditor/model/selector'
import { validateAndUpdateProfileData } from 'feature/ProfileEditor/model/service/validateAndUpdateProfile'
import {
  profileEditorAction,
  profileEditorReducer,
} from 'feature/ProfileEditor/model/slice/profileEditorSlice'
import { FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button } from 'shared/component/Button'
import { Loader } from 'shared/component/Loader'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { ProfileEditorProps } from '../type/props.type'
import cls from './ProfileEditor.module.scss'

export const ProfileEditor: FC<ProfileEditorProps> = (props) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const { setUserData, setEditable } = profileEditorAction
  const { t } = useTranslation('profile_editor')

  const profile = useSelector(selectorProfile.getProfileData)
  const isLoading = useSelector(selectorProfile.getProfileLoading)
  const error = useSelector(selectorProfile.getProfileError)

  const profileToEdit = useSelector(selectorProfileEditor.getProfileEditorData)
  const profileIsEditable = useSelector(
    selectorProfileEditor.getProfileEditorEditable
  )
  const validateErrors = useSelector(getProfileEditorErrors)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  }, [dispatch, id])

  const componentReducerList: ReducerList = {
    profile: profileReducer,
    profileEditor: profileEditorReducer,
  }

  const clsProfileEditor = classNames(cls.profileEditor, [className], {})

  const buttonEditHandler = useCallback(() => {
    if (profile) {
      dispatch(setEditable(true))
      dispatch(setUserData(profile))
    }
  }, [dispatch, setEditable, setUserData, profile])

  const buttonSaveHandler = useCallback(async () => {
    if (profileToEdit) {
      dispatch(validateAndUpdateProfileData(profileToEdit))
      // dispatch(setEditable(false))
    }
  }, [profileToEdit, dispatch])

  const buttonResetHandler = useCallback(() => {
    if (profile) {
      dispatch(setUserData(profile))
      dispatch(setEditable(false))
    }
  }, [profile, dispatch, setEditable, setUserData])

  const onChangeFirstName = useCallback(
    (value: string) => {
      if (profileToEdit) {
        dispatch(setUserData({ ...profileToEdit, firstname: value }))
      }
    },
    [dispatch, setUserData, profileToEdit]
  )

  const onChangeCountry = useCallback(
    (value: string) => {
      if (profileToEdit) {
        dispatch(setUserData({ ...profileToEdit, country: value }))
      }
    },
    [dispatch, setUserData, profileToEdit]
  )
  const onChangeCurrency = useCallback(
    (value: string) => {
      if (profileToEdit) {
        dispatch(setUserData({ ...profileToEdit, currency: value }))
      }
    },
    [dispatch, setUserData, profileToEdit]
  )

  const profileData = profileIsEditable ? profileToEdit : profile

  return (
    <DynamicModuleLoader reducerList={componentReducerList} removeAfterUnmount>
      <>
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        {!isLoading && !error && (
          <>
            <Button onClick={buttonEditHandler} disabled={profileIsEditable}>
              {t('profile-edit-button')}
            </Button>
            {validateErrors?.firstname}
            <ProfileCard
              className={clsProfileEditor}
              profile={profileData}
              error={error}
              isLoading={isLoading}
              isEditable={profileIsEditable}
              onChangeFirstName={onChangeFirstName}
              onChangeCountry={onChangeCountry}
              onChangeCurrency={onChangeCurrency}
              errorFirstName={validateErrors?.firstname}
            />
            {profileIsEditable && (
              <EditorBar
                save={buttonSaveHandler}
                reset={buttonResetHandler}
                // onSubmit={onSubmit}
              />
            )}
          </>
        )}
      </>
    </DynamicModuleLoader>
  )
}
