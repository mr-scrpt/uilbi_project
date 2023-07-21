import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Button', () => {
  test('should render', () => {
    const { container } = render(<Sidebar />)
    expect(container.querySelector('.sidebar')).toBeInTheDocument()
  })

  // test('have custom class', () => {
  //   const { container } = render(<Button className="testclass">Button</Button>)
  //   expect(container.getElementsByClassName('button')[0]).toHaveClass(
  //     'testclass'
  //   )
  // })
})
