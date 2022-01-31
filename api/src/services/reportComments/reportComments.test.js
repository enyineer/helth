import {
  reportComments,
  reportComment,
  createReportComment,
  updateReportComment,
  deleteReportComment,
} from './reportComments'

describe('reportComments', () => {
  scenario('returns all reportComments', async (scenario) => {
    const result = await reportComments()

    expect(result.length).toEqual(Object.keys(scenario.reportComment).length)
  })

  scenario('returns a single reportComment', async (scenario) => {
    const result = await reportComment({ id: scenario.reportComment.one.id })

    expect(result).toEqual(scenario.reportComment.one)
  })

  scenario('creates a reportComment', async (scenario) => {
    const result = await createReportComment({
      input: { incidentReportId: scenario.reportComment.two.incidentReportId },
    })

    expect(result.incidentReportId).toEqual(
      scenario.reportComment.two.incidentReportId
    )
  })

  scenario('updates a reportComment', async (scenario) => {
    const original = await reportComment({ id: scenario.reportComment.one.id })
    const result = await updateReportComment({
      id: original.id,
      input: { incidentReportId: scenario.reportComment.two.incidentReportId },
    })

    expect(result.incidentReportId).toEqual(
      scenario.reportComment.two.incidentReportId
    )
  })

  scenario('deletes a reportComment', async (scenario) => {
    const original = await deleteReportComment({
      id: scenario.reportComment.one.id,
    })

    const result = await reportComment({ id: original.id })

    expect(result).toEqual(null)
  })
})
