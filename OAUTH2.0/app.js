/**Inmport following cURL commands into postman app for use:
 * -curl --request POST \
--url http://localhost:4001/auth \
--header 'authorization: Basic Y29kZWNhZGVteTpjb2RlY0BkZW15' \
--header 'content-type: application/x-www-form-urlencoded' \
--data grant_type=client_credentials

curl --request GET \
--url http://localhost:4001/secret \
--header 'authorization: Bearer <ACCESS_TOKEN>'

accessToken should be that received from before
 */


const express = require('express');
const path = require('path');
const OAuth2Server = require('oauth2-server');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 4001;

//model object which contains functions to access, store, and validate our access tokens.
const oauth = new OAuth2Server({
  model: require("./model"),
  allowBearerTokensInQueryString: true
})

/**middleware function to handle authenticating access tokens inside the application */
const authenticateRequest = (req, res, next) => {
 
  let request = new OAuth2Server.Request(req);
  let response = new OAuth2Server.Response(res);
 
  return oauth.authenticate(request, response)
    .then(()=>{
      next();
    })
    .catch((err) => {
      res.send('You are not allowed')
    })
}


/**cb function used to handle obtaining the access token whenever a URL is requested 
 * in the application */

const obtainToken = (req, res) => {
  let request = new OAuth2Server.Request(req);
  let response = new OAuth2Server.Response(res);

  return oauth.token(request, response)
    .then((token) => {
      res.json(token);
    })
    .catch((err) => {
      res.json(err);
    })
}

/**All HTTP requests matching below route triggers obtainToken callback */
app.all('/auth', obtainToken);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/home.html'));
})
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/login.html'));
})

app.get('/secret', authenticateRequest, (req, res)=>{
    res.send('Welcome to the secret area.');
})

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`));

