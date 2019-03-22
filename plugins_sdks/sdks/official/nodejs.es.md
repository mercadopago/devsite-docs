# SDK Mercado Pago para Node

* [Instalación](#bookmark_instalación)
* [Web Checkout](#bookmark_web_checkout)
* [Customized checkout](#bookmark_checkout_custom)
* [Generic methods](#bookmark_métodos_genéricos)

## Instalación

```
$ npm install mercadopago
```

### Soporte a Promises y Callbacks

Cada método soporta promises y callbacks. Por ejemplo:

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
es lo mismo que:

```javascript
mp.getAccessToken(function (err, accessToken){
    if (err) {
        console.log (err);
    } else {
        console.log (accessToken);
    }
});
```

Para utilizar callbacks, simplemente pasa una función como último parámetro.

## Web checkout

### Configura tus credenciales


Obtén tu **CLIENT_ID** y **CLIENT_SECRET** en los siguientes links:

* Argentina: [https://www.mercadopago.com/mla/herramientas/aplicaciones](https://www.mercadopago.com/mla/herramientas/aplicaciones)
* Brazil: [https://www.mercadopago.com/mlb/ferramentas/aplicacoes](https://www.mercadopago.com/mlb/ferramentas/aplicacoes)
* México: [https://www.mercadopago.com/mlm/herramientas/aplicaciones](https://www.mercadopago.com/mlm/herramientas/aplicaciones)
* Colombia: [https://www.mercadopago.com/mco/herramientas/aplicaciones](https://www.mercadopago.com/mco/herramientas/aplicaciones)
* Chile: [https://www.mercadopago.com/mlc/herramientas/aplicaciones](https://www.mercadopago.com/mlc/herramientas/aplicaciones)
* Perú: [https://www.mercadopago.com/mpe/herramientas/aplicaciones](https://www.mercadopago.com/mpe/herramientas/aplicaciones)
* Uruguay: [https://www.mercadopago.com/mlu/herramientas/aplicaciones](https://www.mercadopago.com/mlu/herramientas/aplicaciones)


```javascript
var MP = require ("mercadopago");

var mp = new MP ("CLIENT_ID", "CLIENT_SECRET");
```

### Preferencias

#### Obtén una preferencia de pago existente

```javascript
mp.getPreference ("PREFERENCE_ID");
```

#### Crea una preferencia de pago:

```javascript
var preference = {
        "items": [
            {
                "title": "Test",
                "quantity": 1,
                "currency_id": "USD",
                "unit_price": 10.5
            }
        ]
    };

mp.createPreference (preference);
```

#### Actualizar una preferencia de pago existente:

```javascript
var preference = {
        "items": [
            {
                "title": "Test Modified",
                "quantity": 1,
                "currency_id": "USD",
                "unit_price": 20.4
            }
        ]
    };

mp.updatePreference ("PREFERENCE_ID", preference);
```

### Payments/Collections

#### Buscar pagos:

```javascript
var filters = {
        "id": null,
        "site_id": null,
        "external_reference": null
    };

mp.searchPayment (filters)
    .then (
        function success (data) {
            console.log (JSON.stringify (data, null, 4));
        },
        function error (err) {
            console.log (err);
        }
    });
```

#### Obtener la información de un pago:

```javascript
mp.getPayment (qs["id"])
    .then (
        function success (data) {
            console.log (JSON.stringify (data, null, 4));
        },
        function error (err) {
            console.log (err);
        }
    });
```

#### Cancelar (Sólo para pagos pendientes)

```javascript
mp.cancelPayment ("ID");
```

#### Refund (sólo para pagos acreditados)

```javascript
mp.refundPayment ("ID");
```


## Checkout custom

### Configura tus credenciales

Obtén tu **ACCESS_TOKEN** en los siguientes links:

* Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
* Brasil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
* México: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
* Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
* Perú: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)
* Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)

```javascript
var MP = require ("mercadopago");

var mp = new MP ("ACCESS_TOKEN");
```

#### Crear un pago

```javascript
mp.post ({
    "uri": "/v1/payments",
    "data": payment_data
}).then (...);
```

#### Crear un customer

```javascript
mp.post ({
    "uri": "/v1/customers",
    "data": {
        "email": "email@test.com"
    }
}).then (...);
```

#### Obtener un customer

```javascript
mp.get ({
    "uri": "/v1/customers/CUSTOMER_ID"
}).then (...);
```

> Para más información visita la sección [API reference]https://www.mercadopago.com.ar/developers/es/reference).

## Métodos genéricos

Puedes acceder a cualquier otro recurso de la API de Mercado Pago utilizando métodos genéricos:

La estructura básica es:

`mp.method(request).then(...)`

donde `request` puede ser:

```javascript
{
    "uri": "The resource URI, relative to https://api.mercadopago.com",
    "params": "Optional. Key:Value object with parameters to be appended to the URL",
    "data": "Optional. Object or String to be sent in POST and PUT requests",
    "headers": "Optional. Key:Value object with custom headers, like content-type: application/x-www-form-urlencoded",
    "authenticate": "Optional. Boolean to specify if the GET method has to authenticate with credentials before request. Set it to false when accessing public APIs"
}
```

Ejmplos:

```javascript
// Obtener un recurso con URL params opcionales. También puedes deshabilitar la autenticación para APIs públicas.
mp.get ({
    "uri": "/resource/uri",
    "params": {params},
    "authenticate": true
});

// Crear un recurso con "data" y URL params opcionales.
mp.post ({
    "uri": "/resource/uri",
    "data": data,
    "params": {params}
});

// Actualizar un recurso con "data"y URL params opcionales.
mp.put ({
    "uri": "/resource/uri",
    "data": data,
    "params": {params}
});

// Eliminar un recurso con "data" y URL params opcionales.
mp.delete ({
    "uri": "/resource/uri",
    "params": {params}
});
```

 Por ejemplo, si quieres obtener la lista de sitios disponibles (sin parámetros ni autenticación):

```javascript
mp.get ({
    "uri": "/sites",
    "authenticate": false
}).then (function (sites) {
    console.log (sites);
});
```
