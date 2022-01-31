import { Link, routes } from '@redwoodjs/router'

import Incidents from 'src/components/Incident/Incidents'

export const QUERY = gql`
  query FindIncidents {
    incidents {
      id
      serviceId
      createdAt
      closed
      closedAt
      type
      message
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No incidents yet. '}
      <Link to={routes.newIncident()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ incidents }) => {
  return <Incidents incidents={incidents} />
}
