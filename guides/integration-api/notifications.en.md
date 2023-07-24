# Configure notifications

If you wish, you can receive notifications from Webhooks. These are sent from our Integrations API to your receiving system through an `HTTP POST` call in relation to the status changes presented by a payment intent.

Follow the instructions shown in [Webhooks documentation](/developers/en/docs/mp-point/additional-content/your-integrations/notifications/webhooks) to integrate these notifications.

> WARNING
>
> Important
>
> The `notification_url` field mentioned in the notifications documentation is not supported by the integrations API.

## Examples of notification statuses

Once you have implemented the notifications and made the necessary adjustments, they will have the following format:

#### Finished Status
Final status of a payment intent when the transaction ends.

----[mla]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"payment": {
  "id": 123456789,
  "state": "approved",
  "type": "credit_card"
},
"state": "FINISHED",
"additional_info": {
  "external_reference": "information",
  "ticket_number": "39SHDKKDJ"
}
}
```
------------

----[mlb]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"payment": {
  "id": 123456789,
  "state": "approved",
  "type": "credit_card"
},
"state": "FINISHED",
"additional_info": {
  "external_reference": "information"
}
}
```
------------

----[mlm]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "payment": {
   "id": 123456789,
   "state": "approved",
   "type": "credit_card"
 },
 "state": "FINISHED",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------

#### Confirmation_required Status
It occurs when the payment intent ends without a payment status. Once obtained, this status will not change. When you receive it, you must confirm on your device what the payment status is, using the `payment_id` received in the response, before delivering your product or service.


----[mla]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "payment": {
   "id": 123456789,
   "state": "",
   "type": ""
 },
 "state": "CONFIRMATION_REQUIRED",
 "additional_info": {
   "external_reference": "information",
   "ticket_number": "39SHDKKDJ"
 }
}
```
------------

----[mlb]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"payment": {
  "id": 123456789,
  "state": "",
  "type": ""
},
"state": "CONFIRMATION_REQUIRED",
"additional_info": {
  "external_reference": "information"
}
}
```
------------

----[mlm]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "payment": {
   "id": 123456789,
   "state": "",
   "type": ""
 },
 "state": "CONFIRMATION_REQUIRED",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------

#### Canceled Status
Final status of a payment intent when it is canceled.

----[mla]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"state": "CANCELED",
"additional_info": {
  "external_reference": "information",
  "ticket_number": "39SHDKKDJ"
}
}
```
------------

----[mlb]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"state": "CANCELED",
"additional_info": {
  "external_reference": "information"
}
}
```
------------

----[mlm]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "state": "CANCELED",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------

#### Error Status
Final status of a payment intent when a transaction error occurs.

----[mla]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"state": "ERROR",
"additional_info": {
  "external_reference": "information",
  "ticket_number": "39SHDKKDJ"
}
}
```
------------

----[mlb]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"state": "ERROR",
"additional_info": {
  "external_reference": "information"
}
}
```
------------

----[mlm]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "state": "ERROR",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------

## Notifications from my point devices

You can receive notifications about events generated by each of your point devices. This way, you will de able to control and monitor your devices. These notifications may be caused by:

- Terminal restarts.
- Logouts.
- Change in the operating mode from PDV to STANDALONE or vice versa.

The notifications will reach your email registered in Mercado Pago. In case you cannot find them, make sure
to check your SPAM folder.

> WARNING
>
> Important
>
> You will receive notifications from all the devices associated with your `access token`.

You can see how these notifications will look like below.

![Email notification](/images/point-api/email-notification-en.png)

## Enable notifications

To activate the notifications, it is necessary to enable the integrator's email channel. To do so, you can use the
following command:

```curl
curl --location --request PATCH 'https://api.mercadopago.com/point/integration-api/integrator' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
	"event_channel_devices": [
		"email"
	]
}'
```

> WARNING
>
> Important
>
> The notifications will be available 30 minutes after completing the activation process.


## Check enabled channels.

Once the notification channel is configured, you can check its status by executing the following command:

```curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/integrator' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}'
```

------------

The response will be similar to the following:

```json
{
  "id": 1234567890,
  "created_at": "0001-01-01T00:00:00Z",
  "updated_at": "0002-02-02T00:00:00Z",
  "notification_url_enabled": true,
  "event_channel_devices": [
    "email"
  ]
}
```

------------