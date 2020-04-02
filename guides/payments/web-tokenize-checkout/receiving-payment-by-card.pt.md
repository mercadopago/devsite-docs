# Receba um pagamento com cartão

Com o MercadoPago é possível capturar os dados do cartão de forma segura através do tokenizer.

### Passo 1: Incorporar o viewport

Defina o viewport adicionando o seguinte código dentro da tag `<head>` de seu site:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
```

### Passo 2: Incorporar o código javascript

Este _fragmento de código javascript_ criará um botão de pagamento. Quando o comprador pressionar o botão aparecerá o checkout. Inclua o seguinte código no lugar onde deverá estar o botão dentro de seu site:

```html
<form action="https://www.meu-site.com/processar-pagamento" method="POST">
  <script
    src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
    data-public-key="ENV_PUBLIC_KEY"
    data-transaction-amount="100.00">
  </script>
</form>
```
Você pode encontrar seu public key na página de [credenciais]([FAKER][CREDENTIALS][URL]).

> Encontre toda a informação sobre suas credenciais em nossas [perguntas frequentes](https://www.mercadopago.com.br/developers/pt/guides/faqs/credentials/).

### Paso 3: Obter todos os dados

O *Web Tokenize Checkout* fará um `POST` para a URL que tenha definido no atributo `action` no fragmento de código javascript (Exemplo em: **/processar-pagamento**) com certos dados. Você deve utilizar os seguintes dados para realizar o pagamento.

#### Os dados são:

Dado | Descrição
---- | ------------
**token** | Identificador único do cartão tokenizado
**payment_method_id** | Forma de pagamento escolhida pelo comprador
**installments** | Quantidade de parcelas escolhidas pelo comprador
**issuer_id** | ID emissor do cartão do comprador

_Você não receberá o **transaction_amount** nem o **payer.email** por questões de segurança._

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
token = request.body.token
payment_method_id = request.body.payment_method_id
installments = request.body.installments
issuer_id = request.body.issuer_id
```
```csharp
token = Request["token"]
payment_method_id = Request["payment_method_id"]
installments = Request["installments"]
issuer_id = Request["issuer_id"]
```
]]]

### Passo 4: Realizar o pagamento

Para realizar o pagamento, deverá efetuar uma chamada a API utilizando o [SDK do Mercado Pago](https://www.mercadopago.com.br/developers/pt/plugins_sdks) que corresponda a linguagem de programação que está utilizando em seu site.

Somente deverá incluir uma *chamada à API* incluindo os dados que recebeu do checkout:

[[[
```php
<?php
    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200];
    $payment->token = $token;
    $payment->description = "[FAKER][COMMERCE][PRODUCT_NAME]";
    $payment->installments = $installments;
    $payment->payment_method_id = $payment_method_id;
    $payment->issuer_id = $issuer_id;
    $payment->payer = array(
    "email" => "[FAKER][INTERNET][FREE_EMAIL]"
    );
    // Armazena e envia o pagamento
    $payment->save();
    //...
    // Imprime o status do pagamento
    echo $payment->status;
    //...
?>
```
```java
MercadoPago.SDK.setAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment();
payment.setTransactionAmount([FAKER][NUMBER][BETWEEN][100, 200])
       .setToken(token)
       .setDescription("[FAKER][COMMERCE][PRODUCT_NAME]")
       .setInstallments(installments)
       .setPaymentMethodId(payment_method_id)
       .setIssuerId(issuer_id)
       .setPayer(new Payer()
         .setEmail("[FAKER][INTERNET][FREE_EMAIL]"));
// Armazena e envia o pagamento
payment.save();
//...
// Imprime o status do pagamento
System.out.println(payment.getStatus());
//...
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: [FAKER][NUMBER][BETWEEN][100, 200],
  token: token,
  description: '[FAKER][COMMERCE][PRODUCT_NAME]',
  installments: installments,
  payment_method_id: payment_method_id,
  issuer_id: issuer_id,
  payer: {
    email: '[FAKER][INTERNET][FREE_EMAIL]'
  }
};

// Armazena e envia o pagamento
mercadopago.payment.save(payment).then(function (data) {
  // ...    
  // Imprime o status do pagamento
  Console.log(payment.status);
}).catch(function (error) {
  // ...
});

```
```ruby
require 'mercadopago'
MercadoPago::SDK.access_token = "ENV_ACCESS_TOKEN";

payment = MercadoPago::Payment.new()
payment.transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200]
payment.token = token
payment.description = '[FAKER][COMMERCE][PRODUCT_NAME]'
payment.installments = installments
payment.payment_method_id = payment_method_id
payment.issuer_id = issuer_id
payment.payer = {
  email: "[FAKER][INTERNET][FREE_EMAIL]"
}
# Armazena e envia o pagamento
payment.save()

```
```csharp
using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
// ...
MercadoPago.SDK.SetAccessToken(ENV_ACCESS_TOKEN);
//...
Payment payment = new Payment()
{
    TransactionAmount = float.Parse("[FAKER][NUMBER][BETWEEN][100, 200]"),
    Token = token,
    Description = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Installments = installments,
    PaymentMethodId = payment_method_id,
    IssuerId = issuer_id,
    Payer = new Payer(){
        Email = "[FAKER][INTERNET][FREE_EMAIL]"
    }
};
// Armazena e envia o pagamento
payment.Save();
//...
// Imprime o status do pagamento
Console.log(payment.Status);
//...
```
]]]

> Os campos obrigatórios para envio são o `token`, `transaction_amount`, `payment_method_id` e o `payer.email`.

Retorno:

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

## Recomendações adicionais

### Cartões de teste

Para realizar pagamentos de teste (com suas credenciais de TEST), é necessário que utilize [cartões de teste](https://www.mercadopago.com.br/developers/pt/guides/payments/api/testing).

### Promoções

Recomendamos incluir o [link de promoções](https://www.mercadopago.com.br/promocoes) do **Mercado Pago**, ou então implementar um de nossos [banners de formas de pagamento](https://www.mercadopago.com.ar/developers/pt/guides/banners/introduction/).
