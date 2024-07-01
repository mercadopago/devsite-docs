# Create the Deep Link

Deep Links are a way to enable direct navigation to specific screens or sections of a mobile application. Its creation will allow you to generate payment instances from your mobile device, which will redirect the customer to the Mercado Pago payment screen, and then return them to a URL of your preference.

> NOTE
>
> Important
>
> Please note that mobile device integration via deep linking is not available for tablets or Huawei devices.

To process payments via Deep Link, you need to call the URL `https://www.mercadopago.com/point/integrations`.

In the table below, you can see the parameters that you can include, whether they are mandatory or not, and their descriptions.

| Parameter | Description | Mandatory/Optional |
|---|---|---|
| `amount` | It is the amount that will be charged to the customer. | Mandatory |
| `description` | Description of the operation (Max: 19 characters). | Mandatory |
| `external_reference` | Reference code from your system, which allows you to reconcile your purchase order with the payment. | Optional |
| `notification_url` | It is the URL where you will receive the notification for that payment. Refer to the "Configure your notifications" section for more information. | Optional |
| `payer_email` | Payer's email. | Optional |
| `success_url` | It is the URL where the user will be redirected after a successful payment. If not sent, the app will remain on the successful payment URL. | Optional |
| `fail_url` | It is the URL where the user will be redirected after a failed payment. If not sent, the app will remain on the failed payment URL. | Optional |


## Configure your notifications

If you want, you can receive notifications with updates on payments generated via Deep Link. These notifications are sent from our integration system to the `notification_url` defined in the Deep Link creation through an `HTTP POST` call.

In these notifications, you can find the action performed (`action`), along with the `id` and payment data, as shown below.

```json
{ "action": "payment.created",
  "api_version": "v1",
  "data": {
    "id": "00000000000"},
  "date_created": "2022-11-07T21:47:18Z",
  "id": 000000000000,
  "live_mode": true,
  "type": "payment",
  "user_id": "000000000"}
```