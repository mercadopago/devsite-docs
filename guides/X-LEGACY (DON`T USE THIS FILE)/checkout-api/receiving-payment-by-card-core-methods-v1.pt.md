----[mlb]----
# Integre Checkout Transparente para pagamentos com cartão
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
# Integre Checkout API para pagamentos com cartão
------------

----[mlb]----
A integração por Checkout Transparente do Mercado Pago para pagamentos com cartões permite que você possa oferecer uma opção de pagamento totalmente no seu site. Toda a experiência acontece na sua loja para que os clientes não tenham que sair no momento de realizar a compra.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
A integração por Checkout API do Mercado Pago para pagamentos com cartões permite que você possa oferecer uma opção de pagamento totalmente no seu site. Toda a experiência acontece na sua loja para que os clientes não tenham que sair no momento de realizar a compra.
------------


## Funcionamento

![API-integration-flowchart](/images/api/api-integration-flowchart-coremethods-pt.png)

> Caso deseje realizar um fluxo de pagamento automatizado, recomendamos você [utilizar a funcionalidade CardForm de MercadoPago.js V1](/developers/pt/docs/checkout-api/payment-methods/receiving-payment-by-card-v1).

<br>

----[mlb]----
Ao usar nosso Checkout Transparente do Mercado Pago, é importante ter em conta duas instâncias: a de captura de dados e envio de confirmação de pagamento.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Ao usar nosso Checkout API do Mercado Pago, é importante ter em conta duas instâncias: a de captura de dados e envio de confirmação de pagamento.
------------

1. Primeiro, é preciso um frontend para coletar os dados do cartão e gerar um token de segurança com a informação para poder criar o pagamento.
2. Segundo, um backend que tome o token gerado e os dados do pagamento, como por exemplo o valor e o item, e possa confirmar e efetuar o pagamento.

Tanto para o frontend como para o backend, recomendamos utilizar [nossos SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/checkout-api/previous-requirements#bookmark_sempre_utilize_nossas_bibliotecas) para poder coletar os dados sensíveis dos seus usuários de maneira segura.

Obtenha mais informações nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference).

<br>

> CLIENT_SIDE
>
> h2
>
> Capture os dados de cartão

Para criar um pagamento é necessário fazer a captura dos dados do cartão através do navegador do comprador. Por questões de segurança, **é muito importante que os dados nunca cheguem aos seus servidores**.

> NOTE
>
> Nota
>
> Esta documentação utiliza a antiga versão da biblioteca. Para ver a versão atual, vá para a [seção de integrar pagamentos com cartão com MercadoPago.js V2](/developers/pt/docs/online-payments/checkout-api/receiving-payment-by-card-core-methods).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Inclua a biblioteca MercadoPago.js

**Use nossa biblioteca oficial para acessar a API de Mercado Pago** no seu frontend e coletar os dados de forma segura.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

A informação do cartão será convertida em um token para que envie os dados aos seus servidores de modo seguro.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Adicione o formulário de pagamento

Para realizar a captura de dados sensíveis dos cartões dos seus clientes, **é muito importante que utilize nosso formulário com os atributos correspondentes** para garantir a segurança da informação e a correta geração do token. Por exemplo, não deve utilizar o atributo `name` nos campos com dados sensíveis, dessa forma jamais atingirão seus servidores.

Pode adicionar todo o que precisar, alterar o atributo `label` sugerido e somar-lhe o estilo que desejar sem problemas.

No exemplo a seguir, assume-se que os dados `transactionAmount` e `description` foram obtidos no passo prévio onde o cliente selecionou o produto ou serviço que deseja pagar.

```html
<form id="form-checkout" method="POST" action="/process_payment">
    <input type="text" id="form-checkout__cardNumber" placeholder="Número do cartão" />
    <input type="text" id="form-checkout__expirationMonth" placeholder="Mês de vencimiento (MM)" />
    <input type="text" id="form-checkout__expirationYear" placeholder="Ano de vencimiento (YY o YYYY)" />
    <input type="text" name="cardholderName" id="form-checkout__cardholderName" placeholder="Titular do cartão"/>
    <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" placeholder="E-mail" />
    <input type="text" id="form-checkout__securityCode" placeholder="Código de segurança"/>
    <select name="issuer" id="form-checkout__issuer">
        <option value="" disabled selected>Selecione o emissor</option>
    </select>----[mla, mlb, mlu, mlc, mpe, mco]----
    <select name="identificationType" id="form-checkout__identificationType">
        <option value="" disabled selected>Tipo de documento</option>
    </select>------------
    <input type="text" name="identificationNumber" id="form-checkout__identificationNumber" placeholder="N​ú​mero do documento​" />
    <select name="installments" id="form-checkout__installments">
        <option value="" disabled selected>Escolha a quantidade de parcelas</option>
    </select>
    <input id="token" name="token" type="hidden" />
    <input id="paymentMethodId" name="paymentMethodId" type="hidden" />
    <input id="transactionAmount" name="transactionAmount" type="hidden" value="100"/>
    <input id="description" name="description" type="hidden" value="product description" />
    <button type="submit" id="form-checkout__submit">Pagar</button>
</form>
```

> NOTE
>
> Nota
>
> Lembre-se que é preciso ter o formulário antes de todos os passos seguintes para seu correto funcionamento.


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configure sua chave pública


Configure sua [chave pública]([FAKER][CREDENTIALS][URL]) da seguinte forma:

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

> Se ainda não possui conta para ver suas credenciais, [registre-se](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtenha os dados para seu formulário

----[mla, mlb, mlu, mlc, mpe, mco]----

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha os tipos de documento

Um dos campos obrigatórios é o tipo de documento. Utilize a lista de documentos no momento de completar os dados.

Incluindo o elemento do tipo `select` com o id: `form-checkout__identificationType` que está no formulário, poderá preencher automaticamente as opções disponíveis quando chamar a função a seguir:

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

> Encontre mais detalhes na [seção de Tipos de documentos](/developers/pt/guides/additional-content/payment-localization/doc-type-by-country).

------------

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha o método de pagamento do cartão

Valide os dados dos seus clientes enquanto são preenchidos para evitar erros e oferecer corretamente as parcelas disponíveis. Use o seguinte código de exemplo para identificar o meio de pagamento com os primeiros 8 dígitos do cartão.

```javascript
// Step #getPaymentMethods
const cardNumberElement = document.getElementById('form-checkout__cardNumber');

function clearHTMLSelectChildrenFrom(element) {
    const currOptions = [...element.children];
    currOptions.forEach(child => child.remove());
}

cardNumberElement.addEventListener('keyup', async () => {
   try {
       const paymentMethodElement = document.getElementById('paymentMethodId');
       const issuerElement = document.getElementById('form-checkout__issuer');
       const installmentsElement = document.getElementById('form-checkout__installments');
       let cardNumber = cardNumberElement.value;

       if (cardNumber.length < 8 && paymentMethodElement.value) {
           clearHTMLSelectChildrenFrom(issuerElement);
           clearHTMLSelectChildrenFrom(installmentsElement);
           paymentMethodElement.value = "";
           return
       }

       if (cardNumber.length >= 8 && !paymentMethodElement.value) {
           let bin = cardNumber.substring(0,8);
           const paymentMethods = await mp.getPaymentMethods({'bin': bin});

           const { id: paymentMethodId, additional_info_needed, issuer } = paymentMethods.results[0];

           // Assign payment method ID to a hidden input.
           paymentMethodElement.value = paymentMethodId;

           // If 'issuer_id' is needed, we fetch all issuers (getIssuers()) from bin.
           // Otherwise we just create an option with the unique issuer and call getInstallments().
           additional_info_needed.includes('issuer_id') ? getIssuers() : (() => {
               const issuerElement = document.getElementById('form-checkout__issuer');
               createSelectOptions(issuerElement, [issuer]);
  
               getInstallments();
           })()
       }
   }catch(e) {
       console.error('error getting payment methods: ', e)
   }
});
```

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha a banco emissor

No momento do preenchimento o formulário, é importante identificar o banco emissor do cartão para evitar conflitos entre os diferentes emissores e poder oferecer as opções corretas de parcelamento.

Adicione o seguinte código para obter o `issuer_id`:

```javascript
// Step #getIssuers

const getIssuers = async () => {
   try {
       const cardNumber = document.getElementById('form-checkout__cardNumber').value;
       const paymentMethodId = document.getElementById('paymentMethodId').value;
       const issuerElement = document.getElementById('form-checkout__issuer');

       const issuers = await mp.getIssuers({paymentMethodId, bin: cardNumber.slice(0,8)});

       createSelectOptions(issuerElement, issuers);

       getInstallments();
   }catch(e) {
       console.error('error getting issuers: ', e)
   }
};
```

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha a quantidade de parcelas

Outro campo obrigatório para pagamento com cartão é a quantidade de parcelas. Para obter as parcelas diponíveis, utilize a seguinte função de exemplo para completar o campo sugerido de tipo _select_ denominado `installments`.

```javascript
// Step #getInstallments
const getInstallments = async () => {
   try {
       const installmentsElement = document.getElementById('form-checkout__installments')
       const cardNumber = document.getElementById('form-checkout__cardNumber').value; 

       const installments = await mp.getInstallments({
           amount: document.getElementById('transactionAmount').value,
           bin: cardNumber.slice(0,8),
           paymentTypeId: 'credit_card'
       });

       createSelectOptions(installmentsElement, installments[0].payer_costs, {label: 'recommended_message', value: 'installments'})
   }catch(e) {
       console.error('error getting installments: ', e)
   }
}
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Crie o token do cartão

Antes de enviar o pagamento, crie o token que conterá de maneira segura toda a informação do cartão. Você deve gerá-lo da seguinte forma:

```javascript
// Step #createCardToken
const formElement = document.getElementById('form-checkout');
formElement.addEventListener('submit', e => createCardToken(e));

const createCardToken = async (event) => {
   try {
       const tokenElement = document.getElementById('token');

       if (!tokenElement.value) {
           event.preventDefault();

           const token = await mp.createCardToken({
               cardNumber: document.getElementById('form-checkout__cardNumber').value,
               cardholderName: document.getElementById('form-checkout__cardholderName').value,----[mla, mlb, mlu, mlc, mpe, mco]----
               identificationType: document.getElementById('form-checkout__identificationType').value,------------
               identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
               securityCode: document.getElementById('form-checkout__securityCode').value,
               cardExpirationMonth: document.getElementById('form-checkout__expirationMonth').value,
               cardExpirationYear: document.getElementById('form-checkout__expirationYear').value
           });

           tokenElement.value = token.id;

           formElement.requestSubmit();
       }
   }catch(e) {
       console.error('error creating card token: ', e)
   }
}
```

O método `createCardToken` retornará um token com a representação segura do cartão.

Tomaremos o token ID da resposta e a salvaremos em um atributo oculto que denominaremos `token`, para depois enviar o formulário para seus servidores.


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

Segundo o exemplo dado, seu backend devería diponibilizar um endpoint `/process_payment`, que foi definido no atributo `action` do formulário, para receber nele, todos os dados assim que realizar a ação `submit`.

Já estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs. Os campos mínimos requeridos para enviar são: `token`, `transaction_amount`, `installments`, `payment_method_id` e o `payer.email`.

Tenha em conta que para que esse passo funcione é necessário que configure sua [chave privada]([FAKER][CREDENTIALS][URL]) e que para interagir com nossas APIs recomendamos utilizar o [SDK oficial do Mercado Pago](/developers/pt/guides/checkout-api/previous-requirements#bookmark__instale_o_sdk_do_mercado_pago).

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
    console.error(error)
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

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resposta

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

> Conheça todos os campos disponíveis para realizar um pagamento completo nas [Referências de API](/developers/pt/reference/payments/_payments/post).

## Mensagens de respostas

Os possíveis estados de um pagamento são:

![payment-status](/images/api/api-payment-status-pt.png)
<br>
<br>

Para ajudar a melhorar a aprovação dos seus pagamentos, é fundamental que possa comunicar corretamente aos seus clientes os dados resultantes da criação de um pagamento.

Isso ajudará a evitar casos de rejeição e estornos nos casos de transações inicialmente aprovadas. Por exemplo, permite que se possa corrigir os erros de carga de dados ou ajudar a alterar o meio de pagamento.

Te recomendamos usar as [mensagens de respostas](/developers/pt/guides/checkout-api/response-handling) e utilizar a comunicação sugerida em cada um dos casos.

> NOTE
>
> Nota
>
> Evite pagamentos rejeitados com nossas [recomendações para melhorar a aprovação dos seus pagamentos](/developers/pt/guides/how-tos/improve-approval).

## Receba notificações de pagamento

Por último, é importante que esteja sempre informado sobre a criação nos novos pagamentos e as atualizações dos seus estados. Por exemplo se foram aprovados, rejeitados ou caso encontram-se pendentes.

[Configure notificações webhooks](/developers/pt/guides/notifications/webhooks/webhooks) ou [notificações IPN](/developers/pt/guides/checkout-api/additional-content/notifications/ipn/introduction).

