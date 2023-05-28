let db = require('./db.js');


/**used to retrieve a client using a Client ID and/or a Client Secret combination */
const getClient = (clientId, clientSecret) => {
  let confidentialClients = db.confidentialClients.filter((client) => {
    return client.clientId === clientId && client.clientSecret === clientSecret
  });
  return confidentialClients[0];
}

/**Used to create a token and save the token to the database */
const saveToken = (token, client, user) => {
  token.client = {
    id: client.clientId
  }
  token.user = {
    username: user.username
  }
  db.tokens.push(token);
  return token;
}

/**function used to obtain the user associated with the specified client */
const getUserFromClient = (client) => {
  return {}
}

/**used to retrieve existing tokens that were previously saved when the 
 * saveToken() function is invoked. */
const getAccessToken = (accessToken) => {
  let tokens = db.tokens.filter((savedToken)=>{
    return savedToken.accessToken === accessToken;
  })
  return tokens[0];
}

module.exports = {
  getClient: getClient,
  saveToken: saveToken,
  getUserFromClient: getUserFromClient,
  getAccessToken: getAccessToken
}