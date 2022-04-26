# Migration guide: we updated the IPN notifications

> If you are using IPN notifications since July 31, don’t worry, this change does not affect you. 

The old version of IPN notifications will no longer be available. Therefore, we recommend that you confirm if you are updated so you can stay informed and have no problems with your payments.

#### About the new version

Ahora, vas a poder suscribirte a los tópicos de pago que te interesen y vas a recibir los nuevos eventos en una URL HTTPS en formato JSON. 

## Which are the benefits?

- **Resilience in retries.**
- **Better audits.** Allows us to understand what happened with the notifications.
- **Greater stability.** It offers a more modern and secure architecture.
- **We are faster.** We reduced notification times to less than two seconds.

## What changes?

You will receive an object in JSON format with basic payment information.
Until now you received “x-www-form-urlencoded”, so you have to adapt the logic of your server to process JSON format. 

> It is necessary that after receiving the notification we reply us a 200 immediately to avoid a resending of notification before 10 seconds.

The JSON will have basic payment information. If you need more information, [perform a GET to the payment ID](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get).

> It is necessary for your server to have HTTPS certificates.

## How to activate the new IPN notifications?

From your Mercado Pago account you can [add IPN notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn/introduction).

> You must use the account in which you receive the payments from which you want to be notified.

Keep in mind when activating them:

- It is necessary that you place the endpoint that you prepared for us to send you news.
- The topics you are going to see identify what the notification is about. They can be payment, chargebacks or merchant_order.

## What parameters will I receive?

If you set the URL as follows: `“https://www.yoursite.com/notifications”` you will receive: 


```query
"topic=payment&id=1234567"
```

And it will finally look like this:

`https://www.yoursite.com/notifications?topic=payment&id=1234567`

You will also receive a JSON as follows:

```json
{
	"resource":"https://api.mercadolibre.com/collections/notifications/1234567",

	"topic":"payment"
}
```

> You can find more information on how to integrate notifications in the [IPN notification section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/introduction).

## What can I do if I don’t want IPN notifications?

If you want or need other types of notifications, you can [use webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications).

> To use webhooks, it is important that you select the application you want to receive notifications about and that you choose the corresponding topics.  
