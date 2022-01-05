----[mlb]----
# Integre o Checkout Transparente para pagamentos com cartão
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
# Integre o Checkout API para pagamentos com cartão
------------

[TXTSNIPPET][/guides/snippets/test-integration/receiving-payment-by-card]

## Funcionamento

![API-integration-flowchart](/images/api/api-integration-flowchart-coremethods-v2-pt.png)

> Caso deseje realizar um fluxo de pagamento automatizado, recomendamos você [utilizar a funcionalidade CardForm do MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/receiving-payment-by-card-v2).

<br>

----[mlb]----
Ao utilizar o Checkout Transparente do Mercado Pago, é importante ter em conta duas instâncias: a de captura de dados e a de envio de confirmação de pagamento.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Ao utilizar nosso Checkout API do Mercado Pago, é importante ter em conta duas instâncias: a de captura de dados e a de envio de confirmação de pagamento.
------------

1. É preciso um frontend para coletar os dados do cartão e gerar um token de segurança com a informação para que se possa criar o pagamento.
2. Tenha um backend que colete o token gerado e os dados do pagamento, como, por exemplo, o valor e o item, além de poder confirmar e efetuar o pagamento.

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
> Capture os dados de cartão

Para criar um pagamento é necessário fazer a captura dos dados do cartão através do navegador do comprador. Por questões de segurança, **é muito importante que os dados nunca cheguem aos seus servidores**.

> NOTE
>
> Nota
>
> Esta documentação utiliza a nova versão da biblioteca. Para ver a versão anterior, vá para a [seção de integrar pagamentos com cartão com MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/receiving-payment-by-card).

Para capturar os dados do cartão, siga estas etapas:

1. [Inclua a biblioteca MercadoPago.js](#bookmark_1._inclua_a_biblioteca_mercadopago.js)
2. [Adicione o formulário de pagamento](#bookmark_2._adicione_o_formulário_de_pagamento)
3. [Configure sua chave pública](#bookmark_3._configure_sua_chave_pública)
4. [Crie os campos PCI](#bookmark_4._crie_os_campos_pci)
5. [Obtenha os dados para seu formulário](#bookmark_5._obtenha_os_dados_para_seu_formulário)
6. [Crie o token do cartão](#bookmark_6._crie_o_token_do_cartão)

### 1. Inclua a biblioteca MercadoPago.js

**Utilize nossa biblioteca oficial para acessar a API de Mercado Pago** no seu frontend e coletar os dados de forma segura.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

A informação do cartão será convertida em um token para que os dados sejam enviados aos seus servidores de forma segura.

### 2. Adicione o formulário de pagamento

Para realizar a captura de dados sensíveis dos cartões dos seus clientes, **é muito importante que utilize nosso formulário com os atributos correspondentes** para garantir a segurança da informação e a correta geração do token.

> NOTE
>
> Nota
>
> Os campos seguros são `divs` porque as entradas verdadeiras estarão seguras dentro do iframe.

Você pode adicionar tudo o que precisar, alterar o atributo `label` sugerido e inserir o estilo que desejar sem problemas.

No exemplo a seguir, assume-se que os dados `transactionAmount` e `description` foram obtidos no passo anterior onde o cliente selecionou o produto ou serviço que deseja pagar.

```html
<form id="form-checkout" method="POST" action="/process_payment">
  <div id="form-checkout__cardNumber-container"></div>
  <div id="form-checkout__cardExpirationDate-container" class="input"></div>
  <input type="text" name="cardholderName" id="form-checkout__cardholderName" placeholder="Titular do cartão" />
  <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" placeholder="E-mail" />
  <div id="form-checkout__securityCode-container"></div>
  <select name="issuer" id="form-checkout__issuer">
    <option value="" disabled selected>Selecione o emissor</option>
  </select>
  <select name="identificationType" id="form-checkout__identificationType">
    <option value="" disabled selected>Tipo de documento</option>
  </select>
  <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"
    placeholder="N​ú​mero do documento​" />
  <select name="installments" id="form-checkout__installments">
    <option value="" disabled selected>Escolha a quantidade de parcelas</option>
  </select>
  <input id="MPHiddenInputToken" name="MPHiddenInputToken" type="hidden" />
  <input id="MPHiddenInputPaymentMethod" name="MPHiddenInputPaymentMethod" type="hidden" />
  <input id="transactionAmount" name="transactionAmount" type="hidden" value="100" />
  <input id="description" name="description" type="hidden" value="product description" />
  <button type="submit" id="form-checkout__submit">Pagar</button>
</form>
```

> NOTE
>
> Nota
>
> Lembre-se que é preciso ter o formulário antes de todos os passos seguintes para seu correto funcionamento.


### 3. Configure sua chave pública


Configure a sua [chave pública]([FAKER][CREDENTIALS][URL]) da seguinte forma:

```javascript
 
<script>
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
 
// Add Step #getIdentificationTypes
// Add Step #getPaymentMethods
// Add Step #getIssuers
// Add Step #getInstallments
// Add Step #createCardToken
</script>
```

> Se ainda não possui conta para ver suas credenciais, [registre-se](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### 4. Crie os campos PCI

Nesse passo são criados os campos seguros (cardNumber, expirationDate e CVV) com **Fields**, hospedados pelo **Mercado Pago**, e que fazem uso do elemento `HTML iframe`.

O segundo parâmetro são as opções e pode receber valor para **placeholder** e **style**. O valor para **placeholder** deve ser uma *string*, enquanto **style** é um *objeto* com as chaves sendo o nome da propriedade CSS e os valores uma string com a estilização. Valores inválidos serão ignorados com a exibição de um warning no console.

Para mais detalhes sobre os estilos permitidos, [consulte a referência técnica](https://github.com/lucmantovani/sdk-js/tree/feature/fields-docs#style).

Um exemplo de código com `cardNumber`, `expirationMonth`, `expirationYear` e `CVV` seria:

```javascript
  const cardNumberElement = mp.fields.create('cardNumber', {
    placeholder: "Card Number",
  }).mount('form-checkout__cardNumber-container');
 
  const expirationDateElement = mp.fields.create('expirationDate', {
    placeholder: "MM/YYYY"
  }).mount('form-checkout__cardExpirationDate-container');
 
  const securityCodeElement = mp.fields.create('CVV', {
    placeholder: "CVV"  
  }).mount('form-checkout__securityCode-container');
```

### 5. Obtenha os dados para seu formulário

Você deve obter os seguintes dados:

----[mla, mlb, mlu, mlc, mpe, mco]----
* [Tipos de documento](#bookmark_obtenha_os_tipos_de_documento) ------------
* [Método de pagamento do cartão](#bookmark_obtenha_o_método_de_pagamento_do_cartão)
* [Banco emissor](#bookmark_obtenha_o_banco_emissor)
* [Quantidade de parcelas](#bookmark_obtenha_a_quantidade_de_parcelas)


----[mla, mlb, mlu, mlc, mpe, mco]----

#### Obtenha os tipos de documento

Um dos campos obrigatórios é o tipo de documento. Utilize a lista de documentos no momento de completar os dados.

Incluindo o elemento do tipo `select` com o id `form-checkout__docType` que está no formulário, será possível preencher automaticamente as opções disponíveis quando chamar a função a seguir:

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
      const docTypeElement = document.getElementById('form-checkout__identificationType');
 
      createSelectOptions(docTypeElement, identificationTypes)
  }catch(e) {
      return console.error('Error getting identificationTypes: ', e);
  }
})()
```

> Encontre mais detalhes na [seção de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/identification-types).

------------

#### Obtenha o meio de pagamento do cartão

Valide os dados dos seus clientes enquanto são preenchidos para evitar erros e oferecer corretamente as parcelas disponíveis. Use o seguinte código de exemplo para identificar o meio de pagamento com os primeiros 6 dígitos do cartão.

```javascript
// Step #getPaymentMethods
cardNumberElement.on('change', async ({ data }) => {
    const { bin } = data;
    try {
      const paymentMethodElement = document.getElementById('MPHiddenInputPaymentMethod');
      if (bin.length < 6 && paymentMethodElement.value) return paymentMethodElement.value = "";
      if (bin.length === 6 && !paymentMethodElement.value) {
        const paymentMethods = await mp.getPaymentMethods({ bin });
        const { id: paymentMethodID, additional_info_needed, issuer } = paymentMethods.results[0];
        // Assign payment method ID to a hidden input.
        paymentMethodElement.value = paymentMethodID;
        // If 'issuer_id' is needed, we fetch all issuers (getIssuers()) from bin.
        // Otherwise we just create an option with the unique issuer and call getInstallments().
        additional_info_needed.includes('issuer_id') ? getIssuers(bin) : (() => {
          const issuerElement = document.getElementById('form-checkout__issuer');
          createSelectOptions(issuerElement, [issuer]);
          getInstallments(bin);
        })()
      }
    } catch (e) {
      console.error('error getting payment methods: ', e)
    }
  })
```

#### Obtenha o banco emissor

No momento do preenchimento do formulário, é importante identificar o banco emissor do cartão para evitar conflitos entre os diferentes emissores e poder oferecer as opções corretas de parcelamento.

Adicione o seguinte código para obter o `issuer_id`:

```javascript
// Step #getIssuers
const getIssuers = async (bin) => {
    try {
      const paymentMethodId = document.getElementById('MPHiddenInputPaymentMethod').value;
      const issuerElement = document.getElementById('form-checkout__issuer');
      const issuers = await mp.getIssuers({ paymentMethodId, bin });
      createSelectOptions(issuerElement, issuers);
      getInstallments(bin);
    } catch (e) {
      console.error('error getting issuers: ', e)
    }
  };
```

#### Obtenha a quantidade de parcelas

Outro campo obrigatório para pagamento com cartão é a quantidade de parcelas. Para obter as parcelas disponíveis, utilize a seguinte função de exemplo para completar o campo sugerido de tipo _select_ denominado `installments`.

```javascript
// Step #getInstallments
const getInstallments = async (bin) => {
    try {
      const installmentsElement = document.getElementById('form-checkout__installments')
      const installments = await mp.getInstallments({
        amount: document.getElementById('transactionAmmount').value,
        bin,
        paymentTypeId: 'credit_card'
      });
      createSelectOptions(installmentsElement, installments[0].payer_costs, { label: 'recommended_message', value: 'installments' })
    } catch (e) {
      console.error('error getting installments: ', e)
    }
  }
```

A partir desse ponto, ao inserir um número de cartão válido (ex: 5031433215406351) no campo `cardNumber`, os campos `issuer` e `installments` deverão ser preenchidos automaticamente.

### 6. Crie o token do cartão

Antes de enviar o pagamento, crie o token que conterá de maneira segura toda a informação do cartão. Você deve gerá-lo da seguinte forma:

```javascript
// Step #createCardToken
const formElement = document.getElementById('form-checkout');
  formElement.addEventListener('submit', e => createCardToken(e));
  const createCardToken = async (event) => {
    try {
      const tokenElement = document.getElementById('MPHiddenInputToken');
      if (!tokenElement.value) {
        event.preventDefault();
        const token = await mp.fields.createCardToken({
          cardholderName: document.getElementById('form-checkout__cardholderName').value,
          cardholderEmail: document.getElementById('form-checkout__cardholderEmail').value,----[mla, mlb, mlu, mlc, mpe, mco]----
          identificationType: document.getElementById('form-checkout__identificationType').value,------------
 
          identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
        });
        tokenElement.value = token.id;
        formElement.requestSubmit();
      }
    } catch (e) {
      console.error('error creating card token: ', e)
    }
  }
```

O método `createCardToken` retornará um token com a representação segura do cartão.

Receberemos o token ID da resposta e ao salvaremos em um atributo oculto denominado `MPHiddenInputToken` para depois enviar o formulário aos seus servidores.


> WARNING
>
> Importante
>
> Tenha em conta que o token tem uma validade de 7 dias e só pode ser utilizado uma única vez.

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

Tenha em conta que para que esse passo funcione é necessário que tenha configurado a sua [chave privada]([FAKER][CREDENTIALS][URL]) e que, para interagir com nossas APIs, recomendamos utilizar o [SDK oficial do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements#bookmark__instale_o_sdk_do_mercado_pago).

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

[TXTSNIPPET][/guides/snippets/test-integration/api-response-handling]

## Receba notificações de pagamento

[TXTSNIPPET][/guides/snippets/test-integration/api-payment-notifications]

## Exemplos para download

----[mlb]----
> NOTE
>
> Checkout Transparente
>
> Disponibilizamos [exemplos completos de integração](https://drive.google.com/file/d/10csLR_4NwMbXtHObxZ1Ej9fvB2Zkr7AS/view?usp=sharing) para que você possa fazer o download imediatamente.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> NOTE
>
> Checkout API
>
> Disponibilizamos [exemplos completos de integração](https://drive.google.com/file/d/10csLR_4NwMbXtHObxZ1Ej9fvB2Zkr7AS/view?usp=sharing) para que você possa fazer o download imediatamente.
------------

<span></span>

> GIT
>
> Formulário de pagamento
>
> Se você deseja implementar seu servidor com alguma outra tecnologia, te deixamos um [exemplo completo do formulário de pagamento](https://github.com/mercadopago/card-payment-sample) no GitHub para que você possa fazer o download.

## Adicionar eventos customizados

É possível adicionar outros eventos customizados nos inputs, como focus, blur, ready e validityChange:

```javascript
cardNumberElement.on("focus", () => console.log("Card Number received focus"));
```

Se você quiser saber mais sobre outros eventos customizados, acesse nossa documentação do [GitHub](https://github.com/lucmantovani/sdk-js/tree/feature/fields-docs#field-instanceonevent-callback).

---
### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Teste sua integração
>
> Confirme que está tudo bem com a sua integração e com os usuários de teste.
>
> [Teste sua integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/testing)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Integrar outros meios de pagamento
>
> Conheça todas as opções de pagamentos disponíveis e como oferê-las.
>
> [Integrar outros meios de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways)
