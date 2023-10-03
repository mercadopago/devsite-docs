# Integrate via Bluetooth mobile devices

Mercado Pago Point offers, in addition to the integration of Point devices via API, the possibility to integrate mobile devices via Bluetooth. This type of integration is ideal for small businesses.

All you have to do to connect both devices is to activate their Bluetooth connections, and you're good to go! Your devices will be linked.

> WARNING
>
> Important
>
> Mobile device integration via deep linking is not available for tablets or Huawei devices.

Linking your devices via Bluetooth will allow you to perform an integration through Deep Linking, or intent-based. Deep Links, also known as deep links, are a way to enable direct navigation to specific screens or sections of a mobile application.

When this link is called, it will be intercepted as a Point-handled address by the Mercado Pago application. The customer will be redirected to the Mercado Pago application screen to make the payment, and once it is processed, it will redirect them to the `success_url` or `fail_url`, depending on the payment status. This should be intercepted to return the user to the application flow.

You can see the flowchart below to understand how this type of integration works.

![Flowchart of Mercado Pago Point Deep Linking](/images/point_diagram.png)