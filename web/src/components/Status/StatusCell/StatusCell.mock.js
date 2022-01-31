// Define your own mock data here:
export const serviceA = () => ({
  id: 'abc',
  name: 'Service A',
  description: 'This is a test',
  incidents: [
    {
      id: 'awda',
      type: 'DOWN',
      message: "Something went wrong, we're currently working on it",
      createdAt: '2017-W33-4T04:45:32.343',
    },
    {
      id: 'awdaa',
      type: 'WARN',
      message:
        "We're receiving some info about this service not working as expected",
      createdAt: '2017-W33-4T04:45:32.343',
    },
    {
      id: 'awdab',
      type: 'INFO',
      message: "We've updated this service to v2",
      createdAt: '2017-W33-4T04:45:32.343',
    },
  ],
})

export const serviceB = () => ({
  id: 'abc',
  name: 'Service B',
  description: 'This is another test',
  incidents: [
    {
      id: 'awda',
      type: 'DOWN',
      message: "Something went wrong, we're currently working on it",
      createdAt: '2017-W33-4T04:45:32.343',
    },
    {
      id: 'awdaa',
      type: 'WARN',
      message:
        "We're receiving some info about this service not working as expected",
      createdAt: '2017-W33-4T04:45:32.343',
    },
    {
      id: 'awdab',
      type: 'INFO',
      message: "We've updated this service to v2",
      createdAt: '2017-W33-4T04:45:32.343',
    },
  ],
})

export const standard = () => ({
  services: [serviceA(), serviceB()],
})
