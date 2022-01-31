import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import IncidentForm from 'src/components/Incident/IncidentForm'

export const QUERY = gql`
  query EditIncidentById($id: String!) {
    incident: incident(id: $id) {
      id
      serviceId
      createdAt
      closed
      closedAt
    }
  }
`
const UPDATE_INCIDENT_MUTATION = gql`
  mutation UpdateIncidentMutation($id: String!, $input: UpdateIncidentInput!) {
    updateIncident(id: $id, input: $input) {
      id
      serviceId
      createdAt
      closed
      closedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ incident }) => {
  const [updateIncident, { loading, error }] = useMutation(
    UPDATE_INCIDENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Incident updated')
        navigate(routes.incidents())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateIncident({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Incident {incident.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <IncidentForm
          incident={incident}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
