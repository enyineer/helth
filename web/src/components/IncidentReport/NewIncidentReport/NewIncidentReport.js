import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import IncidentReportForm from 'src/components/IncidentReport/IncidentReportForm'

const CREATE_INCIDENT_REPORT_MUTATION = gql`
  mutation CreateIncidentReportMutation($input: CreateIncidentReportInput!) {
    createIncidentReport(input: $input) {
      id
    }
  }
`

const NewIncidentReport = () => {
  const [createIncidentReport, { loading, error }] = useMutation(
    CREATE_INCIDENT_REPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('IncidentReport created')
        navigate(routes.incidentReports())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createIncidentReport({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New IncidentReport</h2>
      </header>
      <div className="rw-segment-main">
        <IncidentReportForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewIncidentReport
