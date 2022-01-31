import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import IncidentForm from 'src/components/Incident/IncidentForm'

const CREATE_INCIDENT_MUTATION = gql`
  mutation CreateIncidentMutation($input: CreateIncidentInput!) {
    createIncident(input: $input) {
      id
    }
  }
`

const NewIncident = () => {
  const [createIncident, { loading, error }] = useMutation(
    CREATE_INCIDENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Incident created')
        navigate(routes.incidents())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createIncident({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Incident</h2>
      </header>
      <div className="rw-segment-main">
        <IncidentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewIncident
