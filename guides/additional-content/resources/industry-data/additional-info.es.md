# Datos sobre industrias

Revisa que campos puedes enviar según tu industria para mejorar tu aprobación.

> WARNING 
> 
> Atención
>
> Esta información solo funciona para la API de Preferencias.

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

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.mercadopago.com/home/failure",
        "pending": "https://www.mercadopago.com/home/pending",
        "success": "https://www.mercadopago.com/home/success"
    },
    "notification_url": "https://webhook.site/xyz",
    "expires": false,
    "external_reference": "order-123",
    "date_of_expiration": "2025-03-12T12:58:41.425-04:00",
    "items": [
        {
            "id": "1234",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "title": "Producto",
            "picture_url": "",
            "description": "Descripción de producto",
            "type": "test",
            "category_id": "fashion",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": 1000
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "john@yourdomain.com",
        "first_name": "[FAKER][NAME][FIRST_NAME]",
        "last_name": "[FAKER][NAME][LAST_NAME]",
        "date_created": "",
        "authentication_type": "Facebook",
        "registration date": "2015-06-02T12:58:41.425-04:00",
        "is_prime_user": false,
        "is_first_purchase_online": false,
        "last_purchase": "2020-01-02T12:58:41.425-04:00"
    },
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [
            {
                "id": ""
            }
        ],
        "installments": null
    },
    "shipments": {
        "mode": "not_specified",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": 1000
        },
        "express_shipment": false
    }
}'
```

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
| `local_pickup` | Boolean | `True` si retira en sucursal, `False` si no lo hace |
| `receiver_address` | Object | Datos de dirección del comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Provincia |
| `city_name` | String | Ciudad |
| `street_number` | Integer | Número de calle |
| `express_shipment` | Boolean | `True` si lo es, `False` si no lo es. |

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.mercadopago.com/home/failure",
        "pending": "https://www.mercadopago.com/home/pending",
        "success": "https://www.mercadopago.com/home/success"
    },
    "notification_url": "https://webhook.site/xyz",
    "expires": false,
    "external_reference": "order-123",
    "date_of_expiration": "2025-03-12T12:58:41.425-04:00",
    "items": [
        {
            "id": "1234",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "title": "Producto",
            "category_id": "phones",
            "quantity": 1,
            "unit_price": 150,
            "warranty": false,
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": 1000
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "john@yourdomain.com”,
        "first_name": "[FAKER][NAME][FIRST_NAME]",
        "last_name": "[FAKER][NAME][LAST_NAME]",
        "date_created": "",
        "authentication_type": "Facebook",
        "registration date": "2015-06-02T12:58:41.425-04:00",
        "is_prime_user": false,
        "is_first_purchase_online": false,
        "last_purchase": "2020-01-02T12:58:41.425-04:00"
    },
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [
            {
                "id": ""
            }
        ],
        "installments": null
    },
    "shipments": {
        "mode": "not_specified",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": 1000
        },
        "express_shipment": false,
        "local_pickup": false
    }
}'
```

## Entretenimiento

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
| `category_descriptor` | Object | Descripción de la categoría |
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
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.mercadopago.com/home/failure",
        "pending": "https://www.mercadopago.com/home/pending",
        "success": "https://www.mercadopago.com/home/success"
    },
    "notification_url": "https://webhook.site/xyz",
    "expires": false,
    "external_reference": "order-123",
    "date_of_expiration": "2025-03-12T12:58:41.425-04:00",
    "items": [
        {
            "id": "1234",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "title": "Producto",
            "category_id": "entertainment",
            "quantity": 1,
            "unit_price": 150,
            "category_descriptor":{
                "event_date": "2022-03-12T12:58:41.425-04:00"
            },
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "john@yourdomain.com",
        "first_name": "[FAKER][NAME][FIRST_NAME]",
        "last_name": "[FAKER][NAME][LAST_NAME]",
        "date_created": "",
        "authentication_type": "Facebook",
        "registration date": "2015-06-02T12:58:41.425-04:00",
        "is_prime_user": false,
        "is_first_purchase_online": false,
        "last_purchase": "2020-01-02T12:58:41.425-04:00"
    },
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [
            {
                "id": ""
            }
        ],
        "installments": null
    },
    "shipments": {
        "mode": "not_specified",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": 1000
        },
        "express_shipment": false,
        "local_pickup": false
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


```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.mercadopago.com/home/failure",
        "pending": "https://www.mercadopago.com/home/pending",
        "success": "https://www.mercadopago.com/home/success"
    },
    "notification_url": "https://webhook.site/xyz",
    "expires": false,
    "external_reference": "order-123",
    "date_of_expiration": "2025-03-12T12:58:41.425-04:00",
    "items": [
        {
            "id": "1234",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "title": "Producto",
            "picture_url": "",
            "description": "Descripción de producto",
            "category_id": "home",
            "quantity": 1,
            "unit_price": 150,
            "warranty": false,
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": 1000
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "john@yourdomain.com",
        "first_name": "[FAKER][NAME][FIRST_NAME]",
        "last_name": "[FAKER][NAME][LAST_NAME]",
        "date_created": "",
        "authentication_type": "Facebook",
        "registration date": "2015-06-02T12:58:41.425-04:00",
        "is_prime_user": false,
        "is_first_purchase_online": false,
        "last_purchase": "2020-01-02T12:58:41.425-04:00"
    },
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [
            {
                "id": ""
            }
        ],
        "installments": null
    },
    "shipments": {
        "mode": "not_specified",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": 1000
        },
        "express_shipment": false,
        "local_pickup": false
    }
}'
```

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

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.mercadopago.com/home/failure",
        "pending": "https://www.mercadopago.com/home/pending",
        "success": "https://www.mercadopago.com/home/success"
    },
    "notification_url": "https://webhook.site/xyz",
    "expires": false,
    "external_reference": "order-123",
    "date_of_expiration": "2025-03-12T12:58:41.425-04:00",
    "items": [
        {
            "id": "1234",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "title": "Producto",
            "picture_url": "",
            "description": "Descripción de producto",
            "category_id": "services",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": 1000
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "john@yourdomain.com",
        "name": "[FAKER][NAME][FIRST_NAME]",
        "surname": "[FAKER][NAME][LAST_NAME]",
        "date_created": "",
        "authentication_type": "Facebook",
        "registration date": "2015-06-02T12:58:41.425-04:00",
        "is_prime_user": false,
        "is_first_purchase_online": false,
        "last_purchase": "2020-01-02T12:58:41.425-04:00"
    },
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [
            {
                "id": ""
            }
        ],
        "installments": null
    }
}'
```

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

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.mercadopago.com/us/home/failure",
        "pending": "https://www.mercadopago.com/us/home/pending",
        "success": "https://www.mercadopago.com/us/home/success"
    },
    "notification_url": "https://webhook.site/xyz",
    "expires": false,
    "external_reference": "order-123",
    "date_of_expiration": "2025-03-12T12:58:41.425-04:00",
    "items": [
        {
            "id": "1234",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "title": "Producto",
            "picture_url": "",
            "description": "Descripción de producto",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": 1000
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "john@yourdomain.com",
        "name": "[FAKER][NAME][FIRST_NAME]",
        "surname": "[FAKER][NAME][LAST_NAME]",
        "date_created": "",
        "authentication_type": "Facebook",
        "registration date": "2015-06-02T12:58:41.425-04:00",
        "is_prime_user": false,
        "is_first_purchase_online": false,
        "last_purchase": "2020-01-02T12:58:41.425-04:00"
    },
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [
            {
                "id": ""
            }
        ],
        "installments": null
    },
    "shipments": {
        "mode": "not_specified",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": 1000
        },
        "express_shipment": false,
        "local_pickup": false
    }
}'
```

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
| `category_descriptor` | Object | Descripción de la categoría | 
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

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.mercadopago.com/home/failure",
        "pending": "https://www.mercadopago.com/home/pending",
        "success": "https://www.mercadopago.com/home/success"
    },
    "notification_url": "https://webhook.site/xyz",
    "expires": false,
    "external_reference": "order-123",
    "date_of_expiration": "2025-03-12T12:58:41.425-04:00",
    "items": [
        {
            "id": "1234",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "title": "Servicio",
            "picture_url": "",
            "description": "Descripción de servicio",
            "category_id": "services",
            "quantity": 1,
            "unit_price": 150,
            "category_descriptor":{
                "event_date": "2022-03-12T12:58:41.425-04:00"
            },
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": 1000
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "john@yourdomain.com",
        "name": "[FAKER][NAME][FIRST_NAME]",
        "surname": "[FAKER][NAME][LAST_NAME]",
        "date_created": "",
        "authentication_type": "Facebook",
        "registration date": "2015-06-02T12:58:41.425-04:00",
        "is_prime_user": false,
        "is_first_purchase_online": false,
        "last_purchase": "2020-01-02T12:58:41.425-04:00"
    },
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [
            {
                "id": ""
            }
        ],
        "installments": null
    },
    "shipments": {
        "mode": "not_specified",
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": 1000
        }
    }
}'
```

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
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.mercadopago.com/home/failure",
        "pending": "https://www.mercadopago.com/home/pending",
        "success": "https://www.mercadopago.com/home/success"
    },
    "notification_url": "https://webhook.site/xyz",
    "expires": false,
    "external_reference": "order-123",
    "date_of_expiration": "2025-03-12T12:58:41.425-04:00",
    "items": [
        {
            "id": "1234",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "title": "Servicio",
            "description": "Descripción de servicio",
            "category_id": "Travels",
            "category_descriptor":{
             "passenger": {
                 "first_name": "[FAKER][NAME][FIRST_NAME]",
                  "last_name": "[FAKER][NAME][LAST_NAME]",
                   "type": "[FAKER][IDENTIFICATION][TYPE]",
                   "number": 12345678
              },
              "route": {
            	 "departure": "[FAKER][ADDRESS][CITY]",
            	 "destination": "Londres",
            	 "departure_date_time": "2022-03-12T12:58:41.425-04:00",
            	 "arrival_date_time": "2022-03-14T12:58:41.425-04:00",
            	 "company": "Compañía"
            }
},
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": 1000
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "john@yourdomain.com",
        "name": "[FAKER][NAME][FIRST_NAME]",
        "surname": "[FAKER][NAME][LAST_NAME]",
        "date_created": "",
        "authentication_type": "Facebook",
        "registration date": "2015-06-02T12:58:41.425-04:00",
        "is_prime_user": false,
        "is_first_purchase_online": false,
        "last_purchase": "2020-01-02T12:58:41.425-04:00"
    },
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [
            {
                "id": ""
            }
        ],
        "installments": null
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

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.mercadopago.com/home/failure",
        "pending": "https://www.mercadopago.com/home/pending",
        "success": "https://www.mercadopago.com/home/success"
    },
    "notification_url": "https://webhook.site/xyz",
    "expires": false,
    "external_reference": "order-123",
    "date_of_expiration": "2025-03-12T12:58:41.425-04:00",
    "items": [
        {
            "id": "1234",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "title": "Servicio",
            "description": "Descripción de servicio",
            "category_id": "Travels",
            "category_descriptor": {
                "event_date": "2020-06-02T12:58:41.425-04:00",
                "passenger": {
                    "first_name": "[FAKER][NAME][FIRST_NAME]",
                    "last_name": "[FAKER][NAME][LAST_NAME]",
                    "type": "[FAKER][IDENTIFICATION][TYPE]",
                    "number": 12345678
                }
            },
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": 1000
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "john@yourdomain.com",
        "name": "[FAKER][NAME][FIRST_NAME]",
        "surname": "[FAKER][NAME][LAST_NAME]",
        "date_created": "",
        "authentication_type": "Facebook",
        "registration date": "2015-06-02T12:58:41.425-04:00",
        "is_prime_user": false,
        "is_first_purchase_online": false,
        "last_purchase": "2020-01-02T12:58:41.425-04:00"
    },
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [
            {
                "id": ""
            }
        ],
        "installments": null
    }
}'
```

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

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.mercadopago.com/home/failure",
        "pending": "https://www.mercadopago.com/home/pending",
        "success": "https://www.mercadopago.com/home/success"
    },
    "notification_url": "https://webhook.site/xyz",
    "expires": false,
    "external_reference": "order-123",
    "date_of_expiration": "2025-03-12T12:58:41.425-04:00",
    "items": [
        {
            "id": "1234",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "title": "Producto",
            "picture_url": "",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": 1000
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "john@yourdomain.com",
        "name": "[FAKER][NAME][FIRST_NAME]",
        "surname": "[FAKER][NAME][LAST_NAME]",
        "date_created": "",
        "authentication_type": "Facebook",
        "registration date": "2015-06-02T12:58:41.425-04:00",
        "is_prime_user": false,
        "is_first_purchase_online": false,
        "last_purchase": "2020-01-02T12:58:41.425-04:00"
    },
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [
            {
                "id": ""
            }
        ],
        "installments": null
    }
}'
```

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
| `local_pickup` | Boolean | `True` si se retira en sucursal, `False` si no lo hace. |

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.mercadopago.com/home/failure",
        "pending": "https://www.mercadopago.com/home/pending",
        "success": "https://www.mercadopago.com/home/success"
    },
    "notification_url": "https://webhook.site/xyz",
    "expires": false,
    "external_reference": "order-123",
    "date_of_expiration": "2025-03-12T12:58:41.425-04:00",
    "items": [
        {
            "id": "1234",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "title": "Producto",
            "picture_url": "",
            "description": "Descripción de producto",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": 1000
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "john@yourdomain.com",
        "name": "[FAKER][NAME][FIRST_NAME]",
        "surname": "[FAKER][NAME][LAST_NAME]",
        "date_created": "",
        "authentication_type": "Facebook",
        "registration date": "2015-06-02T12:58:41.425-04:00",
        "is_prime_user": false,
        "is_first_purchase_online": false,
        "last_purchase": "2020-01-02T12:58:41.425-04:00"
    },
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [
            {
                "id": ""
            }
        ],
        "installments": null
    },
    "shipments": {
        "mode": "not_specified",
        "local_pickup": false,
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": 1000
            "floor": "12",
            "apartment": "B"
        }
    }
}'
```

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

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.mercadopago.com/home/failure",
        "pending": "https://www.mercadopago.com/home/pending",
        "success": "https://www.mercadopago.com/home/success"
    },
    "notification_url": "https://webhook.site/xyz",
    "expires": false,
    "external_reference": "order-123",
    "date_of_expiration": "2025-03-12T12:58:41.425-04:00",
    "items": [
        {
            "id": "1234",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "title": "Producto",
            "picture_url": "",
            "description": "Descripción de producto",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": 1000
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "john@yourdomain.com",
        "name": "[FAKER][NAME][FIRST_NAME]",
        "surname": "[FAKER][NAME][LAST_NAME]",
        "date_created": "",
        "authentication_type": "Facebook",
        "registration date": "2015-06-02T12:58:41.425-04:00",
        "is_first_purchase_online": false,
        "last_purchase": "2020-01-02T12:58:41.425-04:00"
    },
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [
            {
                "id": ""
            }
        ],
        "installments": null
    },
    "shipments": {
        "mode": "not_specified",
        "local_pickup": false,
        "receiver_address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": 1000
            "floor": "12",
            "apartment": "B"
        }
    }
}'
```

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

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.mercadopago.com/home/failure",
        "pending": "https://www.mercadopago.com/home/pending",
        "success": "https://www.mercadopago.com/home/success"
    },
    "notification_url": "https://webhook.site/xyz",
    "expires": false,
    "external_reference": "order-123",
    "date_of_expiration": "2025-03-12T12:58:41.425-04:00",
    "items": [
        {
            "id": "1234",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "title": "Producto",
            "picture_url": "",
            "description": "Descripción de producto",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP_CODE]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": 1000
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "john@yourdomain.com",
        "name": "[FAKER][NAME][FIRST_NAME]",
        "surname": "[FAKER][NAME][LAST_NAME]",
        "date_created": "",
        "authentication_type": "Facebook",
        "registration date": "2015-06-02T12:58:41.425-04:00",
        "is_first_purchase_online": false,
        "is_prime_user": false,
        "last_purchase": "2020-01-02T12:58:41.425-04:00"
    },
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [
            {
                "id": ""
            }
        ],
        "installments": null
    }
}'
```
