# Webhooks Notifications

> WARNING
>
> Prerequisites
>
> * Have the [API](/guides/payments/api/introduction.en.md) implemented.

A **webhook** is a notification sent from one server to another through an `HTTP POST` request informing your transactions.

In order to receive notifications about the events in your platform, you have to [previously configure an URL to which MercadoPago has access.](https://www.mercadopago.com/mla/account/webhooks).

## Events

Whenever an event occurs, we will send you a notification in json format using HTTP POST to the URL that you specified.

We will notify the following events:

| Notification type    |           Action           |        Description           |
| :------------------- | :------------------------- | :--------------------------- |
| `payment`            | `payment.created`          | Payment created              |
| `payment`            | `payment.updated`          | Payment updated              |
| `mp-connect`         | `application.deauthorized` | Account deauthorized         |
| `mp-connect`         | `application.authorized`   | Account authorized           |
| `plan`               | `application.authorized`   | Account authorized           |
| `subscription`       | `application.authorized`   | Account authorized           |
| `invoice`            | `application.authorized`   | Account authorized           |

If your application is not available or takes too long to respond, MercadoPago will retry sending the notification according to the following interval:

1.	Retry after 5 minutes.
2. Retry after 45 minutes.
3. Retry after 6 hours.
4. Retry after 2 days.
5. Retry after 4 days.

The notification sent has the following format:

```json
{
    "id": 12345,
    "live_mode": true,
    "type": "payment",
    "date_created": "2015-03-25T10:04:58.396-04:00",
    "application_id": 123123123,
    "user_id": 44444,
    "version": 1,
    "api_version": "v1",
    "action": "payment.created",
    "data": {
        "id": "999999999"
    }
}
```
This indicates that payment **999999999** was created for the user **44444** in **production mode** with the V1 version of the API. That event took place on **2016-03-25T10:04:58.396-04:00**.


## What should I do after receiving a notification?

When you receive a notification in your platform, MercadoPago awaits a response to validate that you received it correctly. To do this, you have to send a response with a `HTTP STATUS 200 (OK)` or `201 (CREATED)`.

Note that this communication is made exclusively between Mercado Pago’s servers and your server, so there will be no physical user viewing any kind of result.

After that, you will be able to get full information about the notified resource by accessing the corresponding API at https://api.mercadopago.com/:

Type         | URL                                                | Documentation
------------ | -------------------------------------------------- | --------------------
payment      | /v1/payments/[ID]?access\_token=[ACCESS\_TOKEN]      | [see documentation](/reference/payments)
plan         | /v1/plans/[ID]?access\_token=[ACCESS\_TOKEN]         | [see documentation](/reference/plans)
subscription | /v1/subscriptions/[ID]?access\_token=[ACCESS\_TOKEN] | [see documentation](/reference/subscriptions)
invoice      | /v1/invoices/[ID]?access\_token=[ACCESS\_TOKEN]      | [see documentation](/reference/invoices)

With this information you can make the necessary updates on your platform, such as registering an approved payment.

### Implement the receiver notification using the following code as example:

```php
 <?php
require_once "mercadopago.php";

$mp = new MP("ACCESS_TOKEN");

$json_event = file_get_contents('php://input', true);
$event = json_decode($json_event);

if (!isset($event->type, $event->data) || !ctype_digit($event->data->id)) {
	http_response_code(400);
	return;
}

if ($event->type == 'payment'){
    $payment_info = $mp->get('/v1/payments/'.$event->data->id);

    if ($payment_info["status"] == 200) {
        print_r($payment_info["response"]);
    }
}
?>
```
