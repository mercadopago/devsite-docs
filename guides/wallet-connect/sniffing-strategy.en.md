# Sniffing Strategy

**Sniffing** is a feature that allows you to identify if a user has the Mercado Pago app installed on their mobile device and automatically open this app. If so, when opening the `agreement_uri` in a browser, the **agreement flow** is automatically initiated in the app, without the user needing to log in manually.

The Sniffing feature simplifies the linking process by eliminating the need for the user to manually log in to the Mercado Pago app. This improves the user experience by reducing friction in the agreement process.

## Sniffing usage models

See below for the available models to add to your integration with Mercado Pago.

> WARNING
>
> Attention
>
> The preferred usage models for Sniffing must be coordinated with the **Integrations team at Mercado Pago** to be previously configured in your application.

- **App Link (available only for Android devices)**: if the Mercado Pago app is installed on the user's device, it will intercept when navigating to `agreement_uri` and automatically open the agreement flow in the app's context.
- **Browser (available for Android and iOS devices)**: when opening the `agreement_uri` in a browser, the page will recognize the context and apply different strategies to try to open the Mercado Pago app, as follows: <br>
  - If the user has the app installed, the linking flow will automatically open in the app.
  - If the user does not have the app installed, they will be directed to the user's default browser, and in this case, the user may need to log in manually.

> NOTE
>
> Important
>
> Sniffing is only available in the mobile device browser when the user has the Mercado Pago app installed. Depending on the device and operating system, the experience of opening an app from a browser may vary. Generally, user confirmation is required through a system modal, and in other scenarios such as webviews of other applications, functionality may be affected.

## Configuration

To use the Sniffing feature, simply open a link in the mobile device's web browser to activate detection and follow the linking flow. See below how to enable the Sniffing feature in your integration.

1. Envie um **GET** com os atributos necessários, pricipalmente o `return_uri`, ao _endpoint_ [/v2/wallet_connect/agreements](/developers/pt/reference/wallet_connect/_wallet_connect_agreements/post) e execute a requisição para [iniciar uma vinculação](/developers/pt/docs/wallet-connect/account-linking-flow/create-agreement).

1. Send a **GET** with the necessary attributes, primarily `return_uri`, to the endpoint [/v2/wallet_connect/agreements](/developers/en/reference/wallet_connect/_wallet_connect_agreements/post) and execute the request to [initiate an agreement](/developers/en/docs/wallet-connect/account-linking-flow/create-agreement).

> WARNING
>
> Attention
>
> It is necessary that the URL used in the `return_uri` parameter be for a web resource (deeplinks cannot be used) and **its beginning must match the return URL configured in the seller's application**. For more information, refer to the [Application details](/developers/en/guides/additional-content/your-integrations/application-details).

2. The parameters `agreement_id` and `agreement_uri` will be returned. Use an **In-App Browser** component to navigate to `agreement_uri`, the address where the buyer is redirected to grant access to the Mercado Pago wallet to make the payment. According to the operating system, use **Custom Tabs** for Android devices and **SVC** for iOS devices.
3. After that, use the return URL `return_uri` to complete the linking process.

After configuration, it is possible to disable the Sniffing feature of your application, and this action must be coordinated with the **Integrations team** at Mercado Pago.