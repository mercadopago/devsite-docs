# OAuth
 
OAuth is an authorization protocol that allows applications to have limited access to the private information of Mercado Pago accounts, through the HTTP protocol that introduces an authentication and authorization layer in which you request access to the protected resources of sellers, through an _Access token_ limited to a particular application, without the need for the credentials of the sellers through the access flows.

> NOTE
>
> Note
>
> The use of the OAuth protocol differs from the shared use of credentials process. OAuth does not address questions related to client authentication, nor information related to that, its responsibility lies in the methods of obtaining a token to access a resource.
 
The flows, also called grant types, refer to the way in which an application obtains an _Access token_ that allows accessing the data displayed through an API. In the case of Mercado Pago, there are three available access flows: 

- `authorization_code`: a flow based on redirection, characterized by user intervention to explicitly authorize the application to access their data and by the use of a code provided by the authentication server so that the application can obtain an Access token and an associated `refresh_token`.
- `efresh_token`: if an Access token generated from the `authorization_code` flow is invalid or expired, this flow will be used to exchange a temporary grant of the `refresh_token` type for an Access token. This allows the Access token to be refreshed without requiring further user interaction after the authorization granted by the `authorization_code` flow.
- `client_credentials`: used to obtain an Access token without user interaction. This flow is used when applications request an Access token using only their own credentials to access their own resources, without acting on behalf of a user or accessing their data.

## Access token

Code used in different requests of public origin to access a protected resource that represents an authorization granted by a seller to a client application that contains scopes and a limited period of time for such access.

> NOTE
>
> Note
>
> **Temporary grants** are temporary codes used to be exchanged for an Access token. Unlike Access tokens, they can only be used for calls with the authorization server and are never sent to resource servers. Types of temporary grants:
> <br><br>
> - `authorization_code`: duration of 10 minutes and single-use.
> - `refresh_token`: duration of 6 months and can be reused.

### PKCE
  
**PKCE** (Proof Key for Code Exchange) is a security protocol used with OAuth to protect against malicious code attacks during the exchange of authorization codes for an _Access token_. It adds an extra layer of security by generating a verifier that is transformed into a challenge to ensure that even if the authorization code is intercepted, it is not useful without the original verifier. 

Check out [Configure PKCE](/developers/en/docs/security/oauth/creation#bookmark_configure_pkce) for more information.