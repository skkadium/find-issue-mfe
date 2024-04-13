export const config = {
  appName: 'find-issue',
  authMock: {
    port: 6000,
    url: 'http://localhost:6000'
  },
  bffMock: {
    port: 5000,
    url: 'http://localhost:5000',
    api: {
      path: '/'
    }
  },
  bff: {
    api: {
      contentType: 'application/json; charset=utf-8',
      path: '/services/ppe-graph-bff-find-issue/graphql'
    }
  },
  personBff: {
    api: {
      contentType: 'application/json; charset=utf-8',
      path: '/services/ppe-service-bff-person'
    }
  },
  pact: {
    brokerUrl: 'https://pact-broker.ppe-np.elsevier.net/',
    consumerVersion: '1.0.0',
    bff: {
      consumerName: 'ppe-web-find-issue',
      providerName: 'ppe-graph-bff-find-issue',
      pactFolder: 'pacts',
      mockProvider: {
        api: {
          path: '/',
          matchers: {
            contentType: '(application\\/json; ?charset=(UTF|utf)-8)'
          }
        },
        log: {
          level: 'INFO',
          filename: 'logs/pact.log'
        },
        port: 8022,
        spec: 2,
        url: 'http://localhost:8022'
      }
    }
  },
  webApp: {
    port: 8080,
    path: '/web/ppe-web-find-issue',
    helpUrl: 'https://elsevier.atlassian.net/wiki/spaces/PPECOMMS/overview'
  }
}
