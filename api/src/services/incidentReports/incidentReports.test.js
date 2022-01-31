import {
  incidentReports,
  incidentReport,
  createIncidentReport,
  updateIncidentReport,
  deleteIncidentReport,
} from './incidentReports'

describe('incidentReports', () => {
  scenario('returns all incidentReports', async (scenario) => {
    const result = await incidentReports()

    expect(result.length).toEqual(Object.keys(scenario.incidentReport).length)
  })

  scenario('returns a single incidentReport', async (scenario) => {
    const result = await incidentReport({
      id: scenario.incidentReport.one.id,
    })

    expect(result).toEqual(scenario.incidentReport.one)
  })

  scenario('creates a incidentReport', async (scenario) => {
    const result = await createIncidentReport({
      input: {
        serviceId: scenario.incidentReport.two.serviceId,
        message: 'String',
      },
    })

    expect(result.serviceId).toEqual(scenario.incidentReport.two.serviceId)
    expect(result.message).toEqual('String')
  })

  scenario('updates a incidentReport', async (scenario) => {
    const original = await incidentReport({
      id: scenario.incidentReport.one.id,
    })

    const result = await updateIncidentReport({
      id: original.id,
      input: { message: 'String2' },
    })

    expect(result.message).toEqual('String2')
  })

  scenario('deletes a incidentReport', async (scenario) => {
    const original = await deleteIncidentReport({
      id: scenario.incidentReport.one.id,
    })

    const result = await incidentReport({ id: original.id })

    expect(result).toEqual(null)
  })
})
