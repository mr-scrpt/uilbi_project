import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import { ButtonViewEnum } from '../type/view.enum'
import { ButtonSizeEnum } from '../type/size.enum'

describe('Button', () => {
  test('should render', () => {
    render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  test('have custom class', () => {
    const { container } = render(<Button className="testclass">Button</Button>)
    expect(container.getElementsByClassName('button')[0]).toHaveClass(
      'testclass'
    )
  })

  test('have view class', () => {
    const { container } = render(
      <Button className={ButtonViewEnum.PRIMARY}>Button</Button>
    )
    // screen.debug()
    expect(container.getElementsByClassName('button')[0]).toHaveClass(
      ButtonViewEnum.PRIMARY
    )
  })
  test('have size class', () => {
    const { container } = render(
      <Button className={ButtonSizeEnum.XL}>Button</Button>
    )
    // screen.debug()
    expect(container.getElementsByClassName('button')[0]).toHaveClass(
      ButtonSizeEnum.XL
    )
  })
})
