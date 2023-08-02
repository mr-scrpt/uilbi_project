import { fireEvent, getByText, userEvent } from '@storybook/testing-library'
import { screen } from '@testing-library/react'
import { RenderComopletedComponent } from 'shared/lib/test/renderCompletedComponent'

import { Counter } from './Counter'
import cls from './Counter.module.scss'

describe('Counter.test', () => {
  test('Counter.test should be rendered', () => {
    const { container } = RenderComopletedComponent(<Counter />, {
      preloadedState: { counter: { value: 11 } },
    })

    const element = container.getElementsByClassName(cls.title)[0]
    const value = +element.textContent

    expect(11).toEqual(value)
  })

  test('Counter.test increment by click', async () => {
    const { container } = RenderComopletedComponent(<Counter />, {
      preloadedState: { counter: { value: 13 } },
    })

    const element = container.getElementsByClassName(cls.title)[0]
    //
    const elementIncrement = container.getElementsByClassName(cls.increment)[0]
    await userEvent.click(elementIncrement)

    const value = +element.textContent
    expect(14).toEqual(value)
  })

  test('Counter.test decrement by click', async () => {
    const { container } = RenderComopletedComponent(<Counter />, {
      preloadedState: { counter: { value: 13 } },
    })

    const element = container.getElementsByClassName(cls.title)[0]
    //
    const elementDecrement = container.getElementsByClassName(cls.decrement)[0]
    await userEvent.click(elementDecrement)

    const value = +element.textContent
    expect(12).toEqual(value)
  })
})
