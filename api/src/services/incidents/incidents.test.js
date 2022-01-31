import {
  incidents,
  incident,
  createIncident,
  updateIncident,
  deleteIncident,
} from './incidents'

describe('incidents', () => {
  scenario('returns all incidents', async (scenario) => {
    const result = await incidents()

    expect(result.length).toEqual(Object.keys(scenario.incident).length)
  })

  scenario('returns a single incident', async (scenario) => {
    const result = await incident({ id: scenario.incident.one.id })

    expect(result).toEqual(scenario.incident.one)
  })

  scenario('creates a incident', async (scenario) => {
    const result = await createIncident({
      input: { serviceId: scenario.incident.two.serviceId },
    })

    expect(result.serviceId).toEqual(scenario.incident.two.serviceId)
  })

  scenario('updates a incident', async (scenario) => {
    const original = await incident({ id: scenario.incident.one.id })
    const result = await updateIncident({
      id: original.id,
      input: { serviceId: scenario.incident.two.serviceId },
    })

    expect(result.serviceId).toEqual(scenario.incident.two.serviceId)
  })

  scenario('deletes a incident', async (scenario) => {
    const original = await deleteIncident({ id: scenario.incident.one.id })
    const result = await incident({ id: original.id })

    expect(result).toEqual(null)
  })
})
