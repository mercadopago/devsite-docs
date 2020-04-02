# SDK Mercado Pago para Node

- [Instalação](#bookmark_instalação)
- [Configuração](#bookmark_configuração)
- [Modo Sandbox](#bookmark_modo_sandbox)
- [Callbacks e promises](#bookmark_callbacks_e_promises)
- [Arquitetura](#bookmark_arquitetura)
- [Uso](#bookmark_uso)
- [Compatibilidade com versões anteriores](#bookmark_compatibilidade_com_versões_anteriores)
- [Validação de esquema](#bookmark_validação_de_esquema)
- [Respostas e erros](#bookmark_respostas_e_erros)
- [Paginação](#bookmark_paginação)
- [Notificações IPN](#bookmark_notificações_ipn)

## Instalação

```bash
$ npm install mercadopago
```

ou 

```bash
$ yarn add mercadopago
```

### Suporte a Promises e Callbacks

Cada método suporta promises e callbacks. Por exemplo:

```javascript
mp.getAccessToken().then(
  function(accessToken) {
    console.log(accessToken);
  },
  function(error) {
    console.log(error);
  }
);
```

é o mesmo que:

```javascript
mp.getAccessToken(function(err, accessToken) {
  if (err) {
    console.log(err);
  } else {
    console.log(accessToken);
  }
});
```

Para utilizar callbacks, simplesmente passe uma função como último parámetro.

### Suporte a `async` / `await`

Cada método suporta o uso de `await`.

```javascript
try {
  const accessToken = await mp.getAccessToken();
  console.log(accessToken);
} catch (err) {
  console.log(err);
}
```

## Configuração

Obtenha seu **ACCESS_TOKEN** na [sessão de Credenciais]([FAKER][CREDENTIALS][URL]).

> Encontre toda a informação sobre suas credenciais em nossas [perguntas frequentes](https://www.mercadopago.com.br/developers/pt/guides/faqs/credentials/).

Para configurar o SDK é preciso utilizar o método **configure**. Este método recebe um objeto JSON. As configurações válidas são:

- `client_id` - String
- `client_secret` - String
- `access_token` - String
- `sandbox` (default: `false`) - Boolean
- `show_promise_error` (default: `true`) - Boolean

_Configuração de credenciais válidas:_

```javascript
mercadopago.configure({
  access_token: "ACCESS_TOKEN"
});
```

```javascript
mercadopago.configure({
  sandbox: true,
  access_token: "ACCESS_TOKEN"
});
```

```javascript
mercadopago.configure({
  client_id: "CLIENT_ID",
  client_secret: "CLIENT_SECRET"
});
```

_Configuração de credenciais inválidas:_

```javascript
mercadopago.configure({});
```

> É preciso disponibilizar um object como configuração.

```javascript
mercadopago.configure({
  sandbox: true
});
```

> É preciso disponibilizar um método de autenticação (`client_id` & `client_secret` ou `access_token`).

```javascript
mercadopago.configure({
  client_id: "CLIENT_ID"
});
```

> É preciso disponibilizar `client_id` e `client_secret`.

```javascript
mercadopago.configure({
  client_secret: "CLIENT_SECRET"
});
```

> Não é possível alterar o `client_id` ou `client_secret` pois já estão configurados.

## Modo Sandbox

Para utilizar nossa aplicação no modo Sandbox, é preciso proporcionar o `access_token`.

> Tenha em conta que se disponilizar o `client_id` e `client_secret`, o SDK gerará um `access_token` produtivo.

```javascript
mercadopago.configure({
  sandbox: true,
  access_token: "ACCESS_TOKEN"
});
```

**O modo Sandbox somente funciona com `access_token`**

## Callbacks e promises

Suportamos ambos. Para suportar versões de Node.js anteriores a 0.11.13 estamos utilizando internamente [bluebird](https://github.com/petkaantonov/bluebird).

### Callbacks

```javascript
library.method(function(err, res) {
  if (err) return console.log(err);

  console.log(res);
});
```

### Promises

```javascript
library
  .method()
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });
```

#### `async` / `await`

É possível utilizar as promises com `await` ao invés de `.then(...)`.

```javascript
try {
  const res = await library.method();
  console.log(res);
} catch (err) {
  console.log(err);
}
```

É possível utilizar como preferir e adaptar a sua aplicação.

## Arquitetura

O SDK exporta um objeto JSON expondo os recursos ao integrador. É possível acessá-los para executar operações válidas. Os recuros são os seguintes:

- `payment`
- `preferences`
- `preapproval`
- `customers`
- `merchant_orders`
- `money_requests`
- `connect`
- `ipn`

É possível acessá-los através do SDK:

```javascript
const mercadopago = require("mercadopago");

console.log(mercadopago.payment);

/*
{
    ...
    create: [Function],
    update: [Function],
    get: [Function],
    search: [Function],
    ...
}
*/
```

Isso permite executar operações como, por exemplo, criar um pagamento:

```javascript
mercadopago.payment.create({
  description: 'Buying a PS4',
  transaction_amount: 10500,
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_3931694@testuser.com',
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    identification: {
      type: 'DNI',
      number: '34123123'
    }
    ------------
  }
}).then(function (mpResponse) {
  console.log(mpResponse);
}).catch(function (mpError) {
  console.log(err);
});
```

Como resultado obterá:

```javascript
mercadopagoResponse {
  body:
   { id: 2556382,
     date_created: '2017-01-19T17:00:21.000-04:00',
     date_approved: null,
     date_last_updated: '2017-01-19T17:00:21.000-04:00',
     money_release_date: null,
     operation_type: 'regular_payment',
     issuer_id: null,
     payment_method_id: 'rapipago',
     payment_type_id: 'ticket',
     status: 'pending',
     status_detail: 'pending_waiting_payment',
     currency_id: '[FAKER][CURRENCY][ACRONYM]',
     description: 'Descripci&oacute;n',
     live_mode: false,
     sponsor_id: null,
     authorization_code: null,
     collector_id: 239656545,
     payer:
      { type: 'guest',
        id: null,
        email: 'test_user_3931694@testuser.com',
        identification: [Object],
        phone: [Object],
        first_name: 'Test',
        last_name: 'Test',
        entity_type: null },
     metadata: {},
     order: {},
     external_reference: null,
     transaction_amount: 10,
     transaction_amount_refunded: 0,
     coupon_amount: 0,
     differential_pricing_id: null,
     deduction_schema: null,
     transaction_details:
      { net_received_amount: 0,
        total_paid_amount: 10,
        overpaid_amount: 0,
        external_resource_url: 'http://www.mercadopago.com/mla/sandbox/payments/ticket/helper?payment_method=rapipago',
        installment_amount: 0,
        financial_institution: null,
        payment_method_reference_id: '2556383' },
     fee_details: [],
     captured: true,
     binary_mode: false,
     call_for_authorize_id: null,
     statement_descriptor: null,
     installments: 1,
     card: {},
     notification_url: null,
     refunds: [] },
  status: 201,
  idempotency: '7fea2db6-fc84-436f-b6f4-457f7f5f151e',
  pagination: undefined
}
```

## Uso

### Como funciona

Basicamente, o SDK é um Cliente REST melhorado com ferramentas poderosas. Cada recurso (Payments, Preference, etc.) possui métodos básicos:

- `create` (POST)
- `update` (PUT)
- `get` (GET)
- `remove` (DELETE)

Esses métodos são criados dinamicamente pelo SDK. Cada um tem os seguintes parâmetros.

```javascript
mercadopago.resource.create( ..., configurations, callback );
```

```javascript
mercadopago.resource.create( ..., configurations ).then().catch();
```

```javascript
await mercadopago.resource.create( ..., configurations );
```

#### Configuração de parâmetros

> Esse parâmetro é opcional se não estiver utilizando callbacks. Ele será convertido automaticamente em um objeto vazio.

A configuração de parâmetros é um objeto JSON que permite os seguintes valores:

- `qs`

Esse é um objeto JSON com os parâmetros que se deseja enviar através da cadeia de consulta. Segue um exemplo de obtenção de todos os pagamentos.

Ao analisar a [API de Search](https://www.mercadopago.com.br/developers/pt/api-docs/account/payments/search/), o método será um GET, e devemos enviar payer.id = me na cadeia de consulta. Para isso, é preciso apenas utilizar:

```javascript
var configurations = {
  qs: {
    "payer.id": "me"
  }
};

mercadopago.payment.search(configurations, callback);
```

Enviando isso, o qs convertira a url de saída a:

```
https://api.mercadopago.com/v1/payments/search?payer.id=me
```

- idempotência - idempotência uuid personalizada a ser enviada.

Em alguns casos, um problema de conexão podería interromper a operação. Para assegurar-se de que a operação se complete, é possível tentar novamente. Caso volte a tentar, a operação pode ser duplicada.

Para evitar esse comportamento, pode-se utilizar um UUID [(identificador único universal)](https://en.wikipedia.org/wiki/Universally_unique_identifier) que identifique a operação. Este UUID será um header na idempotência da chamada da requisição. Esses headers serão gerados automaticamente na primeira operação.

Se uma operação falha, o erro terá a chave de idempotência enviada. É possível utilizar isso para tentar novamente. A seguir um exemplo:

```javascript
var payment = {
  description: "Buying a PS4",
  transaction_amount: 10500,
  payment_method_id: "rapipago",
  payer: {
    email: 'test_user_3931694@testuser.com',
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    identification: {
      type: "DNI",
      number: "34123123"
    }
    ------------
  }
};

mercadopago.payment
  .create(payment)
  .then(function(mpResponse) {
    console.log(mpResponse);
  })
  .catch(function(mpError) {
    return mercadopago.payment.create(payment, {
      qs: {
        idempotency: mpError.idempotency
      }
    });
  })
  .then(function(mpResponse) {
    console.log(mpResponse);
  });
```

A primeira resposta será:

```javascript
mercadopagoError {
  name: 'MercadoPagoError',
  message: 'Lost Connection',
  cause: 'Unknown Cause',
  status: 500,
  idempotency: '7fea2db6-fc84-436f-b6f4-457f7f5f151e'
}
```

A segunda tentativa enviará a mesmo idempotência que identifica a criação do pagamento anterior. Dessa forma se assegura estar evitando que se duplique.

<

- `access_token`

Caso deseje, é possível anular o `access_token` configurado. Se está utilizando Mp Connect, pode-se anulá-lo na operação que **não deseje executar**. Por exemplo:

```javascript
var payment = {
  description: "Buying a PS4",
  transaction_amount: 10500,
  payment_method_id: "rapipago",
  payer: {
    email: 'test_user_3931694@testuser.com',
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    identification: {
      type: "DNI",
      number: "34123123"
    }
    ------------
  }
};

mercadopago.payment
  .create(payment, {
    access_token: "MY_MERCHANT_ACCESS_TOKEN"
  })
  .then(function(mpResponse) {});
```

Nesse exemplo, se cria um pagamento utilizando my merchant access-token ('MY_MERCHANT_ACCESS_TOKEN')

#### Parâmetros de callback

O callback é opcional. Se utilizar promises pode-se evitar enviá-las:

```javascript
mercadopago.resource.create( ..., configurations, callback );

mercadopago.payment.get(1, {}, function(error, response){
  if (error) return console.log('An error ocurred: ' + error.message);

  console.log(response);
});
```

```javascript
mercadopago.resource.create(...).then().catch();

mercadopago.payment.get(1).then(function (response) {
  console.log(response);
}).then(function (error) {
  console.log('An error ocurred: ' + error.message);
});
```

ou com `await`:

```javascript
try {
    await mercadopago.resource.create(...);
    const response = await mercadopago.resource.get(1);

    console.log(response)
} catch (error) {
    console.log('An error ocurred: ' + error.message);
}


```

### Parâmetros dinâmicos

Conforme dito, os dois últimos parâmetros são _configurations_ e _callback_. Porêm, o que ocorre com os primeiros parâmetros? Dependendo do método (POST, GET, etc) e da rota, os parâmetros vão mudar.

Primeiramente a respeito das rotas. Segue os distintos paths:

- `/v1/payments` - No path variables
- `/v1/payments/:id` - One path variable
- `/v1/customers/:id/cards/:card_id` - Two path variables

Isso significa que o método que chama precisa obter essa variável (id, card_id) de alguma maneira. Seguem alguns métodos.

```javascript
payment.create = requestManager.describe({
  path: "/v1/payments",
  method: "POST"
});

payment.update = requestManager.describe({
  path: "/v1/payments/:id",
  method: "PUT"
});

payment.get = requestManager.describe({
  path: "/v1/payments/:id",
  method: "GET"
});
```

Há uma diferença entre os métodos que recebem o JSON payload e os que não.

- Sem Payload: GET, DELETE
- Com Payload: POST, PUT, PATCH

#### Sem Payload

GET, DELETE: Esses vão receber variáveis nos primeiros parâmetros. Segue um exmplo:

```javascript
payment.get = requestManager.describe({
  path: "/v1/payments/:id",
  method: "GET"
});

// Calling the get
mercadopago.payment.get(1, {}, function() {});
```

```javascript
customers.cards.get = requestManager.describe({
  path: "/v1/customers/:id/cards/:card_id",
  method: "GET"
});

// Getting the card 10 from the customer 1
mercadopago.customers.cards.get(1, 10, {}, function() {});
```

#### Com Payload

POST, PUT, PATH: Esses vão fazer coincidr as variáveis com os payloads. Segue um exemplo:

```javascript
payment.update = requestManager.describe({
  path: "/v1/payments/:id",
  method: "PUT"
});

// Calling the update
mercadopago.payment.update(
  {
    id: 1,
    status: "cancelled"
  },
  function() {}
);
```

```javascript
customers.cards.update = requestManager.describe({
  path: "/v1/customers/:id/cards/:card_id",
  method: "PUT"
});

// Calling the update
mercadopago.customers.cards.update(
  {
    id: 1,
    card_id: 10,
    expiration_year: 2020
  },
  function() {}
);
```

O nome da variável do path deve ser o mesmo que no payload. Todos os nomes são os mesmos que necessitam enviar na atualização.

Um bom exemplo é:

```javascript
mercadolibre.payment
  .get(1)
  .then(function(mpResponse) {
    // Cancelling a payment
    return mercadolibre.payment.update({
      id: mpResponse.body.id,
      status: "cancelled"
    });
  })
  .catch(function(error) {
    console.log("An error ocurred updating the payment");
  });
```

## Compatibilidade com versões anteriores

Se está implementando um [SDK antigo](https://github.com/mercadopago/sdk-nodejs), não necessita modificar nada. Simplesmente atualize o pacote NPM e receberá todos os métodos anteriores:

- `sandboxMode`
- `getAccessToken`
- `get`
- `post`
- `put`
- `delete`
- `createPreference`
- `updatePreference`
- `getPreference`
- `createPreapprovalPayment`
- `updatePreapprovalPayment`
- `getPreapprovalPayment`
- `searchPayment`
- `getPayment`
- `getPaymentInfo`
- `getAuthorizedPayment`
- `refundPayment`
- `cancelPayment`
- `cancelPreapprovalPayment`

Quando utilizar, receberá uma advertência no console de que esses métodos estão em desuso. Serão eliminados do SDK em versões futuras.

> Recorde-se, estão em desuso, os preservamos somente para que sua aplicação não quebre. Deve atualizar seu código para futuras atualizações.

## Validação de esquema

Cada vez que realize uma operação que necessite enviar uma carga útil JSON, como criar um pagamento, um cliente e etc., o payload se validará automaticamente.

Essa funcionalidade permite economizar tempo e recursos no momento da integração. As validações são as seguintes:

- Validações de tipo (Block)
- Validações de nome de campo (Warning)
- Parâmetros Extra (Warning)

#### Validação de bloqueio

Esse tipo de validação gerará um erro, não se permite executar a operação e evita um erro de servidor.

#### Validações de Advertência

Esse tipo de validação emitirá uma advertência no console.

## Resposta e erro

### Respostas e erros personalizados

Implementamos três novos objetos que ajudam a fazer sua primeira implementação muito mais fácil:

- `mercadopagoResponse`
- `mercadopagoIpnResponse`
- `mercadopagoError`

### mercadopagoResponse

Esse é o objeto de resposta que receberá todas as respostas dos seus recuros. Está composto pelas seguintes variáveis e funções:

- `body` - Object: Corpo da resposta
- `status` - Integer: Estado da resposta
- `idempotency` - String: Cabeçalho de idempotência enviado na solicitação
- `pagination` - Object: Objeto de resposta que vem do endpoint que tem paginação como Payment Search
- `next` - Function: Ir a página seguinte
- `hasNext` - Function: Comprova se há próxima página (Boolean)
- `prev` - Function: Retornar a página anterior
- `hasPrev` - Function: Comprova se há página anterior (Boolean)

#### Idempotência

A idempotência é um cabeçalho enviado ao Mercado Pago para identificar a operação. Encontrará mais informação sobre isso [aqui](#bookmark_uso).

#### Paginação

Se encontra toda a informação de paginação [aqui](#bookmark_paginação).

### mercadopagoIpnResponse

Essa é a resposta que virá do Administrador de IPN. Isso será composto pelas seguintes variáveis: 

- `body` - Object: Corpo da resposta
- `status` - Integer: Estado da respuesta
- `Id` - String: ID recebido de Webhook
- `Topic` - String: Topic recibido de Webhook

Se encontra mais informação sobre IPN [aqui](#bookmark_notificações_IPN).

### mercadopagoError

Esse é o objeto de erro recebido quando um recurso falha. É composto pelas seguintes variáveis e funções:

- `name` - String: Nome o erro
- `message` - String: Mensagem recebida da API do Mercado Pago
- `cause` - Array (Object): Causa do erro
- `stack` - Stacktrace do erro
- `status` - Integer: Estado da resposta
- `idempotency` - String: Idempotency Id Header
- `retry` - Função

#### Novas tentativas

Se as solicitações falham por tempo de espera ou outros erros, expomos um método de nova tentatica de chamada para ajudá-lo a executar a mesma operação novamente, reutilizando a idempotência e facilitando a forma de no nova tentativa. Se esse método não existe, deve-se guardar o request object e obter a idempotência do erro para construir a solicitação novamente. Segue uma comparação:

##### Sem novas tentativas

```javascript
const payment = {
  description: "Descripción",
  transaction_amount: 10,
  payment_method_id: "rapipago",
  payer: {
    email: 'test_user_3931694@testuser.com',
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    identification: {
      type: "DNI",
      number: "34214577"
    }
    ------------
  }
};

mercadopago.payment
  .create(payment)
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    // Manually retry
    mercadopago.payment
      .create(payment, {
        idempotency: err.idempotency
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function() {
        // Another Error
      });
  });
```

##### Com novas tentativas

```javascript
mercadopago.payment.create({
  description: 'Descripción',
  transaction_amount: 10,
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_3931694@testuser.com',
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    identification: {
      type: 'DNI',
      number: '34214577'
    }
    ------------
  }
}).then(function (response) {
  console.log(response);
}).catch(function (err) {
  err.retry().then(function (response) {
    console.log(response);
  })
  .catch(function(err) {
    err
      .retry()
      .then(function(response) {
        console.log(response);
      })
      .catch(function() {
        // Another Error
      });
  });
```

## Paginação

### Wrapper Automático de paginação

Há alguns endpoints que devolvem a resposta paginada. Por exemplo, se está buscando todos os pagamentos feitos na sua conta. Segue um exemplo:

```javascript
mercadopago.payment
  .search({
    qs: {
      "collector.id": "me"
    }
  })
  .then(function(mpResponse) {
    console.log(mpResponse);
  });
```

O output será:

```javascript
mercadopagoResponse {
  body:
   { paging: { total: 110, limit: 30, offset: 0 },
     results:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ] },
  status: 200,
  idempotency: undefined,
  pagination: { total: 110, limit: 30, offset: 0 } }
```

Como pode ver, há 100 pagamentos e 30 resultados por request.

Se não deseja obter a página seguinte, deve-se executar manualmente a busca dessa forma:

```javascript
mercadopago.payment
  .search({
    qs: {
      "collector.id": "me",
      pagination: {
        offset: 30
      }
    }
  })
  .then(function(mpResponse) {
    console.log(mpResponse);
  });
```

Para resolver isso, injetamos dois métodos na resposta:

- `next`: retorno uma Promise() e também recebe um Callback com a página seguinte
- `hasNext`: devolve um booleano se existe uma página seguinte
- `prev`: devolve uma Promise() e também recebe um callback com a página anterior
- `hasPrev`: devolve um booleano se existe uma página anterior

Com isso pode-se verificar se os resultados possuem uma página seguinte ou anterior e obtê-las. Segue um exemplo com a seguinte página:

```javascript
mercadopago.payment
  .search({
    qs: {
      "collector.id": "me"
    }
  })
  .then(function(mpResponse) {
    if (mpResponse.hasNext()) {
      return mpRepsonse.next();
    }
  })
  .then(function(nextPage) {
    console.log(nextPage);
  });
```

Ou com`await`

```javascript
const mpResponse = await mercadopago.payment.search({
  qs: {
    "collector.id": "me"
  }
});

if (mpResponse.hasNext()) {
  const nextPage = await mpRepsonse.next();
  console.log(nextPage);
}
```

Também pode-se utilizar callbacks:

```javascript
mercadopago.payment.search(
  {
    qs: {
      "collector.id": "me"
    }
  },
  function(err, mpResponse) {
    if (mpResponse.hasNext()) {
      return mpRepsonse.next(function(nextPage) {
        console.log(nextPage);
      });
    }
  }
);
```

## Notificações IPN

A API de Mercado Pago envia notificações de pagamentos realizados. A notificação chega com os seguintes parâmetros:

- `topic`: identifica qual recurso éIdentifica qué tipo de recurso e

  - `merchant_order`
  - `payment`
  - `preapproval`
  - `authorized_payment`

- `id`: id único da notificação

Quando receber essa notificação, poderá obter a informação do pedido ou do pagador.

Merchant Order:

```
/merchant_orders/[ID]?access_token=[ACCESS_TOKEN]
```

Payment:

```
/v1/payments/[ID]?access_token=[ACCESS_TOKEN]
```

### IPN Manager

Para simplificar este fluxo, disponibilizamos um Administrador de IPN que realizará a solicitação. Para usa-la, é preciso enviar a solicitação ao IPN Manager. Segue exemplo de funcionamento:

```javascript
mercadopago.ipn
  .manage(request)
  .then(function(response) {
    console.log(response);
  })
  .then(function(error) {
    console.log(error);
  });
```

O output será:

```javascript
mercadopagoIpnResponse {
  body:
   { id: 2556382,
     date_created: '2017-01-19T17:00:21.000-04:00',
     date_approved: null,
     date_last_updated: '2017-01-19T17:00:21.000-04:00',
     money_release_date: null,
     operation_type: 'regular_payment',
     issuer_id: null,
     payment_method_id: 'rapipago',
     payment_type_id: 'ticket',
     status: 'pending',
     status_detail: 'pending_waiting_payment',
     currency_id: '[FAKER][CURRENCY][ACRONYM]',
     description: 'Descripci&oacute;n',
     live_mode: false,
     sponsor_id: null,
     authorization_code: null,
     collector_id: 239656545,
     payer:
      { type: 'guest',
        id: null,
        email: 'test_user_3931694@testuser.com',
        identification: [Object],
        phone: [Object],
        first_name: 'Test',
        last_name: 'Test',
        entity_type: null },
     metadata: {},
     order: {},
     external_reference: null,
     transaction_amount: 10,
     transaction_amount_refunded: 0,
     coupon_amount: 0,
     differential_pricing_id: null,
     deduction_schema: null,
     transaction_details:
      { net_received_amount: 0,
        total_paid_amount: 10,
        overpaid_amount: 0,
        external_resource_url: 'http://www.mercadopago.com/mla/sandbox/payments/ticket/helper?payment_method=rapipago',
        installment_amount: 0,
        financial_institution: null,
        payment_method_reference_id: '2556383' },
     fee_details: [],
     captured: true,
     binary_mode: false,
     call_for_authorize_id: null,
     statement_descriptor: null,
     installments: 1,
     card: {},
     notification_url: null,
     refunds: [] },
  status: 200,
  topic: 'payment'
}
```

Dentro da resposta encontrará o **topic** recebido na request, portanto não é necessário obter o valor do mesmo.