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
    incidents: [Incident!]! @requireAuth
    incident(id: String!): Incident @requireAuth
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
    createIncident(input: CreateIncidentInput!): Service! @requireAuth
    updateIncident(id: String!, input: UpdateIncidentInput!): Incident!
      @requireAuth
    deleteIncident(id: String!): Incident! @requireAuth
  }
`
