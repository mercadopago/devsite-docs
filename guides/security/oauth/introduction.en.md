# OAuth 

OAuth is an authorization protocol that allows applications to have limited access to the private information of Mercado Pago accounts, through the HTTP protocol that introduces an authentication and authorization layer in which you request access to the sellers' protected resources, through a limited access token to a particular application, without the need for the credentials of the sellers through the access flows.

Flows, also called grant types, refer to the way an application obtains an access token that allows access to exposed data through an API. In the case of Mercado Pago, there are two access flows available: `authorization_code` and `refresh_token`. In both flows, the main entities involved in the processes are:

* **Access token**: code used in different requests of public origin to access a protected resource that represents an authorization granted by a seller to a client application that contains scopes and a limited lifetime for said access.
* **Temporal grants**: temporary codes used to be exchanged for an access token. They are of type `authorization_code` and `refresh_token`.

> WARNING 
> 
> Important
> 
> The use of the OAuth protocol differs from the process of shared use of credentials. OAuth does not address issues related to client authentication, nor information related to it, its responsibility lies in the methods of obtaining a token to access a resource.

> NEXT_STEP_CARD_EN
>
> Access creation
>
> Learn about the data access authorization flow.
>
> [Creation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/dashboard/creation)