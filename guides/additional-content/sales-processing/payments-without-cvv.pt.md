# Pagamentos com cartões sem CVV

Esta documentação tem o objetivo de oferecer todas as ferramentas necessárias para realizar a integração da solução de pagamentos sem a necessidade de utilizar CVV (_Card Verification Value_) do cartão para pagamentos recorrentes.

> WARNING
> 
> Atenção
>
> Esta documentação destina-se apenas ao uso interno da equipe porque é um produto exclusivo. Para mais detalhes, entre em contato com a equipe comercial ou de integrações.

Com os pagamentos sem CVV, é possível realizar cobranças recorrentes (mensalidades escolares, contas de serviços utilitários, etc) com o Mercado Pago, tendo a liberdade de adaptar a solução da forma mais ótima para o seu negócio. A pré-aprovação só está disponível por meio do checkout personalizado, ou seja, via utilização do [Checkout Transparente](/developers/pt/docs/checkout-api/landing) ou [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing).

Além disso, o vendedor deve cumprir as seguintes políticas de integração do Mercado Pago:

- O vendedor deve comunicar de maneira clara e inequívoca à sua base de usuários ou clientes que a plataforma de pagamento em seu site é fornecida pelo Mercado Pago, indicando também e os prazos, datas e valores dos pagamentos recorrentes.

- No caso de usuários ou clientes existentes do vendedor estarem sendo migrados para a plataforma de pagamentos recorrentes do Mercado Pago, o vendedor deve comunicar por escrito indicando que o Mercado Pago processará os pagamentos, informando que na fatura verá a cobrança como Mercado Pago ou Mercado Livre.

> No caso de cartões de crédito **Master e Amex**, na fatura do cartão aparecerá como: `MP*&ltbrand_name&gt`. Portanto, para esses meios de pagamento, você pode comunicar: "Na sua fatura, você verá a cobrança como `MP*&ltbrand_name&gt`" onde `&ltbrand_name&gt` é configurado na conta do Mercado Pago do vendedor, acessando [Seu negócio > Configurações > Dados do seu negócio](https://www.mercadopago[FAKER][URL][DOMAIN]/business#from-section=menu).

## Pré-requisitos

| Requisito  | Descrição  |
| --- | --- |
| Contato comercial | Para utilizar este produto, é necessário entrar em contato com o seu representante comercial no Mercado Pago, que fornecerá todas as informações necessárias para concluir a integração. |
| Conta de vendedor de Mercado Pago  | Para utilizar o recursos de pagamentos sem CVV, é preciso uma conta vendedor no Mercado Pago. Caso não tenha, ----[mlb]----[clique aqui](https://www.mercadopago.com.br/hub/registration/landing) ------------ ----[mla]----[clique aqui](https://www.mercadopago.com.ar/hub/registration/landing) ------------ ----[mlm]----[clique aqui](https://www.mercadopago.com.mx/hub/registration/landing) ------------ ----[mpe]----[clique aqui](https://www.mercadopago.com.pe/hub/registration/landing) ------------ ----[mco]----[clique aqui](https://www.mercadopago.com.co/hub/registration/landing) ------------  ----[mlu]----[clique aqui](https://www.mercadopago.com.uy/hub/registration/landing) ------------ ----[mlc]----[clique aqui](https://www.mercadopago.cl/hub/registration/landing) ------------   para criá-la gratuitamente.  |
| Aplicação  | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Para operar pagamentos sem CVV, a aplicação deve ser habilitada para esse fim. Essas permissões são atribuídas pelo Mercado Pago, então você deve nos enviar o **ID da aplicação** para realizar a configuração correspondente. <br><br> Veja [Suas integrações](/developers/pt/docs/checkout-api/additional-content/your-integrations/introduction) para mais informações sobre como criar uma aplicação. |

## Cobre os seus clientes de forma recorrente

Siga os processos abaixo para configurar o recebimento de pagamentos recorrentes de seus clientes.

### Processar primeiro pagamento  

Para a primeira transação, sempre será necessário solicitar os dados do cartão e processar o pagamento com o código de segurança. debe tomar en consideración dos flujos para guardar los datos de la tarjeta del cliente: 

1. en caso de que la afiliación incluya el cobro de una primera cuota, se ejecuta el primer pago con cho api o cho bricks tal como se hace en la actualidad

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  use MercadoPago\MercadoPagoConfig;


  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "issuer_id" => $_POST['issuer'],
    "payer" => [
      "email" => $_POST['email'],
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        transaction_amount: req.transaction_amount,
        token: req.token,
        description: req.description,
        installments: req.installments,
        payment_method_id: req.paymentMethodId,
        issuer_id: req.issuer,
            payer: {
            email: req.email,
            identification: {
        type: req.identificationType,
        number: req.number
    }}},
    requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
```java
===
Encontre o estado do pagamento no campo _status_.
===

Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

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

client.create(paymentCreateRequest, requestOptions);

```
```ruby
===
Encontre o estado do pagamento no campo _status_.
===
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

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
 
payment_response = sdk.payment.create(payment_data, custom_request_options)
payment = payment_response[:response]
 
puts payment
 
```
```csharp
===
Encontre o status do pagamento no campo _status_.
===
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;
 
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");
 
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
Payment payment = await client.CreateAsync(paymentRequest, requestOptions);
 
Console.WriteLine(payment.Status);
 
```
```python
===
Encontre o status do pagamento no campo _status_.
===
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

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
 
payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]
 
print(payment)
```
```curl
===
Encontre o status do pagamento no campo _status_.
===
 
curl -X POST \
   -H 'accept: application/json' \
   -H 'content-type: application/json' \
   -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
   -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
   'https://api.mercadopago.com/v1/payments' \
   -d '{
         "transaction_amount": 100,
         "token": "ff8080814c11e237014c1ff593b57b4d",
         "description": "Blue shirt",
         "installments": 1,
         "payment_method_id": "visa",
         "issuer_id": 310,
         "payer": {
           "email": "PAYER_EMAIL"
         }
   }'
 
```
]]]

2. en caso que la afiliación no incluya el cobro de una primera cuota, se deben tener dos flujos uno para tarjeta visa y master con zero dolar   y otro con el cobro de un monto bajo y la devolución del dinero.


> Para mais informações, siga os passos de nossa integração de [pagamentos com cartão do Checkout Transparente](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform) ou utilizando o [Brick de Card Payment](/developers/pt/docs/checkout-bricks/card-payment-brick/payment-submission).|

### Associar cartão ao cliente

Depois de processar o primeiro pagamento e garantir que o cartão é válido, crie um cliente e associe-o ao cartão utilizado no primeiro pagamento. 

Para criar um cliente e associá-lo ao seu cartão, é preciso enviar o campo do e-mail, o tipo de meio de pagamento, o ID do banco emissor e o token gerado. Cada cliente será guardado com o valor `customer` e cada cartão com o valor `card`.

Além disso, recomendamos armazenar os dados do cartão sempre que um pagamento for concluído com sucesso. Isso permite que os dados corretos sejam armazenados para compras futuras e otimiza o processo de pagamento para o comprador.

Para criar um cliente e cartão, utilize um dos SDKs abaixo.

[[[
```php
<?php
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
  
  $client_customer = new CustomerClient();
  $customer = $client_customer->create(["email" => "my.user@example.com"]);
  $client = new CustomerCardClient();
  $customer_card = $client->create($customer->id, ["token" => "your_card_token"]);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const customer = new Customer(client);

const body = {
  email: "my.user@example.com"
};

customer.create({ body: body }).then((result) => {
  const customerCard = new CustomerCard(client);

  const body = {
    token : result.token,
  };

  customerCard.create({ customerId: 'customer_id', body })
     .then((result) => console.log(result));
})
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient customerClient = new CustomerClient();
CustomerCardClient customerCardClient = new CustomerCardClient();

CustomerRequest customerRequest = CustomerRequest.builder()
   .email("john@test.com")
   .build();
Customer customer = customerClient.create(customerRequest);

CustomerCardIssuer issuer = CustomerCardIssuer.builder()
   .id("3245612")
   .build();

CustomerCardCreateRequest cardCreateRequest = CustomerCardCreateRequest.builder()
   .token("9b2d63e00d66a8c721607214cedaecda")
   .issuer(issuer)
   .paymentMethodId("debit_card")
   .build();

customerCardClient.create(customer.getId(), cardCreateRequest);

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

customer_request = {
  email: 'john@yourdomain.com'
}
customer_response = sdk.customer.create(customer_request)
customer = customer_response[:response]

card_request = {
  token: '9b2d63e00d66a8c721607214cedaecda',
  issuer_id: '3245612',
  payment_method_id: 'visa'
}
card_response = sdk.card.create(customer['id'], card_request)
card = card_response[:response]

```
```csharp

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var customerRequest = new CustomerRequest
{
    Email = "test_payer_12345@testuser.com",
};
var customerClient = new CustomerClient();
Customer customer = await customerClient.CreateAsync(customerRequest);

var cardRequest = new CustomerCardCreateRequest
{
    Token = "9b2d63e00d66a8c721607214cedaecda"
};
CustomerCard card = await customerClient.CreateCardAsync(customer.Id, cardRequest);

```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_data = {
  "email": "test_payer_12345@testuser.com"
}
customer_response = sdk.customer().create(customer_data)
customer = customer_response["response"]

card_data = {
  "token": "9b2d63e00d66a8c721607214cedaecda",
  "issuer_id": "3245612",
  "payment_method_id": "visa"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]

```
```curl

curl -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
  -d '{"token": "9b2d63e00d66a8c721607214cedaecda", "issuer_id": "3245612", "payment_method_id": "visa"}'

```
]]]

> Para mais informações, veja a seção de [Gestão de cartões e clientes do Checkout Transparente.](/developers/pt/docs/checkout-api/customer-management)

### Obtenha os dados do cliente

Para obter os dados do cliente como, por exemplo, ID, endereço ou data de registro, é possível obtê-los através da nossa API de clientes. Para isso, envie um GET com e-mail do cliente ao endpoint [/v1/customers/search](/developers/pt/reference/customers/_customers_search/get) e execute a requisição ou, se preferir, utilize um dos SDKs abaixo.

[[[
```php
<?php
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
  
  $client = new CustomerClient();

  $customer = $client->search(1, 0, ["email" => "my.user@example.com"]);
?>
```
```node
import { Customer, MercadoPagoConfig } from '@src/index';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });
const customer = new Customer(client);

customer.search({ options: { email: '<EMAIL>' } }).then(console.log).catch(console.log);
```
```java

CustomerClient client = new CustomerClient();

Map<String, Object> filters = new HashMap<>();
filters.put("email", "test_payer_12345@testuser.com");

MPSearchRequest searchRequest =
   MPSearchRequest.builder().offset(0).limit(0).filters(filters).build();

client.search(searchRequest);


```
```ruby

customers_response = sdk.customer.search(filters: { email: 'test_payer_12345@testuser.com' })
customers = customers_response[:response]

```
```csharp

var searchRequest = new SearchRequest
{
    Filters = new Dictionary<string, object>
    {
        ["email"] = "test_payer_12345@testuser.com",
    },
};
ResultsResourcesPage<Customer> results = await customerClient.SearchAsync(searchRequest);
IList<Customer> customers = results.Results;

```
```python

filters = {
    "email": "test_payer_12345@testuser.com"
}

customers_response = sdk.customer().search(filters=filters)
customers = customers_response["response"]

```
```curl

curl -X GET \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/search' \
  -d '{
    "email": "test_user_19653727@testuser.com"
}'
```
]]]

> Para mais informações, veja a seção de [Gestão de cartões e clientes do Checkout Transparente](/developers/pt/docs/checkout-api/customer-management) ou a seção de [renderização padrão do Brick de Card Payment.](/developers/pt/docs/checkout-bricks/card-payment-brick/default-rendering)

### Obtenha o cartão associado ao cliente

Tendo obtido o ID do cliente, utilize-o para localizar o cartão associado.

[[[
```php
<?php
  $customer_client = new CustomerClient();
  $cards = $client->list("customer_id");
  echo implode ($cards);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.list({ customerId: '<CUSTOMER_UD>' }).then(console.log).catch(console.log);
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerCardClient customerCardClient = new CustomerCardClient();

MPResourceList<CustomerCard> list = customerCardClient.listAll("000000000-abcdEfghiJklM");
List<CustomerCard> customerCards = list.getResults();

```
```ruby

cards_response = sdk.card.list(customer_id)
cards = cards_response[:response]

```
```csharp

var customerClient = new CustomerClient();
ResourcesList<CustomerCard> customerCards = await customerClient.ListCardsAsync("CUSTOMER_ID");

```
```python

cards_response = sdk.card().list_all(customer_id)
cards = cards_response["response"]

```
```curl

curl -X GET \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \

```
]]]

> Para mais informações, veja a seção de [Gestão de cartões e clientes do Checkout Transparente.](/developers/pt/docs/checkout-api/customer-management)

### Gere um token do cartão

Após localizar os dados do cartão associado ao cliente, utilize o Javascript abaixo para tokenizar o cartão utilizando o seu ID e o código de segurança.

```javascript

 const formElement = document.getElementById('form-checkout');
    formElement.addEventListener('submit', e => createCardToken(e));
    const createCardToken = async (event) => {
      try {
        const tokenElement = document.getElementById('token');
        if (!tokenElement.value) {
          event.preventDefault();
          const token = await mp.fields.createCardToken({
            cardId: document.getElementById('form-checkout__cardId').value
          });
          tokenElement.value = token.id;
          console.log(tokenElement);
        }
      } catch (e) {
        console.error('error creating card token: ', e)
      }
    }
```

> NOTE
>
> Importante
>
> Siga o passo a passo e evite pagamentos fraudulentos com nossas recomendações para [melhorar a aprovação de seus pagamentos.](/developers/pt/docs/checkout-api/how-tos/improve-payment-approval)
> <br><br>
> Para mais informações, veja a seção de [Gestão de cartões e clientes do Checkout Transparente.](/developers/pt/docs/checkout-api/customer-management)

### Realize a cobrança

Utilize o token gerado anteriormente para registrar o pagamento, indicando o ID do cliente associado ao cartão.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;


  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $customer_client = new CustomerClient();
  $cards = $client->list("customer_id");
  
  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => 100.0,
    "token" => $cards[0]-> token,
    "description" => "My product",
    "installments" => 1,
    "payment_method_id" => "visa",
    "issuer_id" => "123",
    "payer" => [
      "type" => "customer",
      "id" => "1234"
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new Customer(client);

customerClient.listCards({ customerId: '<CUSTOMER_ID>' })
	.then((result) => {

  const payment = new Payment(client);

  const body = {
    transaction_amount: 100,
    token: result[0].token,
    description: 'My product',
    installments: 1,
    payment_method_id: 'visa',
    issuer_id: 123,
    payer: {
      type: 'customer',
      id: '123'
  }
};

  payment.create({ body: body }).then((result) => console.log(result));
});
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest request = PaymentCreateRequest.builder()
   .transactionAmount(new BigDecimal("100"))
   .installments(1)
   .token("ff8080814c11e237014c1ff593b57b4d")
   .payer(PaymentPayerRequest.builder()
       .type("customer")
       .id("247711297-jxOV430go9fx2e")
       .build())
   .build();

client.create(request);

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  token: 'ff8080814c11e237014c1ff593b57b4d',
  installments: 1,
  transaction_amount: 100,
  payer: {
    type: 'customer',
    id: '123456789-jxOV430go9fx2e'
  }
}
payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Installments = 1,
    Payer = new PaymentPayerRequest
    {
        Type = "customer",
        Email = "test_payer_12345@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "token": 'ff8080814c11e237014c1ff593b57b4d',
    "installments": 1,
    "payer": {
        "type": "customer",
        "id": "123456789-jxOV430go9fx2e"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

```
```curl

curl -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/payments' \
  -d '{
  transaction_amount: 100,
  token: "ff8080814c11e237014c1ff593b57b4d",
  installments: 1,
  payer: {
      type: "customer",
    id: "123456789-jxOV430go9fx2e"
  }
}'

```
]]]

> Para mais informações, veja a seção de [Gestão de cartões e clientes do Checkout Transparente](/developers/pt/docs/checkout-api/customer-management) ou a seção de [renderização padrão do Brick de Card Payment.](/developers/pt/docs/checkout-bricks/card-payment-brick/default-rendering)

## Visualize notificações sobre os pagamentos

Sempre que um pagamento for processado e houver alguma novidade sobre o processo, o Mercado Pago enviará uma notificação para que você possa atualizar seus sistemas. Acesse a documentação de [notificações Webhooks](/developers/pt/docs/your-integrations/notifications/webhooks) para saber como configurar o recebimento destas notificações.

## Tentativas de pagamento

Se um pagamento sem CVV for rejeitado, recomendamos que você siga uma lógica de tentativas com base no estado da rejeição. Por exemplo, se o pagamento foi rejeitado devido a um cartão vencido, não faz sentido tentar novamente com o mesmo cartão e deverá ser solicitado ao cliente que forneça outro cartão para processar cobranças futuras. 

Caso haja uma rejeição por fundos insuficientes, uma nova tentativa com o mesmo cartão poderá ser feita desde que se resolva a questão do limite para o cartão utilizado.

Em cada caso, é importante comunicar ao seu cliente o resultado do pagamento e fornecer instruções para a próxima etapa. Informaremos um `HTTP Status 201 OK` de que o pagamento foi criado corretamente e enviaremos um código de resultado para que você possa redirecionar o cliente para a página com a mensagem correta.

## Teste a integração

É crucial realizar testes do fluxo completo antes de ir para a produção, verificando se a criação de pagamentos é feita corretamente e se as mensagens são eficazes na comunicação com o usuário. Uma boa experiência para seus clientes no checkout ajuda a melhorar a conversão.

Para mais informações sobre o fluxo de teste, acesse a seção de **Realizar compra teste** no [Checkout Transparente](/developers/pt/docs/checkout-api/integration-test/make-test-purchase) ou no [Checkout Bricks](/developers/pt/docs/checkout-bricks/integration-test/test-payment-flow).