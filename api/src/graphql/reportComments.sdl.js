export const schema = gql`
  type ReportComment {
    id: String!
    incidentReport: IncidentReport!
    incidentReportId: String!
  }

  type Query {
    reportComments: [ReportComment!]! @requireAuth
    reportComment(id: String!): ReportComment @requireAuth
  }

  input CreateReportCommentInput {
    incidentReportId: String!
  }

  input UpdateReportCommentInput {
    incidentReportId: String
  }

  type Mutation {
    createReportComment(input: CreateReportCommentInput!): ReportComment!
      @requireAuth
    updateReportComment(
      id: String!
      input: UpdateReportCommentInput!
    ): ReportComment! @requireAuth
    deleteReportComment(id: String!): ReportComment! @requireAuth
  }
`
