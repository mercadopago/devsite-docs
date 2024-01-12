# OAuth
 
OAuth is an authorization protocol that allows applications to have limited access to the private information of Mercado Pago accounts, through the HTTP protocol that introduces an authentication and authorization layer in which you request access to the protected resources of sellers, through an access token limited to a particular application, without the need for the credentials of the sellers through the access flows.
 
The flows, also called grant types, refer to the way in which an application obtains an access token that allows accessing the data displayed through an API. In the case of Mercado Pago, there are two available access flows: `authorization_code` and `refresh_token`. In both flows, the main entities involved in the processes are:
 
* **Access token**: code used in different requests of public origin to access a protected resource that represents an authorization granted by a seller to a client application that contains scopes and a limited period of time for such access.
  - **PKCE**: PKCE (Proof Key for Code Exchange) is a security protocol used with OAuth to protect against malicious code attacks during the exchange of authorization codes for an Access token. It adds an extra layer of security by generating a verifier that is transformed into a challenge to ensure that even if the authorization code is intercepted, it is not useful without the original verifier. You can enable this feature through the "Enable PKCE verification?" option on the [Application details](/developers/en/guides/additional-content/your-integrations/application-details) screen, allowing an additional secret code to be used during the authorization process.
  <br><br>
* **Temporal grants**: temporal codes used to exchange for an access token. Sound of type `authorization_code` and `refresh_token`.
 
> NOTE
>
> Note
>
> The use of the OAuth protocol differs from the shared use of credentials process. OAuth does not address questions related to client authentication, nor information related to that, its responsibility lies in the methods of obtaining a token to access a resource.