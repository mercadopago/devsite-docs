# Exemplo de código
 
Para facilitar e otimizar o seu processo de integração, veja abaixo um exemplo completo da integração com o Checkout Bricks e de como, após realizar a integração, enviar o pagamento ao Mercado Pago.

> CLIENT_SIDE
>
> h2
>
> Configuração da integração

```html
<html>
    <head>
        <script src="https://beta-sdk.mercadopago.com/gama/js/v2"></script>
    </head>
    <body>
        <div id="cardPaymentBrick_container"></div>
        <script>
            const mp = new MercadoPago('YOUR_PUBLIC_KEY');
            const bricksBuilder = mp.bricks();
            const renderCardPaymentBrick = async (bricksBuilder) => {
            const settings = {
                    initialization: {
                        amount: 100, //valor do processamento a ser realizado
                        payer: {
                        email: 'test@mail.com',
                    },
                    },
                    style: {
                        theme: 'default' // | 'dark' | 'bootstrap' | 'flat'
                    },
                    callbacks: {
                        onReady: () => {
                        // callback chamado quando o Brick estiver pronto
                        },
                        onSubmit: (cardFormData) => {
                        // callback chamado o usuário clicar no botão de submissão dos dados
                        // ejemplo de envío de los datos recolectados por el Brick a su servidor
                        return new Promise((resolve, reject) => {
                            fetch("/process_payment", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(cardFormData)
                            })
                            .then((response) => {
                                // receber o resultado do pagamento
                                resolve();
                            })
                            .catch((error) => {
                                // lidar com a resposta de erro ao tentar criar o pagamento
                                reject();
                            })
                            });
                        },
                        onError: (error) => {
                        // callback chamado para todos os casos de erro do Brick
                        },
                    },
                };
                window.cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
            };
            renderCardPaymentBrick(bricksBuilder);
        </script>
    </body>
</html>
```

> SERVER_SIDE
>
> h2
>
> Enviar pagamento ao Mercado Pago

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
    $payer->email = $_POST['cardholderEmail'];
    $payer->identification = array(----[mla, mlb, mlu, mlc, mpe, mco]----
        "type" => $_POST['identificationType'],------------
        "number" => $_POST['identificationNumber']
    );
    $payer->first_name = $_POST['cardholderName'];
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
Encontre o estado do pagamento no campo _status_.
===

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");

mercadopago.payment.save(req.body)
  .then(function(response) {
    const { status, status_detail, id } = response.body;
    res.status(response.status).json({ status, status_detail, id });
  })
  .catch(function(error) {
    console.error(error);
  });
```
```java
===
Encontre o estado do pagamento no campo _status_.
===

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(request.getTransactionAmount())
       .token(request.getToken())
       .description(request.getDescription())
       .installments(request.getInstallments())
       .paymentMethodId(request.getPaymentMethodId())
       .payer(
           PaymentPayerRequest.builder()
               .email(request.getPayer().getEmail())
               .firstName(request.getPayer().getFirstName())
               .identification(
                   IdentificationRequest.builder()
                       .type(request.getPayer().getIdentification().getType())
                       .number(request.getPayer().getIdentification().getNumber())
                       .build())
               .build())
       .build();

client.create(paymentCreateRequest);

```
```ruby
===
Encontre o estado do pagamento no campo _status_.
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
    email: params[:cardholderEmail],
    identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
      type: params[:identificationType],------------
      number: params[:identificationNumber]
    },
    first_name: params[:cardholderName]
  }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]

puts payment

```
```csharp
===
Encontre o estado do pagamento no campo _status_.
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
        Email = Request["cardholderEmail"],
        Identification = new IdentificationRequest
        {----[mla, mlb, mlu, mlc, mpe, mco]----
            Type = Request["identificationType"],------------
            Number = Request["identificationNumber"],
        },
        FirstName = Request["cardholderName"]
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);

Console.WriteLine(payment.Status);

```
```python
===
Encontre o estado do pagamento no campo _status_.
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
        "email": request.POST.get("cardholderEmail"),
        "identification": {----[mla, mlb, mlu, mlc, mpe, mco]----
            "type": request.POST.get("identificationType"), ------------
            "number": request.POST.get("identificationNumber")
        }
        "first_name": request.POST.get("cardholderName")
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

print(payment)
```
```curl
===
Encontre o estado do pagamento no campo _status_.
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

### Resposta

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

> PREV_STEP_CARD_PT
>
> Enviar pagamento ao Mercado Pago
>
> Após configurar a integração, veja como enviar o pagamento ao Mercado Pago.
>
> [Enviar pagamento ao Mercado Pago](/developers/pt/docs/checkout-bricks-beta/integration/payment-submission)

> NEXT_STEP_CARD_PT
>
> Testar a integração
>
> Veja como realizar testes para garantir o funcionamento correto de sua integração.
>
> [Enviar pagamento ao Mercado Pago](/developers/pt/docs/checkout-bricks-beta/integration/integration-test)