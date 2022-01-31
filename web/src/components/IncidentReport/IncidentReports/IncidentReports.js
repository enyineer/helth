import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/IncidentReport/IncidentReportsCell'

const DELETE_INCIDENT_REPORT_MUTATION = gql`
  mutation DeleteIncidentReportMutation($id: String!) {
    deleteIncidentReport(id: $id) {
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

const IncidentReportsList = ({ incidentReports }) => {
  const [deleteIncidentReport] = useMutation(DELETE_INCIDENT_REPORT_MUTATION, {
    onCompleted: () => {
      toast.success('IncidentReport deleted')
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
    if (confirm('Are you sure you want to delete incidentReport ' + id + '?')) {
      deleteIncidentReport({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Service id</th>
            <th>Message</th>
            <th>Created at</th>
            <th>Closed</th>
            <th>Closed at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {incidentReports.map((incidentReport) => (
            <tr key={incidentReport.id}>
              <td>{truncate(incidentReport.id)}</td>
              <td>{truncate(incidentReport.serviceId)}</td>
              <td>{truncate(incidentReport.message)}</td>
              <td>{timeTag(incidentReport.createdAt)}</td>
              <td>{checkboxInputTag(incidentReport.closed)}</td>
              <td>{timeTag(incidentReport.closedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.incidentReport({ id: incidentReport.id })}
                    title={
                      'Show incidentReport ' + incidentReport.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editIncidentReport({ id: incidentReport.id })}
                    title={'Edit incidentReport ' + incidentReport.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete incidentReport ' + incidentReport.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(incidentReport.id)}
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

export default IncidentReportsList
