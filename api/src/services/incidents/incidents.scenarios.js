export const standard = defineScenario({
  incident: {
    one: {
      data: {
        type: 'INFO',
        service: { create: { name: 'String', description: 'String' } },
      },
    },

    two: {
      data: {
        type: 'INFO',
        service: { create: { name: 'String', description: 'String' } },
      },
    },
  },
})
