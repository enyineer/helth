export const standard = defineScenario({
  reportComment: {
    one: {
      data: {
        incidentReport: {
          create: {
            message: 'String',
            service: { create: { name: 'String', description: 'String' } },
          },
        },
      },
    },

    two: {
      data: {
        incidentReport: {
          create: {
            message: 'String',
            service: { create: { name: 'String', description: 'String' } },
          },
        },
      },
    },
  },
})
