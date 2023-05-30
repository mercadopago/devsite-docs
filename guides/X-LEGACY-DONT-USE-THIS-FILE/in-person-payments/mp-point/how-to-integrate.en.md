---
sites_supported:
  - mla
  - mlb
  - mlm
---


# How to integrate Mercado Pago Point 

In order to process payments in the *integrated mode* with our Point devices, it is necessary to download the Mercado Pago application for Android and IOS.

There are two different possible situations to integrate Point: 

1) When you are able to access your application from the same device (smartphone or tablet) where the Mercado Pago application is installed. These integrations can be done via Deep linking or Intent-based. 

2) When you can not use your application from the same device (smartphone or tablet) where the Mercado Pago application is installed. This integration can be done vía API. 


> WARNING
>
> Pre-requisites
>
> * You must have the Mercado Pago application (From version 2.34 for Android and 2.32 for iOS).
> * Have a Point device.
> * The user must be logged in with their Mercado Pago account in the application. 
> * Avaliable for Android version 2.8.0 or superior, iOS version 1.7.0 or superior and only when it´s in a iOS 9 environment or superior.


## Integration via Deep Linking

One of the ways to integrate with Mercado Pago is via Deep Linking. When said _link_ is called, it is intercepted as a _Point-handled address_ by the Mercado Pago application.

In the "call" to this _link_ you can send different parameters that will be taken by the Mercado Pago application and will impact the payment. Once you´ve made that call to the previously defined link, the user will be redirected to the Mercado Pago application to swipe the card and make the purchase. 

Once the payment is proccesed, the user will be redirected to the `success_url` or `fail_url`, depending on the result. This must be intercepted to return the user to the application. 

### Flow chart

![Deep linking flow diagram Mercado Pago Point](/images/point_diagram.png)


### Deep Linking creation

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


## Integration via Intent-Based

> WARNING
>
> Important
>
> * This integration is only available for Android version 2.8.0 or superior.


Another way to integrate is by using Androids native code, via _Intent-Based_.

You must use the “startActivityForResult” method to start directly the payment process. The result of the payment is going to come as “activityResult”.

It its very important that the code has the ability to handle the situation where the user does not have the Mercado Pago application installed in his/her device. In this case, we recommend to redirect the user to the Play store in order to be able to download it. 

As a reference you can use the example code and the documentation that has the structure set to send the payment info and handle the return object. 

In the [GitHub](https://github.com/mercadopago/point-android_integration#intent) article you can find more information and the corresponding example. 

## Integration via API

> WARNING
>
> Important
>
> * This integration is only available for Android version 2.8.0 or higher.<br>
> * Not available for iOS.

In order to integrate through our APIs, you have to enable the integration options in the Mercado Pago app. Run the following curl to do it:

```curl
--location --request POST ‘https://api.mercadopago.com/point/services/user/status/integrators?access_token= <ENV_ACCESTOKEN>’ \
--header ‘Content-Type: application / json’ \
--data-raw ‘{
    "Id": <user_id>
} ’
```

Next, it is necessary to configure the `device_name` from the Mercado Pago application. It is used to identify your cell phone or tablet and relate it to your Mercado Pago account. In this way, you will know which device to send the payment order to.

The next step consist in generating a payment order and sending it via API to the corresponding device. The user will see the order sent to the application in the device's screen. It means that the user will be able to swipe the card at that moment and continue with the process. 

Once the payment is processed, the user will see the result in the Mercado Pago application. Finally, the order will close and the corresponding payment will be created


### Payment creation

The POST to the API generates an order that the Mercado Pago application receives in order to charge via the Point device. You´ll get an id that you could use to know the state of it. 

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
-d '{"amount":100,"description":"Cup","device_name":"device","cc_type":"credit_card"}' \
'https://api.mercadopago.com/point/services/integrations/v1'
```

The parameters that can be included are: 

* `amount`: The amount that will be charged to the client (\*).
* `description`: Description of the operation (Máx.: 20 caracters) (\*).
* `device_name`: Name of the device in which you want to process the payment. (\*).
* `cc_type`: Card type. Credit or debit card (\*).
* `external_reference`: The `external_reference` is a reference code that allows you to track the Mercado Pago `payment_id` in your system. 
* `disable_back_button`: True or False. This is used to define whether you want or not the order to close by clicking on the back button. 
* `notification_url`: The URL where you will receive the notifications.
* `payer_email`: Email of the payer.

> WARNING
>
> Important
>
> * The fields with an (\*), are mandatory.

The response will have the following format:

```json
{
	"status":"OPEN",
	"id":<order_id>
}
```

**Response status code: 200 OK** 

### Get the payment order

The GET in this API, with the `order_id`, is the one that enables you to get the status of the order to know if the payment was generated or not. 

```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/:ID'
```

If the order status is `OPEN`, it means that it has not yet been paid. If the status is `CLOSED` it means that the order is paid, so you´ll get the `payment_id`with the rest of the information. The response will have the following format.  

```json
{
	"status":"CLOSED",
	"id":<order_id>,
	"payment_id":<payment_id>,
	"payment_status":"<payment_status>",
	"external_reference": "<external_reference>",
	"payer_email": "<email_payer>"
}
```

**Response status code: 200 OK** 

### Delete the payment order

The DELETE in this API enables you to delete an order. You have two ways of doing so: 

By `device_name`:

```curl
curl -X DELETE \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/attempt/device/:DEVICE_NAME'
```

The response will have the following format. 

```json
{
	"status":"OK"
}
```

**Response status code: 200 OK**

Or by `order_id`:

```curl
curl -X DELETE \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/:ID'
```

**Response status code: 204 OK**

 
### Get all the devices from an account

The GET in this API enables you to obtain all configured and synchronized devices for your Mercado Pago account. 

```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/devices'
```

If the status of the device is `FREE`, it means that the device can receive a new order. If the status is `BUSY`, it means that the device has an order already assigned to it. The response will have the following format.  

```json
{
	"devices"[{
		"name": "<device_name>",
		"caller": <id_interno>,
		"id": <id_interno>,
		”status”:{
			status”:”FREE”,
			"payment_attempt": <order_id>
		}
	}]
}
```

**Response status code: 200 OK**


### Delete a device from an account

The DELETE in this API enables you to delete configured and synchronized devices from your Mercado Pago account. 


```curl
curl -X DELETE \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/devices/:DEVICE_NAME'
```

The answer will have the following format. 

```json
{
	"status":"OK"
}
```

**Response status code: 200 OK**


## Payment notifications

It is necessary that you send the `notification_url`, where you'll receive notifications about new payments and status updates generated.

For more information, check the [notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/webhooks/webhooks) article.


## Point payments

Point payments can be searched in the Payments API. For more information, check the [API's](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get) article.

We also have an exclusive Point API that has some additional information about the payments: 


```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer <access_token>' \
https://api.mercadopago.com/point/services/payment/<payment_id>
```

The responde of the status will have the following format:

```json
{
  "payment_id": 12345,
  "caller_id": 44444,
  "poi": "BBPOS-123123123",
  "poi_type": "BBPOS",
  "operator_id": 555555,
  "buyer_info": {
    "email": "email@email.com"
  }
}
```
