# Renew Access Token
 
The **Refresh token** flow is used to exchange a **temporary grant** of type `refresh_token` for an Access Token when the current Access Token**is close to expiry**. The Access Token received through the endpoint is **valid for 180 days**, after which the entire authorization flow must be reconfigured.
 
The flow allows you to continue using a valid Access Token with the same characteristics as the original token without the need for a new interaction with the user. By performing this flow, the original token is exchanged for a new one which also offers the ability to limit scopes by returning a new refresh token for future exchange.
 
> WARNING
>
> Important
>
> It is only possible to use this flow if the application contains the `offline_access` scope and the seller has previously authorized this action.
 
To renew the **Access Token**:
 
1. Send the `refresh_token` code, your **credentials**, and the `authorization_code` (see [Creation](/developers/en/guides/additional-content/security/oauth/creation)) to the [/oauth/token](/developers/en/reference/oauth/_oauth_token/post) endpoint with the `refresh_token` code in the `grant_type` parameter to receive a new response with a new Access Token and a new `refresh_token`.
2. Update the application with the Access Token received in the response.
 
> WARNING
>
> Important
>
> Remember that every time you refresh the Access Token, the `refresh_token` will also be refreshed, so you will need to store it again.