# Integrate Checkout API payment for cards

[TXTSNIPPET][/guides/snippets/test-integration/receiving-payment-by-card]

## How it works

![API-integration-flowchart](/images/api/api-integration-flowchart-coremethods-v2-en.png)

> For an automated payment flow, [use MercadoPago.js V2 CardForm functionality](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/receiving-payment-by-card-v2).

<br>


With our Mercado Pago Checkout API, you should take into account two aspects: data capture and payment confirmation submission.


1. First, you need a frontend to collect card data and generate a security token with the information required to create a payment.
2. Then, you need a backend that takes the generated token and payment data, such as amount and item, to confirm and make a payment.

Both for frontend and backend, we recommend [our libraries](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/previous-requirements#bookmark_always_use_our_libraries) to collect user sensitive data securely.

> NOTE
>
> Note
>
> For more information, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference).

<br>

> CLIENT_SIDE
>
> h2
>
> Card data capture

To create a payment, you should capture card data through the buyer's browser. For security reasons, **never store data in your servers**.

> NOTE
>
> Note
>
> This documentation uses the new library version. To see the previous version, go to [integrate payment for cards with MercadoPago.js V1 section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/v1/receiving-payment-by-card).

To capture card data, follow these steps:

1. [Include MercadoPago.js library](#bookmark_1._include_mercadopago.js_library)
2. [Add payment form](#bookmark_2._add_payment_form)
3. [Configure your public key](#bookmark_3._configure_your_public_key)
4. [Create PCI fields](#bookmark_4._create_the_pci_fields)
5. [Get data for your form](#bookmark_5._get_data_for_your_form)
6. [Create card token](#bookmark_6._create_card_token)

### 1. Include MercadoPago.js library

Use our **official library** to access Mercado Pago API from your application and collect data securely.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

Card information will be turned into a token so that you can send data to your servers securely.

### 2. Add payment form

To capture sensitive data from your customer's cards, please use our form with the corresponding attributes to ensure information security and correct token generation. 

> NOTE
>
> Note
>
> The secure fields are `divs` because the real inputs will be within the iframe in a secure manner.

You can easily include anything you need, change the suggested `label` attribute, and add your own style.

The following example assumes that `transactionAmount` and `description` data were obtained in the previous step in which customers selected the product or service to be paid.

```html
<form id="form-checkout" method="POST" action="/process_payment">
  <div id="form-checkout__cardNumber-container"></div>
  <div id="form-checkout__cardExpirationDate-container" class="input"></div>
  <input type="text" name="cardholderName" id="form-checkout__cardholderName" placeholder="Cardholder name" />
  <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" placeholder="E-mail" />
  <div id="form-checkout__securityCode-container"></div>
  <select name="issuer" id="form-checkout__issuer">
    <option value="" disabled selected>Issuer</option>
  </select>----[mla, mlb, mlu, mlc, mpe, mco]----
  <select name="identificationType" id="form-checkout__identificationType">
    <option value="" disabled selected>Document type</option>
  </select>------------
  <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"
    placeholder="Document vaule" />
  <select name="installments" id="form-checkout__installments">
    <option value="" disabled selected>Choose the amount of installments</option>
  </select>
  <input id="token" name="token" type="hidden" />
  <input id="paymentMethodId" name="paymentMethodId" type="hidden" />
  <input id="transactionAmount" name="transactionAmount" type="hidden" value="100" />
  <input id="description" name="description" type="hidden" value="product description" />
  <button type="submit" id="form-checkout__submit">Pay</button>
</form>
```

> NOTE
>
> Note
>
> Before following the steps below, make sure that the form is available, so it can operate correctly.

### 3. Configure your public key

Add your [public key]([FAKER][CREDENTIALS][URL]) like this:

```javascript
 
<script>
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
 ----[mla, mlb, mlu, mlc, mpe, mco]----
// Add Step #getIdentificationTypes------------
// Add Step #getPaymentMethods
// Add Step #getIssuers
// Add Step #getInstallments
// Add Step #createCardToken
</script>
```

>  If you still don't have an account to check your credentials, [sign in](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### 4. Create the PCI fields

Safe fields (cardNumber, expirationDate and CVV) hosted by **Mercado Pago** are created in this step with **Fields**, using the `HTML iframe` element.

The second parameter is options, and can be assigned values ​​for **placeholder** and **style**. The value for **placeholder** must be a *string*, while **style** is an *object* with the keys being the CSS property name and the values ​​a string with the styling. Invalid values ​​will be ignored, with a warning displayed on the console.

For more details on the allowed styles, [check out the technical reference](https://github.com/lucmantovani/sdk-js/tree/feature/fields-docs#style).

A code example with `cardNumber`, `expirationDate` and `CVV` would be:

```javascript
  const cardNumberElement = mp.fields.create('cardNumber', {
    placeholder: "Card number",
  }).mount('form-checkout__cardNumber-container');
 
  const expirationDateElement = mp.fields.create('expirationDate', {
    placeholder: "MM/YYYY"
  }).mount('form-checkout__cardExpirationDate-container');
 
  const securityCodeElement = mp.fields.create('CVV', {
    placeholder: "CVV"  
  }).mount('form-checkout__securityCode-container');
```

### 5. Get data for your form

You must get the following data:

----[mla, mlb, mlu, mlc, mpe, mco]----
* [Document types](#bookmark_get_document_types) ------------
* [Card payment method](#bookmark_get_card_payment_method)
* [Issuer](#bookmark_obtain_issuer)
* [Number of installments](#bookmark_get_number_of_installments)

----[mla, mlb, mlu, mco, mlc, mpe]----

#### Get document types

Document type is one of the mandatory fields. Use the document list to fill out your data.

Including `select` type element with id `form-checkout__identificationType` contained in the form, you can automatically fill out the available choices when you call this function:

```javascript
// Step #getIdentificationTypes
 
// Helper function to append option elements to a select input
function createSelectOptions(elem, options, labelsAndKeys = { label : "name", value : "id"}){
  const {label, value} = labelsAndKeys;
 
  elem.options.length = 0;
 
  const tempOptions = document.createDocumentFragment();
 
  options.forEach( option => {
      const optValue = option[value];
      const optLabel = option[label];
 
      const opt = document.createElement('option');
      opt.value = optValue;
      opt.textContent = optLabel;
 
      tempOptions.appendChild(opt);
  });
 
  elem.appendChild(tempOptions);
}
 
// Get Identification Types
(async function getIdentificationTypes () {
  try {
      const identificationTypes = await mp.getIdentificationTypes();
      const identificationTypeElement = document.getElementById('form-checkout__identificationType');
 
      createSelectOptions(identificationTypeElement, identificationTypes)
  }catch(e) {
      return console.error('Error getting identificationTypes: ', e);
  }
})()
```

> Find more information in the [Document type section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/localization/identification-types).

------------

#### Get card payment method

Avoid mistakes and offer the correct available installments by validating your customers' data as they fill it out. Use the code in the following example to identify payment method with the first 6 digits of the card.

```javascript
function clearHTMLSelectChildrenFrom(element) {
    const currOptions = [...element.children];
    currOptions.forEach(child => child.remove());
}

// Step #getPaymentMethods
cardNumberElement.on('binChange', async (data) => {
    const { bin } = data;
    try {
      const paymentMethodElement = document.getElementById('paymentMethodId');
      const issuerElement = document.getElementById('form-checkout__issuer');
      const installmentsElement = document.getElementById('form-checkout__installments');

      if (!bin && paymentMethodElement.value) {
        clearHTMLSelectChildrenFrom(issuerElement)
        clearHTMLSelectChildrenFrom(installmentsElement)
        paymentMethodElement.value = "";
        return
      }
      
      if (bin && !paymentMethodElement.value) {
        const paymentMethods = await mp.getPaymentMethods({ bin });
        const { id: paymentMethodId, additional_info_needed, issuer } = paymentMethods.results[0];
        // Assign payment method ID to a hidden input.
        paymentMethodElement.value = paymentMethodId;
        // If 'issuer_id' is needed, we fetch all issuers (getIssuers()) from bin.
        // Otherwise we just create an option with the unique issuer and call getInstallments().
        additional_info_needed.includes('issuer_id') ? getIssuers(bin) : (() => {
          const issuerElement = document.getElementById('form-checkout__issuer');
          createSelectOptions(issuerElement, [issuer]);
          getInstallments(bin);
        })()
      }
    } catch (e) {
      console.error('error getting payment methods: ', e)
    }
  })
```

#### Obtain issuer

When completing the form, it is important to identify card's issuing bank to avoid conflicts between the different issuers and to be able to provide the correct payment options in installments.

Add the following code to obtain the `issuer_id`:

```javascript
// Step #getIssuers
const getIssuers = async (bin) => {
    try {
      const paymentMethodId = document.getElementById('paymentMethodId').value;
      const issuerElement = document.getElementById('form-checkout__issuer');
      const issuers = await mp.getIssuers({ paymentMethodId, bin });
      createSelectOptions(issuerElement, issuers);
      getInstallments(bin);
    } catch (e) {
      console.error('error getting issuers: ', e)
    }
  };
```

#### Get number of installments

The number of installments is also a mandatory field for credit card payments. You can use the function in the following example to fill out the _select_ type suggested field called `installments` and get the available installments.

```javascript
// Step #getInstallments
const getInstallments = async (bin) => {
    try {
      const installmentsElement = document.getElementById('form-checkout__installments')
      const installments = await mp.getInstallments({
        amount: document.getElementById('transactionAmount').value,
        bin,
        paymentTypeId: 'credit_card'
      });
      createSelectOptions(installmentsElement, installments[0].payer_costs, { label: 'recommended_message', value: 'installments' })
    } catch (e) {
      console.error('error getting installments: ', e)
    }
  }
```

From this point on, when entering a valid card number (eg 5031433215406351) in the `cardNumber` field, the `issuer` and `installments` fields should be completed automatically.

### 6. Create card token

Before submitting the payment, you must create a token containing all card information securely. You should generate it as follows:

```javascript
// Step #createCardToken
const formElement = document.getElementById('form-checkout');
  formElement.addEventListener('submit', e => createCardToken(e));
  const createCardToken = async (event) => {
    try {
      const tokenElement = document.getElementById('token');
      if (!tokenElement.value) {
        event.preventDefault();
        const token = await mp.fields.createCardToken({
          cardholderName: document.getElementById('form-checkout__cardholderName').value,----[mla, mlb, mlu, mlc, mpe, mco]----
          identificationType: document.getElementById('form-checkout__identificationType').value,------------
          identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
        });
        tokenElement.value = token.id;
        formElement.requestSubmit();
      }
    } catch (e) {
      console.error('error creating card token: ', e)
    }
  }
```

The `createCardToken` method will return a token with the secure card display.

We will take and save the response token ID in a hidden attribute called `token` and then send the form to your servers.


> WARNING
>
> Important
>
> Remember that the token is valid for 7 days and can be used only once.

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Payment submission to Mercado Pago

To continue with the Mercado Pago payment process, your backend should know how to receive form information with the generated token and the filled out data.

In the above example, after the `submit` action, your backend should display a `/process_payment` endpoint, which is defined in the form `action` attribute, to receive all data.

Once the request –with all the collected information– is in your backend, it should be submitted to Mercado Pago through our APIs.  The minimum mandatory fields to submit are: `token`, `transaction_amount`, `installments`, `payment_method_id` and `payer.email`.

For this to work, you should configure your [private key]([FAKER][CREDENTIALS][URL]). Also, to interact with our APIs, you should use [Mercado Pago official SDK](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/previous-requirements#bookmark__install_mercado_pago_sdk).

[[[
```php
===
Encontre o estado do pagamento no campo _status_.
===
<?php
   require_once 'vendor/autoload.php';
 
   MercadoPago\SDK::setAccessToken("YOUR_ACCESS_TOKEN");
 
   $payment = new MercadoPago\Payment();
   $payment->transaction_amount = (float)$_POST['transactionAmount'];
   $payment->token = $_POST['token'];
   $payment->description = $_POST['description'];
   $payment->installments = (int)$_POST['installments'];
   $payment->payment_method_id = $_POST['paymentMethodId'];
   $payment->issuer_id = (int)$_POST['issuer'];
 
   $payer = new MercadoPago\Payer();
   $payer->email = $_POST['email'];
   $payer->identification = array(----[mla, mlb, mlu, mlc, mpe, mco]----
       "type" => $_POST['identificationType'],------------
       "number" => $_POST['identificationNumber']
   );
   $payment->payer = $payer;
 
   $payment->save();
 
   $response = array(
       'status' => $payment->status,
       'status_detail' => $payment->status_detail,
       'id' => $payment->id
   );
   echo json_encode($response);
 
?>
```
```node
===
Find the payment status in the _status_ field.
===
 
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");
 
var payment_data = {
 transaction_amount: Number(req.body.transactionAmount),
 token: req.body.token,
 description: req.body.description,
 installments: Number(req.body.installments),
 payment_method_id: req.body.paymentMethodId,
 issuer_id: req.body.issuer,
 payer: {
   email: req.body.email,
   identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
     type: req.body.identificationType,------------
     number: req.body.identificationNumber
   }
 }
};
 
mercadopago.payment.save(payment_data)
 .then(function(response) {
   res.status(response.status).json({
     status: response.body.status,
     status_detail: response.body.status_detail,
     id: response.body.id
   });
 })
 .catch(function(error) {
   res.status(response.status).send(error);
 });
```
```java
===
Find the payment status in the _status_ field.
===
 
MercadoPago.SDK.setAccessToken("YOUR_ACCESS_TOKEN");
 
Payment payment = new Payment();
payment.setTransactionAmount(Float.valueOf(request.getParameter("transactionAmount")))
      .setToken(request.getParameter("token"))
      .setDescription(request.getParameter("description"))
      .setInstallments(Integer.valueOf(request.getParameter("installments")))
      .setPaymentMethodId(request.getParameter("paymentMethodId"));
 
Identification identification = new Identification();----[mla, mlb, mlu, mlc, mpe, mco]----
identification.setType(request.getParameter("identificationType"))
             .setNumber(request.getParameter("identificationNumber"));------------ ----[mlm]----
identification.setNumber(request.getParameter("identificationNumber"));------------
 
Payer payer = new Payer();
payer.setEmail(request.getParameter("email"))
    .setIdentification(identification);
   
payment.setPayer(payer);
 
payment.save();
 
System.out.println(payment.getStatus());
 
```
```ruby
===
Find the payment status in the _status_ field.
===
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')
 
payment_data = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 description: params[:description],
 installments: params[:installments].to_i,
 payment_method_id: params[:paymentMethodId],
 payer: {
   email: params[:email],
   identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
     type: params[:identificationType],------------
     number: params[:identificationNumber]
   }
 }
}
 
payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]
 
puts payment
 
```
```csharp
===
Find the payment status in the _status_ field.
===
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;
 
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
 
var paymentRequest = new PaymentCreateRequest
{
   TransactionAmount = decimal.Parse(Request["transactionAmount"]),
   Token = Request["token"],
   Description = Request["description"],
   Installments = int.Parse(Request["installments"]),
   PaymentMethodId = Request["paymentMethodId"],
   Payer = new PaymentPayerRequest
   {
       Email = Request["email"],
       Identification = new IdentificationRequest
       {----[mla, mlb, mlu, mlc, mpe, mco]----
           Type = Request["identificationType"],------------
           Number = Request["identificationNumber"],
       },
   },
};
 
var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);
 
Console.WriteLine(payment.Status);
 
```
```python
===
Find the payment status in the _status_ field.
===
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")
 
payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "installments": int(request.POST.get("installments")),
   "payment_method_id": request.POST.get("payment_method_id"),
   "payer": {
       "email": request.POST.get("email"),
       "identification": {----[mla, mlb, mlu, mlc, mpe, mco]----
           "type": request.POST.get("type"), ------------
           "number": request.POST.get("number")
       }
   }
}
 
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
 
print(payment)
```
```curl
===
Find the payment status in the _status_ field.
===
 
curl -X POST \
   -H 'accept: application/json' \
   -H 'content-type: application/json' \
   -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
   'https://api.mercadopago.com/v1/payments' \
   -d '{
         "transaction_amount": 100,
         "token": "ff8080814c11e237014c1ff593b57b4d",
         "description": "Blue shirt",
         "installments": 1,
         "payment_method_id": "visa",
         "issuer_id": 310,
         "payer": {
           "email": "test@test.com"
         }
   }'
 
```
]]]

#### Response

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

> Check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments/post) to learn about all the available fields for full payments.

## Response Handling

[TXTSNIPPET][/guides/snippets/test-integration/api-response-handling]

## Receive payment notifications

[TXTSNIPPET][/guides/snippets/test-integration/api-payment-notifications]

## Sample projects

> GIT
>
> Payment form
>
> If you want to deploy other technology in your server, you can [download a complete payment form sample](https://drive.google.com/file/d/10csLR_4NwMbXtHObxZ1Ej9fvB2Zkr7AS/view?usp=sharing) from GitHub.

## Add custom events

It is possible to add other custom events to the inputs, such as focus, blur, ready and validityChange:

```javascript
cardNumberElement.on("focus", () => console.log("Card Number received focus"));
```

If you wish to know more about other customized events, access our [GitHub](https://github.com/lucmantovani/sdk-js/tree/feature/fields-docs#field-instanceonevent-callbacks) documentation.

---
### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Test your integration
>
> Check that everything works in your integration with test users.
>
> [Test your integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/testing)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Integrate other payment methods
>
> Learn about all the available payment options and how to offer them.
>
> [Integrate other payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/other-payment-ways)
