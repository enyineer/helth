import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const reportComments = () => {
  return db.reportComment.findMany()
}

export const reportComment = ({ id }) => {
  return db.reportComment.findUnique({
    where: { id },
  })
}

export const createReportComment = ({ input }) => {
  requireAuth()
  return db.reportComment.create({
    data: input,
  })
}

export const updateReportComment = ({ id, input }) => {
  requireAuth('admin')
  return db.reportComment.update({
    data: input,
    where: { id },
  })
}

export const deleteReportComment = ({ id }) => {
  requireAuth('admin')
  return db.reportComment.delete({
    where: { id },
  })
}

export const ReportComment = {
  incidentReport: (_obj, { root }) =>
    db.reportComment.findUnique({ where: { id: root.id } }).incidentReport(),
}
