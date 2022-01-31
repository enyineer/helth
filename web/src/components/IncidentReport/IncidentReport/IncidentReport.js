import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_INCIDENT_REPORT_MUTATION = gql`
  mutation DeleteIncidentReportMutation($id: String!) {
    deleteIncidentReport(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const IncidentReport = ({ incidentReport }) => {
  const [deleteIncidentReport] = useMutation(DELETE_INCIDENT_REPORT_MUTATION, {
    onCompleted: () => {
      toast.success('IncidentReport deleted')
      navigate(routes.incidentReports())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete incidentReport ' + id + '?')) {
      deleteIncidentReport({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            IncidentReport {incidentReport.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{incidentReport.id}</td>
            </tr>
            <tr>
              <th>Service id</th>
              <td>{incidentReport.serviceId}</td>
            </tr>
            <tr>
              <th>Message</th>
              <td>{incidentReport.message}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(incidentReport.createdAt)}</td>
            </tr>
            <tr>
              <th>Closed</th>
              <td>{checkboxInputTag(incidentReport.closed)}</td>
            </tr>
            <tr>
              <th>Closed at</th>
              <td>{timeTag(incidentReport.closedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editIncidentReport({ id: incidentReport.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(incidentReport.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default IncidentReport
