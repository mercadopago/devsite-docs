# Receba um pagamento com cartão

Com o MercadoPago é possível capturar os dados do cartão de forma segura, ao mesmo tempo que mantém o controle sobre a experiência de compra oferecida aos seus usuários.


## Capture os dados do cartão

A captura de dados do cartão é realizada a partir do navegador do seu comprador. Por questões de segurança, é **muito importante que os dados nunca cheguem aos seus servidores**.

O Mercado Pago conta com uma biblioteca Javascript para ajudá-lo a fazer isso de forma simples e segura.

### 1. Incluir MercadoPago.js

Para utilizar esta biblioteca, primeiramente insira o seguinte código em nosso checkout:

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

> NOTE
>
> Nota
>
> A biblioteca deve ser **sempre** importada a partir de _https://secure.mlstatic.com_.

### 2. Configure sua public key

Sua chave pública é sua identificação para poder capturar os dados do cartão de forma segura. O upload da chave pública deve ser feito após incluir MercadoPago.js e antes de efetuar uma solicitação.

```javascript
window.Mercadopago.setPublishableKey("ENV_PUBLIC_KEY");
```

> NOTE
>
> Nota
>
> Esta é uma chave pública do ambiente de testes. Para capturar cartões reais, você deve substituí-la pela sua [chave pública de produção]([FAKER][CREDENTIALS][URL]).


### 3. Capturar dados do cartão

#### Formulário

O próximo passo é capturar os dados do cartão. Para isso, é importante possuir um formulário que utilize os seguintes atributos data-checkout:

```html
<form action="/processar_pagamento" method="post" id="pay" name="pay" >
    <fieldset>
        <ul>
            <li>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" value="test_user_19653727@testuser.com"  placeholder="your email"/>
            </li>
            <li>
                <label for="cardNumber">Credit card number:</label>
                <input type="text" id="cardNumber" data-checkout="cardNumber" placeholder="4509 9535 6623 3704" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
            </li>
            <li>
                <label for="securityCode">Security code:</label>
                <input type="text" id="securityCode" data-checkout="securityCode" placeholder="123" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
            </li>
            <li>
                <label for="cardExpirationMonth">Expiration month:</label>
                <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" placeholder="11" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
            </li>
            <li>
                <label for="cardExpirationYear">Expiration year:</label>
                <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" placeholder="2025" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
            </li>
            <li>
                <label for="cardholderName">Card holder name:</label>
                <input type="text" id="cardholderName" data-checkout="cardholderName" placeholder="APRO" />
            </li>
            <li>
                <label for="docType">Document type:</label>
                <select id="docType" data-checkout="docType"></select>
            </li>
            <li>
                <label for="docNumber">Document number:</label>
                <input type="text" id="docNumber" data-checkout="docNumber" placeholder="19119119100" />
            </li>
            <li>
               <label for="installments">Installments:</label>
               <select id="installments" class="form-control" name="installments"></select>
          </li>
        </ul>
        <input type="hidden" name="amount" id="amount"/>
        <input type="hidden" name="description"/>
        <input type="hidden" name="paymentMethodId" />
        <input type="submit" value="Pay!" />
    </fieldset>
</form>
```

> WARNING
>
> Importante
>
> Os campos que possuem dados confidenciais não contam com o atributo `name` e, portanto, nunca chegarão aos seus servidores.

----[mla, mlb, mlu, mco, mlc, mpe]----
#### Obtenha o tipo de documento

Entre os campos obrigatórios estão o tipo e o número do documento.

É possível obter a lista de documentos disponíveis:

```javascript
window.Mercadopago.getIdentificationTypes();
```
------------

####  Obtenha o meio de pagamento do cartão

É importante obter o meio de pagamento do cartão para poder efetuar o pagamento. A função `getBin ()` no exemplo abaixo, obtém os 6 primeiros dígitos do cartão. Esses dígitos são responsáveis por identificar o método de pagamento e o banco emissor do referido cartão.

O retorno da função de nome `setPaymentMethodInfo` recebe um status e uma resposta. A função armazena o id da resposta no campo `paymentMethodId` (input hidden).

```javascript

function addEvent(to, type, fn){ 
        if(document.addEventListener){
            to.addEventListener(type, fn, false);
        } else if(document.attachEvent){
            to.attachEvent('on'+type, fn);
        } else {
            to['on'+type] = fn;
        }  
    }; 

addEvent(document.querySelector('#cardNumber'), 'keyup', guessingPaymentMethod);
addEvent(document.querySelector('#cardNumber'), 'change', guessingPaymentMethod);

function getBin() {
  const cardnumber = document.getElementById("cardNumber");
  return cardnumber.value.substring(0,6);
};

function guessingPaymentMethod(event) {
    var bin = getBin();

    if (event.type == "keyup") {
        if (bin.length >= 6) {
            window.Mercadopago.getPaymentMethod({
                "bin": bin
            }, setPaymentMethodInfo);
        }
    } else {
        setTimeout(function() {
            if (bin.length >= 6) {
                window.Mercadopago.getPaymentMethod({
                    "bin": bin
                }, setPaymentMethodInfo);
            }
        }, 100);
    }
};

function setPaymentMethodInfo(status, response) {
    if (status == 200) {
        const paymentMethodElement = document.querySelector('input[name=paymentMethodId]');

        if (paymentMethodElement) {
            paymentMethodElement.value = response[0].id;
        } else {
            const input = document.createElement('input');
            input.setAttribute('name', 'paymentMethodId');
            input.setAttribute('type', 'hidden');
            input.setAttribute('value', response[0].id);     

            form.appendChild(input);
        }

        Mercadopago.getInstallments({
            "bin": getBin(),
            "amount": parseFloat(document.querySelector('#amount').value),
        }, setInstallmentInfo);

    } else {
        alert(`payment method info error: ${response}`);  
    }
};
```

#### Capture os dados

Antes de enviar o formulário, deve-se capturar o evento `submit` e utilizar o método `window.Mercadopago.createToken(form, sdkRespondeHandler)`.

```javascript
doSubmit = false;
addEvent(document.querySelector('#pay'), 'submit', doPay);
function doPay(event){
    event.preventDefault();
    if(!doSubmit){
        var $form = document.querySelector('#pay');

        window.Mercadopago.createToken($form, sdkResponseHandler); // The function "sdkResponseHandler" is defined below

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

Ao enviar o `form`, e utilizar os atributos `data-checkout`, a captura de todos os campos é realizada.

O método `createToken` retornará um card_token, que é a representação segura do cartão:

```json
{
    "id": "ff8080814cbd77a8014cc",
    "public_key": "TEST-b3d5b663-664a-4e8f-b759-de5d7c12ef8f",
    "card_id": null,
    "luhn_validation": true,
    "status": "active",
    "date_used": null,
    "card_number_length": 16,
    "date_created": "2015-04-16T13:06:25.525-04:00",
    "first_six_digits": "450995",
    "last_four_digits": "3704",
    "security_code_length": 3,
    "expiration_month": 6,
    "expiration_year": 2017,
    "date_last_updated": "2015-04-16T13:06:25.525-04:00",
    "date_due": "2015-04-24T13:06:25.531-04:00",
    "live_mode": false,
    "cardholder": {
        "identification": {
            "number": "23456789",
            "type": "type"
        },
        "name": "name"
    }
}
```

O segundo campo do método `createToken` é o `sdkResponseHandler`, que é uma função de callback que será executada ao criar o `card_token`.

Nós a utilizaremos para criar um campo oculto (input hidden) e armazenaremos o valor de `id` para então enviar o formulário aos seus servidores.


## Receba um pagamento com cartão

Para efetuar um pagamento único, deve-se obter o id do card_token a partir dos parâmetros enviados no POST.

Os `card_token` são **válidos por 7 dias** e podem ser utilizados apenas uma vez.

Para efetuar o pagamento, basta realizar um _API call_ na rota definida no _action_ do formulário:

[[[
```php
<?php  
    ===
    O valor da propriedade **status** indicara o estado de um pagamento (**approved**, **rejected or **in_process**).
    ===

    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200];
    $payment->token = "ff8080814c11e237014c1ff593b57b4d";
    $payment->description = "[FAKER][COMMERCE][PRODUCT_NAME]";
    $payment->installments = 1;
    $payment->payment_method_id = "visa";
    $payment->payer = array(
    "email" => "[FAKER][INTERNET][FREE_EMAIL]"
    );
    // Save and posting the payment
    $payment->save();
    //...
    // Print the payment status
    echo $payment->status;
    //...
?>
```
```java
===
O valor de **getStatus()** indicara o estado de um pagamento (**approved**, **rejected or **in_process**).
===

MercadoPago.SDK.setAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment();
payment.setTransactionAmount([FAKER][NUMBER][BETWEEN][100, 200])
       .setToken("ff8080814c11e237014c1ff593b57b4d")
       .setDescription("[FAKER][COMMERCE][PRODUCT_NAME]")
       .setInstallments(1)
       .setPaymentMethodId("visa")
       .setPayer(new Payer()
         .setEmail("[FAKER][INTERNET][FREE_EMAIL]"));
// Save and posting the payment
payment.save();
//...
// Print the payment status
System.out.println(payment.getStatus());
//...
```
```node
===
O valor da propriedade **status** indicara o estado de um pagamento (**approved**, **rejected or **in_process**).
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
    email: '[FAKER][INTERNET][FREE_EMAIL]'
  }
};

// Save and posting the payment
mercadopago.payment.save(payment_data).then(function (data) {
      console.log(data);
      res.send(data);
    }).catch(function (error) {
      console.log(error);
    });

```
```ruby
===
O valor da propriedade **status** indicara el estado de um pagamento (**approved**, **rejected or **in_process**).
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
  email: "[FAKER][INTERNET][FREE_EMAIL]"
}
# Save and posting the payment
payment.save()

```
```csharp
===
O valor da propriedade **status** indicara el estado de um pagamento (**approved**, **rejected or **in_process**).
===

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
// ...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment()
{
    TransactionAmount = float.Parse("[FAKER][NUMBER][BETWEEN][100, 200]"),
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Description = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Installments = 1,
    PaymentMethodId = "visa",
    Payer = new Payer(){
        Email = "[FAKER][INTERNET][FREE_EMAIL]"
    }
};
// Save and posting the payment
payment.Save();
//...
// Print the payment status
console.log(payment.Status);
//...
```
]]]

> Os campos obrigatórios para enviar são  `token`, `transaction_amount`, `payment_method_id` e o `payer.email`.

Resposta:

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

> NOTE
>
> Nota
>
> Você pode consultar mais informações sobre [manipulação de respostas](https://www.mercadopago.com.br/developers/pt/guides/payments/api/handling-responses).

## Receba um pagamento em parcelas

Para utilizar as [promoções](https://www.mercadopago.com.br/promocoes/) que o Mercado Pago oferece, é importante enviar o campo `issuer_id` e `installments` ao criar um campo de pagamento.

O campo installments corresponde ao número de parcelas selecionado pelo comprador. O `issuer_id` corresponde ao banco emissor do cartão.

Para obter as parcelas disponíveis:

```javascript

function setInstallmentInfo(status, response) {
        var selectorInstallments = document.querySelector("#installments"),
        fragment = document.createDocumentFragment();
        selectorInstallments.options.length = 0;

        if (response.length > 0) {
            var option = new Option("Escolha...", '-1'),
            payerCosts = response[0].payer_costs;
            fragment.appendChild(option);
            
            for (var i = 0; i < payerCosts.length; i++) {
                fragment.appendChild(new Option(payerCosts[i].recommended_message, payerCosts[i].installments));
            }
            
            selectorInstallments.appendChild(fragment);
            selectorInstallments.removeAttribute('disabled');
        }
    };
```

A resposta inclui o `issuer_id` que deve ser enviado e a mensagem recomendada para exibição em cada uma das parcelas disponíveis indicando o valor a ser pago:

```json
[
  {
    "payment_method_id": "amex",
    "payment_type_id": "credit_card",
    "issuer": {
        "id": "310",
        ...,
        {
            "installments": 3,
            "installment_rate": 18.9,
            "discount_rate": 0,
            "labels": [
            ],
            "min_allowed_amount": 2,
            "max_allowed_amount": 250000,
            "recommended_message": "3 cuotas de $ 396,33 ($ 1.189,00)",
            "installment_amount": 396.33,
            "total_amount": 1189
        }
        ...,
    ]
  }
]
```

----[mla]----

> NOTE
>
> Nota
>
> Devido à [Resolução E 51/2017](https://www.boletinoficial.gob.ar/#!DetalleNormaBusquedaRapida/158269/20170125/resolucion%2051) da Secretaria de Comércio da Argentina, sobre a transparência de preços, é necessário cumprir certos [requisitos adicionais](https://www.mercadopago.com.br/developers/pt/guides/localization/considerations-argentina).

------------

Para criar o pagamento, é importante enviar os dados indicados acima:

[[[
```php
<?php  

    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
    
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200];
    $payment->token = "ff8080814c11e237014c1ff593b57b4d";
    $payment->description = "[FAKER][COMMERCE][PRODUCT_NAME]";
    $payment->installments = 3;
    $payment->payment_method_id = "visa";
    $payment->issuer_id = 310;
    $payment->payer = array(
    "email" => "[FAKER][INTERNET][FREE_EMAIL]"
    );
    // Save and posting the payment
    $payment->save();
    //...
?>
```
```java

MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");
// ...
Payment payment = new Payment();
payment.setTransactionAmount([FAKER][NUMBER][BETWEEN][100, 200])
       .setToken("ff8080814c11e237014c1ff593b57b4d")
       .setDescription("[FAKER][COMMERCE][PRODUCT_NAME]")
       .setInstallments(3)
       .setIssuerId(310)
       .setPaymentMethodId("visa")
       .setPayer(new Payer()
         .setEmail("[FAKER][INTERNET][FREE_EMAIL]"));
// Save and posting the payment
payment.save
// ...
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("ENV_ACCESS_TOKEN");

var payment_data = {
  transaction_amount: [FAKER][NUMBER][BETWEEN][100, 200],
  token: 'ff8080814c11e237014c1ff593b57b4d'
  description: '[FAKER][COMMERCE][PRODUCT_NAME]',
  installments: 3,
  payment_method_id: 'amex',
  issuer_id: 310,
  payer: {
    email: '[FAKER][INTERNET][FREE_EMAIL]'
  }
};
// Save and posting the payment
mercadopago.payment.save(payment_data).then(function (data) {
      console.log(data);
      res.send(data);
    }).catch(function (error) {
      console.log(error);
    });
```
```ruby

require 'mercadopago'
# ...
MercadoPago::SDK.setAccessToken("ENV_ACCESS_TOKEN")
# ...
payment = MercadoPago::Payment.new()
payment.transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200]
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.description = '[FAKER][COMMERCE][PRODUCT_NAME]'
payment.installments = 3
payment.payment_method_id = 'amex'
payment.issuer_id = 310
payment.payer = {
  email: "[FAKER][INTERNET][FREE_EMAIL]"
}
# Save and posting the payment
payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
//...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment()
{
    TransactionAmount = float.Parse("[FAKER][NUMBER][BETWEEN][100, 200]"),
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Description = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Installments = 3,
    IssuerId = 310,
    PaymentMethodId = "visa",
    Payer = new Payer(){
        Email = "[FAKER][INTERNET][FREE_EMAIL]"
    }
};
// Save and posting the payment
payment.Save();
//...
```
]]]

### Aqui está um exemplo de pagamento integral

```json
 {
    "transaction_amount": 100,
    "token": "ff8080814c11e237014c1ff593b57b4d",
    "description": "Title of what you are paying for",
    "installments": 12,
    "payment_method_id": "visa",
    "payer": {
        "email": "test_user_19653727@testuser.com"
    },
    "external_reference": "Reference_1234",
    "metadata": {
        "key1": "value1",
        "key2": "value2"
    },
    "statement_descriptor": "MY E-STORE",
    "notification_url": "https://www.your-site.com/webhooks",
    "additional_info": {
        "items": [
            {
                "id": "item-ID-1234",
                "title": "Title of what you are paying for",
                "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
                "description": "Item description",
                "category_id": "art", // Available categories at https://api.mercadopago.com/item_categories
                "quantity": 1,
                "unit_price": 100
            }
        ],
        "payer": {
            "first_name": "user-name",
            "last_name": "user-surname",
            "registration_date": "2015-06-02T12:58:41.425-04:00",
            "phone": {
                "area_code": "11",
                "number": "4444-4444"
            },
            "address": {
                "street_name": "Street",
                "street_number": 123,
                "zip_code": "5700"
            }
        },
        "shipments": {
            "receiver_address": {
                "zip_code": "5700",
                "state_name": "State",
                "city_name": "City",
                "street_name": "Street",
                "street_number": 123,
                "floor": 4,
                "apartment": "C"
            }
        }
    }
}
```

## Manipulação de respostas

É **muito importante** comunicar corretamente os resultados recebidos ao criar um pagamento. Isso ajudará a melhorar a conversão em casos de rejeições, e evitará estornos em casos de transações aprovadas.

Recomendamos que leia o artigo sobre [manipulação de respostas](https://www.mercadopago.com.br/developers/pt/guides/payments/api/handling-responses) e utilize a comunicação sugerida em cada um dos casos.

## Receba uma notificação de pagamento

É importante estar ciente sobre quaisquer atualizações do status do seu pagamento. Para isso, deve-se utilizar _Webhooks_.

Um _Webhook_ é uma notificação enviada de um servidor para outro mediante uma requisição `HTTP POST`.

Todas as informações relacionadas a esse assunto podem ser encontradas no [artigo sobre Webhooks](https://www.mercadopago.com.br/developers/pt/guides/notifications/webhooks).

### Próximos passos

#### Receba pagamentos com cartões armazenados

Armazene os cartões de seus clientes com segurança e efetue pagamentos com uma experiência one-click-to-buy (ou compra com um clique).

[Mais informações](https://www.mercadopago.com.br/developers/pt/guides/payments/api/customers-and-cards)
