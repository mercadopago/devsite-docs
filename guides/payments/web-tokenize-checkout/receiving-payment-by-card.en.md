# Receive card payments

With Mercado Pago you can collect card information in a secure way through our Tokenizer.

### Step 1: Add viewport data

Set the viewport by adding the following code inside the `<head>` tag of your website:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
```

### Step 2: Add HTML code

This _fragment of HTML code_ will insert a payment button. When the buyer presses the button, the checkout will be displayed. Include the following code in the place where the button will be located within your website:

```html
<form action="/procesar-pago" method="POST">
  <script
    src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
    data-public-key="ENV_PUBLIC_KEY"
    data-transaction-amount="100.00">
  </script>
</form>
```

> NOTE
>
> Note
>
> You can find the public key in the [credentials]([FAKER][CREDENTIALS][URL]) page.

### Step 3: Get the data

*Web Tokenize Checkout* will do a `POST` to the URL that you have defined in the `action` attribute of the HTML code snippet (In the example: **/process-payment**) with certain data. You must use this information to make the payment.

#### Data:

Data | Description
---- | ------------
**token** | Unique identifier of the tokenized card
**payment_method_id** | Payment method chosen by the buyer
**installments** | Amount of installments chosen by the buyer
**issuer_id** | ID of the issuer of the buyer's card

_You will not receive the **transaction_amount** neither the **payer.email** for security reasons._

[[[
```php
<?php
  $token = $_REQUEST["token"];
  $payment_method_id = $_REQUEST["payment_method_id"];
  $installments = $_REQUEST["installments"];
  $issuer_id = $_REQUEST["issuer_id"];
?>
```
```java
String token = request.getParameter("token");
String payment_method_id = request.getParameter("payment_method_id");
Int installments = request.getParameter("installments");
Int issuer_id = request.getParameter("issuer_id");
```
```node
const token = req.body.token;
const payment_method_id = req.body.payment_method_id;
const installments = req.body.installments;
const issuer_id = req.body.issuer_id;
```
```ruby
token = request.body.token
payment_method_id = request.body.payment_method_id
installments = request.body.installments
issuer_id = request.body.issuer_id
```
```csharp
token = Request["token"]
payment_method_id = Request["payment_method_id"]
installments = Request["installments"]
issuer_id = Request["issuer_id"]
```
]]]

### Step 4: Creating the payment

To make the payment, you must perform an API call using the [SDK de Mercado Pago](https://www.mercadopago.com.ar/developers/en/plugins_sdks) that corresponds with the programming language that you are using on your site.

You should only make an *API call* including the data you received from the checkout:

[[[
```php
<?php  
    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200];
    $payment->token = $token;
    $payment->description = "[FAKER][COMMERCE][PRODUCT_NAME]";
    $payment->installments = $installments;
    $payment->payment_method_id = $payment_method_id;
    $payment->issuer_id = $issuer_id;
    $payment->payer = array(
    "email" => "[FAKER][INTERNET][FREE_EMAIL]"
    );
    // Guarda y postea el pago
    $payment->save();
    //...
    // Imprime el estado del pago
    echo $payment->status;
    //...
?>
```
```java
MercadoPago.SDK.setAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment();
payment.setTransactionAmount([FAKER][NUMBER][BETWEEN][100, 200])
       .setToken(token)
       .setDescription("[FAKER][COMMERCE][PRODUCT_NAME]")
       .setInstallments(installments)
       .setPaymentMethodId(payment_method_id)
       .setIssuerId(issuer_id)
       .setPayer(new Payer()
         .setEmail("[FAKER][INTERNET][FREE_EMAIL]"));
// Save and create the payment
payment.save();
//...
// Shows payment stauts
System.out.println(payment.getStatus());
//...
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: [FAKER][NUMBER][BETWEEN][100, 200],
  token: token,
  description: '[FAKER][COMMERCE][PRODUCT_NAME]',
  installments: installments,
  payment_method_id: payment_method_id,
  issuer_id: issuer_id,
  payer: {
    email: '[FAKER][INTERNET][FREE_EMAIL]'
  }
};

// Save and do the payment POST
mercadopago.payment.save(payment).then(function (data) {
  // ...    
  // Shows payment stauts
  Console.log(payment.status);
}).catch(function (error) {
  // ...
});

```
```ruby
require 'mercadopago'
MercadoPago::SDK.access_token = "ENV_ACCESS_TOKEN";

payment = MercadoPago::Payment.new()
payment.transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200]
payment.token = token
payment.description = '[FAKER][COMMERCE][PRODUCT_NAME]'
payment.installments = installments
payment.payment_method_id = payment_method_id
payment.issuer_id = issuer_id
payment.payer = {
  email: "[FAKER][INTERNET][FREE_EMAIL]"
}
# Save and create the payment
payment.save()

```
```csharp
using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
// ...
MercadoPago.SDK.SetAccessToken(ENV_ACCESS_TOKEN);
//...
Payment payment = new Payment()
{
    TransactionAmount = float.Parse("[FAKER][NUMBER][BETWEEN][100, 200]"),
    Token = token,
    Description = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Installments = installments,
    PaymentMethodId = payment_method_id,
    IssuerId = issuer_id,
    Payer = new Payer(){
        Email = "[FAKER][INTERNET][FREE_EMAIL]"
    }
};
// Save and create the payment
payment.Save();
//...
// Shows payment stauts
Console.log(payment.Status);
//...
```
]]]

> The fields required to send are `token`, `transaction_amount`, `payment_method_id` and the `payer.email`.

Response:

```json
{
    "status": "approved",
    "status_detail": "accredited",
    "id": 3055677,
    "date_approved": "2017-02-23T00:01:10.000-04:00",
    "payer": {
        ...
    },
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    "refunds": [],
    ...
}
```

## Additional recommendations

### Test cards

To make testing payments (with your TEST credentials), you need to use [test cards](https://www.mercadopago.com.ar/developers/en/guides/payments/api/testing).

### Installments offer

We recommend you include the [installments offer link](https://www.mercadopago.com.ar/promociones) of **Mercado Pago**, or implement one of our [payment methods banner](https://www.mercadopago.com.ar/developers/en/guides/banners/introduction/).
