import { incidents } from './incidents'

describe('incidents', () => {
  scenario('returns all incidents', async (scenario) => {
    const result = await incidents()

    expect(result.length).toEqual(Object.keys(scenario.incident).length)
  })
})
