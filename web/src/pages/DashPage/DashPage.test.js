import { render } from '@redwoodjs/testing/web'

import DashPage from './DashPage'

describe('DashPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashPage />)
    }).not.toThrow()
  })
})
