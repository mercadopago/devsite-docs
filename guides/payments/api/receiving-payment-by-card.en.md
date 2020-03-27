# Receive card payments

With Mercado Pago you can collect card information in a secure way, while keeping control over the shopping experience offered to your users.

## Collect card information

The card information is collected from your buyer’s browser. **For security reasons, it is very important that these data never reach your servers.**

Mercado Pago has a Javascript library to help you do this simply and safely.

### 1. Include MercadoPago.js

To use this library, you must first enter the following code in our checkout:

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

> NOTE
>
> Note
>
> The library must **always** be imported from https://secure.mlstatic.com.

### 2. Set up your public key

Your public key is what identifies you so that you can safely collect the card information. The public key must be uploaded after including _MercadoPago.js_ and before making a request.

```javascript
window.Mercadopago.setPublishableKey("ENV_PUBLIC_KEY");
```

> NOTE
>
> Note
>
> This is a public key of the test environment. To capture real cards you will need to replace them with your own [production public key]([FAKER][CREDENTIALS][URL]).


### 3. Collect card information

#### Form

The next step is to collect the card information. To do this it is important to have a form that uses the following `data-checkout` attributes:

```html
<form action="payment_processing" method="post" id="pay" name="pay" >
    <fieldset>
        <ul>
            <li>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" value="test_user_19653727@testuser.com" placeholder="your email"/>
            </li>
            <li>
                <label for="cardNumber">Credit card number:</label>
                <input type="text" id="cardNumber" data-checkout="cardNumber" placeholder="4509 9535 6623 3704" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
            </li>
            <li>
                <label for="securityCode">Security code:</label>
                <input type="text" id="securityCode" data-checkout="securityCode" placeholder="123" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
            </li>
            <li>
                <label for="cardExpirationMonth">Expiration month:</label>
                <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" placeholder="11" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
            </li>
            <li>
                <label for="cardExpirationYear">Expiration year:</label>
                <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" placeholder="2025" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
            </li>
            <li>
                <label for="cardholderName">Card holder name:</label>
                <input type="text" id="cardholderName" data-checkout="cardholderName" placeholder="APRO" />
            </li>
            <li>
                <label for="docType">Document type:</label>
                <select id="docType" data-checkout="docType"></select>
            </li>
            <li>
                <label for="docNumber">Document number:</label>
                <input type="text" id="docNumber" data-checkout="docNumber" placeholder="12345678" />
            </li>
             <li>
               <label for="installments">Installments:</label>
               <select id="installments" class="form-control" name="installments"></select>
          </li>
        </ul>
        <input type="hidden" name="amount" id="amount"/>
        <input type="hidden" name="description"/>
        <input type="hidden" name="paymentMethodId" />
        <input type="submit" value="Pay!" />
    </fieldset>
</form>
```

> WARNING
>
> Important
>
> Fields that contain sensitive data do not have the `name` attribute, so they will never reach your servers.

----[mla, mlb, mlu, mco, mlc, mpe]----
#### Get the document type

The document type and number are among the required fields.

It is possible to get the list of available documents:


```javascript
window.Mercadopago.getIdentificationTypes();
```
------------

#### Get the card’s payment method

It is important to get the card’s payment method so that payment can be made. The function `getBin()` in the example below retrieves the first 6 digits of the credit card. This digits identifies the payment method and the issuer of that card.

The _callback_ function `setPaymentMethodInfo` receives a _status_ and a _response_ and it storages the id of the response in the attribute `paymentMethodId` (_input hidden_).

```javascript

function addEvent(to, type, fn){ 
        if(document.addEventListener){
            to.addEventListener(type, fn, false);
        } else if(document.attachEvent){
            to.attachEvent('on'+type, fn);
        } else {
            to['on'+type] = fn;
        }  
    }; 

addEvent(document.querySelector('#cardNumber'), 'keyup', guessingPaymentMethod);
addEvent(document.querySelector('#cardNumber'), 'change', guessingPaymentMethod);

function getBin() {
  const cardnumber = document.getElementById("cardNumber");
  return cardnumber.value.substring(0,6);
};

function guessingPaymentMethod(event) {
    var bin = getBin();

    if (event.type == "keyup") {
        if (bin.length >= 6) {
            window.Mercadopago.getPaymentMethod({
                "bin": bin
            }, setPaymentMethodInfo);
        }
    } else {
        setTimeout(function() {
            if (bin.length >= 6) {
                window.Mercadopago.getPaymentMethod({
                    "bin": bin
                }, setPaymentMethodInfo);
            }
        }, 100);
    }
};

function setPaymentMethodInfo(status, response) {
    if (status == 200) {
        const paymentMethodElement = document.querySelector('input[name=paymentMethodId]');

        if (paymentMethodElement) {
            paymentMethodElement.value = response[0].id;
        } else {
            const input = document.createElement('input');
            input.setAttribute('name', 'paymentMethodId');
            input.setAttribute('type', 'hidden');
            input.setAttribute('value', response[0].id);     

            form.appendChild(input);
        }

        Mercadopago.getInstallments({
            "bin": getBin(),
            "amount": parseFloat(document.querySelector('#amount').value),
        }, setInstallmentInfo);

    } else {
        alert(`payment method info error: ${response}`);  
    }
};
```

#### Collect data

Before submitting the form, you must capture the `submit` event and use the `Mercadopago.createToken(form, sdkRespondeHandler);` method.

```javascript
doSubmit = false;
addEvent(document.querySelector('#pay'), 'submit', doPay);
function doPay(event){
    event.preventDefault();
    if(!doSubmit){
        var $form = document.querySelector('#pay');

        window.Mercadopago.createToken($form, sdkResponseHandler); // The function "sdkResponseHandler" is defined below

        return false;
    }
};

function sdkResponseHandler(status, response) {
    if (status != 200 && status != 201) {
        alert("verify filled data");
    }else{
        var form = document.querySelector('#pay');
        var card = document.createElement('input');
        card.setAttribute('name', 'token');
        card.setAttribute('type', 'hidden');
        card.setAttribute('value', response.id);
        form.appendChild(card);
        doSubmit=true;
        form.submit();
    }
};
```

By submitting the `form` and using the `data-checkout` attributes, all fields are captured.

The `createToken` method will return a card_token, which is the secure representation of the card:

```json
{
    "id": "ff8080814cbd77a8014cc",
    "public_key": "TEST-b3d5b663-664a-4e8f-b759-de5d7c12ef8f",
    "card_id": null,
    "luhn_validation": true,
    "status": "active",
    "date_used": null,
    "card_number_length": 16,
    "date_created": "2015-04-16T13:06:25.525-04:00",
    "first_six_digits": "450995",
    "last_four_digits": "3704",
    "security_code_length": 3,
    "expiration_month": 6,
    "expiration_year": 2017,
    "date_last_updated": "2015-04-16T13:06:25.525-04:00",
    "date_due": "2015-04-24T13:06:25.531-04:00",
    "live_mode": false,
    "cardholder": {
        "identification": {
            "number": "23456789",
            "type": "type"
        },
        "name": "name"
    }
}
```

The second field of `createToken` method is the `sdkResponseHandler`, which is a callback function that will run when creating the `card_token`.

We will use this to create a hidden field (input hidden), and store the `id` value in order to send the form to your servers.


## Receive card payments

From the parameters sent in the `POST`, you should get the `card_token` id to make a single payment.

A `card_token` **is valid for 7 days** and can be used only once.

To make the payment, simply make an API call in the route defined in the form _action_:

[[[
```php
<?php  
    ===
    The **status** property value will indicate the payment status (**approved**, **rejected** or **in_process**).
    ===

    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200];
    $payment->token = "ff8080814c11e237014c1ff593b57b4d";
    $payment->description = "[FAKER][COMMERCE][PRODUCT_NAME]";
    $payment->installments = 1;
    $payment->payment_method_id = "visa";
    $payment->payer = array(
    "email" => "[FAKER][INTERNET][FREE_EMAIL]"
    );
    // Save and posting the payment
    $payment->save();
    //...
    // Print the payment status
    echo $payment->status;
    //...
?>
```
```java
===
The **getStatus()** value will indicate the payment status (**approved**, **rejected** or **in_process**).
===

MercadoPago.SDK.setAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment();
payment.setTransactionAmount([FAKER][NUMBER][BETWEEN][100, 200])
    .setToken("ff8080814c11e237014c1ff593b57b4d")
    .setDescription("[FAKER][COMMERCE][PRODUCT_NAME]")
    .setInstallments(1)
    .setPaymentMethodId("visa")
    .setPayer(new Payer()
        .setEmail("[FAKER][INTERNET][FREE_EMAIL]"));
// Save and posting the payment
payment.save();
//...
// Print the payment status
System.out.println(payment.getStatus());
//...
```
```node
===
The **status** property value will indicate the payment status (**approved**, **rejected** or **in_process**).
===

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("ENV_ACCESS_TOKEN");

var payment_data = {
    transaction_amount: [FAKER][NUMBER][BETWEEN][100, 200],
    token: 'ff8080814c11e237014c1ff593b57b4d'
    description: '[FAKER][COMMERCE][PRODUCT_NAME]',
    installments: 1,
    payment_method_id: 'visa',
    payer: {
        email: '[FAKER][INTERNET][FREE_EMAIL]'
    }
};

// Save and posting the payment
    mercadopago.payment.save(payment_data).then(function (data) {
      console.log(data);
      res.send(data);
    }).catch(function (error) {
      console.log(error);
    });

```
```ruby
===
The **status** property value will indicate the payment status (**approved**, **rejected** or **in_process**).
===

require 'mercadopago'
MercadoPago::SDK.access_token = "ENV_ACCESS_TOKEN";

payment = MercadoPago::Payment.new()
payment.transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200]
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.description = '[FAKER][COMMERCE][PRODUCT_NAME]'
payment.installments = 1
payment.payment_method_id = "visa"
payment.payer = {
email: "[FAKER][INTERNET][FREE_EMAIL]"
}
# Save and posting the payment
payment.save()

```
```csharp
===
The **Status** property value will indicate the payment status (**approved**, **rejected** or **in_process**).
===

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
// ...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment()
{
    TransactionAmount = float.Parse("[FAKER][NUMBER][BETWEEN][100, 200]"),
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Description = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Installments = 1,
    PaymentMethodId = "visa",
    Payer = new Payer(){
        Email = "[FAKER][INTERNET][FREE_EMAIL]"
    }
};
// Save and posting the payment
payment.Save();
//...
// Print the payment status
console.log(payment.Status);
//...
```
]]]

> The required fields to be sent are `token`, `transaction_amount`, `payment_method_id` and `payer.email`.

Answer:

```json
{
    "status": "approved",
    "status_detail": "accredited",
    "id": 3055677,
    "date_approved": "2019-02-23T00:01:10.000-04:00",
    "payer": {
        ...
    },
    "payment_method_id": "visa",
    "payment_type_id": "credit_card",
    "refunds": [],
    ...
}
```

> NOTE
>
> Note
>
> See more information about [response handling](https://www.mercadopago.com.ar/developers/en/guides/payments/api/handling-responses).

## Receive a payment with installments

In order to benefit from the [promotions](https://www.mercadopago.com.ar/promociones) offered by MercadoPago, it is important to submit the `issuer_id` and `installments` field when creating a payment.

The installments field corresponds to the number of `installments` selected by the buyer. The `issuer_id` is the issuing bank of the card.

In order to get the installments available:


```javascript

function setInstallmentInfo(status, response) {
        var selectorInstallments = document.querySelector("#installments"),
        fragment = document.createDocumentFragment();
        selectorInstallments.options.length = 0;

        if (response.length > 0) {
            var option = new Option("Escolha...", '-1'),
            payerCosts = response[0].payer_costs;
            fragment.appendChild(option);
            
            for (var i = 0; i < payerCosts.length; i++) {
                fragment.appendChild(new Option(payerCosts[i].recommended_message, payerCosts[i].installments));
            }
            
            selectorInstallments.appendChild(fragment);
            selectorInstallments.removeAttribute('disabled');
        }
    };
```

The response includes the `issuer_id` to be sent, and the recommended message to be shown in each of the available installments specifying the amount to be paid:

```json
[
  {
    "payment_method_id": "amex",
    "payment_type_id": "credit_card",
    "issuer": {
        "id": "310",
        ...,
        {
            "installments": 3,
            "installment_rate": 18.9,
            "discount_rate": 0,
            "labels": [
            ],
            "min_allowed_amount": 2,
            "max_allowed_amount": 250000,
            "recommended_message": "3 cuotas de $ 396,33 ($ 1.189,00)",
            "installment_amount": 396.33,
            "total_amount": 1189
        }
        ...,
    ]
  }
]
```

> NOTE
>
> Note
>
> Due to [Resolution E 51/2017](https://www.boletinoficial.gob.ar/#!DetalleNormaBusquedaRapida/158269/20170125/resolucion%2051) of the Argentine Secretary of Commerce, on transparent prices, it is necessary that you comply with certain [additional requirements](https://www.mercadopago.com.ar/developers/en/guides/localization/considerations-argentina).

To create the payment, it is important to send the data indicated above:

[[[
```php
<?php  

    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200];
    $payment->token = "ff8080814c11e237014c1ff593b57b4d";
    $payment->description = "[FAKER][COMMERCE][PRODUCT_NAME]";
    $payment->installments = 3;
    $payment->payment_method_id = "visa";
    $payment->issuer_id = 310;
    $payment->payer = array(
    "email" => "[FAKER][INTERNET][FREE_EMAIL]"
    );
    // Save and posting the payment
    $payment->save();
    //...
?>
```
```java

MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");
// ...
Payment payment = new Payment();
payment.setTransactionAmount([FAKER][NUMBER][BETWEEN][100, 200])
       .setToken("ff8080814c11e237014c1ff593b57b4d")
       .setDescription("[FAKER][COMMERCE][PRODUCT_NAME]")
       .setInstallments(3)
       .setIssuerId(310)
       .setPaymentMethodId("visa")
       .setPayer(new Payer()
         .setEmail("[FAKER][INTERNET][FREE_EMAIL]"));
// Save and posting the payment
payment.save
// ...
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("ENV_ACCESS_TOKEN");

var payment_data = {
  transaction_amount: [FAKER][NUMBER][BETWEEN][100, 200],
  token: 'ff8080814c11e237014c1ff593b57b4d'
  description: '[FAKER][COMMERCE][PRODUCT_NAME]',
  installments: 3,
  payment_method_id: 'amex',
  issuer_id: 310,
  payer: {
    email: '[FAKER][INTERNET][FREE_EMAIL]'
  }
};
// Save and posting the payment
mercadopago.payment.save(payment_data).then(function (data) {
      console.log(data);
      res.send(data);
    }).catch(function (error) {
      console.log(error);
    });

```
```ruby

require 'mercadopago'
# ...
MercadoPago::SDK.setAccessToken("ENV_ACCESS_TOKEN")
# ...
payment = MercadoPago::Payment.new()
payment.transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200]
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.description = '[FAKER][COMMERCE][PRODUCT_NAME]'
payment.installments = 3
payment.payment_method_id = 'amex'
payment.issuer_id = 310
payment.payer = {
  email: "[FAKER][INTERNET][FREE_EMAIL]"
}
# Save and posting the payment
payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
//...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment()
{
    TransactionAmount = float.Parse("[FAKER][NUMBER][BETWEEN][100, 200]"),
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Description = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Installments = 3,
    IssuerId = 310,
    PaymentMethodId = "visa",
    Payer = new Payer(){
        Email = "[FAKER][INTERNET][FREE_EMAIL]"
    }
};
// Save and posting the payment
payment.Save();
//...
```
]]]

### Here is an example of a payment with all the data

```json
 {
    "transaction_amount": 100,
    "token": "ff8080814c11e237014c1ff593b57b4d",
    "description": "Title of what you are paying for",
    "installments": 12,
    "payment_method_id": "visa",
    "payer": {
        "email": "test_user_19653727@testuser.com"
    },
    "external_reference": "Reference_1234",
    "metadata": {
        "key1": "value1",
        "key2": "value2"
    },
    "statement_descriptor": "MY E-STORE",
    "notification_url": "https://www.your-site.com/webhooks",
    "additional_info": {
        "items": [
            {
                "id": "item-ID-1234",
                "title": "Title of what you are paying for",
                "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
                "description": "Item description",
                "category_id": "art", // Available categories at https://api.mercadopago.com/item_categories
                "quantity": 1,
                "unit_price": 100
            }
        ],
        "payer": {
            "first_name": "user-name",
            "last_name": "user-surname",
            "registration_date": "2015-06-02T12:58:41.425-04:00",
            "phone": {
                "area_code": "11",
                "number": "4444-4444"
            },
            "address": {
                "street_name": "Street",
                "street_number": 123,
                "zip_code": "5700"
            }
        },
        "shipments": {
            "receiver_address": {
                "zip_code": "5700",
                "state_name": "State",
                "city_name": "City",
                "street_name": "Street",
                "street_number": 123,
                "floor": 4,
                "apartment": "C"
            }
        }
    }
}
```

## Response handling

It is **very important** to correctly report the results received when creating a payment. This will help improve conversion in cases of rejections, and avoid chargebacks in cases of approved transactions.

We recommend that you read the article [response handling](https://www.mercadopago.com.ar/developers/en/guides/payments/api/handling-responses) and use the suggested communication in each case.

> NOTE
>
> Note
>
> Avoid rejected payments with our recommendations to [improve the approval process](https://www.mercadopago.com.ar/developers/en/guides/manage-account/payment-rejections).

## Receive a payment notification

It is important to be aware of any updates on your payment status. For this, you must use Webhooks.

A Webhook is a notification that is sent from one server to another through an `HTTP POST` request.

You can find all the information about it in the [Webhooks](https://www.mercadopago.com.ar/developers/en/guides/notifications/webhooks) section.

### Next steps

#### Receive payments with stored cards

You can securely store your customer’s cards and make payments with a one-click-to-buy experience.

[More info.](https://www.mercadopago.com.ar/developers/en/guides/payments/api/customers-and-cards)
