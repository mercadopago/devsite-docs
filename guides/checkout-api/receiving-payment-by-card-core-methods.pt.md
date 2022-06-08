----[mlb]----
# Integre o Checkout Transparente para pagamentos com cartão
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
# Integre o Checkout API para pagamentos com cartão
------------

[TXTSNIPPET][/guides/snippets/test-integration/receiving-payment-by-card]

## Funcionamento

![API-integration-flowchart](/images/api/api-integration-flowchart-coremethods-v2-pt.png)

> Caso deseje realizar um fluxo de pagamento automatizado, recomendamos você [utilizar a funcionalidade CardForm do MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/checkout-api/receiving-payment-by-card).

<br>

----[mlb]----
Ao utilizar o Checkout Transparente do Mercado Pago, é importante ter em conta duas instâncias: a de captura de dados e a de envio de confirmação de pagamento.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Ao utilizar nosso Checkout API do Mercado Pago, é importante ter em conta duas instâncias: a de captura de dados e a de envio de confirmação de pagamento.
------------

1. É preciso um frontend para coletar os dados do cartão e gerar um token de segurança com a informação para que se possa criar o pagamento.
2. Tenha um backend que colete o token gerado e os dados do pagamento, como, por exemplo, o valor e o item, além de poder confirmar e efetuar o pagamento.

Tanto para o frontend como para o backend, recomendamos utilizar [nossos SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/checkout-api/previous-requirements#bookmark_sempre_utilize_nossas_bibliotecas) para poder coletar os dados sensíveis dos seus usuários de maneira segura.

> NOTE
>
> Nota
>
> Obtenha mais informações nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference).

<br>

> CLIENT_SIDE
>
> h2
>
> Capture os dados de cartão

[TXTSNIPPET][/guides/snippets/test-integration/secure-fields-core]

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Envie o pagamento ao Mercado Pago

Para continuar o processo de pagamento ao Mercado Pago, é necessário que seu backend possa receber a informação do formulário com o token gerado e os dados completos.

Segundo o exemplo dado, seu backend deveria disponibilizar um endpoint `/process_payment`, que foi definido no atributo `action` do formulário, para receber nele todos os dados assim que realizar a ação `submit`.

Já estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs. Os campos mínimos requeridos para enviar são: `token`, `transaction_amount`, `installments`, `payment_method_id` e o `payer.email`.

Tenha em conta que para que esse passo funcione é necessário que tenha configurado a sua [chave privada]([FAKER][CREDENTIALS][URL]) e que, para interagir com nossas APIs, recomendamos utilizar o [SDK oficial do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/checkout-api/previous-requirements#bookmark__instale_o_sdk_do_mercado_pago).

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
Encontre o estado do pagamento no campo _status_.
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
Encontre o estado do pagamento no campo _status_.
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

#### Resposta

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

> Conheça todos os campos disponíveis para realizar um pagamento completo nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments/post).

## Mensagens de respostas

[TXTSNIPPET][/guides/snippets/test-integration/api-response-handling]

## Receba notificações de pagamento

[TXTSNIPPET][/guides/snippets/test-integration/api-payment-notifications]

## Adicionar eventos customizados

É possível adicionar outros eventos customizados nos inputs, como focus, blur, ready e validityChange:

```javascript
cardNumberElement.on("focus", () => console.log("Card Number received focus"));
```

Se você quiser saber mais sobre outros eventos customizados, acesse nossa documentação do [GitHub](https://github.com/mercadopago/sdk-js/blob/main/API/fields.md#field-instanceonevent-callback).
