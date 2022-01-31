import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const services = () => {
  return db.service.findMany()
}

export const service = ({ id }) => {
  return db.service.findUnique({
    where: { id },
  })
}

export const createService = ({ input }) => {
  requireAuth('admin')
  return db.service.create({
    data: input,
  })
}

export const updateService = ({ id, input }) => {
  requireAuth('admin')
  return db.service.update({
    data: input,
    where: { id },
  })
}

export const deleteService = ({ id }) => {
  requireAuth('admin')
  return db.service.delete({
    where: { id },
  })
}

export const Service = {
  incidents: (_obj, { root }) =>
    db.service.findUnique({ where: { id: root.id } }).incidents(),
  incidentReports: (_obj, { root }) =>
    db.service.findUnique({ where: { id: root.id } }).incidentReports(),
}
