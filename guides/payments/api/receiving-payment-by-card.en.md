# Integrate the payment API for cards

Mercado Pago integration by payment API for cards helps you offer all types of payment methods on your website. The entire experience takes place in your store, so customers avoid exiting your site while making a purchase.

## How does it work?

![API-integration-flowchart](/images/api/api-integration-flowchart-en.png)

<br>

With our Mercado Pago payment API, you should take into account two aspects: data capture and payment confirmation submission.

1. First, you need a frontend to collect card data and generate a security token with the information required to create a payment.
2. Then, you need a backend that takes the generated token and payment data, such as amount and item, to confirm and make a payment.

Both for frontend and backend, we recommend [our libraries](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/previous-requirements/#bookmark_always_use_our_libraries) to collect user sensitive data securely.

> For more information, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/).

<br>

> CLIENT_SIDE
>
> h2
>
> Card data capture

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

The following example assumes that `transaction_amount` and `description` data were obtained in a previous step in which customers selected the product or service to be paid.

```html
<form action="/procesar_pago.php" method="post" id="pay" name="pay" >
    <fieldset>
        <p>
            <label for="description">Description</label>
            <input type="text" name="description" id="description" value="Selected item"/>
        </p>
        <p>
            <label for="transaction_amount">Amount to pay</label>
            <input name="transaction_amount" id="transaction_amount" value="100"/>
        </p>
        <p>
            <label for="cardNumber">Card number</label>
            <input type="text" id="cardNumber" data-checkout="cardNumber" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
        </p>
        <p>
            <label for="cardholderName">Name and surname</label>
            <input type="text" id="cardholderName" data-checkout="cardholderName" />
        </p>
        <p>
            <label for="cardExpirationMonth">Expiration month</label>
            <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
        </p>
        <p>
            <label for="cardExpirationYear">Expiration year</label>
            <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
        </p>
        <p>
            <label for="securityCode">Security code</label>
            <input type="text" id="securityCode" data-checkout="securityCode" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
        </p>
        <p>
            <label for="installments">Installments</label>
            <select id="installments" class="form-control" name="installments"></select>
        </p>
        <p>
            <label for="docType">ID type</label>
            <select id="docType" data-checkout="docType"></select>
        </p>
        <p>
            <label for="docNumber">ID number</label>
            <input type="text" id="docNumber" data-checkout="docNumber"/>
        </p>
        <p>
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" value="test@test.com"/>
        </p>
        <input type="hidden" name="payment_method_id" id="payment_method_id"/>
        <input type="submit" value="Pay"/>
    </fieldset>
</form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configure your public key

Add your [public key]([FAKER][CREDENTIALS][URL]) like this:

```javascript
window.Mercadopago.setPublishableKey("ENV_PUBLIC_KEY");
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

> Find more information in the [document type section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/localization/identification-types/).

------------

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get card payment method

Avoid mistakes and offer the correct available installments by validating your customers' data as they fill it out. Use the code in the following example to identify payment method and issuing bank with the first 6 digits of the card.

```javascript
document.getElementById('cardNumber').addEventListener('keyup', guessPaymentMethod);
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
        let paymentMethodId = response[0].id;
        let element = document.getElementById('payment_method_id');
        element.value = paymentMethodId;
        getInstallments();
    } else {
        alert(`payment method info error: ${response}`);
    }
}
```

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get number of installments

The number of installments is also a mandatory field for credit card payments. You can use the function in the following example to fill out the _select_ type suggested field called `installments` and get the available installments.

```javascript
function getInstallments(){
    window.Mercadopago.getInstallments({
        "payment_method_id": document.getElementById('payment_method_id').value,
        "amount": parseFloat(document.getElementById('transaction_amount').value)

    }, function (status, response) {
        if (status == 200) {
            document.getElementById('installments').options.length = 0;
            response[0].payer_costs.forEach( installment => {
                let opt = document.createElement('option');
                opt.text = installment.recommended_message;
                opt.value = installment.installments;
                document.getElementById('installments').appendChild(opt);
            });
        } else {
            alert(`installments method info error: ${response}`);
        }
    });
}
```

----[mla]----

> WARNING
>
> Important
>
> To avoid conflicts among issuers, you should add `issuer_id` when you save card data.

------------

<br>

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Create card token

Before payment submission, you should create a token containing all card information securely. You should generate it as follows:

```javascript
doSubmit = false;
document.querySelector('#pay').addEventListener('submit', doPay);

function doPay(event){
    event.preventDefault();
    if(!doSubmit){
        var $form = document.querySelector('#pay');

        window.Mercadopago.createToken($form, sdkResponseHandler);

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

The `createToken` method will return a `card_token` with the secure card display. The second field of the `createToken` method is the `callback` function, which will process the response (in this case, we use the `sdkResponseHandler` function). We will take and save the response ID in a hidden attribute called `token` and then send the form to your servers.

> WARNING
>
> Important
>
> Remember that the token is valid for 7 days and can be used only once.

<br>

> NOTE
>
> Download Sample Form
>
> If you have doubts, you can [download a complete payment form sample from GitHub](https://github.com/MercadoPagoDevelopers/api-frontend-sample/).


<br>

> SERVER_SIDE
>
> h2
>
> Payment submission to Mercado Pago

To continue with the Mercado Pago payment process, your backend should know how to receive form information with the generated token and the filled out data.

In the above example, after the `submit` action, your backend should display a `/process_payment` endpoint, which is defined in the form `action` attribute, to receive all data.

Once the request –with all the collected information– is in your backend, it should be submitted to Mercado Pago through our APIs.  The minimum mandatory fields to submit are: `token`,`transaction_amount`, `installments`, `payment_method_id` and `payer.email`.

For this to work, you should configure your [private key]([FAKER][CREDENTIALS][URL]). Also, to interact with our APIs, you should use [Mercado Pago official SDK](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/previous-requirements/#bookmark_install_Mercado_Pago_SDK).

[[[
```php
<?php
    ===
    You can find payment status in _status_ value.
    ===
    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200];
    $payment->token = "ff8080814c11e237014c1ff593b57b4d";
    $payment->description = "[FAKER][COMMERCE][PRODUCT_NAME]";
    $payment->installments = 1;
    $payment->payment_method_id = "visa";
    $payment->payer = array(
    "email" => "[FAKER][INTERNET][FREE_EMAIL]"
    );

    $payment->save();


    echo $payment->status;

?>
```
```node
===
You can find payment status in _status_ value.
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
    email: 'test@test.com'
  }
};

mercadopago.payment.save(payment_data).then(function (data) {
      console.log(data);
      res.send(data);
    }).catch(function (error) {
      console.log(error);
    });
```
```java
===
You can find payment status in _status_ value.
===

MercadoPago.SDK.setAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment();
payment.setTransactionAmount([FAKER][NUMBER][BETWEEN][100, 200]f)
       .setToken("ff8080814c11e237014c1ff593b57b4d")
       .setDescription("[FAKER][COMMERCE][PRODUCT_NAME]")
       .setInstallments(1)
       .setPaymentMethodId("visa")
       .setPayer(new Payer()
         .setEmail("test@test.com"));

payment.save();


System.out.println(payment.getStatus());

```
```ruby
===
You can find payment status in _status_ value.
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
  email: "test@test.com"
}

payment.save()
```
```csharp
===
You can find payment status in _status_ value.
===
using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("[FAKER][NUMBER][BETWEEN][100, 200]"),
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Description = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Installments = 1,
    PaymentMethodId = "visa",
    Payer = new Payer(){
        Email = "test@test.com"
    }
};

payment.Save();


console.log(payment.Status);

```
```curl
===
You can find payment status in _status_ value.
===
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN' \
    -d '{
          "transaction_amount": [FAKER][NUMBER][BETWEEN][100, 200],
          "token": "ff8080814c11e237014c1ff593b57b4d",
          "description": "[FAKER][COMMERCE][PRODUCT_NAME]",
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

> Check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments/post/) to learn about all the available fields for full payments.

<br>

## Error Response Handling

Possible payment statuses are:

![payment-status](/images/api/api-payment-status-es.png)
<br>
<br>

For improved payment approval, you need to correctly inform results to your customers when making or creating a payment.

This will prevent rejections and chargebacks in the case of already approved transactions.  For example, this allows you to correct data upload mistakes or change payment methods.

We recommend using [error response handling](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/handling-responses/) and the suggested communication in each case.

> NOTE
>
> Note
>
> Avoid rejected payments with our recommendations to [improve the approval process](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/payment-rejections/).

## Receive payment notifications

Finally, you always need to be notified of new payments and status updates.  For example, if they were approved, rejected, or are pending.

[Configure webhook notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/webhooks/) or [IPN notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/).

---
### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Test your integration
>
> Check that everything works in your integration with test users.
>
> [Test your integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/testing/)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Integrate other payment methods
>
> Learn about all the available payment options and how to offer them.
>
> [Integrate other payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/other-payment-ways/)
