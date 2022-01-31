import {
  services,
  service,
  createService,
  updateService,
  deleteService,
} from './services'

describe('services', () => {
  scenario('returns all services', async (scenario) => {
    const result = await services()

    expect(result.length).toEqual(Object.keys(scenario.service).length)
  })

  scenario('returns a single service', async (scenario) => {
    const result = await service({ id: scenario.service.one.id })

    expect(result).toEqual(scenario.service.one)
  })

  scenario('creates a service', async () => {
    const result = await createService({
      input: { name: 'String', description: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a service', async (scenario) => {
    const original = await service({ id: scenario.service.one.id })
    const result = await updateService({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a service', async (scenario) => {
    const original = await deleteService({ id: scenario.service.one.id })
    const result = await service({ id: original.id })

    expect(result).toEqual(null)
  })
})
