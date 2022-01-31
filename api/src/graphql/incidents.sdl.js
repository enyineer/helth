export const schema = gql`
  type Incident {
    id: String!
    service: Service!
    serviceId: String!
    createdAt: DateTime!
    closed: Boolean!
    closedAt: DateTime
    type: IncidentType!
    message: String
  }

  enum IncidentType {
    INFO
    WARN
    DOWN
  }

  type Query {
    incidents: [Incident!]! @skipAuth
    incident(id: String!): Incident @skipAuth
  }

  input CreateIncidentInput {
    serviceId: String!
    closed: Boolean!
    closedAt: DateTime
    type: IncidentType!
    message: String!
  }

  input UpdateIncidentInput {
    serviceId: String
    closed: Boolean
    closedAt: DateTime
    type: IncidentType
  }

  type Mutation {
    createIncident(input: CreateIncidentInput!): Service!
      @requireAuth(roles: "admin")
    updateIncident(id: String!, input: UpdateIncidentInput!): Incident!
      @requireAuth(roles: "admin")
    deleteIncident(id: String!): Incident! @requireAuth(roles: "admin")
  }
`
