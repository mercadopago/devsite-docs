# Renewal

The `refresh_token` flow is used to exchange a **temporary grant** of type `refresh_token` for an access token when the current access token has expired.

The access token received through the endpoint is **valid for 180 days**, after which the entire authorization flow must be reconfigured.

The flow allows you to continue using a valid access token with the same characteristics as the original token without the need for a new interaction with the user.

By performing this flow, the original token is exchanged for a new token which also offers the ability to limit scopes by returning a new refresh token for future exchange.

> WARNING
>
> Important
> 
> It is only possible to use this flow if the application contains the `offline_access` scope and the seller has previously authorized this action.

To renew the **access token**:

1. Send the `refresh_token` code, your **credentials**, and the `authorization_code` (see [Creation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/dashboard/creation)) to the [/oauth/token](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/oauth/_oauth_token/post) endpoint with the `refresh_token` code in the `grant_type` parameter to receive a new response with a new access token and a new `refresh_token`.
2. Update the application with the access token received in the response.

> WARNING
>
> Important
>
> Remember that every time you refresh the access token, the `refresh_token` will also be refreshed, so you will need to store it again.

> NEXT_STEP_CARD_EN
>
> OAuth Management
>
> See how to disabled and invalidated features.
>
> [Management](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/dashboard/management)