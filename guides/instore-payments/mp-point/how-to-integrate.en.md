---
sites_supported:
  - mla
  - mlb
  - mlm
  - global
---


# How to integrate Mercado Pago Point 

In order to be able to process payments in the integrated mode with our Point devices, it is necessary to download the MercadoPago application for Android and IOS.

There are two different possible situations to integrate Point: 

1) When you can access your application from the same device (smartphone or tablet) where the MercadoPago application is installed. This integrations can be done vía Deep linking or Intent-based. 

2) When you can not use your application from the same device (smartphone or tablet) where the MercadoPago application is installed. This integration can be done vía API. 


> WARNING
>
> Pre-requisites
>
> * You must have the MercadoPago application (From version 2.34 for Android and 2.32 for iOS).
> * Have a Point device.
> * The user must be logged in with his MercadoPago account in the application. 
> * Avaliable for Android version 2.8.0 or superior, iOS version 1.7.0 or superior and only when it´s in a iOS 9 environment or superior.


## Deep Linking integration

When you call _link_, it is goint to be catched like a _Point-handled address_ by the MercadoPago application.

In the "call" to the _link_ you can send different parameters that will be taken by the MercadoPago application and will impact in the payment. Once you´ve made that call to the previously defined link, the user will be redirected to the MercadoPago appllication to swipe the card and make the purchase. 

Once the payment is proccesed, the user will be redirected to the `success_url` or `fail_url`, depending on the result. This must be intercepted to return the user to the application. 

### Flow chart

![instore diagram](/images/point_diagram.png)


### Deep Linking creation

The URL to be interceptedis the following: `https://www.mercadopago.com/point/integrations`

The parameters tha you can include are:

* `amount`: The amount that will be charge to the client (\*).
* `description`: Description of the operation (Máx.: 20 caracters) (\*).
* `external_reference`: The external_reference is reference code that will allow you to track the MercadoPago payment_id in your system. 
* `notification_url`: The URL where you will receive the notifications.
* `payer_email`: Email of the payer.
* `success_url`: The URL where the user will be redirected when the payment succeded.
* `fail_url`: The URL where the user will be redirected when the payment was rejected.

> WARNING
>
> * The fields with a (\*), are mandatory.


In the [GitHub] article (https://github.com/mercadopago/point-android_integration#deep-linking) you can find more information and a desrcriptive example. podes obtener más información y el ejemplo correspondiente.


## Integración vía Intent-Based

> WARNING
>
> * This integration is only available for Android version 2.8.0 or superior.


Another way to integrate is by using Androids native code, via _Intent-Based_.

You must use the “startActivityForResult” method to start directly the payment process. The result of the payment is going to come as “activityResult”.

It its very important that the code has the ability to handle the situation where the user does not have the MercadoPago application installed in his/her device. In this case, we recommend to redirect the user to the Play store in order to be able to download it. 

As a reference you can use the example code and the documentation that has the structure set to send the payment info and handle the return object. 

In the [GitHub](https://github.com/mercadopago/point-android_integration#intent) article you can find more information and the corresponding example. 

## Via API integration

> WARNING
>
> * This integration is only available for Android version 2.8.0 or superior. 
> * It is not available for iOS.
> * In order to be able to actually go ahead with this integration, you have to contact [developers@mercadopago.com](mailto:developers@mercadopago.com), soy they can enable the Point integration settings in your Mercado Pago app. 

Another way to integrate the Mercado Pago application with our Point devices is via API. 

For this integration, first you need to configure the `device_name` from the Mercado Pago application. It helps us to identify the smartphone or tablet and link it to your Mercado Pago account. Like this, you´ll know to which device you have to send the payment_order. 

The next step consist in generating a payment order and sending it via API to the corresponding device. The user will see in the screen of the device the order sent to the application, this means that the user is going to be able to swipe the card at that moment and continue with the proccess. 

Once the payment is processed , the user will see the result in the Mercado Pago application. Finally, the order will close and the corresponding payment will be created. 


### Payment creation

The POST to the API generates an order that MercadoPago application receives in order to charge via the Point device. You´ll get an id that you could use to know the state of it. 

```curl
curl -X POST \
-H "Content-Type: application/json" \
-d '{"parameter_name":"parameter_value"}' \
'https://mobile.mercadopago.com/point/services/integrations/v1?access_token=ACCESS_TOKEN'
```

The parameters that can be included are: 

* `amount`: The amount that will be charge to the client (\*).
* `description`: Description of the operation (Máx.: 20 caracters) (\*).
* `device_name`: Name of the device in which you want to process the payment. (\*).
* `cc_type`: Card type. Credit or debit card (\*).
* `external_reference`: The external_reference is reference code that will allow you to track the MercadoPago payment_id in your system. 
* `disable_back_button`: True o False. To define wether you want the order to close or not by clicking the back button. 
* `notification_url`: The URL where you will receive the notifications.
* `payer_email`: Email of the payer.

> WARNING
>
> * The fields with a (\*), are mandatory.

The answer will have the following format:

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
'https://mobile.mercadopago.com/point/services/integrations/v1/:ID?access_token=ACCESS_TOKEN'
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

The DELETE in this API enables you to delete an order. You have to ways of doing so: 

By `device_name`:

```curl
curl -X DELETE \
-H "Content-Type: application/json" \
'https://mobile.mercadopago.com/point/services/integrations/v1/attempt/device/:DEVICE_NAME?access_token=ACCESS_TOKEN'
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
'https://mobile.mercadopago.com/point/services/integrations/v1/:ID?access_token=ACCESS_TOKEN'
```

**Response status code: 204 OK**

 
### Get all the devices from an account

The GET in this API enables you to get the configured and sincronized devices for your Mercado Pago account. 

```curl
curl -X DELETE \
-H "Content-Type: application/json" \
'https://mobile.mercadopago.com/point/services/integrations/v1/devices?access_token=ACCESS_TOKEN'
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

The DELETE in this API enables you to delete configured and sincronized devices from your Mercado Pago account. 


```curl
curl -X DELETE \
-H "Content-Type: application/json" \
'https://mobile.mercadopago.com/point/services/integrations/v1/devices/:DEVICE_NAME?access_token=ACCESS_TOKEN'
```

The answer will have the following format. 

```json
{
	"status":"OK"
}
```

**Response status code: 200 OK**


## Payment notifications

It is necessary that you send the `notification_url`, where you´ll get the notification about current and new payments.

In the article [notificaciones](/guides/notifications/webhooks.es.md) you could find more information about it.


## Point payments
Point payments can be search in the Payments API. You can find more information in the following article: [API's](/reference/payments/_payments_id/get/)

On the other hand, we have an exclusive Point API that has some additional information about the payments: `https://api.mercadolibre.com/point/services/payment/<payment_id>?access_token=<access_token>`

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
