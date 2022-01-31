export const schema = gql`
  type Service {
    id: String!
    name: String!
    description: String!
    incidents: [Incident]!
    incidentReports: [IncidentReport]!
  }

  type Query {
    services: [Service!]! @requireAuth
    service(id: String!): Service @requireAuth
  }

  input CreateServiceInput {
    name: String!
    description: String!
  }

  input UpdateServiceInput {
    name: String
    description: String
  }

  type Mutation {
    createService(input: CreateServiceInput!): Service! @requireAuth
    updateService(id: String!, input: UpdateServiceInput!): Service!
      @requireAuth
    deleteService(id: String!): Service! @requireAuth
  }
`
