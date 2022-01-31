import { Link, routes } from '@redwoodjs/router'

import ReportComments from 'src/components/ReportComment/ReportComments'

export const QUERY = gql`
  query FindReportComments {
    reportComments {
      id
      incidentReportId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No reportComments yet. '}
      <Link to={routes.newReportComment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ reportComments }) => {
  return <ReportComments reportComments={reportComments} />
}
