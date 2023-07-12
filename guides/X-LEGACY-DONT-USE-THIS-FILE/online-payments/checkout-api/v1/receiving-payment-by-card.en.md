# Integrate Checkout API payment for cards

Integrating Mercado Pago's Checkout API for cards allows you to offer a complete payment option within the site. The entire experience takes place in your store, so customers avoid exiting your site while making a purchase.

Use our [sample projects](#bookmark_sample_projects) for a complete integration. You can adapt them according to your needs.

## How does it work?

![API-integration-flowchart](/images/api/api-integration-flowchart-en.png)

<br>


With our Mercado Pago Checkout API, you should take into account two aspects: data capture and payment confirmation submission.


1. First, you need a frontend to collect card data and generate a security token with the information required to create a payment.
2. Then, you need a backend that takes the generated token and payment data, such as amount and item, to confirm and make a payment.

Both for frontend and backend, we recommend [our libraries](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/v1/previous-requirements/#bookmark_always_use_our_libraries) to collect user sensitive data securely.

> For more information, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference).

<br>

> CLIENT_SIDE
>
> h2
>
> Card data capture

> INFO
>
> New MercadoPago.js version
>
> Use MercadoPago.js V2 library to create your card form with CardForm functionality, which includes all business logic needed to make the payment.<br><br>[Integrate Checkout API with MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/receiving-payment-by-card)

To create a payment, you should capture card data through the buyer's browser. For security reasons, **never store data in your servers**.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Include MercadoPago.js library

**Use our official library to access Mercado Pago API** from your application and collect data securely.

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

Card information will be turned into a token so that you can send data to your servers securely.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Add payment form

To capture sensitive data from your customer's cards, **please use our form with the corresponding attributes,** which ensures information security and correct token generation. For example, you should observe `data-checkout` attributes and avoid putting the `name` attribute in fields containing sensitive data. This way your servers will never store data.

You can easily include anything you need, change the suggested `label` attribute, and add your own style.

The following example assumes that `transactionAmount` and `description` data were obtained in a previous step in which customers selected the product or service to be paid.

```html
<form action="/process_payment" method="post" id="paymentForm">
   <h3>Buyer Details</h3>
     <div>
       <div>
         <label for="email">E-mail</label>
         <input id="email" name="email" type="text" value="test@test.com"/>
       </div>----[mla, mlb, mlu, mlc, mpe, mco]----
       <div>
         <label for="docType">Document Type</label>
         <select id="docType" name="docType" data-checkout="docType" type="text"></select>
       </div>------------
       <div>
         <label for="docNumber">Document Number</label>
         <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
       </div>
     </div>
   <h3>Card Details</h3>
     <div>
       <div>
         <label for="cardholderName">Card Holder</label>
         <input id="cardholderName" data-checkout="cardholderName" type="text">
       </div>
       <div>
         <label for="">Expiration Date</label>
         <div>
           <input type="text" placeholder="MM" id="cardExpirationMonth" data-checkout="cardExpirationMonth"
             onselectstart="return false" onpaste="return false"
             oncopy="return false" oncut="return false"
             ondrag="return false" ondrop="return false" autocomplete=off>
           <span class="date-separator">/</span>
           <input type="text" placeholder="YY" id="cardExpirationYear" data-checkout="cardExpirationYear"
             onselectstart="return false" onpaste="return false"
             oncopy="return false" oncut="return false"
             ondrag="return false" ondrop="return false" autocomplete=off>
         </div>
       </div>
       <div>
         <label for="cardNumber">Card Number</label>
         <input type="text" id="cardNumber" data-checkout="cardNumber"
           onselectstart="return false" onpaste="return false"
           oncopy="return false" oncut="return false"
           ondrag="return false" ondrop="return false" autocomplete=off>
       </div>
       <div>
         <label for="securityCode">CVV</label>
         <input id="securityCode" data-checkout="securityCode" type="text"
           onselectstart="return false" onpaste="return false"
           oncopy="return false" oncut="return false"
           ondrag="return false" ondrop="return false" autocomplete=off>
       </div>
       <div id="issuerInput">
         <label for="issuer">Issuer</label>
         <select id="issuer" name="issuer" data-checkout="issuer"></select>
       </div>
       <div>
         <label for="installments">Installments</label>
         <select type="text" id="installments" name="installments"></select>
       </div>
       <div>
         <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
         <input type="hidden" name="paymentMethodId" id="paymentMethodId" />
         <input type="hidden" name="description" id="description" />
         <br>
         <button type="submit">Pay</button>
         <br>
       </div>
   </div>
 </form>
```

> NOTE
>
> Note
>
> Note that it is necessary that the form be found before all the following steps for its correct operation.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configure your public key

Add your [public key]([FAKER][CREDENTIALS][URL]) like this:

```javascript
window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
```

>  If you still don't have an account to check your credentials, [sign in](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Get data for your form

----[mla, mlb, mlu, mco, mlc, mpe]----

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get document types

Document type is one of the mandatory fields. Use the document list to fill out your data.

When you call the next function, MercadoPago.js will automatically fill out the available options, including the _select_ type element with `id = docType` in the form:

```javascript
window.Mercadopago.getIdentificationTypes();
```

> Find more information in the [Document type section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/localization/identification-types).

------------

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get card payment method

Avoid mistakes and offer the correct available installments by validating your customers' data as they fill it out. Use the code in the following example to identify payment method with the first 6 digits of the card.

```javascript
document.getElementById('cardNumber').addEventListener('change', guessPaymentMethod);

function guessPaymentMethod(event) {
   let cardnumber = document.getElementById("cardNumber").value;
   if (cardnumber.length >= 6) {
       let bin = cardnumber.substring(0,6);
       window.Mercadopago.getPaymentMethod({
           "bin": bin
       }, setPaymentMethod);
   }
};

function setPaymentMethod(status, response) {
   if (status == 200) {
       let paymentMethod = response[0];
       document.getElementById('paymentMethodId').value = paymentMethod.id;

       getIssuers(paymentMethod.id);
   } else {
       alert(`payment method info error: ${response}`);
   }
}

```

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtain issuer

When completing the form, it is important to identify card's issuing bank to avoid conflicts between the different issuers and to be able to provide the correct payment options in installments.

Add the following code to obtain the `issuer_id`:

```javascript
function getIssuers(paymentMethodId) {
   window.Mercadopago.getIssuers(
       paymentMethodId,
       setIssuers
   );
}

function setIssuers(status, response) {
   if (status == 200) {
       let issuerSelect = document.getElementById('issuer');
       response.forEach( issuer => {
           let opt = document.createElement('option');
           opt.text = issuer.name;
           opt.value = issuer.id;
           issuerSelect.appendChild(opt);
       });

       getInstallments(
           document.getElementById('paymentMethodId').value,
           document.getElementById('transactionAmount').value,
           issuerSelect.value
       );
   } else {
       alert(`issuers method info error: ${response}`);
   }
}
```

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get number of installments

The number of installments is also a mandatory field for credit card payments. You can use the function in the following example to fill out the _select_ type suggested field called `installments` and get the available installments.

```javascript
function getInstallments(paymentMethodId, transactionAmount, issuerId){
   window.Mercadopago.getInstallments({
       "payment_method_id": paymentMethodId,
       "amount": parseFloat(transactionAmount),
       "issuer_id": parseInt(issuerId)
   }, setInstallments);
}

function setInstallments(status, response){
   if (status == 200) {
       document.getElementById('installments').options.length = 0;
       response[0].payer_costs.forEach( payerCost => {
           let opt = document.createElement('option');
           opt.text = payerCost.recommended_message;
           opt.value = payerCost.installments;
           document.getElementById('installments').appendChild(opt);
       });
   } else {
       alert(`installments method info error: ${response}`);
   }
}
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Create card token

Before payment submission, you must create a token containing all card information securely. You should generate it as follows:

```javascript
doSubmit = false;
document.getElementById('paymentForm').addEventListener('submit', getCardToken);
function getCardToken(event){
   event.preventDefault();
   if(!doSubmit){
       let $form = document.getElementById('paymentForm');
       window.Mercadopago.createToken($form, setCardTokenAndPay);
       return false;
   }
};

function setCardTokenAndPay(status, response) {
   if (status == 200 || status == 201) {
       let form = document.getElementById('paymentForm');
       let card = document.createElement('input');
       card.setAttribute('name', 'token');
       card.setAttribute('type', 'hidden');
       card.setAttribute('value', response.id);
       form.appendChild(card);
       doSubmit=true;
       form.submit();
   } else {
       alert("Verify filled data!\n"+JSON.stringify(response, null, 4));
   }
};
```

The `createToken` method will return a `card_token` with the secure card display. The second field of the `createToken` method is the `callback` function, which will process the response (in this case, we use the `setCardTokenAndPay` function). We will take and save the response ID in a hidden attribute called `token` and then send the form to your servers.

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

For this to work, you should configure your [private key]([FAKER][CREDENTIALS][URL]). Also, to interact with our APIs, you should use [Mercado Pago official SDK](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/v1/previous-requirements/#bookmark__install_mercado_pago_sdk).

[[[
```php
===
You can find payment status in _status_ value.
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
        "type" => $_POST['docType'],------------
        "number" => $_POST['docNumber']
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
You can find payment status in _status_ value.
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
      type: req.body.docType,------------
      number: req.body.docNumber
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
You can find payment status in _status_ value.
===

MercadoPago.SDK.setAccessToken("YOUR_ACCESS_TOKEN");

Payment payment = new Payment();
payment.setTransactionAmount(Float.valueOf(request.getParameter("transactionAmount")))
       .setToken(request.getParameter("token"))
       .setDescription(request.getParameter("description"))
       .setInstallments(Integer.valueOf(request.getParameter("installments")))
       .setPaymentMethodId(request.getParameter("paymentMethodId"));

Identification identification = new Identification();----[mla, mlb, mlu, mlc, mpe, mco]----
identification.setType(request.getParameter("docType"))
              .setNumber(request.getParameter("docNumber"));------------ ----[mlm]----
identification.setNumber(request.getParameter("docNumber"));------------

Payer payer = new Payer();
payer.setEmail(request.getParameter("email"))
     .setIdentification(identification);

payment.setPayer(payer);

payment.save();

System.out.println(payment.getStatus());

```
```ruby
===
You can find payment status in _status_ value.
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
      type: params[:docType],------------
      number: params[:docNumber]
    }
  }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]

puts payment

```
```csharp
===
You can find payment status in _status_ value.
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
            Type = Request["docType"],------------
            Number = Request["docNumber"],
        },
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);

Console.WriteLine(payment.Status);

```
```python
===
You can find payment status in _status_ value.
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
You can find payment status in _status_ value.
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

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response

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

Possible payment statuses are:

![payment-status](/images/api/api-payment-status-en.png)
<br>
<br>

For improved payment approval, you need to correctly inform results to your customers when making or creating a payment.

This will prevent rejections and chargebacks in the case of already approved transactions.  For example, this allows you to correct data upload mistakes or change payment methods.

We recommend using [response handling](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/v1/handling-responses) and the suggested communication in each case.

> NOTE
>
> Note
>
> Avoid rejected payments with our recommendations to [improve the approval process](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/payment-rejections).

## Receive payment notifications

Finally, you always need to be notified of new payments and status updates.  For example, if they were approved, rejected, or are pending.

[Configure webhook notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/webhooks/webhooks) or [IPN notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/introduction).

## Sample projects

> GIT
>
> Checkout API
>
> Use our [complete integration examples](http://github.com/mercadopago/card-payment-sample) on GitHub in PHP or NodeJS to download instantly.

<span></span>

> GIT
>
> Payment form
>
> If you want to deploy other technology in your server, you can [download a complete payment form sample](https://github.com/mercadopago/card-payment-sample) from GitHub.

---
### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Test your integration
>
> Check that everything works in your integration with test users.
>
> [Test your integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/v1/testing)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Integrate other payment methods
>
> Learn about all the available payment options and how to offer them.
>
> [Integrate other payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/v1/other-payment-ways)
