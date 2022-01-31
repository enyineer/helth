export const schema = gql`
  type ReportComment {
    id: String!
    incidentReport: IncidentReport!
    incidentReportId: String!
  }

  type Query {
    reportComments: [ReportComment!]! @skipAuth
    reportComment(id: String!): ReportComment @skipAuth
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
    ): ReportComment! @requireAuth(roles: "admin")
    deleteReportComment(id: String!): ReportComment!
      @requireAuth(roles: "admin")
  }
`
