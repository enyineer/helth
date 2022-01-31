import { Link, routes } from '@redwoodjs/router'

import IncidentReports from 'src/components/IncidentReport/IncidentReports'

export const QUERY = gql`
  query FindIncidentReports {
    incidentReports {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No incidentReports yet. '}
      <Link to={routes.newIncidentReport()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ incidentReports }) => {
  return <IncidentReports incidentReports={incidentReports} />
}
