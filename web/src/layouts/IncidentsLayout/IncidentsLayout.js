import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const IncidentsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.incidents()} className="rw-link">
            Incidents
          </Link>
        </h1>
        <Link to={routes.newIncident()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Incident
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default IncidentsLayout
