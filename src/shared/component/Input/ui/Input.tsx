import { ChangeEvent, memo, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames'

import { InputModeEnum } from '../type/mode.enum'
import { InputProps } from '../type/props.type'
import { InputSizeEnum } from '../type/size.enum'
import { InputStateEnum } from '../type/state.enum'
import { InputViewEnum } from '../type/view.enum'
import cls from './style/Input.module.scss'

export const Input = memo((props: InputProps) => {
  const {
    className,
    view = InputViewEnum.PRIMARY,
    size = InputSizeEnum.L,
    state,
    placeholder,
    name,
    mode,
    onChange,
    readOnly,
    value,
    autoFocus,
    disabled,
  } = props

  const [stateLocal, setStateLocal] = useState(state)
  const [stateHovered, setStateHovered] = useState(false)
  const [stateFocused, setStateFocused] = useState(false)

  const [stateDisabled, setStateDisabled] = useState(false)

  useEffect(() => {
    if (
      disabled ||
      state === InputStateEnum.ERROR ||
      state === InputStateEnum.SUCCESS
    ) {
      setStateDisabled(true)
    }
  }, [state, stateDisabled, disabled])

  const clsInput = classNames(cls.input, [className], {
    [cls.view_primary]: view === InputViewEnum.PRIMARY,
    [cls.view_secondary]: view === InputViewEnum.SECONDARY,

    [cls.size_s]: size === InputSizeEnum.S,
    [cls.size_m]: size === InputSizeEnum.M,
    [cls.size_l]: size === InputSizeEnum.L,
    [cls.size_xl]: size === InputSizeEnum.XL,

    // [cls.state_error]: stateLocal === InputStateEnum.ERROR,
    // [cls.state_success]: stateLocal === InputStateEnum.SUCCESS,
    // [cls.state_disabled]: stateLocal === InputStateEnum.DISABLED,
    [cls.state_error]: stateLocal === InputStateEnum.ERROR,
    [cls.state_success]: stateLocal === InputStateEnum.SUCCESS,
    [cls.state_disabled]: disabled,

    [cls.state_hover]: stateHovered,
    [cls.state_focus]: stateFocused,

    [cls.width_available]: mode === InputModeEnum.WIDTH_AVAILABLE,
  })

  const clsBox = classNames(cls.box)
  const clsControl = classNames(cls.control)

  useEffect(() => {
    setStateLocal(state)
  }, [state])

  const onHover = () => {
    if (stateDisabled) return
    setStateHovered(true)
  }

  const onClearStateHover = () => {
    if (stateDisabled) return
    setStateHovered(false)
  }

  const onFocus = () => {
    if (stateDisabled) return
    setStateFocused(true)
    setStateHovered(false)
  }

  const onClearStateFocus = () => {
    if (stateDisabled) return
    setStateFocused(false)
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const currentRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!autoFocus) return
    currentRef.current?.focus()
  }, [autoFocus])

  return (
    <span className={clsInput}>
      <span className={clsBox}>
        <input
          className={clsControl}
          onFocus={onFocus}
          onBlur={onClearStateFocus}
          onMouseOver={onHover}
          onMouseLeave={onClearStateHover}
          onChange={onChangeHandler}
          placeholder={placeholder}
          name={name}
          value={value}
          ref={currentRef}
          readOnly={readOnly}
          disabled={disabled}
          // autoFocus={autoFocus}
        />
      </span>
    </span>
  )
})
