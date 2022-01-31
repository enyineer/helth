import ReportComment from 'src/components/ReportComment/ReportComment'

export const QUERY = gql`
  query FindReportCommentById($id: String!) {
    reportComment: reportComment(id: $id) {
      id
      incidentReportId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ReportComment not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ reportComment }) => {
  return <ReportComment reportComment={reportComment} />
}
