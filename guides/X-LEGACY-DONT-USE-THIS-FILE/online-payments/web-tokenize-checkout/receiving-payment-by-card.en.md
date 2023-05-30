# Receive card payments

With Mercado Pago you can collect card information in a secure way through our Web Tokenize Checkout.

### Step 1: Add viewport data

Set the viewport by adding the following code inside the `<head>` tag of your website:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
```

### Step 2: Add the Web Tokenize Checkout to your website

In order to add the Web Tokenize Checkout to your website you need to follow these steps.

The following code will insert a payment button. When the buyer presses the button, the checkout will be displayed.

1. Add the MercadoPago.js V2 SDK to your project:

```html
<html>
  <body>
    ...
    <!-- Mercado Pago Client-Side SDK -->
    <script src="https://sdk.mercadopago.com/js/v2"></script>
  </body>
</html>
```

2. Add the SDK credentials to enable its use and initialize the checkout using the ID or selector for the element where the payment button should be displayed:

```html
<div class=tokenizer-container>
<script>
// Add the SDK credentials
const mp = new MercadoPago('PUBLIC_KEY', {locale: 'es-AR'});

// Initialize the Web Tokenize Checkout
mp.checkout({
  tokenizer: {
    totalAmount: 4000,
    backUrl: 'https://www.my-store.com/process-payment'
  },
 render: {
    container: '.tokenizer-container', // Indicates where the payment button is going to be rendered
    label: 'Pay' // Changes the button label (optional)
 }
});
</script>
</div>
```

>WARNING
>
>Important
>
> For mobile, please note that you should only include the path under the attribute `backUrl`, instead of the full domain. 

This will display a payment button that will open the Web Tokenize Checkout.

You can check other ways to open the checkout in the [Customization section](https://www.mercadopago[FAKER][URl][DOMAIN]/developers/en/guides/online-payments/web-tokenize-checkout/personalization).

You can find the Public Key in the [Credentials section]([FAKER][CREDENTIALS][URL]) page.

> Read [Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials) for more information.

> This documentation uses the new library version. To see the previous version, go to [Receive card payments with MercadoPago.js V1 section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/web-tokenize-checkout/v1/receiving-payment-by-card).

### Step 3: Get the data

*Web Tokenize Checkout* will do a `POST` to the URL that you have defined in the `backUrl` attribute of the HTML code snippet (In the example: **/process-payment**) with certain data. You must use this information to make the payment.

#### Data:

| Data | Description |
| --- | --- |
| **token** | Unique identifier of the tokenized card. |
| **payment_method_id** | Payment method chosen by the buyer. |
| **installments** | Amount of installments chosen by the buyer. |
| **issuer_id** | ID of the issuer of the buyer's card. |

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
token = params[:token]
payment_method_id = params[:payment_method_id]
installments = params[:installments]
issuer_id = params[:issuer_id]
```
```csharp
token = Request["token"]
payment_method_id = Request["payment_method_id"]
installments = Request["installments"]
issuer_id = Request["issuer_id"]
```
```python
token = request.POST.get("token")
payment_method_id = request.POST.get("payment_method_id")
installments = request.POST.get("installments")
issuer_id = request.POST.get("issuer_id")
```
]]]

### Step 4: Creating the payment

To make the payment, you must perform an API call using the [SDK de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/sdks) that corresponds with the programming language that you are using on your site.

You should only make an *API call* including the data you received from the checkout:

[[[
```php
<?php  
    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = 100;
    $payment->token = $token;
    $payment->description = "Blue shirt";
    $payment->installments = $installments;
    $payment->payment_method_id = $payment_method_id;
    $payment->issuer_id = $issuer_id;
    $payment->payer = array(
    "email" => "john@yourdomain.com"
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
payment.setTransactionAmount(100f)
       .setToken(token)
       .setDescription("Blue shirt")
       .setInstallments(installments)
       .setPaymentMethodId(payment_method_id)
       .setIssuerId(issuer_id)
       .setPayer(new Payer()
         .setEmail("john@yourdomain.com"));
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
  transaction_amount: 100,
  token: token,
  description: 'Blue shirt',
  installments: installments,
  payment_method_id: payment_method_id,
  issuer_id: issuer_id,
  payer: {
    email: 'john@yourdomain.com'
  }
};

// Save and do the payment POST
mercadopago.payment.save(payment_data).then(function (data) {
  // ...    
  // Shows payment stauts
  Console.log(data.status);
}).catch(function (error) {
  // ...
});

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_object = {
   transaction_amount: 100,
   token: token,
   description: 'Blue shirt',
   installments: installments,
   payment_method_id: payment_method_id,
   issuer_id: issuer_id,
   payer: {
      email: 'john@yourdomain.com'
  }
}
payment_response = sdk.payment.create(payment_object)
payment = payment_response[:response]

```
```csharp
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;
// ...
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
// ...
var paymentRequest = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Token = token,
    Description = "Blue shirt",
    Installments = installments,
    PaymentMethodId = payment_method_id,
    IssuerId = issuer_id,
    Payer = new PaymentPayerRequest
    {
        Email = "john@yourdomain.com",
    },
};
// Create the payment
var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);
// ...
// Shows payment status
Console.WriteLine(payment.Status);
// ...
```
```python
payment_data = {
    "transaction_amount": 100,
    "token": token,
    "description": "Blue shirt",
    "installments": installments,
    "payment_method_id": payment_method_id,
    "issuer_id": issuer_id,
    "payer": {
        "email": "john@yourdomain.com"
    }
}

# Save and create the payment
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
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

>WARNING
>
>Important
>
> When opening tokenizer in a new tab, the URLs defined in `backURLs` are not taken into consideration and the user is not returned to the site, and is left in "processing" status.

### Test cards

To make testing payments (with your TEST credentials), you need to use [test cards](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/testing).

### Installments offer

We recommend you include the [installments offer link](https://www.mercadopago.com.ar/promociones) of **Mercado Pago**, or implement one of our [payment methods banner](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/banners/introduction).
