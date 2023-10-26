import { userEvent } from '@storybook/testing-library'
import { fireEvent, screen } from '@testing-library/react'
import { RenderComopletedComponent } from '@/shared/lib/test/renderCompletedComponent'

import { Sidebar } from './Sidebar'
import cls from './Sidebar.module.scss'

describe('Button', () => {
  test('should render', () => {
    const { container } = RenderComopletedComponent(<Sidebar />)

    expect(container.querySelector('.sidebar')).toBeInTheDocument()
  })

  test('open sidebar', async () => {
    const { container } = RenderComopletedComponent(
      <Sidebar className="boxSidebar_collapse" />
    )
    const sidebar = container.querySelector('.sidebar')
    const control = container.querySelector(cls.button)
    expect(control).toBeInTheDocument()
    // fireEvent.click(control)
    expect(sidebar).toHaveClass('boxSidebar_collapse')
  })
})
