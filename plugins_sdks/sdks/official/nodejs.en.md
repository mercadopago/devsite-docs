# Mercado Pago SDK module for Payments integration

* [Install](#bookmark_install)
* [Configure](#bookmark_configure)
* [Sandbox Mode](#bookmark_sandbox_mode)
* [Callbacks & Promises](#bookmark_callbacks_&_promises)
* [Architecture](#bookmark_architecture)
* [Usage](#bookmark_usage)
* [Backward Compatibility](#bookmark_backward_compatibility)
* [Schema Validation](#bookmark_schema_validation)
* [Response & Error](#bookmark_response_&_error)
* [Pagination](#bookmark_pagination)
* [IPN Notifications](#bookmark_IPN_notifications)

## Install

```
$ npm install mercadopago
```

### Promises and Callbacks support

Every method supports either promises and callbacks. For example:

```javascript
var at = mp.getAccessToken ();

at.then (
    function (accessToken) {
        console.log (accessToken);
    },
    function (error) {
        console.log (error);
    });
```
is the same as:

```javascript
mp.getAccessToken(function (err, accessToken){
    if (err) {
        console.log (err);
    } else {
        console.log (accessToken);
    }
});
```

In order to use callbacks, simply pass a function as the last parameter.

## Configure

* Get your **CLIENT_ID** and **CLIENT_SECRET** in the following address:
    * Argentina: [https://www.mercadopago.com/mla/herramientas/aplicaciones](https://www.mercadopago.com/mla/herramientas/aplicaciones)
    * Brazil: [https://www.mercadopago.com/mlb/ferramentas/aplicacoes](https://www.mercadopago.com/mlb/ferramentas/aplicacoes)
    * México: [https://www.mercadopago.com/mlm/herramientas/aplicaciones](https://www.mercadopago.com/mlm/herramientas/aplicaciones)
    * Colombia: [https://www.mercadopago.com/mco/herramientas/aplicaciones](https://www.mercadopago.com/mco/herramientas/aplicaciones)
    * Chile: [https://www.mercadopago.com/mlc/herramientas/aplicaciones](https://www.mercadopago.com/mlc/herramientas/aplicaciones)
    * Uruguay: [https://www.mercadopago.com/mlu/herramientas/aplicaciones](https://www.mercadopago.com/mlu/herramientas/aplicaciones)

### Configure Method

To configure the SDK you must use the **cofigure** method. this method receives a JSON object. The valid configurations are:

* client_id - String
* client_secret - String
* access_token - String
* sandbox (defaults = false) - Boolean
* show_promise_error (defaults = true) - Boolean

_Valid credential configurations:_

```javascript
mercadopago.configure({
    access_token: 'ACCESS_TOKEN'
});
```

```javascript
mercadopago.configure({
    sandbox: true,
    access_token: 'ACCESS_TOKEN'
});
```

```javascript
mercadopago.configure({
    client_id: 'CLIENT_ID',
    client_secret: 'CLIENT_SECRET'
});
```

_Invalid credential configurations:_

```javascript
mercadopago.configure({});
```

> You must provide an Object with the configurations

```javascript
mercadopago.configure({
    sandbox: true
});
```

> You must provide a method of authentication (client_id & client_secret or access_token)

```javascript
mercadopago.configure({
    client_id: 'CLIENT_ID'
});
```

> You must provide client_id and client_secret

```javascript
mercadopago.configure({
    client_secret: 'CLIENT_SECRET'
});
```

> Cant change client_id or client_secret because is already set

### Show Promise Error (defaults = true)

We support Promises. That means that all the methods are wrap into a new Promise. This means that if you don't provide a **catch** a warning is going to be output on the console (UnhandledPromiseRejectionWarning).

If you are going to use callbacks configure show_promise_error to false

### Errors

If you provide an invalid configuration the applications is going to throw an Error (is going to block the application).

## Sandbox Mode

### Sandbox Mode (Testing)

If you are going to use the application on our sandbox environment you *must provide* the access_token.

> Take in mind that if you provide client_id and client_secret the SDK is going to generate the access_token, but, **only for production**.

```javascript
mercadopago.configure({
    sandbox: true,
    access_token: 'ACCESS_TOKEN'
});
```

**Sandbox Mode only works with access_token**

## Callbacks & Promises

We support both. To achieve this and support to Node.js versions previous to 0.11.13 (when native promises were added), we are using internally [bluebird](https://github.com/petkaantonov/bluebird).

_Callbacks:_

```javascript
library.method(function (err, res) {
    if (err) return console.log(err);
    
    console.log(res);
})
```

_Promises:_

```javascript
library.method().then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
});
```

Use the one that you prefer and adapt to your application.

## Architecture

### SDK Architecture (resources)

The SDK exports a JSON object exposing the resources to the integrator. You can access them to execute valid operations. The resources are the following:

- payment
- preferences
- preapproval
- customers
- merchant_orders
- money_requests
- connect
- ipn

You can access them from the sdk:

```javascript
var mercadopago = require('mercadopago');

console.log(mercadopago.payment);

/*
...
create: [Function],
update: [Function],
get: [Function],
search: [Function],
...
*/
```

This will allow you to execute operations, like, creating a payment:

```javascript
mercadopago.payment.create({
  description: 'Buying a PS4',
  transaction_amount: 10500,
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_3931694@testuser.com',
    identification: {
      type: 'DNI',
      number: '34123123'
    }
  }
}).then(function (mpResponse) {
  console.log(mpResponse);
}).catch(function (mpError) {
  console.log(err);
});
```

This will output:

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
     currency_id: 'ARS',
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

## Usage

### How it works

Basically the SDK is a super enhance REST Client with powerful tools. Almost each resource (Payment, Preference, etc...) have basic methods:

- create (POST)
- update (PUT)
- get (GET)
- remove (DELETE)

Those methods are dynamically created by the SDK. Each one has the following parameters.

```javascript
mercadopago.resource.create( ..., configurations, callback );
```

```javascript
mercadopago.resource.create( ..., configurations ).then().catch();
```

#### Configurations Parameter

> This parameter is optional if you are not using callbacks. This will automatically convert into an empty object.

The configurations parameter is a JSON Object that allow the next values:

- qs:

This is a JSON Object with the parameters you want to send over the querystring. Let's do an example trying to get all my payments.

If we see the [Search API](https://www.mercadopago.com.ar/developers/en/api-docs/account/payments/search/), this is going to be a _GET_, and we need to send payer.id = me on the querystring. To do this, we only need to do:

```javascript
var configurations = {
  qs: {
    'payer.id': 'me'
  }
};

mercadopago.payment.search(configurations, callback);
```

Sending that on the qs will convert the output url to:

```
https://api.mercadopago.com/v1/payments/search?payer.id=me
```

- idempotency - Custom idempotency uuid to be send

In some cases a connection issue could interrupt an operation. To ensure that the operation is complete you can retry it. But, in some cases the operation was **complete**. When you retry the operation, you may cause a **duplication**.

To avoid that behaviour you can use an UUID [(Universally Unique Identifier)](https://en.wikipedia.org/wiki/Universally_unique_identifier) that identifies the operation. This UUID is going to be a header on the request call **Idempotency-Key**. This headers is going to be automatically generated by the first operation.

If an operation fails the error is going to have the **Idempotency-Key** sended. You can use this key to retry the operation. Let's see and example:

```javascript
var payment = {
  description: 'Buying a PS4',
  transaction_amount: 10500,
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_3931694@testuser.com',
    identification: {
      type: 'DNI',
      number: '34123123'
    }
  }
};

mercadopago.payment.create(payment).then(function (mpResponse) {
  console.log(mpResponse);
}).catch(function (mpError) {
  return mercadopago.payment.create(payment, {
    qs: {
      idempotency: mpError.idempotency
    }
  });
}).then(function(mpResponse){
  console.log(mpResponse);
});
```

The first response is going to be:

```javascript
mercadopagoError {
  name: 'MercadoPagoError',
  message: 'Lost Connection',
  cause: 'Unknown Cause',
  status: 500,
  idempotency: '7fea2db6-fc84-436f-b6f4-457f7f5f151e'
}
```

On the second try you are sending the same idempotency that identifies the previous payment creation. Doing this you ensure to be avoiding duplication.

Also, you can save the idempotency and the original JSON payload to retry it later.

- access_token

If you want, you can override the `access_token` configured. If you are using MP Connect and you wan't to impersonate a Merchant using his credentials you can override it on the operation you wan't to execute. For example:

```javascript
var payment = {
  description: 'Buying a PS4',
  transaction_amount: 10500,
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_3931694@testuser.com',
    identification: {
      type: 'DNI',
      number: '34123123'
    }
  }
};

mercadopago.payment.create(payment, {
  access_token: 'MY_MERCHANT_ACCESS_TOKEN',
}).then(function (mpResponse) {
});
```

In this example a Payment is going to be created using my merchant access_token ('MY_MERCHANT_ACCESS_TOKEN')

#### Callback Parameter

The callback is optional. If you are going to use promises you can avoid sending it:

```javascript
mercadopago.resource.create( ..., configurations, callback );

mercadopago.payment.get(1, {}, function(error, response){
  if (error) return console.log('An error ocurred: ' + error.message);

  console.log(response);
});
```

```javascript
mercadopago.resource.create( ... ).then().catch();

mercadopago.payment.get(1).then(function (response) {
  console.log(response);
}).then(function (error) {
  console.log('An error ocurred: ' + error.message);
});
```

### Dynamic Parameters

We already said that the last two parameters are _configurations_ and _callback_, but what about the first parameters?. Depending on the **method** (POST, GET, etc...) and the *path* the parameters are going to change.

First we are going to start talking about the path. Let's see the different type of paths:

- /v1/payments - No path variables
- /v1/payments/:id - One path variable
- /v1/customers/:id/cards/:card_id - Two path variables

This means that the method you call needs to get this variable (id, card_id) on some way. **This is when the method comes in the way**. Let's see some methods

```javascript
payment.create = requestManager.describe({
  path: '/v1/payments',
  method: 'POST'
});

payment.update = requestManager.describe({
  path: '/v1/payments/:id',
  method: 'PUT'
});

payment.get = requestManager.describe({
  path: '/v1/payments/:id',
  method: 'GET'
});
```

There is a difference between methods that receive a JSON payload and the ones that don't.

- No Payload: GET, DELETE
- With Payload: POST, PUT, PATCH

#### Without Payload

GET, DELETE: This are going to receive the variables on the parameters. Let's see an example:

```javascript
payment.get = requestManager.describe({
  path: '/v1/payments/:id',
  method: 'GET'
});

// Calling the get
mercadopago.payment.get(1, {}, function (){});
```

```javascript
customers.cards.get = requestManager.describe({
  path: '/v1/customers/:id/cards/:card_id',
  method: 'GET'
});

// Getting the card 10 from the customer 1
mercadopago.customers.cards.get(1, 10, {}, function ()  {});
```

#### With Payload
POST, PUT, PATH: This are going to match the variables with the ones on the payload. Let's see an example:

```javascript
payment.update = requestManager.describe({
  path: '/v1/payments/:id',
  method: 'PUT'
});

// Calling the update
mercadopago.payment.update({
  id: 1,
  status: 'cancelled'
}, function (){});
```

```javascript
customers.cards.update = requestManager.describe({
  path: '/v1/customers/:id/cards/:card_id',
  method: 'PUT'
});

// Calling the update
mercadopago.customers.cards.update({
  id: 1,
  card_id: 10,
  expiration_year: 2020
}, function (){});
```

The path variable name must be the same in the payload. All the names already are the same ones that you need to send on the update.

A good example will be:

```javascript
mercadolibre.payment.get(1).then(function (mpResponse) {
  // Cancelling a payment
  return mercadolibre.payment.update({
    id: mpResponse.body.id,
    status: 'cancelled'
  });
}).catch(function (error) {
  console.log('An error ocurred updating the payment');
});
```

## Backward Compatibility

### Support to old SDK

If you're implementing the [old SDK](https://github.com/mercadopago/sdk-nodejs), you don't need to do anything at first. Just update the NPM Package and you will received all of the previous methods:

- sandboxMode
- getAccessToken
- get
- post
- put
- delete
- createPreference
- updatePreference
- getPreference
- createPreapprovalPayment
- updatePreapprovalPayment
- getPreapprovalPayment
- searchPayment
- getPayment
- getPaymentInfo
- getAuthorizedPayment
- refundPayment
- cancelPayment
- cancelPreapprovalPayment

When you use them, you are going to receive a warning on the console that this methods are deprecated. They are going to be remove from the SDK in future versions.

> Remember, **they are deprecated**, we are just keeping them so your application doesnt break. **You must update** you code for future updates.


## Schema Validation

### Automatic Schema Validation

Every time you make an operation that needs to send a JSON payload, like creating a payment, customer, etc... the payload is going to be automatically validated.

This functionality will let you save time and errors at integration time. The validations are the following:

- Type Validations (Block)
- Field name validations (Warning)
- Extra Parameters (Warning)

#### Block Validations

This type of validations are going to throw an error, don't letting you execute the operation to prevent an error from the server.

#### Warning Validations

This type of validations are going to output a warning on console.


## Response & Error

### MercadoPago Custom Responses and Errors

We implement two new objects that will help you make your implementation much more easier:

- mercadopagoResponse
- mercadopagoIpnResponse
- mercadopagoError

### mercadopagoResponse

This is the response object that you will receive from all the your resources responses. This is compose by the next variables and functions:

- body - Object: Response Body
- status - Integer: Status Code of the response
- idempotency - String: Idempotency Header sended on the request
- pagination - Object: Response object that comes from endpoints that have pagination like Payment Search
- next - Function: Return next page
- hasNext - Function: Check if has next Page (Boolean)
- prev - Function: Return previous page
- hasPrev - Function: Check if has previous page (Boolean)

#### Idempotency

The idempotency is a header send to MercadoPago to identify the operation. You will find more information about this on the Usage section [here](https://github.com/mercadopago/px-nodejs/wiki/Usage#configurations-parameter).

#### Pagination

The pagination is fully explain on the pagination section [here](https://github.com/mercadopago/px-nodejs/wiki/Pagination)

### mercadopagoIpnResponse

This is the response that is going to come from the IPN Manager. This is compose by the next variables:

- body - Object: Response body
- status - Integer: Response status code
- Id - String: id receive from the Webhook
- Topic - String: topic receive from the Webhook

You will find more information about the IPN Manager [here](https://github.com/mercadopago/px-nodejs/wiki/IPN).

### mercadopagoError

This is the error object you receive when a resource fail. It is compose by the following variables and functions:

- name - String: Error name
- message - String: Message receive from MercadoPago API
- cause - Array (Object): Cause receive from MercadoPago API
- stack - Stacktrace from error
- status - Integer: Status code from response
- idempotency - String: Idempotency Id Header
- retry - Function

#### Retry

If a requests fail for time-out or other errors, we expose a method call retry to help you execute the same operation again re-using the **idempotency** and **facilitating** you the way of retrying it. If this method doesnt exists you will need to save the request object and get the **idempotency** from the error and construct the request again. Let's see a comparation:

##### Without retry

```javascript
var payment = {
  description: 'Descripción',
  transaction_amount: 10,
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_3931694@testuser.com',
    identification: {
      type: 'DNI',
      number: '34214577'
    }
  }
};

mercadopago.payment.create(payment).then(function (response) {
  console.log(response);
}).catch(function (err) {
  // Manually retry
  mercadopago.payment.create(payment, {
    idempotency: err.idempotency
  }).then(function (response) {
    console.log(response);
  }).catch(function () {
    // Another Error
  });
});
```

##### With retry

```javascript
mercadopago.payment.create({
  description: 'Descripción',
  transaction_amount: 10,
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_3931694@testuser.com',
    identification: {
      type: 'DNI',
      number: '34214577'
    }
  }
}).then(function (response) {
  console.log(response);
}).catch(function (err) {
  err.retry().then(function (response) {
    console.log(response);
  }).catch(function () {
    // Another Error
  });
});
```


## Pagination

### Automatic Pagination Wrapper

There are some API endpoints that returns the response paginated. For example if you are searching for all the payments that were made for you. Let's see an example:

```javascript
mercadopago.payment.search({
  qs: {
    'collector.id': 'me'
  }
}).then(function (mpResponse) {
  console.log(mpResponse);
});
```

The output is going to be this:
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

As you can see, you have 100 payments, and 30 results per request.

Before, ff you wan't to get the next page, you need to manually execute the search again, like this:

```javascript
mercadopago.payment.search({
  qs: {
    'collector.id': 'me',
    pagination: {
      offset: 30
    }
  }
}).then(function (mpResponse) {
  console.log(mpResponse);
});
```

Then, you receive the next page or de previous page. This seems to much work. To solve this, we inject two methods to the response:

- next: returns a Promise() and also receives a callback with the next page
- hasNext: returns a boolean if a next page exists
- prev: returns a Promise() and also recieves a callback with the previous page
- hasPrev: returns a boolean if a previous page exists

With this, you can check if the results have a next or previous page and actually get it. Let's see an example with next page:

```javascript
mercadopago.payment.search({
  qs: {
    'collector.id': 'me'
  }
}).then(function (mpResponse) {
  if (mpResponse.hasNext()) {
    return mpRepsonse.next();
  }
}).then(function (nextPage) {
  console.log(nextPage);
});
```

You can use callbacks too:

```javascript
mercadopago.payment.search({
  qs: {
    'collector.id': 'me'
  }
}, function(err, mpResponse) {
  if (mpResponse.hasNext()) {
    return mpRepsonse.next(function (nextPage) {
      console.log(nextPage);
    });
  }
});
```

Maybe you wan't to implement a recursive method to get all of your payments.


## IPN Notifications

### IPN Notifications (Webhook)

MercadoPago API sends notifications from [payments](https://www.mercadopago.com.ar/developers/en/api-docs/basic-checkout/ipn/) and [subscriptions](https://www.mercadopago.com.ar/developers/es/api-docs/recurring/ipn/) done. The notification comes with the following parameters:

- topic: Identifies what kind of resource is

  - merchant_order
  - payment
  - preapproval
  - authorized_payment

- id: Unique id of the notification

When you receive this notification you need to do a request to the appropiate endpoint to get the information of the merchant order or from a payment.

Merchant Order:
```
/merchant_orders/[ID]?access_token=[ACCESS_TOKEN]
```

Payment:
```
/v1/payments/[ID]?access_token=[ACCESS_TOKEN] 
```

### IPN Manager

To simplify this flow, we provide a IPN Manager that will make the request to the endpoint thats appropriate. To use it you need to pass the request to the IPN Manager. Let's see how it works:

```javascript
mercadopago.ipn.manage(request).then(function (response) {
  console.log(response);
}).then(function (error) {
  console.log(error);
});
```

The output will be:

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
     currency_id: 'ARS',
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

Inside the response you will find the **topic** received on the request, so you dont need to get the value from it.




