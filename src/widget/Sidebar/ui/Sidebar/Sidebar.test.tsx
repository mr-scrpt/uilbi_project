import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation'
import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Button', () => {
  test('should render', () => {
    const { container } = renderWithTranslation(<Sidebar />)
    expect(container.querySelector('.sidebar')).toBeInTheDocument()
  })

  test('open sidebar', () => {
    // TODO разобраться в тем, как проверить класс получаемый из пропсов
    // сейчас же компонент изолирован, а класс на поткрытие приходит из родителя
    const { container } = renderWithTranslation(<Sidebar />)
    screen.debug()
    const button = container.querySelector('.button_collapse')
    // const toggleBtn = screen.getByTestId('button')
    // const sidebar = container.querySelector('.sidebar')
    // fireEvent.click(toggleBtn)
    // console.log('====>>>> sidebar contains', sidebar.classList)
    // screen.debug()
    // expect(sidebar.classList.contains('sidebar')).toBe(true)
  })

  // test('have custom class', () => {
  //   const { container } = render(<Button className="testclass">Button</Button>)
  //   expect(container.getElementsByClassName('button')[0]).toHaveClass(
  //     'testclass'
  //   )
  // })
})
