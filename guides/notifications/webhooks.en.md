# Webhooks Notifications

> WARNING
>
> Prerequisites
>
> * Have the [API](https://www.mercadopago.com.ar/developers/en/guides/payments/api/introduction) implemented.

A **webhook** is a notification sent from one server to another through an `HTTP POST` request informing your transactions.

In order to receive notifications about the events in your platform, you have to [previously configure an URL to which Mercado Pago has access](https://www.mercadopago.com/mla/account/webhooks).


You can also configure the notification when you do the POST of the payment, indicating the URL in the field notificaction_url:

```json
{
	"transaction_amount":100,
	....
	"notification_url":"http://requestbin.fullcontact.com/1ogudgk1",
    ....
}
```

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

Mercado Pago will send notifications with the following schedule of retries and confirmation awaiting times. You must return an `HTTP STATUS 200 (OK)` or `201 (CREATED)` before the corresponding time expires. If not, it will be assumed that you did not receive it correctly and you will be notified again.

If you need more information, please review the section [What should I do when I receive a notification?](#bookmark_what_should_i_do_after_receiving_a_notification?).

| Event        | Time after the first dispatch | Confirmation waiting time |
|--------------|-------------------------------|---------------------------|
| Dispatch     | -                             | 22 seconds                |
| First retry  | 5 minutes                     | 5 seconds                 |
| Second retry | 45 minutes                    | 5 seconds                 |
| Third retry  | 6 hours                       | 5 seconds                 |
| Fourth retry | 2 days                        | 5 seconds                 |
| Fifth retry  | 4 days                        | 5 seconds                 |

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


## What should I do when I receive a notification?


When you receive a notification on your platform, Mercado Pago waits for a response to validate that you received it correctly. For this, you must return an `HTTP STATUS 200 (OK)` or `201 (CREATED)`.

It is recommended that you respond to the notification before executing business logic or prior to accessing external resources so as not to exceed [the estimated response times.](#bookmark_events)

This communication is exclusively between the servers of Mercado Pago and your server, so there will not be a physical user seeing any type of result.

After this, you must obtain the complete information of the notified resource by accessing the corresponding endpoint of the API:


Type         | URL                                                | Documentation
------------ | -------------------------------------------------- | --------------------
payment      | https://api.mercadopago.com/v1/payments/[ID]?access\_token=[ACCESS\_TOKEN]      | [see documentation](https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_id/get/)
plan         | https://api.mercadopago.com/v1/plans/[ID]?access\_token=[ACCESS\_TOKEN]         | -
subscription | https://api.mercadopago.com/v1/subscriptions/[ID]?access\_token=[ACCESS\_TOKEN] | -
invoice      | https://api.mercadopago.com/v1/invoices/[ID]?access\_token=[ACCESS\_TOKEN]      | [see documentation](https://www.mercadopago.com.ar/developers/en/reference/invoices/_invoices_id/get/)

With this information you can make the necessary updates on your platform, such as registering an approved payment.

> WARNING
>
> Important
>
> Keep in mind that if the response times are exceeded, it is possible to receive duplicate notifications of an event.

### Implement the receiver notification using the following code as example:

```php
 <?php

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

    switch($_POST["type"]) {
        case "payment":
            $payment = MercadoPago\Payment.find_by_id($_POST["id"]);
            break;
        case "plan":
            $plan = MercadoPago\Plan.find_by_id($_POST["id"]);
            break;
        case "subscription":
            $plan = MercadoPago\Subscription.find_by_id($_POST["id"]);
            break;
        case "invoice":
            $plan = MercadoPago\Invoice.find_by_id($_POST["id"]);
            break;
    }

?>
```
