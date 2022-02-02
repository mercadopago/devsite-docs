----[mlb]----
# Integre o Checkout Transparente para pagamentos com cartão
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
# Integre o Checkout API para pagamentos com cartão
------------

[TXTSNIPPET][/guides/snippets/test-integration/receiving-payment-by-card]

## Como funciona?

![API-integration-flowchart](/images/api/api-integration-flowchart-cardform-pt.png)

> Caso deseje realizar um fluxo de pagamento personalizado, compartilhamos todos os [métodos disponíveis para integrar de forma avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/receiving-payment-by-card-core-methods-v2).

<br>

----[mlb]----
Ao utilizar o Checkout Transparente do Mercado Pago, é importante ter em conta duas instâncias: a de captura de dados e a de envio de confirmação de pagamento.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Ao utilizar o Checkout API do Mercado Pago, é importante ter em conta duas instâncias: a de captura de dados e a de envio de confirmação de pagamento.
------------

1. É preciso um frontend para coletar os dados do cartão e gerar um token de segurança com a informação para poder criar o pagamento.
2. Tenha um backend que tome o token gerado e os dados do pagamento, como, por exemplo, o valor e o item, além de poder confirmar e efetuar o pagamento.

Tanto para o frontend como para o backend, recomendamos utilizar [nossos SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements#bookmark_sempre_utilize_nossas_bibliotecas) para poder coletar os dados sensíveis dos seus usuários de maneira segura.

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
> Capture os dados do cartão

Para criar um pagamento é necessário fazer a captura dos dados do cartão através do navegador do comprador. Por questões de segurança, **é muito importante que os dados nunca cheguem aos seus servidores**.

Para capturar os dados do cartão, siga estas etapas:

1. [Inclua e configure a biblioteca MercadoPago.js](#bookmark_1._inclua_e_configure_a_biblioteca_mercadopago.js)
2. [Adicione o formulário de pagamento](#bookmark_2._adicione_o_formulário_de_pagamento)
3. [Integre o formulário com a biblioteca MercadoPago.js](#bookmark_3._integre_o_formulário_com_a_biblioteca_mercadopago.js)

### 1. Inclua e configure a biblioteca MercadoPago.js

**Utilize nossa biblioteca oficial para acessar a API de Mercado Pago** desde seu frontend para coletar os dados de forma segura e configure sua [chave pública]([FAKER][CREDENTIALS][URL]) da seguinte forma:

```html
<body>
  <!-- Add step #2 -->
  <script src="https://sdk.mercadopago.com/js/v2"></script>
  <script>
      const mp = new MercadoPago('YOUR_PUBLIC_KEY');
      // Add step #3
  </script>
</body>
```

Se ainda não possui conta para ver suas credenciais, [registre-se](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

> NOTE
>
> Nota
>
> Esta documentação utiliza a nova versão da biblioteca. Para ver a versão anterior, vá para a [seção de Integrar pagamentos com cartão com o MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/receiving-payment-by-card).

A informação do cartão será convertida em um token para que os dados sejam enviados aos seus servidores de forma segura.

### 2. Adicione o formulário de pagamento

Para capturar os dados do cartão, primeiro você deve oferecer um formulário para carregar toda a informação.

Com a **funcionalidade CardForm da biblioteca MercadoPago.js V2**, você pode obter e validar todos os dados necessários, como identificar o tipo e o nome do meio de pagamento, o banco emissor, o número de prestações e mais.

CardForm permite que você tenha uma implementação segura e uma correta tokenização da informação do cartão.

Para os campos PCI (**Card Number**, **Expiration Date** e **CVV**) deve-se criar `divs` que servirão de containers para os `iFrames`.

Utilize o formulário abaixo e adicione os estilos que desejar.


```html
<!-- Step #2 -->
<form id="form-checkout">
   <div id="form-checkout__cardNumber-container"></div>
   <div id="form-checkout__cardExpirationDate-container"></div>
   <input type="text" name="cardholderName" id="form-checkout__cardholderName"/>
   <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail"/>
   <div id="form-checkout__securityCode-container"></div>
   <select name="issuer" id="form-checkout__issuer"></select>----[mla, mlb, mlu, mlc, mpe, mco]----
   <select name="identificationType" id="form-checkout__identificationType"></select>------------
   <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"/>
   <select name="installments" id="form-checkout__installments"></select>
   <button type="submit" id="form-checkout__submit">Pagar</button>
   <progress value="0" class="progress-bar">Carregando...</progress>
 </form>
```

> GIT
> 
> Referência técnica
> 
> Procure mais informações sobre os diferentes atributos nas [referências técnicas](https://github.com/mercadopago/sdk-js).


### 3. Integre o formulário com a biblioteca MercadoPago.js

Para inicializar o CardForm, deve-se relacionar o ID de cada campo do formulário com os atributos correspondentes. A biblioteca será responsável pelo preenchimento, obtenção e validação de todos os dados necessários na hora de confirmar o pagamento.

Para que o IFrame seja renderizado, é necessário passar a opção `iframe` com valor `true` no objeto de parâmetro recebido pelo cardForm. Além disso, também é possível passar o `style` para os elementos.

```javascript
// Step #3
const cardForm = mp.cardForm({
   amount: '100.5',
   iframe: true,
   form: {
     id: 'form-checkout',
     cardholderName: {
       id: 'form-checkout__cardholderName',
       placeholder: "Titular do cartão",
     },
     cardholderEmail: {
       id: 'form-checkout__cardholderEmail',
       placeholder: 'E-mail'
     },
     cardNumber: {
       id: 'form-checkout__cardNumber-container',
       placeholder: 'Número do cartão',
     },
     securityCode: {
       id: 'form-checkout__securityCode-container',
       placeholder: 'Código de segurança'
     },
     installments: {
       id: 'form-checkout__installments',
       placeholder: 'Parcelas'
     },
     cardExpirationDate: {
       id: 'form-checkout__cardExpirationDate-container',
       placeholder: 'Data de vencimento (MM/YYYY)',
     },----[mla, mlb, mlu, mlc, mpe, mco]----
     identificationType: {
       id: 'form-checkout__identificationType',
       placeholder: 'Tipo de documento'
     },------------
     identificationNumber: {
       id: 'form-checkout__identificationNumber',
       placeholder: 'Número do documento'
     },
     issuer: {
       id: 'form-checkout__issuer',
       placeholder: 'Banco emissor'
     }
   },
   callbacks: {
     onFormMounted: function (error) {
       if (error) return console.log('Callback para tratar o erro: montando o cardForm ', error)
     },
     onSubmit: function (event) {
       event.preventDefault();
 
       const {
         paymentMethodId: payment_method_id,
         issuerId: issuer_id,
         cardholderEmail: email,
         amount,
         token,
         installments,
         identificationNumber----[mla, mlb, mlu, mlc, mpe, mco]----,
         identificationType------------
       } = cardForm.getCardFormData();
 
        fetch('/process_payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token,
            issuer_id,
            payment_method_id,
            transaction_amount: Number(amount),
            installments: Number(installments),
            description: 'product description',
            payer: {
              email,
              identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
                type: identificationType,------------
                number: identificationNumber
             }
           }
         })
       })
     },
     onFetching: function (resource) {
       console.log('fetching... ', resource)
       const progressBar = document.querySelector('.progress-bar')
       progressBar.removeAttribute('value')
 
       return () => {
         progressBar.setAttribute('value', '0')
       }
     }
   }
 });
```

A opção de callbacks aceita diferentes funções que são ativadas em diversos momentos do fluxo.

> GIT
> 
> Referência técnica
> 
> Obtenha mais informações sobre os callbacks nas [referências técnicas](https://github.com/mercadopago/sdk-js).

Ao enviar o formulário, geramos um token como uma representação segura dos dados do cartão. Você pode acessar este token usando a função `getCardFormData`, como mostramos anteriormente no callback `onSubmit`. Também armazenaremos o token em um `input` oculto dentro do seu formulário e o chamaremos de `MPHiddenInputToken`.

> WARNING
>
> Importante
>
> Tenha em conta que o token tem validade de 7 dias e só pode ser utilizado uma única vez.

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Envie o pagamento ao Mercado Pago

Para continuar o processo de pagamento ao Mercado Pago, é necessário que seu backend possa receber a informação do formulário com o token gerado e os dados completos.

Segundo o exemplo, seu backend deveria disponibilizar um endpoint `/process_payment` para receber todos os dados depois de realizar a ação submit.

Estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs. Os campos mínimos requeridos para enviar são: `token`, `transaction_amount`, `installments`, `payment_method_id` e o `payer.email`.

Tenha em conta que para que esse passo funcione é necessário que configure sua [chave privada]([FAKER][CREDENTIALS][URL]) e que, para interagir com nossas APIs, recomendamos utilizar o [SDK oficial do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements#bookmark__instale_o_sdk_do_mercado_pago).

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

## Exemplos para download

----[mlb]----
> GIT
>
> Checkout Transparente
>
> Disponibilizamos [exemplos completos de integração](https://github.com/mercadopago/card-payment-sample/tree/feature/secure-fields) para que você possa fazer o download.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> GIT
>
> Checkout API
>
> Disponibilizamos [exemplos completos de integração](https://github.com/mercadopago/card-payment-sample/tree/feature/secure-fields) para que você possa fazer o download.
------------

<span></span>

> GIT
>
> Formulário de pagamento
>
> Se você deseja implementar seu servidor com alguma outra tecnologia, te deixamos um [exemplo completo do formulário de pagamento](https://drive.google.com/file/d/12gSCPLfZCE36iKFbM4BTUwf6lnM7lVEL/view?usp=sharing) no GitHub para que possa fazer o download.

---
### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Teste sua integração
>
> Confirme que está tudo bem com a sua integração e com os usuários de teste.
>
> [Teste sua integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/testing)

----[mlc]----
> RIGHT_BUTTON_RECOMMENDED_PT
>
> Referências de API
>
> Encontre toda a informação necessária para interagir com nossas APIs.
>
> [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference)
------------

----[mla, mlb, mlm, mlu, mpe, mco]----
> RIGHT_BUTTON_RECOMMENDED_PT
>
> Integrar outros meios de pagamento
>
> Conheça todas as opções de pagamentos disponíveis e veja como oferecê-las.
>
> [Integrar outros meios de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways)
------------
