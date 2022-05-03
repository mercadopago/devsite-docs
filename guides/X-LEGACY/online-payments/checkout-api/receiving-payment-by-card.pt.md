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

Use os [exemplos para download](#bookmark_exemplos_para_download) para conhecer a integração completa ou para adaptá-los de acordo com o que precisa.

## Como funciona?

![API-integration-flowchart](/images/api/api-integration-flowchart-cardform-pt.png)

> Caso deseje realizar um fluxo de pagamento personalizado, compartilhamos todos os [métodos disponíveis para integrar de forma avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/receiving-payment-by-card-core-methods).

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

> Obtenha mais informações nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/cards/_customers_customer_id_cards/post).

<br>

> CLIENT_SIDE
>
> h2
>
> Capture os dados de cartão

Para criar um pagamento é necessário fazer a captura dos dados do cartão através do navegador do comprador. Por questões de segurança, **é muito importante que os dados nunca cheguem aos seus servidores**.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Inclua e configure a biblioteca MercadoPago.js

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

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Adicione o formulário de pagamento

Para capturar os dados do cartão, primeiro deve oferecer um formulário para carregar toda a informação.

Com a **funcionalidade CardForm da biblioteca MercadoPago.js V2**, pode obter e validar todos os dados necessários, como identificar o tipo e nome do meio de pagamento, o banco emissor, o número de prestações e mais.

CardForm permite você ter uma implementação segura e uma correta tokenização da informação do cartão.

Utilize o formulário seguinte e adicione os estilos que desejar.


```html

<!-- Step #2 -->
<form id="form-checkout" >
   <input type="text" name="cardNumber" id="form-checkout__cardNumber" />
   <input type="text" name="cardExpirationDate" id="form-checkout__cardExpirationDate" />
   <input type="text" name="cardholderName" id="form-checkout__cardholderName"/>
   <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail"/>
   <input type="text" name="securityCode" id="form-checkout__securityCode" />
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
> Referencia técnica
> 
> Procure informações acerca dos distintos atributos nas [referências técnicas](https://github.com/mercadopago/sdk-js).


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Integre o formulário com a biblioteca MercadoPago.js


Agora, para inicializar o CardForm, deve relacionar a ID de cada campo do formulário com os atributos correspondentes. A biblioteca será responsável pelo preenchimento, obtenção e validação de todos os dados necessários na hora de confirmar o pagamento.

```javascript
// Step #3
const cardForm = mp.cardForm({
  amount: "100.5",
  autoMount: true,
  form: {
    id: "form-checkout",
    cardholderName: {
      id: "form-checkout__cardholderName",
      placeholder: "Titular do cartão",
    },
    cardholderEmail: {
      id: "form-checkout__cardholderEmail",
      placeholder: "E-mail",
    },
    cardNumber: {
      id: "form-checkout__cardNumber",
      placeholder: "Número do cartão",
    },
    cardExpirationDate: {
      id: "form-checkout__cardExpirationDate",
      placeholder: "Data de vencimento (MM/YYYY)",
    },
    securityCode: {
      id: "form-checkout__securityCode",
      placeholder: "Código de segurança",
    },
    installments: {
      id: "form-checkout__installments",
      placeholder: "Parcelas",
    },----[mla, mlb, mlu, mlc, mpe, mco]----
    identificationType: {
      id: "form-checkout__identificationType",
      placeholder: "Tipo de documento",
    },------------
    identificationNumber: {
      id: "form-checkout__identificationNumber",
      placeholder: "Número do documento",
    },
    issuer: {
      id: "form-checkout__issuer",
      placeholder: "Banco emissor",
    },
  },
  callbacks: {
    onFormMounted: error => {
      if (error) return console.warn("Form Mounted handling error: ", error);
      console.log("Form mounted");
    },
    onSubmit: event => {
      event.preventDefault();

      const {
        paymentMethodId: payment_method_id,
        issuerId: issuer_id,
        cardholderEmail: email,
        amount,
        token,
        installments,
        identificationNumber----[mla, mlb, mlu, mlc, mpe, mco]----,
        identificationType,------------
      } = cardForm.getCardFormData();

      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          issuer_id,
          payment_method_id,
          transaction_amount: Number(amount),
          installments: Number(installments),
          description: "Descrição do produto",
          payer: {
            email,
            identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
              type: identificationType,------------
              number: identificationNumber,
            },
          },
        }),
      });
    },
    onFetching: (resource) => {
      console.log("Fetching resource: ", resource);

      // Animate progress bar
      const progressBar = document.querySelector(".progress-bar");
      progressBar.removeAttribute("value");

      return () => {
        progressBar.setAttribute("value", "0");
      };
    }
  },
});
```

A opção de callbacks aceita diferentes funções que são ativadas em diversos momentos do fluxo.

> GIT
> 
> Referencia técnica
> 
> Obtenha mais informações acerca dos callbacks nas [referências técnicas](https://github.com/mercadopago/sdk-js).

Antes de enviar o formulário, geramos um token com a representação segura do cartão e o salvaremos em um `input` oculto que denominaremos `MPHiddenInputToken` para depois enviar o formulário para seus servidores.

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

[Configure notificações webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks/webhooks) ou [notificações IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/introduction).

## Exemplos para download

----[mlb]----
> GIT
>
> Checkout Transparente
>
> Disponibilizamos [exemplos completos de integração](http://github.com/mercadopago/card-payment-sample) no GitHub para que você possa fazer o download imediatamente.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> GIT
>
> Checkout API
>
> Disponibilizamos [exemplos completos de integração](http://github.com/mercadopago/card-payment-sample) no GitHub para que você possa fazer o download imediatamente.
------------

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
