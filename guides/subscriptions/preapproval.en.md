---
  indexable: false
---

# Payments without CVV

> NOTE
>
> Important
>
> This documentation is for internal team use only,  as it has been deprecated or is an exclusive product. For further details, talk to the sales or integrations team.
> <br/>
> In the case of Master and Amex credit cards, the credit card will appear as: "MERPAG * <brand_name>". So for these means that for this payments methods you can communicate: "In your summary you will see the charge as MERPAG * <brand_name>" where <Brand_name> is configured from the Market account Seller payment: Menu -> Settings> Name of my business.
> <br/>
> With the payments without cvv, you can make recurring charges with Mercado Pago having the freedom to adapt the solution in the most optimal way for your business
> <br/>
> This information is provided with the aim of providing all the tools to be able to perform the integration of the solution. The Seller must comply with the integration policies of Mercado Pago:
> <br/>
> 1. The Seller must communicate clearly and unequivocally to its user base or clients that the payment platform on its website is provided by Mercado Pago, and the terms or dates and the amounts of recurring payments.
>
> 2. In the event that existing users or customers of the Seller are being migrated to the Payments Recurrent Payment Market platform, the Seller must communicate in writing indicating that Mercado Pago will process the payments, informing that in the summary it will see the charge as MercadoPago / MercadoLibre" (*).
>
> 3. Pre-Approval is only available through the personalized Checkout Pro or web tokenize checkout, that is, via the use of our API's.
 
## Create an application

To create an application you have to enter with your Mercado Pago account at: [https://applications.mercadopago.com/](https://applications.mercadopago.com/) To be able to operate payments without CVP, the application must be enabled for that purpose. These permits are assigned from Mercado Pago, so you must send us the APP ID obtained to make the corresponding configuration.
 
## Charge the first payment
 
For the first transaction you will always have to request the data of the card, and pay the payment with security code. It can be done following the steps of our integration by [API](/developers/en/guides/checkout-api/receiving-payment-by-card).
 
## Create a customer and associate the used card
 
Once the first payment has been made, and having been assured that the card is valid, create a Customer that will be associated with your account and associate a card with it. You can do this following the step by step indicating in our integration of [Users and Cards](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/advanced-integration)

## Recurring your customers

### Get the customer saved

To know the data of your client, you can obtain it in the following way:
[[[
```php
<?php
require_once ('mercadopago.php'); $mp = new MP ("ENV_ACCESS_TOKEN"); 
$filters = array ("email" => "your.payer@email"); 
$customer = $mp->get ("/v1/customers/search", $filters);
print_r ($customer);
?>
```
]]]

### Get the card associated with your client

Once you have obtained the id of your client, you can look for the card in the following way:
[[[
```php
<?php
require_once ('mercadopago.php');
$mp = new MP ("ENV_ACCESS_TOKEN");
$cards = $mp->get ("/v1/customers/[CUSTOMER_ID]/cards");
print_r ($cards["response"]);
?>
```
]]]

### Get a token with the card_id

[[[
```php
<?php
require_once ('mercadopago.php');
$mp = new MP ("ENV_ACCESS_TOKEN");
$card_token = $mp->post ("/v1/card_tokens", array("json_data" => array("card_id" => "cardId" )));
print_r ($card_token);
?>
 ```
]]]

> NOTE
>
> Note
>
> Follow the step by step and avoid fraudulent payments with our recommendations to [improve the approval process](/guides/additional-content/resources/pci-compliant-merchants/receiving-payment-by-card/#bookmark_get_approval_faster_by_submitting_the_device_fingerprint).

### Do the Payment:

 How are you using a token created with the card_id, you will have to post the payment indicating the customer id associated with the card:
 [[[
```php
<?php
require_once ('mercadopago.php');
$mp = new MP('ENV_ACCESS_TOKEN');
$payment_data = array(
"transaction_amount'" => 100,
"token'" => "ff8080814c11e237014c1ff593b57b4d",
"description'" => "Title of what you are paying for",
"installments'" => 1,
"payer'" => array (
"id" => "12345678"
)
);
$payment = $mp->post("/v1/payments", $payment_data);
?>
```
]]]

## Listen for notifications of payments

 Every time a payment is made and there is a novelty about the payment, Mercado Pago will send you a notification so you can update your systems. You can see the step by step in our section of [notifications](/developers/en/guides/additional-content/your-integrations/notifications/webhooks)
 
 ## Retries

 If the payment without cvv is rejected, we recommend that you follow a retry logic according to the rejection status. For example, if the payment was rejected by expired card it does not make sense for a retry to be made. The client must be asked to inform another card to pay the following charges. In case the rejection is for insufficient funds, it makes sense that a logic of retries be made.
 
 ## Test your integration

 It is very important that before going to production you perform tests of the complete flow, verifying that the creation of payments is done correctly and that the messages are effective when communicating to the user.

 A good experience of your customers in the _checkout_ helps to improve the conversion.
 You have a couple of [credentials of _sandbox_]([FAKER][CREDENTIALS][URL]), which allow you to test all the integration in an exact replica of the Production Mode, being able to simulate transactions using the test cards:

| Country | Visa | Mastercard | American Express |
| --- | --- | --- | --- |
| Argentina | 4509 9535 6623 3704 |5031 7557 3453 0604|3711 803032 57522 |
| Brasil | 4235 6477 2802 5682 |5031 4332 1540 6351|3753 651535 56885 |
| Chile | 4168 8188 4444 7115 |5416 7526 0258 2580|3757 781744 61804 |
| Colombia | 4013 5406 8274 6260 |5254 1336 7440 3564|3743 781877 55283 |
| México | 4075 5957 1648 3764 | no disponible | no disponible |
| Perú | 4009 1753 3280 6176 | no disponible | no disponible |
| Uruguay | 4157 2362 1173 6486 |5808 8877 7464 1586| no disponible |

Also [you can use test cards of local payment methods in each country](/developers/en/guides/additional-content/additional-content/your-integrations/test/cards).
Test all possible scenarios of approved, pending or rejected payment. To do this you must enter in the form in the field `card_holder_name` any of the following prefixes:

* **APRO**: Pago aprobado.  
* **CONT**: Pago pendiente.  
* **CALL**: Rechazo llamar para autorizar.  
* **FUND**: Rechazo por monto insuficiente.  
* **SECU**: Rechazo por código de seguridad.  
* **EXPI**: Rechazo por fecha de expiración.
* **FORM**: Rechazo por error en formulario.  
* **OTHE**: Rechazo general.

In each case, you must inform your client of the result of the payment and what you should do as a next step.

For this we will inform you with an HTTP Status 201 OK that the payment has been created correctly and we will send a result code so that you can redirect the client to the page with the correct message.
  
## Verify you have received the Webhook notification
  
Mercado Pago will send you a notification of the event that occurred. Validate that you have received it correctly and impacted correctly in your management system.