# Datos adicionales sobre industrias

Dependiendo del ramo de actividades o industria de tu tienda, existen una serie de datos que pueden ser enviados al crear un pago que ayudarán a mejorar tu aprobación. Puedes verlos detallados por industria a continuación.

> WARNING 
> 
> Atención
>
> Uso de ejemplos
> 
> Esta información solo funciona para las integraciones con Payment API. Para ver información sobre integraciones estándar, haz clic [aquí](/developers/es/reference/payments/_payments/post).

## Apparel

### Campos a enviar
Agrega toda la información adicional que quieras.

#### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nombre |
| `type` | String | Tipo |
| `description` | String | Descripción |
| `picture_url` | String | URL de imagen |
| `category_id` | String | Categoría |
| `quantity` | Integer | Cantidad |
| `unit_price` | Float | Precio unitario |

#### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre |
| `last_name` | String | Apellido |
| `identification` | Object | Datos de identificación |
| `identification_type` | String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `phone` | Object | Teléfono |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfono |
| `address` | Object | Datos de dirección |
| `zip_code` | String | Código postal |
| `street_name` | String | Nombre de calle |
| `street_number` | Integer | Número de calle |
| `authentication_type` | Enum | Tipo de autenticación ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |

#### Sobre envíos

| Object `shipment` | Tipo | Descripción |
| --- | --- | --- |
| `receiver_address` | Object | Datos de dirección del comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Provincia |
| `city_name` | String | Ciudad |
| `street_number` | Integer | Número de calle |
| `express_shipment` | Boolean | `True` si lo es, `False` si no lo es. |


## Electro

### Campos a enviar
Agrega toda la información adicional que quieras.

#### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nombre |
| `category_id` | String | Categoría |
| `quantity` | Integer | Cantidad |
| `unit_price` | Float | Precio unitario |
| `warranty` | Boolean | `True` si el producto tiene garantía, `False` si no la tiene. |

#### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre |
| `last_name` | String | Apellido |
| `identification` | Object | Datos de identificación |
| `identification_type` | String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `phone` | Object | Teléfono |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfono |
| `address` | Object | Datos de dirección |
| `zip_code` | String | Código postal |
| `street_name` | String | Nombre de calle |
| `street_number` | Integer | Número de calle |
| `authentication_type` | Enum | Tipo de autenticación ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |

#### Sobre envíos

| Object `shipment` | Tipo | Descripción |
| --- | --- | --- |
| `pick_up_on_seller` | Boolean | `True` si retira en sucursal, `False` si no lo hace |
| `receiver_address` | Object | Datos de dirección del comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Provincia |
| `city_name` | String | Ciudad |
| `street_number` | Integer | Número de calle |
| `express_shipment` | Boolean | `True` si lo es, `False` si no lo es. |


## Tickets y entretenimiento

### Campos a enviar
Agrega toda la información adicional que quieras.

#### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nombre |
| `description` | String | Razón del pago o nombre del ítem |
| `picture_url` | String | URL de la foto del producto |
| `category_id` | String | Categoría |
| `quantity` | Integer | Cantidad |
| `unit_price` | Float | Precio unitario |
| `event_date` | Date | Fecha |

#### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre |
| `last_name` | String | Apellido |
| `identification` | Object | Datos de identificación |
| `identification_type` | String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `phone` | Object | Teléfono |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfono |
| `authentication_type` | Enum | Tipo de autenticación ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |


#### Sobre envíos

| Object `shipment` | Tipo | Descripción |
| --- | --- | --- |
| `receiver_address` | Object | Datos de dirección del comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Provincia |
| `city_name` | String | Ciudad |
| `street_number` | Integer | Número de calle |
| `express_shipment` | Boolean | `True` si lo es, `False` si no lo es. |

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ACCESS_TOKEN' \
--data-raw '{
    "transaction_amount": 12.34,
    "installments": 1,
    "statement_descriptor": "LOJA 123",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": null,
    "application_fee": null,
    "payment_method_id": "master",
    "token": "{{card_token_id}}",
    "external_reference": "Pedido 01",
    "notification_url": "{{notification_url}}",
    "metadata": {
        "order_number": "order_01"
    },
    "description": "PEDIDO NOVO - INGRESSO",
    "payer": {
        "first_name": "Nome",
        "last_name": "Sobrenome",
        "email": "test_user_123456789@testuser.com",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        },
        "address": {
            "zip_code": "06233200",
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
    },
    "additional_info": {
        "items": [
            {
                "id": "1941",
                "title": "25/08/2022 | Pista Inteira5 lote - GREEN VALLEY GRAMADO 2022",
                "description": "25/08/2022 | Pista Inteira5 lote - GREEN VALLEY GRAMADO 2022",
                "picture_url": null,
                "category_id": "Tickets",
                "quantity": 1,
                "unit_price": 100.00,
                "event_date": "2019-12-25T19:30:00.000-03:00"
            }
        ],
        "payer": {
            "first_name": "Nome",
            "last_name": "Sobrenome",
            "is_prime_user": "1",
            "is_first_purchase_online": "1",
            "last_purchase": "2019-10-25T19:30:00.000-03:00",
            "phone": {
                "area_code": "11",
                "number": "987654321"
            },
            "address": {
                "zip_code": "06233-200",
                "street_name": "Av. das Nações Unidas",
                "street_number": "3003"
            },
            "registration_date": "2020-08-06T09:25:04.000-03:00"
        },
        "shipments": {
            "express_shipment": "0",
            "pick_up_on_seller": "1",
            "receiver_address": {
                "zip_code": "06233-200",
                "street_name": "Av. das Nações Unidas",
                "street_number": "3003",
                "floor": "",
                "apartment": ""
            }
        }
    }
}'
```

## Home & deco

### Campos a enviar
Agrega toda la información adicional que quieras.

#### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nombre |
| `description` | String | Descripción |
| `category_id` | String | Categoría |
| `quantity` | Integer | Cantidad |
| `unit_price` | Float | Precio unitario |
| `warranty` | Boolean | `True` si el producto tiene garantía, `False` si no la tiene. |

#### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre |
| `last_name` | String | Apellido |
| `identification` | Object | Datos de identificación |
| `identification_type` | String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `phone` | Object | Teléfono |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfono |
| `address` | Object | Datos de dirección |
| `zip_code` | String | Código postal |
| `street_name` | String | Nombre de calle |
| `street_number` | Integer | Número de calle |
| `authentication_type` | Enum | Tipo de autenticación ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |

#### Sobre envíos

| Object `shipment` | Tipo | Descripción |
| --- | --- | --- |
| `receiver_address` | Object | Datos de dirección del comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Provincia |
| `city_name` | String | Ciudad |
| `street_number` | Integer | Número de calle |
| `express_shipment` | Boolean | `True` si lo es, `False` si no lo es. |


## Aplicaciones y plataformas online

### Campos a enviar
Agrega toda la información adicional que quieras.

#### Sobre los ítems


| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nombre |
| `category_id` | String | Categoría |
| `quantity` | Integer | Cantidad |
| `unit_price` | Float | Precio unitario |

#### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre |
| `last_name` | String | Apellido |
| `identification` | Object | Datos de identificación |
| `identification_type` | String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `phone` | Object | Teléfono |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfono |
| `address` | Object | Datos de dirección |
| `zip_code` | String | Código postal |
| `street_name` | String | Nombre de calle |
| `street_number` | Integer | Número de calle |
| `authentication_type` | Enum | Tipo de autenticación ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |


## Retail

### Campos a enviar
Agrega toda la información adicional que quieras.

#### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nombre |
| `description` | String | Descripción |
| `picture_url` | String | URL de imagen |
| `category_id` | String | Categoría |
| `quantity` | Integer | Cantidad |
| `unit_price` | Float | Precio unitario |

#### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre |
| `last_name` | String | Apellido |
| `identification` | Object | Datos de identificación |
| `identification_type` | String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `phone` | Object | Teléfono |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfono |
| `address` | Object | Datos de dirección |
| `zip_code` | String | Código postal |
| `street_name` | String | Nombre de calle |
| `street_number` | Integer | Número de calle |
| `authentication_type` | Enum | Tipo de autenticación ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |

#### Sobre envíos

| Object `shipment` | Tipo | Descripción |
| --- | --- | --- |
| `receiver_address` | Object | Datos de dirección del comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Provincia |
| `city_name` | String | Ciudad |
| `street_number` | Integer | Número de calle |
| `express_shipment` | Boolean | `True` si lo es, `False` si no lo es. |


## Gobierno y servicios públicos

### Campos a enviar
Agrega toda la información adicional que quieras.

#### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nombre |
| `description` | String | Descripción |
| `category_id` | String | Categoría |
| `quantity` | Integer | Cantidad |
| `unit_price` | Float | Precio unitario |
| `event_date` | Date | Fecha del evento |

#### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre |
| `last_name` | String | Apellido |
| `identification` | Object | Datos de identificación |
| `identification_type` | String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `phone` | Object | Teléfono |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfono |
| `address` | Object | Datos de dirección |
| `zip_code` | String | Código postal |
| `street_name` | String | Nombre de calle |
| `street_number` | Integer | Número de calle |
| `authentication_type` | Enum | Tipo de autenticación ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |

#### Sobre envíos

| Object `shipment` | Tipo | Descripción |
| --- | --- | --- |
| `receiver_address` | Object | Datos de dirección del comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Provincia |
| `city_name` | String | Ciudad |
| `street_number` | Integer | Número de calle |

## Turismo

### Campos a enviar
Agrega toda la información adicional que quieras.

#### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nombre |
| `description` | String | Descripción |
| `category_id` | String | Categoría |
| `quantity` | Integer | Cantidad |
| `unit_price` | Float | Precio unitario |
| `category_descriptor` | Object | Descripción de la categoría. |
| `passenger` | Object | Información adicional del pasajero. |
| `first_name`| String | Nombre |
| `last_name` | String | Apellido |
| `identification_type`| String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `route` | Object | Información de la ruta |
| `departure` | String | Salida |
| `destination` | String | Llegada |
| `departure_date_time` | Date | Fecha de salida |
| `arrival_date_time` | Date | Fecha de llegada |
| `company` | String | Compañía |

#### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre |
| `last_name` | String | Apellido |
| `identification` | Object | Datos de identificación |
| `identification_type` | String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `phone` | Object | Teléfono |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfono |
| `address` | Object | Datos de dirección |
| `zip_code` | String | Código postal |
| `street_name` | String | Nombre de calle |
| `street_number` | Integer | Número de calle |
| `authentication_type` | Enum | Tipo de autenticación ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |


```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ACCESS_TOKEN' \
--header 'Cookie: JSESSIONID=node01vge5if1qe3pv1w1y0c6ix92a123941.node0' \
--data-raw '{
    "transaction_amount": 150.00,
    "installments": 1,
    "statement_descriptor": "LOJA 123",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": null,
    "application_fee": null,
    "payment_method_id": "visa",
    "token": "<CARD_TOKEN>",
    "external_reference": "Pedido 01",
    "notification_url": "https://webhook.site/3e2ba8af-41c8-41c4-9a47-bf65877f5e7c",
    "metadata": {
        "order_number": "order_01"
    },
    "description": "PEDIDO NOVO",
    "payer": {
        "first_name": "Nome",
        "last_name": "Sobrenome",
        "email": "test_user_123456789@testuser.com",
        "identification": {
            "type": "CPF",
            "number": "12345678909"
        },
        "address": {
            "zip_code": "06233-200",
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
    },
    "additional_info": {
        "items": [ 
        {
            "id": "1234",
            "title": "Serviço",
            "description": "Descrição de serviço",
            "category_id": "travels",
            "category_descriptor":{
                "passenger": {
                    "first_name": "Nome",
                    "last_name": "Sobrenome"
                },
                "route": {
                    "departure": "Osasco",
                    "destination": "Sao Paulo",
                    "departure_date_time": "2022-03-12T12:58:41.425-04:00",
                    "arrival_date_time": "2022-03-14T12:58:41.425-04:00",
                    "company": "Companhia"
                }
            },
            "quantity": 1,
            "unit_price": 150
            }
        ],
        "payer": {
            "first_name": "Nome",
            "last_name": "Sobrenome",
            "is_prime_user": "1",
            "is_first_purchase_online": "1",
            "last_purchase": "2019-10-25T19:30:00.000-03:00",
            "phone": {
                "area_code": "11",
                "number": "987654321"
            },
            "address": {
                "zip_code": "06233-200",
                "street_name": "Av. das Nações Unidas",
                "street_number": "3003"
            },
            "registration_date": "2020-08-06T09:25:04.000-03:00"
        },
        "shipments": {
            "express_shipment": "0",
            "pick_up_on_seller": "1",
            "receiver_address": {
                "zip_code": "06233-200",
                "street_name": "Av. das Nações Unidas",
                "street_number": "3003",
                "floor": "",
                "apartment": ""
            }
        }
    }
}'
```

## Hotelería

### Campos a enviar
Agrega toda la información adicional que quieras.

#### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nombre |
| `category_id` | String | Categoría |
| `quantity` | Integer | Cantidad |
| `unit_price` | Float | Precio unitario |
| `event_date` | Date | Fecha del evento |
| `category_descriptor` | Object | Descripción de la categoría. |
| `passenger` | Object | Información adicional del pasajero. |
| `first_name`| String | Nombre |
| `last_name` | String | Apellido |
| `identification_type`| String | Tipo de identificación |
| `identification_number` | String | Número de identificación |

#### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre |
| `last_name` | String | Apellido |
| `identification` | Object | Datos de identificación |
| `identification_type` | String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `phone` | Object | Teléfono |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfono |
| `address` | Object | Datos de dirección |
| `zip_code` | String | Código postal |
| `street_name` | String | Nombre de calle |
| `street_number` | Integer | Número de calle |
| `authentication_type` | Enum | Tipo de autenticación ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |


## Utilities

### Campos a enviar
Agrega toda la información adicional que quieras.

#### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nombre |
| `category_id` | String | Categoría |
| `quantity` | Integer | Cantidad |
| `unit_price` | Float | Precio unitario |

#### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre |
| `last_name` | String | Apellido |
| `identification` | Object | Datos de identificación |
| `identification_type` | String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `phone` | Object | Teléfono |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfono |
| `address` | Object | Datos de dirección |
| `zip_code` | String | Código postal |
| `street_name` | String | Nombre de calle |
| `street_number` | Integer | Número de calle |
| `authentication_type` | Enum | Tipo de autenticación ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |


## Venta directa

### Campos a enviar
Agrega toda la información adicional que quieras.

#### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nombre |
| `description` | String | Descripción |
| `category_id` | String | Categoría |
| `quantity` | Integer | Cantidad |
| `unit_price` | Float | Precio unitario |

#### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre |
| `last_name` | String | Apellido |
| `identification` | Object | Datos de identificación |
| `identification_type` | String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `phone` | Object | Teléfono |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfono |
| `address` | Object | Datos de dirección |
| `zip_code` | String | Código postal |
| `street_name` | String | Nombre de calle |
| `street_number` | Integer | Número de calle |
| `authentication_type` | Enum | Tipo de autenticación ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |

#### Sobre envíos

| Object `shipment` | Tipo | Descripción |
| --- | --- | --- |
| `receiver_address` | Object | Datos de dirección del comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Provincia |
| `city_name` | String | Ciudad |
| `street_number` | Integer | Número de calle |
| `floor` | String | Piso |
| `apartment` | String | Apartamento |
| `pick_up_on_seller` | Boolean | `1` si se retira en sucursal, `0` si no lo hace. |


## Automóviles y náuticas

### Campos a enviar
Agrega toda la información adicional que quieras.

#### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nombre |
| `description` | String | Descripción |
| `category_id` | String | Categoría |
| `quantity` | Integer | Cantidad |
| `unit_price` | Float | Precio unitario |

#### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre |
| `last_name` | String | Apellido |
| `identification` | Object | Datos de identificación |
| `identification_type` | String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `phone` | Object | Teléfono |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfono |
| `address` | Object | Datos de dirección |
| `zip_code` | String | Código postal |
| `street_name` | String | Nombre de calle |
| `street_number` | Integer | Número de calle |
| `authentication_type` | Enum | Tipo de autenticación ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |

#### Sobre envíos

| Object `shipment` | Tipo | Descripción |
| --- | --- | --- |
| `receiver_address` | Object | Datos de dirección del comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Provincia |
| `city_name` | String | Ciudad |
| `street_number` | Integer | Número de calle |
| `floor` | String | Piso |
| `apartment` | String | Apartamento |
| `local_pickup` | Boolean | `True` si se retira en sucursal, `False` si no lo hace. |


## Transporte urbano

### Campos a enviar
Agrega toda la información adicional que quieras.

#### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nombre |
| `description` | String | Descripción |
| `category_id` | String | Categoría |
| `quantity` | Integer | Cantidad |
| `unit_price` | Float | Precio unitario |

#### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre |
| `last_name` | String | Apellido |
| `identification` | Object | Datos de identificación |
| `identification_type` | String | Tipo de identificación |
| `identification_number` | String | Número de identificación |
| `phone` | Object | Teléfono |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfono |
| `address` | Object | Datos de dirección |
| `zip_code` | String | Código postal |
| `street_name` | String | Nombre de calle |
| `street_number` | Integer | Número de calle |
| `authentication_type` | Enum | Tipo de autenticación ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |

