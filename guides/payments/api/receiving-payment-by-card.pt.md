# Integre a API para pagamentos com cartão

A integração por API do Mercado Pago para pagamentos com cartões permite que você possa oferecer uma opção de pagamento totalmente no seu site. Toda a experiência acontece na sua loja para que os clientes não tenham que sair ao momento de realizar a compra.

## Como funciona?

![API-integration-flowchart](/images/api/api_integration_flowchart_es.png)

Ao usar nossa API de pagamentos do Mercado Pago, é importante ter em conta duas instâncias: a de captura de dados e envío de confirmação de pagamento.

1. Primeiro, é preciso um frontend para coletar os dados do cartão e gerar um token de segurança com a informação para poder criar o pagamento.
2. Segundo, um backend que tome o token gerado e os dados do pagamento, como por exemplo o valor e o ítem, e possa confirmar e efetuar o pagamento.

Tanto para o frontend como para o backend, recomendamos utilizar [nossos SDKs](https://www.mercadopago.com.br/developers/pt/plugins_sdks) para poder coletar os dados sensíveis dos seus usuários de maneira segura.

> Obtenha mais informações nas [Referências de API](https://www.mercadopago.com.br/developers/pt/reference/).

<br>

> CLIENT_SIDE
>
> h2
>
> Capture os dados de cartão

Para criar um pagamento é necessário fazer a captura dos dados do cartão através do navegador do comprador. Por questões de segurança, **é muito importante que os dados nunca cheguem aos seus servidores**.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Inclua a biblioteca MercadoPago.js

**Use nossa biblioteca oficial para acessar a API de Mercado Pago** no seu frontend e coletar os dados de forma segura.
 
```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

A informação do cartão será convertida em um token para que envie os dados aos seus servidores de modo seguro.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Adicione o formulário de pagamento

Para realizar a captura dos dados sensíveis dos cartões dos seus clientes, **é muito importante que utilize nosso formulário com os atributos correspondentes** para garantir a segurança da informação e a geração correta do token. Por exemplo, é preciso respeitar os atributos `data-checkout` e não colocar o atributo `name` nos campos que tenham dados sensíveis, dessa forma nunca chegarão aos seus servidores.

Você pode adicionar tudo o que necessite, modificar o atributo `label` sugerido e adicionar o estilo que queira sem problemas.

```html
<form action="/processar_pagamento" method="post" id="pay" name="pay" >
    <fieldset>
        <p>
            <label for="description">Descrição</label>                        
            <input type="text" name="description" id="description" value="Ítem selecionado"/>
        </p>                    
        <p>
            <label for="transaction_amount">Valor a pagar</label>                        
            <input name="transaction_amount" id="transaction_amount" value="100"/>
        </p>        
        <p>
            <label for="cardNumber">Número do cartão</label>
            <input type="text" id="cardNumber" data-checkout="cardNumber" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
        </p>
        <p>
            <label for="cardholderName">Nome e sobrenome</label>
            <input type="text" id="cardholderName" data-checkout="cardholderName" />
        </p> 
        <p>
            <label for="cardExpirationMonth">Mês de vencimento</label>
            <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
        </p>
        <p>
            <label for="cardExpirationYear">Ano de vencimento</label>
            <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
        </p>
        <p>
            <label for="securityCode">Código de segurança</label>
            <input type="text" id="securityCode" data-checkout="securityCode" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
        </p>
        <p>
            <label for="installments">Parcelas</label>
            <select id="installments" class="form-control" name="installments"></select>
        </p>
        <p>
            <label for="docType">Tipo de documento</label>
            <select id="docType" data-checkout="docType"></select>
        </p>
        <p>
            <label for="docNumber">Número do documento</label>
            <input type="text" id="docNumber" data-checkout="docNumber"/>
        </p>
        <p>
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" value="test@test.com"/>
        </p>
        <input type="hidden" name="payment_method_id" id="payment_method_id"/>
        <input type="submit" value="Pagar"/>
    </fieldset>
</form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configure sua chave pública


Configure sua [chave pública](https://www.mercadopago.com/mlb/account/credentials) da seguinte forma:

```javascript 
window.Mercadopago.setPublishableKey("ENV_PUBLIC_KEY");
```

> Se ainda não possui conta para ver suas credenciais, [regístre-se](https://www.mercadopago.com.br/registration-mp). 


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtenha os dados para seu formulário

----[mla, mlb, mlu, mco, mlc, mpe]----

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha os tipos de documento

Um dos campos obrigatórios é o tipo de documento. Utilize a lista de documentos no momento de completar os dados.

Incluindo o elemento de tipo select com `id = docType` que se encontra no formulário, MercadoPago.js completará automaticamente as opções disponíveis quando a seguinte função for chamada:

```javascript 
window.Mercadopago.getIdentificationTypes();
```

> Encontre mais detalhes na [seção de tipos de documentos](https://www.mercadopago.com.br/developers/pt/guides/localization/identification-types/).

------------
<br>

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha o método de pagamento do cartão

Valide os dados dos seus clientes enquanto são preenchidos para evitar erros e oferecer corretamente as parcelas disponíveis. Use o seguinte código de exemplo para identificar o meio de pagamento com os primeiros 6 dígitos do cartão.

```javascript 
document.getElementById('cardNumber').addEventListener('keyup', guessPaymentMethod);
document.getElementById('cardNumber').addEventListener('change', guessPaymentMethod);

function guessPaymentMethod(event) {
    let cardnumber = document.getElementById("cardNumber").value;

    if (cardnumber.length >= 6) {
        let bin = cardnumber.substring(0,6);
        window.Mercadopago.getPaymentMethod({
            "bin": bin
        }, setPaymentMethod);
    }
};

function setPaymentMethod(status, response) {
    if (status == 200) {
        let paymentMethodId = response[0].id;
        let element = document.getElementById('payment_method_id');
        element.value = paymentMethodId;
        getInstallments();
    } else {
        alert(`payment method info error: ${response}`);
    }
}
```
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha a quantidade de parcelas

Outro campo obrigatório para pagamento com cartão é a quantidade de parcelas. Para obter as parcelas diponíveis, utilize a seguinte função de exemplo para completar o campo sugerido de tipo 
_select_ denominado `installments`

```javascript
function getInstallments(){
    window.Mercadopago.getInstallments({
        "payment_method_id": document.getElementById('payment_method_id').value,
        "amount": parseFloat(document.getElementById('transaction_amount').value)
        
    }, function (status, response) {
        if (status == 200) {
            document.getElementById('installments').options.length = 0;
            response[0].payer_costs.forEach( installment => {
                let opt = document.createElement('option');
                opt.text = installment.recommended_message;
                opt.value = installment.installments;
                document.getElementById('installments').appendChild(opt);
            });
        } else {
            alert(`installments method info error: ${response}`);
        }
    });
}
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Crie o token do cartão

Antes de enviar o pagamento, crie o token que conterá de maneira segura toda a informação do cartão. Você deve gerá-lo da seguinte forma:

```javascript
doSubmit = false;
document.querySelector('#pay').addEventListener('submit', doPay);

function doPay(event){
    event.preventDefault();
    if(!doSubmit){
        var $form = document.querySelector('#pay');

        window.Mercadopago.createToken($form, sdkResponseHandler);

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

O método `createToken` devolverá um `card_token` com a representação segura do cartão. O segundo campo do método `createToken` é a função de `callback` que processará a resposta (nesse caso usamos a função `sdkResponseHandler`). Então tomaremos o ID da resposta e guardaremos em um atributo oculto que chamaremos `token`, para em seguida envir o formulário aos seus servidores.

> WARNING
>
> Importante
>
> Tenha em conta que o token tem uma validez de 7 días e só pode ser usado uma única vez.

<br>

> NOTE
>
> Baixe um exemplo do formulário
>
> Se nunca desenvolveu um formulário e têm dúvidas, te deixamos um [exemplo completo do formulário de pagamento no GitHub](https://github.com/MercadoPagoDevelopers/api-frontend-sample/blob/master/checkout.html) para que possa baixar.


<br>

> SERVER_SIDE
>
> h2
>
> Envie o pagamento ao Mercado Pago

Para continuar o processo de pagamento ao Mercado Pago, é necessário que seu backend possa receber a informação do formulário com o token gerado e os dados completos.

Segundo o exemplo dado, seu backend devería diponibilizar um endpoint `/processar_pagamento`, que foi definido no atributo `action` do formulário, para receber aí todos os dados assim que realizar a ação `submit`.

Já estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs. Os campos mínimos requeridos a enviar são: `token`,` transaction_amount`, `installments`, `payment_method_id` e o `payer.email`.

Tenha em conta que para que esse passo funcione é necessário que configure sua [chave privada](https://www.mercadopago.com/mlb/account/credentials).

Lembre-se também que para interagir com nossas APIs recomendamos utilizar o [SDK oficial do Mercado Pago](https://www.mercadopago.com.br/developers/pt/guides/payments/api/previous-requirements/#bookmark_instale_o_sdk_do_mercado_pago).

[[[
```php
<?php  
    ===
    Encontre o estado do pagamento no campo status
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

$payment->save();
    //...

echo $payment->status;
    //...
?>
```
```node
===
Encontre o estado do pagamento no campo status
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
    email: 'test@test.com'
  }
};

mercadopago.payment.save(payment_data).then(function (data) {
      console.log(data);
      res.send(data);
    }).catch(function (error) {
      console.log(error);
    });
```
```java
===
Encontre o estado do pagamento no campo status
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
         .setEmail("test@test.com"));

payment.save();
//...

System.out.println(payment.getStatus());
//...
```
```ruby
===
Encontre o estado do pagamento no campo status
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
  email: "test@test.com"
}

payment.save()
```
```csharp
===
Encontre o estado do pagamento no campo status
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
        Email = "test@test.com"
    }
};

payment.Save();
//...

console.log(payment.Status);
//...
```
```curl
===
Encontre o estado do pagamento no campo status
===

curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN' \
    -d '{
          "transaction_amount": [FAKER][NUMBER][BETWEEN][100, 200],
          "token": "ff8080814c11e237014c1ff593b57b4d",
          "description": "[FAKER][COMMERCE][PRODUCT_NAME]",
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

> Conheça todos os campos disponíveis para realizar um pagamento completo nas [Referências de API](https://www.mercadopago.com.br/developers/pt/reference/payments/_payments/post/).

<br>

> NOTE
> 
> Nota
> 
> Precisa de outras alternativas de pagamento? Conheça e integre [outros meios de pagamento](https://www.mercadopago.com.br/developers/pt/guides/payments/api/other-payment-ways/).

## Manipulação de respostas de erro

Os possíveis estados de um pagamento são:

![payment-status](/images/api/api_payment_status.png)
<br>
<br>

Para ajudar a melhorar a aprovação dos seus pagamentos, é fundamental que possa comunicar corretamente aos seus clientes os dados resultantes da criação de um pagamento.

Isso ajudará a evitar casos de rejeição e estornos nos casos de transações inicialmente aprovadas. Por exemplo, permite que se possa corrigir os erros de carga de dados ou ajudar a alterar o meio de pagamento.

Te recomendamos usar a [manipulação de respostas de erro](https://www.mercadopago.com.br/developers/pt/guides/payments/api/handling-responses/) e utilizar a comunicação sugerida em cada um dos casos.

> NOTE
> 
> Nota
> 
> Evite pagamentos rejeitados com nossas [recomendações para melhorar a aprovação dos seus pagamentos](https://www.mercadopago.com.br/developers/pt/guides/manage-account/payment-rejections/).

## Receba notificações de pagamento

Por último, é importante que esteja sempre informado sobre a criação nos novos pagamentos e as atualizações dos seus estados. Por exemplo se foram aprovados, rejeitados ou se se encontram pendentes.

[Configure notificações webhooks](https://www.mercadopago.com.br/developers/pt/guides/notifications/webhooks/) ou [notificações IPN](https://www.mercadopago.com.br/developers/pt/guides/notifications/ipn/).

### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Teste sua integração
>
> Revise que esteja tudo bem com sua integração com os usuários de teste.
>
> [Teste sua integração](https://www.mercadopago.com.ar/developers/es/guides/payments/api/testing/)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Integrar outros meios de pagamento
>
> Conheça todas as opções de pagamentos disponíveis e como oferê-las.
>
> [Integrar outros meios de pagamento](https://www.mercadopago.com.br/developers/pt/guides/payments/api/other-payment-ways/)