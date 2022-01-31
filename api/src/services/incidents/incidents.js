import { db } from 'src/lib/db'

export const incidents = () => {
  return db.incident.findMany()
}

export const incident = ({ id }) => {
  return db.incident.findUnique({
    where: { id },
  })
}

export const createIncident = ({ input }) => {
  return db.incident.create({
    data: input,
  })
}

export const updateIncident = ({ id, input }) => {
  return db.incident.update({
    data: input,
    where: { id },
  })
}

export const deleteIncident = ({ id }) => {
  return db.incident.delete({
    where: { id },
  })
}

export const Incident = {
  service: (_obj, { root }) =>
    db.incident.findUnique({ where: { id: root.id } }).service(),
}
