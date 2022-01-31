export const standard = defineScenario({
  incidentReport: {
    one: {
      data: {
        message: 'String',
        service: { create: { name: 'String', description: 'String' } },
      },
    },

    two: {
      data: {
        message: 'String',
        service: { create: { name: 'String', description: 'String' } },
      },
    },
  },
})
