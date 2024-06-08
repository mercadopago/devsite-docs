# OAuth
 
OAuth is an authorization protocol that allows applications to have limited access to the private information of Mercado Pago accounts, through the HTTP protocol that introduces an authentication and authorization layer in which you request access to the protected resources of sellers, through an **Access Token** limited to a particular application, without the need for the credentials of the sellers through the **access flows**.

> NOTE
>
> Note
>
> The use of the OAuth protocol differs from the shared use of credentials process. OAuth does not address questions related to client authentication, nor information related to that, its responsibility lies in the methods of obtaining a token to access a resource.

## Access Token

Code used in different requests of public origin to access a protected resource that represents an authorization granted by a seller to a client application that contains scopes and a limited period of time for such access.

See how to [get](/developers/en/guides/additional-content/security/oauth/creation) and [renew](/developers/en/guides/additional-content/security/oauth/renewal) the Access Token.

### Temporary grants

Temporary grants are temporary codes used to be exchanged for an Access Token. Unlike Access tokens, they can only be used for calls with the authorization server and are never sent to resource servers.

Since this is a redirection-based flow, the client must be capable of interacting with the resource owner's user-agent (typically a web browser) and capable of receiving incoming requests (via redirection) from the authorization server.

Types of temporary grants:

- `authorization_code`: duration of 10 minutes and single-use.
- `refresh_token`: duration of 6 months and can be reused.

## Access flows (grant types)

The flows, also called **grant types**, refer to the way in which an application obtains an Access Token that allows accessing the data displayed through an API. In the case of Mercado Pago, there are three available access flows: 

- **Authorization code**: a flow based on redirection, characterized by user intervention to explicitly authorize the application to access their data and by the use of a code provided by the authentication server so that the application can obtain an Access Token and an associated `refresh_token`. Veja mais informações em [Obter Access Token](/developers/en/docs/security/oauth/creation#bookmark_authorization_code).
- **Refresh token**: if an Access Token generated from the Authorization code flow is invalid or expired, this flow will be used to exchange a temporary grant of the `refresh_token` type for an Access Token. This allows the Access Token to be refreshed without requiring further user interaction after the authorization granted by the Authorization code flow. Veja mais informações em [Renovar Access Token](/developers/en/guides/additional-content/security/oauth/renewal).
- **Client credentials**: used to obtain an Access Token without user interaction. This flow is used when applications request an Access Token using only their own credentials to access their own resources, without acting on behalf of a user or accessing their data. Veja mais informações em [Obter Access Token](/developers/en/docs/security/oauth/creation#bookmark_client_credentials).

> NOTE
>
> PKCE (_Proof Key for Code Exchange_)
>
> If you are going to use the **Authorization code** flow to obtain the Access Token, you can configure the **PKCE** (Proof Key for Code Exchange), a security protocol used with OAuth to protect against malicious code attacks during the exchange of authorization codes for an Access Token. It adds an extra layer of security by generating a verifier that is transformed into a challenge to ensure that even if the authorization code is intercepted, it is not useful without the original verifier. Check out [Configure PKCE](/developers/en/docs/security/oauth/creation#:~:text=Access%20Token.-,Configure%20PKCE,-The%20PKCE%20) for more information.