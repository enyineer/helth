import { db } from 'src/lib/db'

export const reportComments = () => {
  return db.reportComment.findMany()
}

export const reportComment = ({ id }) => {
  return db.reportComment.findUnique({
    where: { id },
  })
}

export const createReportComment = ({ input }) => {
  return db.reportComment.create({
    data: input,
  })
}

export const updateReportComment = ({ id, input }) => {
  return db.reportComment.update({
    data: input,
    where: { id },
  })
}

export const deleteReportComment = ({ id }) => {
  return db.reportComment.delete({
    where: { id },
  })
}

export const ReportComment = {
  incidentReport: (_obj, { root }) =>
    db.reportComment.findUnique({ where: { id: root.id } }).incidentReport(),
}
