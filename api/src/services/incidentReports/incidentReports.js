import { db } from 'src/lib/db'

export const incidentReports = () => {
  return db.incidentReport.findMany()
}

export const incidentReport = ({ id }) => {
  return db.incidentReport.findUnique({
    where: { id },
  })
}

export const createIncidentReport = ({ input }) => {
  return db.incidentReport.create({
    data: input,
  })
}

export const updateIncidentReport = ({ id, input }) => {
  return db.incidentReport.update({
    data: input,
    where: { id },
  })
}

export const deleteIncidentReport = ({ id }) => {
  return db.incidentReport.delete({
    where: { id },
  })
}

export const IncidentReport = {
  service: (_obj, { root }) =>
    db.incidentReport.findUnique({ where: { id: root.id } }).service(),
  reportComments: (_obj, { root }) =>
    db.incidentReport.findUnique({ where: { id: root.id } }).reportComments(),
}
