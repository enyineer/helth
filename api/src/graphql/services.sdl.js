export const schema = gql`
  type Service {
    id: String!
    name: String!
    description: String!
    incidents: [Incident]!
    incidentReports: [IncidentReport]!
  }

  type Query {
    services: [Service!]! @skipAuth
    service(id: String!): Service @skipAuth
    servicesWithOpenIncidents: [Service!]! @skipAuth
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
    createService(input: CreateServiceInput!): Service!
      @requireAuth(roles: "admin")
    updateService(id: String!, input: UpdateServiceInput!): Service!
      @requireAuth(roles: "admin")
    deleteService(id: String!): Service! @requireAuth(roles: "admin")
  }
`
