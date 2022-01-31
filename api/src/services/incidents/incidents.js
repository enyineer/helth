import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const incidents = () => {
  return db.incident.findMany()
}

export const incident = ({ id }) => {
  return db.incident.findUnique({
    where: { id },
  })
}

export const createIncident = ({ input }) => {
  requireAuth('admin')
  return db.incident.create({
    data: input,
  })
}

export const updateIncident = ({ id, input }) => {
  requireAuth('admin')
  return db.incident.update({
    data: input,
    where: { id },
  })
}

export const deleteIncident = ({ id }) => {
  requireAuth('admin')
  return db.incident.delete({
    where: { id },
  })
}

export const Incident = {
  service: (_obj, { root }) =>
    db.incident.findUnique({ where: { id: root.id } }).service(),
}
