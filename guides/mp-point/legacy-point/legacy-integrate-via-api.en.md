# Integration via API

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

## Payment creation

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

## Get the payment order

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

## Delete the payment order

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

## Get all the devices from an account

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

## Delete a device from an account

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

> PREV_STEP_CARD_EN
>
> Integration via Deep Linking
>
> Check how to integrate Mercado Pago Point via Deep Linking
>
> [Integration via Deep Linking](/developers/en/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking)