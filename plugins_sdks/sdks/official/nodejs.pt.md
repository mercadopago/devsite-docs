# Mercado Pago SDK para Node JS

* [Instalação](#install)
* [Checkout Básico](#basic-checkout)
* [Checkout Customizado](#custom-checkout)
* [Métodos Genéricos](#generic-methods)

<a name="install"></a>
## Instalação

```
$ npm install mercadopago
```

### Promises e Callbacks suportados

Todo método suporta `promises` e `callbacks`. Por exemplo:

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

é o mesmo que:

```javascript
mp.getAccessToken(function (err, accessToken){
    if (err) {
        console.log (err);
    } else {
        console.log (accessToken);
    }
});
```

Para usar callbacks, simplesmente passe uma função como último parâmetro.

<a name="basic-checkout"></a>
## Checkout Básico

### Configure suas credenciais

* Obtenha seu **CLIENT_ID** e **CLIENT_SECRET** no seguinte endereço:
    * Argentina: [https://www.mercadopago.com/mla/herramientas/aplicaciones](https://www.mercadopago.com/mla/herramientas/aplicaciones)
    * Brazil: [https://www.mercadopago.com/mlb/ferramentas/aplicacoes](https://www.mercadopago.com/mlb/ferramentas/aplicacoes)
    * México: [https://www.mercadopago.com/mlm/herramientas/aplicaciones](https://www.mercadopago.com/mlm/herramientas/aplicaciones)
    * Colombia: [https://www.mercadopago.com/mco/herramientas/aplicaciones](https://www.mercadopago.com/mco/herramientas/aplicaciones)
    * Chile: [https://www.mercadopago.com/mlc/herramientas/aplicaciones](https://www.mercadopago.com/mlc/herramientas/aplicaciones)
    * Uruguay: [https://www.mercadopago.com/mlu/herramientas/aplicaciones](https://www.mercadopago.com/mlu/herramientas/aplicaciones)

```javascript
var MP = require ("mercadopago");

var mp = new MP ("CLIENT_ID", "CLIENT_SECRET");
```

### Preferências

#### Receba uma preferência de Checkout existente

```javascript
mp.getPreference ("PREFERENCE_ID");
```

#### Crie uma preferência de Checkout

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

#### Atualize uma preferência de Checkout existente:

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

#### Busque pagamentos

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

#### Obtenha dados de pagamentos

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

#### Cancelar (apenas para pagamentos pendentes)

```javascript
mp.cancelPayment ("ID");
```

#### Restituir (apenas para pagamentos créditos)

```javascript
mp.refundPayment ("ID");
```

<a name="custom-checkout"></a>
## Checkout customizado

### Configure suas credenciais

* Obtenha seu **ACCESS_TOKEN** no seguinte endereço:
    * Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
    * Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
    * Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
    * Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
    * Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)

```javascript
var MP = require ("mercadopago");

var mp = new MP ("ACCESS_TOKEN");
```

### Criar pagamento

```javascript
mp.post ({
    "uri": "/v1/payments",
    "data": payment_data
}).then (...);
```

### Criar cliente

```javascript
mp.post ({
    "uri": "/v1/customers",
    "data": {
        "email": "email@test.com"
    }
}).then (...);
```

### Obter cliente

```javascript
mp.get ({
    "uri": "/v1/customers/CUSTOMER_ID"
}).then (...);
```

* Veja mais APIs relacionadas a Checkout Custom em Developers Site
    * Argentina: [https://www.mercadopago.com.ar/developers](https://www.mercadopago.com.ar/developers)
    * Brazil: [https://www.mercadopago.com.br/developers](https://www.mercadopago.com.br/developers)
    * Mexico: [https://www.mercadopago.com.mx/developers](https://www.mercadopago.com.mx/developers)
    * Colombia: [https://www.mercadopago.com.co/developers](https://www.mercadopago.com.co/developers)
    * Uruguay: [https://www.mercadopago.com.uy/developers](https://www.mercadopago.com.uy/developers)

<a name="generic-methods"></a>
## Métodos genéricos

Você pode acessar qualquer recurso da API do [Mercado Pago API](https://api.mercadopago.com) usando métodos genéricos.
A estrutura básica é:

`mp.method(request).then(...)`

onde `request` pode ser:

```javascript
{
    "uri": "O recurso URI, relativo a https://api.mercadopago.com",
    "params": "Opcional. Key:Valor do objeto com parâmetros a serem anexados a URL",
    "data": "Opcional. Objeto ou String a ser enviado no POST e PUT requests",
    "headers": "Opcional. Key:Valor do objeto com custom headers, como content-type: application/x-www-form-urlencoded",
    "authenticate": "Opcional. Boolean para especificar se o método GET deve autenticar com as credenciais antes da requisição. Configure como false quando acessando uma API pública."
}
```

Exemplos:

```javascript
// Obtenha um recurso com parâmetros de URL opcionais. Além disso, você pode desativar a autenticação de APIs públicas
mp.get ({
    "uri": "/resource/uri",
    "params": {params},
    "authenticate": true
});

// Crie um recurso com "data" e parâmetros opcionais de URL.
mp.post ({
    "uri": "/resource/uri",
    "data": data,
    "params": {params}
});

// Atualize um recurso com "data" e parâmetros opcionais de URL.
mp.put ({
    "uri": "/resource/uri",
    "data": data,
    "params": {params}
});

// Delete um recurso com parâmetros opcionais de URL.
mp.delete ({
    "uri": "/resource/uri",
    "params": {params}
});
```

Por exemplo, se você deseja obter a lista de sites (sem parâmetros e sem autenticação):

```javascript
mp.get ({
    "uri": "/sites",
    "authenticate": false
}).then (function (sites) {
    console.log (sites);
});
```