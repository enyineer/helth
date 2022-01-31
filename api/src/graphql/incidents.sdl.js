export const schema = gql`
  type Incident {
    id: String!
    service: Service!
    serviceId: String!
    createdAt: DateTime!
    closed: Boolean!
    closedAt: DateTime
  }

  type Query {
    incidents: [Incident!]! @requireAuth
    incident(id: String!): Incident @requireAuth
  }

  input CreateIncidentInput {
    serviceId: String!
    closed: Boolean!
    closedAt: DateTime
  }

  input UpdateIncidentInput {
    serviceId: String
    closed: Boolean
    closedAt: DateTime
  }

  type Mutation {
    createIncident(input: CreateIncidentInput!): Incident! @requireAuth
    updateIncident(id: String!, input: UpdateIncidentInput!): Incident!
      @requireAuth
    deleteIncident(id: String!): Incident! @requireAuth
  }
`
