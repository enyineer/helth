import IncidentReport from 'src/components/IncidentReport/IncidentReport'

export const QUERY = gql`
  query FindIncidentReportById($id: String!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>IncidentReport not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ incidentReport }) => {
  return <IncidentReport incidentReport={incidentReport} />
}
