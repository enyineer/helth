import Service from 'src/components/Service/Service'

export const QUERY = gql`
  query FindServiceById($id: String!) {
    service: service(id: $id) {
      id
      name
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Service not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ service }) => {
  return <Service service={service} />
}
