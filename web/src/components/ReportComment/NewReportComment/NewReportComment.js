import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ReportCommentForm from 'src/components/ReportComment/ReportCommentForm'

const CREATE_REPORT_COMMENT_MUTATION = gql`
  mutation CreateReportCommentMutation($input: CreateReportCommentInput!) {
    createReportComment(input: $input) {
      id
    }
  }
`

const NewReportComment = () => {
  const [createReportComment, { loading, error }] = useMutation(
    CREATE_REPORT_COMMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ReportComment created')
        navigate(routes.reportComments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createReportComment({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ReportComment</h2>
      </header>
      <div className="rw-segment-main">
        <ReportCommentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewReportComment
