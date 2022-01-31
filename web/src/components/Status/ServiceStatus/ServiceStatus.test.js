import { render } from '@redwoodjs/testing/web'

import ServiceStatus from './ServiceStatus'

describe('ServiceStatus', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServiceStatus />)
    }).not.toThrow()
  })
})
