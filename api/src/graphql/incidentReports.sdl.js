export const schema = gql`
  type IncidentReport {
    id: String!
    service: Service!
    serviceId: String!
    message: String!
    createdAt: DateTime!
    closed: Boolean!
    closedAt: DateTime
    reportComments: [ReportComment]!
  }

  type Query {
    incidentReports: [IncidentReport!]! @requireAuth
    incidentReport(id: String!): IncidentReport @requireAuth
  }

  input CreateIncidentReportInput {
    serviceId: String!
    message: String!
    closed: Boolean!
    closedAt: DateTime
  }

  input UpdateIncidentReportInput {
    serviceId: String
    message: String
    closed: Boolean
    closedAt: DateTime
  }

  type Mutation {
    createIncidentReport(input: CreateIncidentReportInput!): IncidentReport!
      @requireAuth
    updateIncidentReport(
      id: String!
      input: UpdateIncidentReportInput!
    ): IncidentReport! @requireAuth
    deleteIncidentReport(id: String!): IncidentReport! @requireAuth
  }
`
