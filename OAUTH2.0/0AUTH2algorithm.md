Algorithm for 0AUTH2.0
-HTTP request matching /auth route triggers obtainToken callback.
-Header of HTTP request (of any verb) contains base 64 encoded client ID and client secret
-Within obtainToken callback client ID and client sceret is matched to that of db using getClient function.
-saveToken used to create a Token for the client 

-When user wants to access protected route, request is made with header containing token value.
-AuthenticateRequest middleware is called upon. getAcessToken is used to compare token in header to that of storedtoken. If matching page is loaded else "You are not allowed".


Further notes: If client ID and client secret are known and verified, a token is provided. In subsequent HTTP requests to gain access to restricted routes, token is attached to request and compared to provided token.