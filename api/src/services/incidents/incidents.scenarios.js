export const standard = defineScenario({
  incident: {
    one: {
      data: { service: { create: { name: 'String', description: 'String' } } },
    },

    two: {
      data: { service: { create: { name: 'String', description: 'String' } } },
    },
  },
})
