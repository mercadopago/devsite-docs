---
indexable: false

sites_supported:
  - mla
  - mlm
  - mlb
---

# Ofereça Mercado Envios

Integre o Mercado Envios para receber o pagamento dos seus produtos e gerenciar seus envios ao mesmo tempo. Basta adicionar os dados necessários em Preferências e configurar os dados do seu negócio.


## Requisito prévio

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ative o Mercado Envios

Pela conta do vendedor, entre na seção do [Seu negócio > Configurações](https://www.mercadopago[FAKER][URL][DOMAIN]/business#shipping) e ative a opção do Mercado Envios.

Usaremos o endereço cadastrado para mostrar os pontos de envio próximos para onde o vendedor poderá levar os pacotes e calcular os custos de envio.


## Adicione envios em Preferências

Em Preferências, configure o peso e as dimensões dos pacotes, como no código a seguir. 
 

[[[
```php
===
 Respeite o formato das dimensões, em centímetros e gramas, conforme corresponda: alturaxlarguraxcomprimento, peso. 
===
<?php

  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  
  $shipments->receiver_address=array(
    "zip_code" => "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number" => 1000,
    "street_name" => "[FAKER][ADDRESS][STREET_NAME]",
    "floor" => "4",
    "apartment" => "C"
  );

  $preference->shipments = $shipments;

?>
```
```java
===
 Respeite o formato das dimensões, em centímetros e gramas, conforme corresponda: alturaxlarguraxcomprimento, peso. 
===
Preference preference = new Preference();

Shipments shipments = new Shipments();

// Não é obrigatório definir a propriedade AddressReceiver
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP_CODE]", 1000, "[FAKER][ADDRESS][STREET_NAME]", "4", "C"));

preference.setShipments(shipments);


```
```node
===
Respeite o formato das dimensões, em centímetros e gramas, conforme corresponda: alturaxlarguraxcomprimento, peso. 
===
var preference = {}


var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
  "receiver_address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number": 1000,
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "floor": "4",
    "apartment": "C"
  }
};

preference.shipments = shipments

```
```ruby
===
 Respect the dimensions format, in centimeters and grams as appropriate: heightx width x length, weight. 
===
# ...
preference_data = {
  # ...
  shipment: {
    mode: 'me2',
    dimensions: '30x30x30,500',
    receiver_address: {
      zip_code: '[FAKER][ADDRESS][ZIP_CODE]',
      street_number: 1000,
      street_name: '[FAKER][ADDRESS][STREET_NAME]',
      floor: '4',
      apartment: 'C'
    }
  }
  # ...
}
# ...
```
```csharp
===
 Respeite o formato das dimensões, em centímetros e gramas, conforme corresponda: alturaxlarguraxcomprimento, peso. 
===
var request = new PreferenceRequest
{
    // ...
    Shipments = new PreferenceShipmentsRequest
    {
        Mode = "me2",
        Dimensions = "30x30x30,500",
        ReceiverAddress = new PreferenceReceiverAddressRequest
        {
            ZipCode = "[FAKER][ADDRESS][ZIP_CODE]",
            StreetNumber = "1000",
            StreetName = "[FAKER][ADDRESS][STREET_NAME]",
            Floor = "4",
            Apartment = "C",
        },
    },
};
```
```python
preference_data = {
    # ...
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_number": 1000,
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "floor": "4",
            "apartment": "C"
        }
    }
    # ...
}
```
]]]

> WARNING
>
> Importante
>
>Respeite o formato das dimensões, em centímetros e gramas, conforme corresponda: alturaxlarguraxcomprimento, peso. 


## Você pode adicionar outros tipos de envio

Por padrão, você terá configurado o envio por conta do comprador. Se quiser, você pode oferecer frete grátis e/ou retirada em domicílio.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Frete grátis

----[mlb]----
O custo do envio será debitado da conta do vendedor quando receber um pagamento. 

Você pode oferecer diferentes formas de envio alterando o ID. Confira os [ID de formas de envio](https://api.mercadolibre.com/shipping_methods/search?site_id=[FAKER][GLOBALIZE][UPPER_SITE_ID]&shipping_mode=me2&allow_free_shipping=true) disponíveis para saber quais adicionar.

Por exemplo, no código a seguir, o `ID 505345` se encontra adicionado, referente a um envio normal em domicílio de Mercado Envios e o `ID 100009` para envio normal de Correios.


[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  // ...
  $shipments->free_methods = array(
    array("id"=>505345,
          "id2"=>100009) 
  );
  // ...

  $preference->shipments = $shipments;
?>
```
```java
Preference preference = new Preference();

Shipments shipments = new Shipments();
// ...
shipments.setFreeMethods(505345, 100009); 
// ...
preference.setShipments(shipments);

```
```node
var preference = {}

var shipments = {
  //..
  "free_methods": [
      {
          "id": 505345
      },
      {
          "id": 100009
      }
    ],
  //..
}
preference.shipments = shipments

```
```ruby
# ...
preference_data = {
  # ...
  shipments: {
    free_methods: [
      { id: 505345 },
      { id: 100009 }
    ]
  }
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    Shipments = new PreferenceShipmentsRequest
    {
        // ...
        FreeMethods = new List<PreferenceFreeMethodRequest>
        {
            new PreferenceFreeMethodRequest
            {
                Id = 505345,
            },
            new PreferenceFreeMethodRequest
            {
                Id = 100009,
            },
        },
    },
};
```
```python
preference_data = {
    # ...
    "shipments": {
        "free_methods": [
            {
                "id": 505345
            },
            {
                "id": 100009
            }
        ]
    }
    # ...
}
```
]]]

------------
----[mla]----
O custo do envio será debitado da conta do vendedor quando receber um pagamento. 

Você pode oferecer diferentes formas de envio alterando o ID. Confira os [ID de formas de envio](https://api.mercadolibre.com/shipping_methods/search?site_id=[FAKER][GLOBALIZE][UPPER_SITE_ID]&shipping_mode=me2&allow_free_shipping=true) disponíveis para saber quais adicionar.

Por exemplo, no código a seguir, o `ID 73328` se encontra adicionado, referente a um envio normal de OCA e o `ID 504945` para envio normal de Andreani.


[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  // ...
  $shipments->free_methods = array(
    array("id"=>73328,
          "id2"=>504945) 
  );
  // ...

  $preference->shipments = $shipments;
?>
```
```java
Preference preference = new Preference();

Shipments shipments = new Shipments();
// ...
shipments.setFreeMethods(73328, 504945); 
// ...
preference.setShipments(shipments);

```
```node
var preference = {}

var shipments = {
  //..
  "free_methods": [
      {
          "id": 73328
      },
      {
          "id": 504945
      }
    ],
  //..
}
preference.shipments = shipments

```
```ruby
# ...
preference_data = {
  # ...
  shipments: {
    free_methods: [
      { id: 73328 },
      { id: 504945 }
    ]
  }
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    Shipments = new PreferenceShipmentsRequest
    {
        // ...
        FreeMethods = new List<PreferenceFreeMethodRequest>
        {
            new PreferenceFreeMethodRequest
            {
                Id = 73328,
            },
            new PreferenceFreeMethodRequest
            {
                Id = 504945,
            },
        },
    },
};
```
```python
preference_data = {
    # ...
    "shipments": {
        "free_methods": [
            {
                "id": 73328
            },
            {
                "id": 504945
            }
        ],
    }
    # ...
}
```
]]]

------------
----[mlm]----

O custo do envio será debitado da conta do vendedor quando receber um pagamento. 

Você pode oferecer diferentes formas de envio alterando o ID. Confira os [ID de formas de envio](https://api.mercadolibre.com/shipping_methods/search?site_id=[FAKER][GLOBALIZE][UPPER_SITE_ID]&shipping_mode=me2&allow_free_shipping=true) disponíveis para saber quais adicionar.

Por exemplo, no código a seguir, o `ID 509247` se encontra adicionado, referente a um envio normal em domicílio e o `ID 509245` para envio prioritário para uma agência dos correios.


[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  // ...
  $shipments->free_methods = array(
    array("id"=>509247,
          "id2"=>509245) 
  );
  // ...

  $preference->shipments = $shipments;
?>
```
```java
Preference preference = new Preference();

Shipments shipments = new Shipments();
// ...
shipments.setFreeMethods(509247, 509245); 
// ...
preference.setShipments(shipments);

```
```node
var preference = {}

var shipments = {
  //..
  "free_methods": [
      {
          "id": 509247
      },
      {
          "id": 509245
      }
    ],
  //..
}
preference.shipments = shipments

```
```ruby
# ...
preference_data = {
  # ...
  shipments: {
    free_methods: [
      { id: 509247 },
      { id: 509245 }
    ]
  }
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    Shipments = new PreferenceShipmentsRequest
    {
        // ...
        FreeMethods = new List<PreferenceFreeMethodRequest>
        {
            new PreferenceFreeMethodRequest
            {
                Id = 509247,
            },
            new PreferenceFreeMethodRequest
            {
                Id = 509245,
            },
        },
    },
};
```
```python
preference_data = {
    # ...
    "shipments": {
        "free_methods": [
            {
                "id": 509247
            },
            {
                "id": 509245
            }
        ]
    }
    # ...
}
```
]]]
------------

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Simulador de custos de envio

Você pode simular custos pela calculadora de envios. Para isso, você deve substituir os valores `sellerId`, `shippingMethod Id`, `price`, `zipCode`, `altura`, `largura`, `comprimento`, `peso` do seu pacote.

Como por exemplo:

> https://api.mercadolibre.com/users/_sellerId_/shipping_options?free_method=_shippingMethodId_&item_price=_price_&zip_code=_zipCode_&dimensions=_altura_x_largura_x_comprimento_,_peso

[[[
```curl

curl --location --request GET 'http://api.mercadolibre.com/users/179504451/shipping_options?free_method=182&item_price=718&zip_code=[FAKER][ADDRESS][ZIP_CODE]&dimensions=2x11x16,88'

```
]]]


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Retirada em domicílio

Você também pode oferecer a possibilidade de retirar o produto no endereço configurado, indicando ao comprador quando e onde retirá-lo. 

[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $shipments = new MercadoPago\Shipments();
  // ...
  $shipments->local_pickup = true;
  // ...

  $preference->shipments = $shipments;
?>
```
```java
Preference preference = new Preference();

Shipments shipments = new Shipments();
// ...
shipments.setLocalPickup(true);
// ...
preference.setShipments(shipments);

```
```node
var preference = {}

var shipments = {
  //..
  "local_pickup": true
  //..
}
preference.shipments = shipments

```
```ruby
# ...
preference_data = {
  # ...
  shipments: {
    local_pickup: true
  }
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    Shipments = new PreferenceShipmentsRequest
    {
        // ...
        LocalPickup = true,
    },
};
```
```python
preference_data = {
    # ...
    "shipments": {
        # ...
        "local_pickup": True
    }
    # ...
}
```
]]]

**Pronto! O Mercado Envios já está integrado.** 

Quando receber uma venda, basta ----[mla, mlm]---- [preparar o pacote e enviá-lo](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/_1603). ------------ ----[mlb]---- [preparar o pacote e enviá-lo](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/_1603). ------------

> NOTE
>
> Gestão de etiquetas
>
> Quando uma venda é feita, você receberá um e-mail com um botão para imprimir a etiqueta que será anexada no pacote. Você também pode ver os [pagamentos pendentes de impressão](https://www.mercadopago[FAKER][URL][DOMAIN]/activities?type=facet_type_collection&status=facet_shipping_me_all) pela conta Mercado Pago que recebeu a venda..


## Exemplo de uma preferência completa

----[mlb]----
[[[
```php
<?php

  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "Blue shirt";
  $item->quantity = 10;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "john@yourdomain.com";

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  $shipment->default_shipping_method = 505345;
  $shipments->free_methods = array(
    array("id"=>505345,
          "id2"=>100009)
  );
  $shipments->receiver_address=array(
    "zip_code" => "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number" => 1000,
    "street_name" => "[FAKER][ADDRESS][STREET_NAME]",
    "floor" => "4",
    "apartment" => "C"
  );

  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->shipments = $shipments;

  $preference->save();

?>
```
```java
Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("Blue shirt")
    .setQuantity(10)
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("john@yourdomain.com");


Shipments shipments = new Shipments();
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP_CODE]", 1000, "[FAKER][ADDRESS][STREET_NAME]", "4", "C"));

shipments.setFreeMethods(505345, 100009); 

preference.setPayer(payer);
preference.appendItem(item);
preference.setShipments(shipments);

preference.save();

```
```node
var preference = {}

var item = {
  "title": 'Blue shirt',
  "quantity": 10,
  "currency_id": '[FAKER][CURRENCY][ACRONYM]',
  "unit_price": [FAKER][COMMERCE][PRICE]
}

var payer = {
  "email": "john@yourdomain.com"
}

var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
  "receiver_address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number": 1000,
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "floor": "4",
    "apartment": "C"
  },
  "free_methods": [
    {
      "id": 505345
    },
    {
      "id": 100009
    }
  ]

};

preference.items = [item]
preference.payer = payer
preference.shipments = shipments

mercadopago.preferences.create(preference).then(function (data) {
   // Do Stuff...
 }).catch(function (error) {
   // Do Stuff...
 });

```
```ruby

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

preference_data = {
  items: [
    {
      title: 'Blue shirt',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  },
  shipment: {
    mode: 'me2',
    dimensions: '30x30x30,500',
    receiver_address: {
      zip_code: '[FAKER][ADDRESS][ZIP_CODE]',
      street_number: 1000,
      street_name: '[FAKER][ADDRESS][STREET_NAME]',
      floor: '4',
      apartment: 'C'
    }
  },
  free_methods: [
    { id: 505345 },
    { id: 100009 }
  ]
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

```
```csharp
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Blue shirt",
            Quantity = 1,
            UnitPrice = [FAKER][COMMERCE][PRICE]m,
        },
    },
    Payer = new PreferencePayerRequest
    {
        Email = "john@yourdomain.com",
    },
    Shipments = new PreferenceShipmentsRequest
    {
        Mode = "me2",
        Dimensions = "30x30x30,500",
        LocalPickup = true,
        FreeMethods = new List<PreferenceFreeMethodRequest>
        {
            new PreferenceFreeMethodRequest
            {
                Id = 505345,
            },
            new PreferenceFreeMethodRequest
            {
                Id = 100009,
            },
        },
        ReceiverAddress = new PreferenceReceiverAddressRequest
        {
            ZipCode = "[FAKER][ADDRESS][ZIP_CODE]",
            StreetNumber = "1000",
            StreetName = "[FAKER][ADDRESS][STREET_NAME]",
            Floor = "4",
            Apartment = "C",
        },
    },
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
preference_data = {
    "items": [
        {
            "title": 'Blue shirt',
            "quantity": 10,
            "currency_id": '[FAKER][CURRENCY][ACRONYM]',
            "unit_price": [FAKER][COMMERCE][PRICE]
        }
    ],
    "payer": {
        "email": "john@yourdomain.com"
    },
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_number": 1000,
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "floor": "4",
            "apartment": "C"
        },
        "free_methods": [
            {
                "id": 505345
            },
            {
                "id": 100009
            }
        ]
    }
}
```
]]]
------------
----[mla]----
[[[
```php
<?php

  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "Blue shirt";
  $item->quantity = 10;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "john@yourdomain.com";

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  $shipment->default_shipping_method = 73328;
  $shipments->free_methods = array(
    array("id"=>73328,
          "id2"=>504945)
  );
  $shipments->receiver_address=array(
    "zip_code" => "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number" => 1000,
    "street_name" => "[FAKER][ADDRESS][STREET_NAME]",
    "floor" => "4",
    "apartment" => "C"
  );

  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->shipments = $shipments;

  $preference->save();

?>
```
```java
Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("Blue shirt")
    .setQuantity(10)
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("john@yourdomain.com");


Shipments shipments = new Shipments();
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP_CODE]", 1000, "[FAKER][ADDRESS][STREET_NAME]", "4", "C"));

shipments.setFreeMethods(73328, 504945); 

preference.setPayer(payer);
preference.appendItem(item);
preference.setShipments(shipments);

preference.save();

```
```node
var preference = {}

var item = {
  "title": 'Blue shirt',
  "quantity": 10,
  "currency_id": '[FAKER][CURRENCY][ACRONYM]',
  "unit_price": [FAKER][COMMERCE][PRICE]
}

var payer = {
  "email": "john@yourdomain.com"
}

var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
  "receiver_address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number": 1000,
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "floor": "4",
    "apartment": "C"
  },
  "free_methods": [
    {
      "id": 73328
    },
    {
      "id": 504945
    }
  ]

};

preference.items = [item]
preference.payer = payer
preference.shipments = shipments

mercadopago.preferences.create(preference).then(function (data) {
   // Do Stuff...
 }).catch(function (error) {
   // Do Stuff...
 });

```
```ruby

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

preference_data = {
  items: [
    {
      title: 'Blue shirt',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  },
  shipment: {
    mode: 'me2',
    dimensions: '30x30x30,500',
    receiver_address: {
      zip_code: '[FAKER][ADDRESS][ZIP_CODE]',
      street_number: 1000,
      street_name: '[FAKER][ADDRESS][STREET_NAME]',
      floor: '4',
      apartment: 'C'
    }
  },
  free_methods: [
    { id: 73328 },
    { id: 504945 }
  ]
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

```
```csharp
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Blue shirt",
            Quantity = 1,
            UnitPrice = [FAKER][COMMERCE][PRICE]m,
        },
    },
    Payer = new PreferencePayerRequest
    {
        Email = "john@yourdomain.com",
    },
    Shipments = new PreferenceShipmentsRequest
    {
        Mode = "me2",
        Dimensions = "30x30x30,500",
        LocalPickup = true,
        FreeMethods = new List<PreferenceFreeMethodRequest>
        {
            new PreferenceFreeMethodRequest
            {
                Id = 73328,
            },
            new PreferenceFreeMethodRequest
            {
                Id = 504945,
            },
        },
        ReceiverAddress = new PreferenceReceiverAddressRequest
        {
            ZipCode = "[FAKER][ADDRESS][ZIP_CODE]",
            StreetNumber = "1000",
            StreetName = "[FAKER][ADDRESS][STREET_NAME]",
            Floor = "4",
            Apartment = "C",
        },
    },
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
preference_data = {
    "items": [
        {
            "title": 'Blue shirt',
            "quantity": 10,
            "currency_id": '[FAKER][CURRENCY][ACRONYM]',
            "unit_price": [FAKER][COMMERCE][PRICE]
        }
    ],
    "payer": {
        "email": "john@yourdomain.com"
    },
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_number": 1000,
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "floor": "4",
            "apartment": "C"
        },
        "free_methods": [
            {
                "id": 73328
            },
            {
                "id": 504945
            }
        ]
    }
}
```
]]]
------------
----[mlm]----
[[[
```php
<?php

  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "Blue shirt";
  $item->quantity = 10;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "john@yourdomain.com";

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  $shipment->default_shipping_method = 509247;
  $shipments->free_methods = array(
    array("id"=>509247,
          "id2"=>509245)
  );
  $shipments->receiver_address=array(
    "zip_code" => "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number" => 1000,
    "street_name" => "[FAKER][ADDRESS][STREET_NAME]",
    "floor" => "4",
    "apartment" => "C"
  );

  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->shipments = $shipments;

  $preference->save();

?>
```
```java
Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("Blue shirt")
    .setQuantity(10)
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("john@yourdomain.com");


Shipments shipments = new Shipments();
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP_CODE]", 1000, "[FAKER][ADDRESS][STREET_NAME]", "4", "C"));

shipments.setFreeMethods(509247, 509245); 

preference.setPayer(payer);
preference.appendItem(item);
preference.setShipments(shipments);

preference.save();

```
```node
var preference = {}

var item = {
  "title": 'Blue shirt',
  "quantity": 10,
  "currency_id": '[FAKER][CURRENCY][ACRONYM]',
  "unit_price": [FAKER][COMMERCE][PRICE]
}

var payer = {
  "email": "john@yourdomain.com"
}

var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
  "receiver_address": {
    "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
    "street_number": 1000,
    "street_name": "[FAKER][ADDRESS][STREET_NAME]",
    "floor": "4",
    "apartment": "C"
  },
  "free_methods": [
    {
      "id": 509247
    },
    {
      "id": 509245
    }
  ]

};

preference.items = [item]
preference.payer = payer
preference.shipments = shipments

mercadopago.preferences.create(preference).then(function (data) {
   // Do Stuff...
 }).catch(function (error) {
   // Do Stuff...
 });

```
```ruby

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

preference_data = {
  items: [
    {
      title: 'Blue shirt',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  },
  shipment: {
    mode: 'me2',
    dimensions: '30x30x30,500',
    receiver_address: {
      zip_code: '[FAKER][ADDRESS][ZIP_CODE]',
      street_number: 1000,
      street_name: '[FAKER][ADDRESS][STREET_NAME]',
      floor: '4',
      apartment: 'C'
    }
  },
  free_methods: [
    { id: 509247 },
    { id: 509245 }
  ]
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

```
```csharp
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Blue shirt",
            Quantity = 1,
            UnitPrice = [FAKER][COMMERCE][PRICE]m,
        },
    },
    Payer = new PreferencePayerRequest
    {
        Email = "john@yourdomain.com",
    },
    Shipments = new PreferenceShipmentsRequest
    {
        Mode = "me2",
        Dimensions = "30x30x30,500",
        LocalPickup = true,
        FreeMethods = new List<PreferenceFreeMethodRequest>
        {
            new PreferenceFreeMethodRequest
            {
                Id = 509247,
            },
            new PreferenceFreeMethodRequest
            {
                Id = 509245,
            },
        },
        ReceiverAddress = new PreferenceReceiverAddressRequest
        {
            ZipCode = "[FAKER][ADDRESS][ZIP_CODE]",
            StreetNumber = "1000",
            StreetName = "[FAKER][ADDRESS][STREET_NAME]",
            Floor = "4",
            Apartment = "C",
        },
    },
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
preference_data = {
    "items": [
        {
            "title": 'Blue shirt',
            "quantity": 10,
            "currency_id": '[FAKER][CURRENCY][ACRONYM]',
            "unit_price": [FAKER][COMMERCE][PRICE]
        }
    ],
    "payer": {
        "email": "john@yourdomain.com"
    },
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_number": 1000,
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "floor": "4",
            "apartment": "C"
        },
        "free_methods": [
            {
                "id": 509247
            },
            {
                "id": 509245
            }
        ]
    }
}
```
]]]
------------

---
### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Teste sua integração
>
> Certifique-se de que esteja tudo correto na sua integração com os usuários de teste.
>
> [Testes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/test-integration)
