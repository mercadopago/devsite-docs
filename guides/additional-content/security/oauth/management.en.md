# Management
 
Currently there are different ways in which the **_Access tokens_** and **temporal grants** created can be disabled and invalidated to authorize requests for protected resources or to exchange them for new tokens.
 
* **Expiration**: after the time set at the time of creation, the token automatically expires and cannot be obtained.
* **User password change**: there are password change flows where the seller can revoke all your credentials, including associated tokens and temporal grants.
* **Authorization revocation**: revoking an authorization between the seller and the application triggers the deletion of all tokens and temporal grants associated with them.
* **Laundering of credentials for fraud**: it is possible that the Information Security and Fraud Prevention department performs a complete update of a user's credentials. This triggers the deletion of all tokens and temporal grants associated with the seller in question.
* **User session cleanup**: enables refresh of all vendor tokens and temporal grants.
* **Application elimination**: when an application is eliminated, all tokens and temporal grants belonging to it are deleted.
 
You can receive webhook notifications every time a seller authorizes or deauthorizes your application. To configure them, read [Dashboard](/developers/en/guides/additional-content/your-integrations/dashboard).

To configure them, see more information on [Webhooks](/developers/en/docs/checkout-pro/additional-content/your-integrations/notifications/webhooks) in [Your integrations](/developers/en/docs/checkout-pro/additional-content/your-integrations/introduction).




