import ServiceStatus from './ServiceStatus'
import { serviceA } from '../StatusCell/StatusCell.mock'

export const Element = () => {
  return <ServiceStatus service={serviceA()} />
}

export default { title: 'Components/ServiceStatus' }
