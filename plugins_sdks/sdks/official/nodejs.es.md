# SDK Mercado Pago para Node

- [Instalación](#bookmark_instalación)
- [Configuración](#bookmark_configuración)
- [Modo Sandbox](#bookmark_modo_sandbox)
- [Callbacks y promesas](#bookmark_callbacks_y_promesas)
- [Arquitectura](#bookmark_arquitectura)
- [Uso](#bookmark_uso)
- [Combatibilidad con versiones anteriores](#bookmark_combatibilidad_con_versiones_anteriores)
- [Validación de esquema](#bookmark_validación_de_esquema)
- [Respuesta y error](#bookmark_respuesta_y_error)
- [Paginación](#bookmark_paginación)
- [Notificaciones IPN](#bookmark_notificaciones_IPN)

## Instalación

```bash
$ npm install mercadopago
```

o 

```bash
$ yarn add mercadopago
```

### Soporte a Promises y Callbacks

Cada método soporta promises y callbacks. Por ejemplo:

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

es lo mismo que:

```javascript
mp.getAccessToken(function(err, accessToken) {
  if (err) {
    console.log(err);
  } else {
    console.log(accessToken);
  }
});
```

Para utilizar callbacks, simplemente pasa una función como último parámetro.

### Soporte a `async` / `await`

Cada método soporta el uso de `await`.

```javascript
try {
  const accessToken = await mp.getAccessToken();
  console.log(accessToken);
} catch (err) {
  console.log(err);
}
```

## Configuración

Obtén tu **ACCESS_TOKEN** en la [sección de Credenciales]([FAKER][CREDENTIALS][URL]).

Para configurar el SDK debes usar el método **cofigure**.Este método recibe un objeto JSON. Las configuraciones válidas son:

- `client_id` - String
- `client_secret` - String
- `access_token` - String
- `sandbox` (default: `false`) - Boolean
- `show_promise_error` (default: `true`) - Boolean

_Configuración de credenciales válidas:_

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

_Configuración de credenciales inválidas:_

```javascript
mercadopago.configure({});
```

> Debes proporcionar un object como configuración.

```javascript
mercadopago.configure({
  sandbox: true
});
```

> Debes proporcionar un método de autenticación (`client_id` & `client_secret` o `access_token`).

```javascript
mercadopago.configure({
  client_id: "CLIENT_ID"
});
```

> Debes proporcionar `client_id` y `client_secret`.

```javascript
mercadopago.configure({
  client_secret: "CLIENT_SECRET"
});
```

> No se puede cambiar el `client_id` o `client_secret` porque ya están configuradas.

## Modo Sandbox

Si vas a utilizar nuestra aplicación en modo Sandbox, debes proporcionar el `access_token`.

> Ten en cuenta que si proporcionas el `client_id` y `client_secret`, la SDK generará un access_token productivo.

```javascript
mercadopago.configure({
  sandbox: true,
  access_token: "ACCESS_TOKEN"
});
```

**El modo Sandbox solo funciona con `access_token`**

## Callbacks y promesas

Soportamos ambos. Para soportar versiones de Node.js anteriores a 0.11.13 estamos utilizando internamente [bluebird](https://github.com/petkaantonov/bluebird).

### Callbacks

```javascript
library.method(function(err, res) {
  if (err) return console.log(err);

  console.log(res);
});
```

### Promesas

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

Se pueden utilizar las promesas con `await` en vez de `.then(...)`.

```javascript
try {
  const res = await library.method();
  console.log(res);
} catch (err) {
  console.log(err);
}
```

Puedes utilizar el que prefieras y adaptarlo a tu aplicación.

## Arquitectura

El SDK exporta un objeto JSON exponiendo los recursos al integrador. Puedes acceder a ellos para ejecutar operaciones válidas. Los recursos son los siguientes:

- `payment`
- `preferences`
- `preapproval`
- `customers`
- `merchant_orders`
- `money_requests`
- `connect`
- `ipn`

Puedes acceder a ellos desde el SDK:

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

Esto te permitira ejecutar operaciones como, por ejemplo, crear un pago:

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

Como resultado obtendras:

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

### Cómo funciona

Básicamente, el SDK es un Cliente REST mejorado con herramientas poderosas. Cada recurso (Payments, Preference, etc.) tiene métodos básicos:

- `create` (POST)
- `update` (PUT)
- `get` (GET)
- `remove` (DELETE)

Esos métodos son creados dinámicamente por el SDK. Cada uno tiene los siguientes parámetros.

```javascript
mercadopago.resource.create( ..., configurations, callback );
```

```javascript
mercadopago.resource.create( ..., configurations ).then().catch();
```

```javascript
await mercadopago.resource.create( ..., configurations );
```

#### Configuración de parametros

> Este parámetro es opcional si no está utilizando callbacks. Esto se convertirá automáticamente en un objeto vacío.

La configuracion de parametros es un objeto JSON que permite los siguientes valores:

- `qs`

Este es un objeto JSON con los parámetros que desea enviar a través de la cadena de consulta. Vamos a hacer un ejemplo tratando de obtener todos mis pagos.

Si vemos la [API de Search](https://www.mercadopago.com.ar/developers/es/api-docs/account/payments/search/), esto será un GET , y debemos enviar payer.id = me en la cadena de consulta. Para esto, solo tenemos que poner:

```javascript
var configurations = {
  qs: {
    "payer.id": "me"
  }
};

mercadopago.payment.search(configurations, callback);
```

Enviando esto, el qs convertirá la url de salida a:

```
https://api.mercadopago.com/v1/payments/search?payer.id=me
```

- idempotencia - idempotencia uuid personalizada a ser enviada.

En algunos casos, un problema de conexión podría interrumpir la operación. Para asegurarse de que la operación se completo, puede volver a intentarlo. En caso que vuelva a intentar, puede duplicarse.

Para evitar ese comportamiento, puede utilizar un UUID [(identificador único universal)](https://en.wikipedia.org/wiki/Universally_unique_identifier) que identifica la operación. Este UUID será un header en la idempotencia de llamada de solicitud. Estos headers serán generados automáticamente por la primera operación.

Si una operación falla, el error tendrá la clave de Idempotency enviada. Puede utilizar esto para volver a intentarlo. Veamos un ejemplo:

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

La primera respuesta será:

```javascript
mercadopagoError {
  name: 'MercadoPagoError',
  message: 'Lost Connection',
  cause: 'Unknown Cause',
  status: 500,
  idempotency: '7fea2db6-fc84-436f-b6f4-457f7f5f151e'
}
```

En el segundo intento, está enviando la misma idempotencia que identifica la creación de pago anterior. Haciendo esto te aseguras de estar evitando que se duplique.
<

- `access_token`

Si lo desea, puede anular el `access_token` configurado. Si está utilizando MP Connect, puede anularlo en la operación que **no desea ejecutar**. Por ejemplo:

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

En este ejemplo, se creará un Pago utilizando my merchant access_token ('MY_MERCHANT_ACCESS_TOKEN')

#### Parámetros de callback

El callback es opcional. Si utilizaras promesas puedes evitar enviarlas:

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

o con `await`:

```javascript
try {
    await mercadopago.resource.create(...);
    const response = await mercadopago.resource.get(1);

    console.log(response)
} catch (error) {
    console.log('An error ocurred: ' + error.message);
}


```

### Parámetros dinámicos

Ya dijimos que los dos últimos parámetros son _configurations_ and _callback_. Pero, ¿qué pasa con los primeros parámetros? Dependiendo del método (POST, GET, etc.) y la ruta, los parámetros van a cambiar.

Vamos a empezar hablando de la ruta. Veamos los diferentes paths:

- `/v1/payments` - No path variables
- `/v1/payments/:id` - One path variable
- `/v1/customers/:id/cards/:card_id` - Two path variables

Esto significa que el método al que llama necesita obtener esta variables (id, card_id) de alguna manera. Veamos algunos métodos.

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

Hay una diferencia entre los métodos que reciben el JSON payload y los que no.

- Sin Payload: GET, DELETE
- Con Payload: POST, PUT, PATCH

#### Sin Payload

GET, DELETE: Estos van a recibir las variables en los parámetros. Veamos un ejemplo:

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

#### Con Payload

POST, PUT, PATH: Esto va a hacer coincidir las variables con los payload. Veamos un ejemplo:

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

El nombre de la variable del path debe ser el mismo que el payload. Todos los nombres son los mismos que necesitas enviar en la actualización.

Un buen ejemplo es:

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

## Combatibilidad con versiones anteriores

Si está implementando un [SDK antiguo](https://github.com/mercadopago/sdk-nodejs), no necesita modificar nada. Simplemente actualice el paquete NPM y recibirá todos los métodos anteriores:

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

Cuando los use, recibirá una advertencia en la consola de que estos métodos están en desuso. Se eliminarán del SDK en futuras versiones.

> Recuerde, están en desuso, solo los guardamos para que su aplicación no se rompa. Debe actualizar su código para futuras actualizaciones.

## Validación de esquema

Cada vez que realice una operación que necesite enviar una carga útil JSON, como crear un pago, un cliente, etc., el payload se validará automáticamente.

Esta funcionalidad le permitirá ahorrar tiempo y errores al momento de la integrar. Las validaciones son las siguientes:

- Validaciones de tipo (Block)
- Validaciones del nombre de campo (Warning)
- Parámetros Extra (Warning)

#### Validaciones de bloque

Este tipo de validaciones generará un error, no le permite ejecutar la operación y evita un error del servidor.

#### Validaciones de Advertencia

Este tipo de validaciones emitirán una advertencia en la consola.

## Respuesta y error

### Respuestas y errores personalizados.

Implementamos tres nuevos objetos que lo ayudarán a hacer su implementación mucho más fácil:

- `mercadopagoResponse`
- `mercadopagoIpnResponse`
- `mercadopagoError`

### mercadopagoResponse

Este es el objeto de respuesta donde recibirá todas las respuestas de sus recursos. Está compuesto por las siguientes variables y funciones:

- `body` - Object: Cuerpo de Respuesta
- `status` - Integer: Estado de la respuesta
- `idempotency` - String: Encabezado de idempotencia enviado en la solicitud
- `pagination` - Object: Objeto de respuesta que proviene de endpoint que tienen paginación como Payment Search
- `next` - Function: Ir a la página siguiente
- `hasNext` - Function: Comprueba si tiene la siguiente página (Boolean)
- `prev` - Function: Volver a la página anterior
- `hasPrev` - Function: Comprueba si tiene página anterior (Boolean)

#### Idempotencia

La idempotencia es un encabezado enviado a MercadoPago para identificar la operación. Encontrará mas información sobre esto desde [aquí](#bookmark_uso)

#### Pagination

Puede encontrar toda la información de paginación desde [aquí](#bookmark_paginación).

### mercadopagoIpnResponse

Esta es la respuesta que provendrá del Administrador de IPN. Esto está compuesto por las siguientes variables:

- `body` - Object: Cuerpo respuesta
- `status` - Integer: Estado de respuesta
- `Id` - String: ID recibido de webhook
- `Topic` - String: topic recibido de Webhook

Encontrará más información sobre de IPN desde [aquí](#bookmark_notificaciones_IPN).

### mercadopagoError

Este es el objeto error que recibe cuando falla un recurso. Está compuesto por las siguientes variables y funciones:

- `name` - String: Nombre del error
- `message` - String: Mensaje recibido de la API de MercadoPago
- `cause` - Array (Object): Causa del error
- `stack` - Stacktrace del error
- `status` - Integer: Estado de la respuesta
- `idempotency` - String: Idempotencia Id Header
- `retry` - Función

#### Reintentar

Si las solicitudes fallan por tiempo de espera u otros errores, exponemos un método de reintento de llamada para ayudarlo a ejecutar la misma operación nuevamente, reutilizando la idempotencia y facilitándole la forma de reintentarlo. Si este método no existe, deberá guardar el request object y obtener la idempotencia del error para construir la solicitud nuevamente. Veamos una comparación:

##### Sin reintento

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

##### Con reintento

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

## Paginación

### Wrapper Automatico de paginación

Hay algunos endpoints que devuelven la respuesta paginada. Por ejemplo, si está buscando todos los pagos que se hicieron desde su cuenta. Veamos un ejemplo:

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

El output será:

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

Como puede ver, tiene 100 pagos y 30 resultados por request.

Si no desea obtener la siguiente página, debe ejecutar manualmente la búsqueda de esta forma:

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

Para resolver esto, inyectamos dos métodos a la respuesta:

- `next`: devuelve una Promise() y también recibe un callback con la pagina siguiente
- `hasNext`: devuelve un booleano si existe una página siguiente
- `prev`: devuelve una Promise() y también recibe un callback con la pagina anterior
- `hasPrev`: devuelve un booleano si existe una página anterior

Con esto, puede verificar si los resultados tienen una página siguiente o anterior y obtenerlos. Veamos un ejemplo con la siguiente página:

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

o con `await`

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

También puede utilizar callbacks:

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

## Notificaciones IPN

La API de MercadoPago envía notificaciones de pagos y suscripciones realizadas. La notificación viene con los siguientes parámetros:

- `topic`: Identifica qué tipo de recurso es

  - `merchant_order`
  - `payment`
  - `preapproval`
  - `authorized_payment`

- `id`: id único de la notificación

Cuando reciba esta notificación, podrá obtener la información del pedido o del pago.

Merchant Order:

```
/merchant_orders/[ID]?access_token=[ACCESS_TOKEN]
```

Payment:

```
/v1/payments/[ID]?access_token=[ACCESS_TOKEN]
```

### IPN Manager

Para simplificar este flujo, proporcionamos un Administrador de IPN que realizará la solicitud. Para usarlo, debe pasar la solicitud al IPN Manager. Vamos a ver cómo funciona:

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

El output será:

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

Dentro de la respuesta encontrará el **topic** recibido en la request, por lo que no necesita obtener el valor de la misma.