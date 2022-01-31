import ServiceStatus from '../ServiceStatus/ServiceStatus'

export const QUERY = gql`
  query FindServicesWithOpenIncidents {
    servicesWithOpenIncidents {
      id
      name
      description
      incidents {
        id
        type
        message
        createdAt
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ servicesWithOpenIncidents }) => {
  let rows = []
  for (let i = 0; i < servicesWithOpenIncidents.length; i++) {
    rows.push(<ServiceStatus service={servicesWithOpenIncidents[i]} key={i} />)
  }
  return <div>{rows}</div>
}
