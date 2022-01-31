import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Incident/IncidentsCell'

const DELETE_INCIDENT_MUTATION = gql`
  mutation DeleteIncidentMutation($id: String!) {
    deleteIncident(id: $id) {
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

const IncidentsList = ({ incidents }) => {
  const [deleteIncident] = useMutation(DELETE_INCIDENT_MUTATION, {
    onCompleted: () => {
      toast.success('Incident deleted')
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
    if (confirm('Are you sure you want to delete incident ' + id + '?')) {
      deleteIncident({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Service id</th>
            <th>Created at</th>
            <th>Closed</th>
            <th>Closed at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id}>
              <td>{truncate(incident.id)}</td>
              <td>{truncate(incident.serviceId)}</td>
              <td>{timeTag(incident.createdAt)}</td>
              <td>{checkboxInputTag(incident.closed)}</td>
              <td>{timeTag(incident.closedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.incident({ id: incident.id })}
                    title={'Show incident ' + incident.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editIncident({ id: incident.id })}
                    title={'Edit incident ' + incident.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete incident ' + incident.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(incident.id)}
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

export default IncidentsList
