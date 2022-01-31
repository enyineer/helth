import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/ReportComment/ReportCommentsCell'

const DELETE_REPORT_COMMENT_MUTATION = gql`
  mutation DeleteReportCommentMutation($id: String!) {
    deleteReportComment(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ReportCommentsList = ({ reportComments }) => {
  const [deleteReportComment] = useMutation(DELETE_REPORT_COMMENT_MUTATION, {
    onCompleted: () => {
      toast.success('ReportComment deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete reportComment ' + id + '?')) {
      deleteReportComment({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Incident report id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {reportComments.map((reportComment) => (
            <tr key={reportComment.id}>
              <td>{truncate(reportComment.id)}</td>
              <td>{truncate(reportComment.incidentReportId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.reportComment({ id: reportComment.id })}
                    title={'Show reportComment ' + reportComment.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editReportComment({ id: reportComment.id })}
                    title={'Edit reportComment ' + reportComment.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete reportComment ' + reportComment.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(reportComment.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReportCommentsList
