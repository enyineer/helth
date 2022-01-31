import { Link, routes } from '@redwoodjs/router'

import Services from 'src/components/Service/Services'

export const QUERY = gql`
  query FindServices {
    services {
      id
      name
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No services yet. '}
      <Link to={routes.newService()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ services }) => {
  return <Services services={services} />
}
