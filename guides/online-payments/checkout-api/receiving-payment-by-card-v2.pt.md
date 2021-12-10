----[mlb]----
# Integre Checkout Transparente para pagamentos com cartão
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
# Integre Checkout API para pagamentos com cartão
------------

![Fields](/images/api/api-integration-intro-pt.png)

[TXTSNIPPET][/guides/snippets/checkout-api/checkout-api-receiving-payment-by-card]

## Como funciona?

![API-integration-flowchart](/images/api/api-integration-flowchart-cardform-pt.png)

> Caso deseje realizar um fluxo de pagamento personalizado, compartilhamos todos os [métodos disponíveis para integrar de forma avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/receiving-payment-by-card-core-methods-v2).

<br>

----[mlb]----
Ao usar nosso Checkout Transparente do Mercado Pago, é importante ter em conta duas instâncias: a de captura de dados e envio de confirmação de pagamento.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Ao usar nosso Checkout API do Mercado Pago, é importante ter em conta duas instâncias: a de captura de dados e envio de confirmação de pagamento.
------------

1. Primeiro, é preciso um frontend para coletar os dados do cartão e gerar um token de segurança com a informação para poder criar o pagamento.
2. Segundo, um backend que tome o token gerado e os dados do pagamento, como por exemplo o valor e o item, e possa confirmar e efetuar o pagamento.

Tanto para o frontend como para o backend, recomendamos utilizar [nossos SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements#bookmark_sempre_utilize_nossas_bibliotecas) para poder coletar os dados sensíveis dos seus usuários de maneira segura.

> Obtenha mais informações nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference).

<br>

> CLIENT_SIDE
>
> h2
>
> Capture os dados de cartão

Para criar um pagamento é necessário fazer a captura dos dados do cartão através do navegador do comprador. Por questões de segurança, **é muito importante que os dados nunca cheguem aos seus servidores**.

Para capturar os dados do cartão, siga estas etapas:
1. Inclua e configure a biblioteca MercadoPago.js
2. Adicione o formulário de pagamento
3. Integre o formulário com a biblioteca MercadoPago.js


### 1. Inclua e configure a biblioteca MercadoPago.js

**Utilize nossa biblioteca oficial para acessar a API de Mercado Pago** desde seu frontend para coletar os dados de forma segura e configure sua [chave pública]([FAKER][CREDENTIALS][URL]) da forma a seguir:

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

> Se ainda não possui conta para ver suas credenciais, [registre-se](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

> Esta documentação utiliza a nova versão da biblioteca. Para ver a versão anterior, vá para a [seção de Integrar pagamentos com cartão com MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/receiving-payment-by-card).

A informação do cartão será convertida em um token para que envie os dados aos seus servidores de modo seguro.

### 2. Adicione o formulário de pagamento

Para capturar os dados do cartão, primeiro deve oferecer um formulário para carregar toda a informação.

Com a **funcionalidade CardForm da biblioteca MercadoPago.js V2**, pode obter e validar todos os dados necessários, como identificar o tipo e nome do meio de pagamento, o banco emissor, o número de prestações e mais.

CardForm permite você ter uma implementação segura e uma correta tokenização da informação do cartão.

Para os campos PCI (**Card Number**, **Expiration Month**, **Expiration Year** e **CVV**) deve-se criar `divs` que servirão de containers para os `iFrames`.

Utilize o formulário seguinte e adicione os estilos que desejar.


```html
<!-- Step #2 -->
 <form id="form-checkout">
   <div type="text" name="cardNumber" id="form-checkout__cardNumber"></div>
<div type="text" name="cardExpirationMonth"   id="form-checkout__cardExpirationMonth"></div>
   <div type="text" name="cardExpirationYear" id="form-checkout__cardExpirationYear"></div>
   <input type="text" name="cardholderName" id="form-checkout__cardholderName"/>
   <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail"/>
   <div type="text" name="securityCode" id="form-checkout__securityCode"></div>
   <select name="issuer" id="form-checkout__issuer"></select>----[mla, mlb, mlu, mlc, mpe, mco]----
   <select name="identificationType" id="form-checkout__identificationType"></select>-----------
   <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"/>
   <select name="installments" id="form-checkout__installments"></select>
   <button type="submit" id="form-checkout__submit">Pagar</button>
   <progress value="0" class="progress-bar">Carregando...</progress>
 </form>
```

> GIT
> 
> Referencia técnica
> 
> Procure informações acerca dos distintos atributos nas [referências técnicas](https://github.com/mercadopago/sdk-js).


### 3. Integre o formulário com a biblioteca MercadoPago.js


Agora, para inicializar o CardForm, deve relacionar a ID de cada campo do formulário com os atributos correspondentes. A biblioteca será responsável pelo preenchimento, obtenção e validação de todos os dados necessários na hora de confirmar o pagamento.

Para que o IFrame seja renderizado, é necessário passar a opção `iframe` com valor `true` no objeto de parâmetro recebido pelo cardForm. Também é possível passar o `style` para os elementos.

```javascript
// Step #3
let cardForm = mp.cardForm({
   amount: '100.5',
   autoMount: true,
   iframe: true,
   form: {
     id: 'form-checkout',
     cardholderName: {
       id: 'form-checkout__cardholderName',
       placeholder: "Card Holder",
     },
     cardholderEmail: {
       id: 'form-checkout__cardholderEmail',
       placeholder: 'E-mail'
     },
     cardNumber: {
       id: 'form-checkout__cardNumber',
       placeholder: 'Card Number',
       style: {
         // Style examples:
         // "font-size": "18px",
         // color: "blue"
       },
     },
     securityCode: {
       id: 'form-checkout__securityCode',
       placeholder: 'CVV'
     },
     installments: {
       id: 'form-checkout__installments',
       placeholder: 'Installments'
     },
     cardExpirationMonth: {
       id: 'form-checkout__cardExpirationMonth',
       placeholder: 'MM'
     },
     cardExpirationYear: {
       id: 'form-checkout__cardExpirationYear',
       placeholder: 'YYYY'
     },----[mla, mlb, mlu, mlc, mpe, mco]----
     identificationType: {
       id: 'form-checkout__identificationType',
       placeholder: 'Document type'
     },-----------
     identificationNumber: {
       id: 'form-checkout__identificationNumber',
       placeholder: 'Document value'
     },
     issuer: {
       id: 'form-checkout__issuer',
       placeholder: 'Issuer'
     }
   },
   callbacks: {
     onFormMounted: function (error) {
       if (error) return console.log('Callback para tratar o erro: montando o cardForm ', error)
     },
     onFormUnmounted: function (error) {
       if (error) return console.log('Callback para tratar o erro: desmontando o cardForm ', error)
     },
     onIdentificationTypesReceived: function (error, identificationTypes) {
       if (error) return console.log('Callback para tratar o erro: recebendo tipos de documento ', error)
     },
     onPaymentMethodsReceived: function (error, paymentMethods) {
       if (error) return console.log('Callback para tratar o erro: recebendo payment methods ', error)
     },
     onIssuersReceived: function (error, issuers) {
       if (error) return console.log('Callback para tratar o erro: recebendo emissores ', error)
     },
     onInstallmentsReceived: function (error, installments) {
       if (error) return console.log('Callback para tratar o erro: recebendo parcelas ', error)
     },
     onCardTokenReceived: function (error, token) {
       if (error) return console.log('Callback para tratar o erro: recebendo o token ', error)
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
         identificationType-----------
       } = cardForm.getCardFormData();
 
       console.log(cardForm.getCardFormData())
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
             identification: {
               type: identificationType,
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
     },
     onReady: function () {
       console.log('Fields are ready')
     },
     onValidityChange: function ({ field, messages }) {
       console.log(`${field}:\n${messages.join('\n')}`);
     },
   }
 });
}
```

A opção de callbacks aceita diferentes funções que são ativadas em diversos momentos do fluxo.

> GIT
> 
> Referencia técnica
> 
> Obtenha mais informações acerca dos callbacks nas [referências técnicas](https://github.com/mercadopago/sdk-js).


> WARNING
>
> Importante
>
> Tenha em conta que o token tem uma validade de 7 dias e só pode ser usado uma única vez.

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Envie o pagamento ao Mercado Pago

Para continuar o processo de pagamento ao Mercado Pago, é necessário que seu backend possa receber a informação do formulário com o token gerado e os dados completos.

Segundo o exemplo, seu backend deveria disponibilizar um endpoint `/process_payment`, para receber ali todos os dados depois de realizar a ação submit.

Já estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs. Os campos mínimos requeridos para enviar são: `token`, `transaction_amount`, `installments`, `payment_method_id` e o `payer.email`.

Tenha em conta que para que esse passo funcione é necessário que configure sua [chave privada]([FAKER][CREDENTIALS][URL]) e que para interagir com nossas APIs recomendamos utilizar o [SDK oficial do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements#bookmark__instale_o_sdk_do_mercado_pago).

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

Os possíveis estados de um pagamento são:

![payment-status](/images/api/api-payment-status-pt.png)
<br>
<br>

Para ajudar a melhorar a aprovação dos seus pagamentos, é fundamental que possa comunicar corretamente aos seus clientes os dados resultantes da criação de um pagamento.

Isso ajudará a evitar casos de rejeição e estornos nos casos de transações inicialmente aprovadas. Por exemplo, permite que se possa corrigir os erros de carga de dados ou ajudar a alterar o meio de pagamento.

Te recomendamos usar as [mensagens de respostas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/handling-responses) e utilizar a comunicação sugerida em cada um dos casos.

> NOTE
>
> Nota
>
> Evite pagamentos rejeitados com nossas [recomendações para melhorar a aprovação dos seus pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/payment-rejections).

## Receba notificações de pagamento

Por último, é importante que esteja sempre informado sobre a criação nos novos pagamentos e as atualizações dos seus estados. Por exemplo se foram aprovados, rejeitados ou caso encontram-se pendentes.

[Configure notificações webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks) ou [notificações IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn).

## Exemplos para download

----[mlb]----
> NOTE
>
> Checkout Transparente
>
> Disponibilizamos [exemplos completos de integração](https://drive.google.com/file/d/12gSCPLfZCE36iKFbM4BTUwf6lnM7lVEL/view?usp=sharing) para que você possa fazer o download imediatamente.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> NOTE
>
> Checkout API
>
> Disponibilizamos [exemplos completos de integração](https://drive.google.com/file/d/12gSCPLfZCE36iKFbM4BTUwf6lnM7lVEL/view?usp=sharing) para que você possa fazer o download imediatamente.
------------

<span></span>

> GIT
>
> Formulário de pagamento
>
> Se você deseja implementar seu servidor com alguma outra tecnologia, te deixamos um [exemplo completo do formulário de pagamento](https://github.com/mercadopago/card-payment-sample) no GitHub para que possa baixar.

---
### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Teste sua integração
>
> Revise que esteja tudo bem com sua integração com os usuários de teste.
>
> [Teste sua integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/testing)

----[mlc]----
> RIGHT_BUTTON_RECOMMENDED_PT
>
> Referências de API
>
> Encontre toda informação necessária para interagir com nossas APIs.
>
> [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference)
------------

----[mla, mlb, mlm, mlu, mpe, mco]----
> RIGHT_BUTTON_RECOMMENDED_PT
>
> Integrar outros meios de pagamento
>
> Conheça todas as opções de pagamentos disponíveis e como oferecê-las.
>
> [Integrar outros meios de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways)
------------
