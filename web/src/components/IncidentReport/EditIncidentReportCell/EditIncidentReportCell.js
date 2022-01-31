import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import IncidentReportForm from 'src/components/IncidentReport/IncidentReportForm'

export const QUERY = gql`
  query EditIncidentReportById($id: String!) {
    incidentReport: incidentReport(id: $id) {
      id
      serviceId
      message
      createdAt
      closed
      closedAt
    }
  }
`
const UPDATE_INCIDENT_REPORT_MUTATION = gql`
  mutation UpdateIncidentReportMutation(
    $id: String!
    $input: UpdateIncidentReportInput!
  ) {
    updateIncidentReport(id: $id, input: $input) {
      id
      serviceId
      message
      createdAt
      closed
      closedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ incidentReport }) => {
  const [updateIncidentReport, { loading, error }] = useMutation(
    UPDATE_INCIDENT_REPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('IncidentReport updated')
        navigate(routes.incidentReports())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateIncidentReport({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit IncidentReport {incidentReport.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <IncidentReportForm
          incidentReport={incidentReport}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
