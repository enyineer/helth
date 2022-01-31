import Incident from 'src/components/Incident/Incident'

export const QUERY = gql`
  query FindIncidentById($id: String!) {
    incident: incident(id: $id) {
      id
      serviceId
      createdAt
      closed
      closedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Incident not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ incident }) => {
  return <Incident incident={incident} />
}
