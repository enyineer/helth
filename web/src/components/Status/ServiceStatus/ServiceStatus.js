import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBolt,
  faExclamationCircle,
  faInfo,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons'
import { DateTime } from 'luxon'

const getIncidentIcon = (incidentType) => {
  switch (incidentType) {
    case 'DOWN':
      return faBolt
    case 'WARN':
      return faExclamationCircle
    case 'INFO':
    default:
      return faInfo
  }
}

const getIncidentColor = (incidentType) => {
  switch (incidentType) {
    case 'DOWN':
      return 'danger'
    case 'WARN':
      return 'warning'
    case 'INFO':
    default:
      return 'info'
  }
}

const toReadableDate = (isoString) => {
  return DateTime.fromISO(isoString).toFormat('dd.MM.yyyy HH:ss')
}

const ServiceStatus = ({ service }) => {
  const incidentItems = []

  for (let i = 0; i < service.incidents.length; i++) {
    const incident = service.incidents[i]
    incidentItems.push(
      <div className="row my-2" key={i}>
        <div className="text-secondary">
          Since {toReadableDate(incident.createdAt)}
        </div>
        <div className={'col'}>
          <FontAwesomeIcon
            size="lg"
            icon={getIncidentIcon(incident.type)}
            fixedWidth
            pull="left"
            className={'text-' + getIncidentColor(incident.type)}
          />
          {incident.message}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-light p-2 mb-1">
      <h2>{service.name}</h2>
      {service.incidents.length > 0 && <div>{incidentItems}</div>}
      {service.incidents.length == 0 && (
        <div className="row my-2">
          <div className={'col'}>
            <FontAwesomeIcon
              size="lg"
              icon={faCheckSquare}
              fixedWidth
              pull="left"
              className="text-success"
            />
            This service works like a charm!
          </div>
        </div>
      )}
    </div>
  )
}

export default ServiceStatus
