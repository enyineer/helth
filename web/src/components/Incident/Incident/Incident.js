import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_INCIDENT_MUTATION = gql`
  mutation DeleteIncidentMutation($id: String!) {
    deleteIncident(id: $id) {
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

const Incident = ({ incident }) => {
  const [deleteIncident] = useMutation(DELETE_INCIDENT_MUTATION, {
    onCompleted: () => {
      toast.success('Incident deleted')
      navigate(routes.incidents())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete incident ' + id + '?')) {
      deleteIncident({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Incident {incident.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{incident.id}</td>
            </tr>
            <tr>
              <th>Service id</th>
              <td>{incident.serviceId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(incident.createdAt)}</td>
            </tr>
            <tr>
              <th>Closed</th>
              <td>{checkboxInputTag(incident.closed)}</td>
            </tr>
            <tr>
              <th>Closed at</th>
              <td>{timeTag(incident.closedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editIncident({ id: incident.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(incident.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Incident
