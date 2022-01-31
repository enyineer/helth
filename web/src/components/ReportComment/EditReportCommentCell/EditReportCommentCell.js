import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ReportCommentForm from 'src/components/ReportComment/ReportCommentForm'

export const QUERY = gql`
  query EditReportCommentById($id: String!) {
    reportComment: reportComment(id: $id) {
      id
      incidentReportId
    }
  }
`
const UPDATE_REPORT_COMMENT_MUTATION = gql`
  mutation UpdateReportCommentMutation(
    $id: String!
    $input: UpdateReportCommentInput!
  ) {
    updateReportComment(id: $id, input: $input) {
      id
      incidentReportId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ reportComment }) => {
  const [updateReportComment, { loading, error }] = useMutation(
    UPDATE_REPORT_COMMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ReportComment updated')
        navigate(routes.reportComments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateReportComment({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ReportComment {reportComment.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ReportCommentForm
          reportComment={reportComment}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
