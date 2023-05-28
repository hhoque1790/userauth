/**In memory database that stores confidential user information */
module.exports =
{
  confidentialClients: [{
    clientId: 'codecademy',
    clientSecret: 'codec@demy',
    grants: [
      'client_credentials'
    ],
  }],
  tokens:[]
}
