# Integration via Deep Linking

One of the ways to integrate with Mercado Pago is via Deep Linking. When said _link_ is called, it is intercepted as a _Point-handled address_ by the Mercado Pago application.

In the "call" to this _link_ you can send different parameters that will be taken by the Mercado Pago application and will impact the payment. Once you´ve made that call to the previously defined link, the user will be redirected to the Mercado Pago application to swipe the card and make the purchase. 

Once the payment is proccesed, the user will be redirected to the `success_url` or `fail_url`, depending on the result. This must be intercepted to return the user to the application. 

## Flow chart

![Deep linking flow diagram Mercado Pago Point](/images/point_diagram.png)

## Deep Linking creation

The URL to be intercepted is the following: `https://www.mercadopago.com/point/integrations`

The parameters that you can include are:

* `amount`: The amount that will be charged to the client (\*).
* `description`: Description of the operation (Máx.: 20 caracters) (\*).
* `external_reference`: The `external_reference` is a reference code that allows you to track the Mercado Pago `payment_id` in your system. 
* `notification_url`: The URL where you will receive the notifications.
* `payer_email`: Email of the payer.
* `success_url`: The URL where the user will be redirected when the payment succeeds.
* `fail_url`: The URL where the user will be redirected when the payment is rejected.

> WARNING
>
> Important
>
> * The fields with an (\*), are mandatory.

In the following [GitHub] article (https://github.com/mercadopago/point-android_integration#deep-linking) you can find more information, as well as a descriptive example.

> PREV_STEP_CARD_EN
>
> Integrate with POS
>
> Learn how to integrate Mercado Pago Point into your Point of Sale.
>
> [Integrate with POS](/developers/en/docs/mp-point/integration-configuration/integrate-with-pdv/introduction)

> NEXT_STEP_CARD_EN
>
> Integrate via API
>
> Learn about the steps to integrate Mercado Pago Point via API.
>
> [Integrate via API](/developers/en/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-api)