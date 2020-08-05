# Dados da industria

Verifique quais campos você pode enviar de acordo com o seu setor para melhorar sua aprovação.

## Apparel

### Campos a enviar 
Adicione todas as informações adicionais que você deseja.

#### Sobre ítens

| Array `Items` | Tipo | Descrição|
| --- | --- | --- |
| `id` | String  | Código |
| `title` | String  | Nome  |
| `type` | String  | Tipo |
| `description` | String  | Descrição|
| `picture_url`  | String  | Imagem URL |
| `category_id` | String  | Categoría |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `Payer` | Tipo | descrição |
| --- | --- | --- |
| `first_name` | String  | Nome |
| `last_name` | String  | Sobrenome |
| `identification` | Object  | Dados de identificação |
| `identification_type` | String  | Tipo de identificação |
| `identification_number` | String  | Número de identificação |
| `phone` | Object  | Teléfone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de teléfone |
| `address` | Object  | Dados do endereço |
| `zip_code` | String  | Código postal |
| `street_name` | String  | Nome de rua |
| `street_number` | Integer | Número de rua |
| `authentication_type` | Enum | Tipo de Autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` sim é, `False`se nao e´. |
| `is_first_purchase_online` | Boolean | `True` sim é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre remessa

| Object `Shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object  | Dados do endereço do comprador. |
| `zip_code` | String  | Código Postal |
| `state_name` | String  | Provincia |
| `city_name` | String  |  |
| `street_number` | Integer | Número de rua |
| `express_shipment` | Boolean | `True` sim é, `False` se não é. |

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences?access_token=YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
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
            "description": "Descrição de producto",
            "type": "test",
            "category_id": "fashion",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "[FAKER][INTERNET][FREE_EMAIL]",
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
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "express_shipment": false
    }
}'
```

## Electro

### Campos a enviar 
Adicione todas as informações adicionais que você deseja.

#### Sobre ítens

| Array `Items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String  | Código |
| `title` | String  | Nome  |
| `category_id` | String  | Categoría |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |
| `warranty` | Boolean | `True` se o produto tiver garantia, `False` se não tiver. |

#### Sobre o comprador

| Object `Payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String  | Nome |
| `last_name` | String  | Sobrenome |
| `identification` | Object  | Dados de identificação |
| `identification_type` | String  | Tipo de identificação |
| `identification_number` | String  | Número de identificação |
| `phone` | Object  | Teléfone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de Teléfone |
| `address` | Object  | Dados do endereço |
| `zip_code` | String  | Código postal |
| `street_name` | String  | Nome de calle |
| `street_number` | Integer | Número de rua |
| `authentication_type` | Enum | Tipo de Autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` sim é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` sim é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre remessas

| Object `Shipment` | Tipo | Descrição |
| --- | --- | --- |
| `local_pickup` | Boolean | `True` si retira en sucursal, `False` si no lo hace |
| `receiver_address` | Object  | Dados do endereço do comprador. |
| `zip_code` | String  | Código Postal |
| `state_name` | String  | Provincia |
| `city_name` | String  | Cidade |
| `street_number` | Integer | Número de rua |
| `express_shipment` | Boolean | `True` sim é, `False` se não é. |

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences?access_token=YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
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
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "[FAKER][INTERNET][FREE_EMAIL]”,
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
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "express_shipment": false,
        "local_pickup": false
    }
}'
```

## Entretenimiento

### Campos a enviar 
Adicione todas as informações adicionais que você deseja.

#### Sobre ítens

| Array `Items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String  | Código |
| `title` | String  | Nome  |
| `category_id` | String  | Categoría |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |
| `event_date` | Date |Data do evento |

#### Sobre o comprador

| Object `Payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String  | Nome |
| `last_name` | String  | Sobrenome |
| `identification` | Object  | Dados de identificação |
| `identification_type` | String  | Tipo de identificação |
| `identification_number` | String  | Número de identificação |
| `phone` | Object  | Teléfone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de Teléfone |
| `authentication_type` | Enum | Tipo de Autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` sim é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` sim é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |




#### Sobre remessas

| Object `Shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object  | Dados do endereço do comprador. |
| `zip_code` | String  | Código Postal |
| `state_name` | String  | Provincia |
| `city_name` | String  | Cidade |
| `street_number` | Integer | Número de rua |
| `express_shipment` | Boolean | `True` sim é, `False` se não é. |

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences?access_token=YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
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
            "event_date": "2020-06-02T12:58:41.425-04:00",
        }
    ],
    "payer": {
        "phone": {
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "[FAKER][INTERNET][FREE_EMAIL]",
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
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "express_shipment": false,
        "local_pickup": false
    }
}'
```

## Home & deco

### Campos a enviar 
Adicione todas as informações adicionais que você deseja.

#### Sobre ítens

| Array `Items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String  | Código |
| `title` | String  | Nome  |
| `description` | String  | Descrição |
| `category_id` | String  | Categoría |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |
| `warranty` | Boolean | `True` se o produto tiver garantia, `False` se não tiver. |

#### Sobre o comprador

| Object `Payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String  | Nome |
| `last_name` | String  | Sobrenome |
| `identification` | Object  | Dados de identificação |
| `identification_type` | String  | Tipo de identificação |
| `identification_number` | String  | Número de identificação |
| `phone` | Object  | Teléfone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de Teléfone |
| `address` | Object  | Dados do endereço |
| `zip_code` | String  | Código postal |
| `street_name` | String  | Nome de calle |
| `street_number` | Integer | Número de rua |
| `authentication_type` | Enum | Tipo de Autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` sim é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` sim é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre remessas

| Object `Shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object  | Dados do endereço do comprador. |
| `zip_code` | String  | Código Postal |
| `state_name` | String  | Provincia |
| `city_name` | String  | Cidade |
| `street_number` | Integer | Número de rua |
| `express_shipment` | Boolean | `True` sim é, `False` se não é. |


```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences?access_token=YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
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
            "description": "Descrição de producto",
            "category_id": "home",
            "quantity": 1,
            "unit_price": 150,
            "warranty": false,
        }
    ],
    "payer": {
        "phone": {
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "[FAKER][INTERNET][FREE_EMAIL]",
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
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "express_shipment": false,
        "local_pickup": false
    }
}'
```

## Aplicativos e plataformas online

### Campos a enviar 
Adicione todas as informações adicionais que você deseja.

#### Sobre ítens


| Array `Items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String  | Código |
| `title` | String  | Nome  |
| `category_id` | String  | Categoría |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `Payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String  | Nome |
| `last_name` | String  | Sobrenome |
| `identification` | Object  | Dados de identificação |
| `identification_type` | String  | Tipo de identificação |
| `identification_number` | String  | Número de identificação |
| `phone` | Object  | Teléfone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de Teléfone |
| `address` | Object  | Dados do endereço |
| `zip_code` | String  | Código postal |
| `street_name` | String  | Nome de calle |
| `street_number` | Integer | Número de rua |
| `authentication_type` | Enum | Tipo de Autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` sim é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` sim é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences?access_token=YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
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
            "description": "Descrição de producto",
            "category_id": "services",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "[FAKER][INTERNET][FREE_EMAIL]",
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
Adicione todas as informações adicionais que você deseja.

#### Sobre ítens

| Array `Items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String  | Código |
| `title` | String  | Nome  |
| `description` | String  | Descrição |
| `picture_url`  | String  | URL de imagen |
| `category_id` | String  | Categoría |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `Payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String  | Nome |
| `last_name` | String  | Sobrenome |
| `identification` | Object  | Dados de identificação |
| `identification_type` | String  | Tipo de identificação |
| `identification_number` | String  | Número de identificação |
| `phone` | Object  | Teléfone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de Teléfone |
| `address` | Object  | Dados do endereço |
| `zip_code` | String  | Código postal |
| `street_name` | String  | Nome de calle |
| `street_number` | Integer | Número de rua |
| `authentication_type` | Enum | Tipo de Autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` sim é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` sim é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre remessas

| Object `Shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object  | Dados do endereço do comprador. |
| `zip_code` | String  | Código Postal |
| `state_name` | String  | Provincia |
| `city_name` | String  | Cidade |
| `street_number` | Integer | Número de rua |
| `express_shipment` | Boolean | `True` sim é, `False` se não é. |

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences?access_token=YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
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
            "description": "Descrição de producto",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "[FAKER][INTERNET][FREE_EMAIL]",
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
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "express_shipment": false,
        "local_pickup": false
    }
}'
```

## Serviços governamentais e públicos

### Campos a enviar 
Adicione todas as informações adicionais que você deseja.

#### Sobre ítens

| Array `Items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String  | Código |
| `title` | String  | Nome  |
| `description` | String  | Descrição |
| `category_id` | String  | Categoría |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |
| `event_date` | Date |Data do evento |

#### Sobre o comprador

| Object `Payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String  | Nome |
| `last_name` | String  | Sobrenome |
| `identification` | Object  | Dados de identificação |
| `identification_type` | String  | Tipo de identificação |
| `identification_number` | String  | Número de identificação |
| `phone` | Object  | Teléfone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de Teléfone |
| `address` | Object  | Dados do endereço |
| `zip_code` | String  | Código postal |
| `street_name` | String  | Nome de calle |
| `street_number` | Integer | Número de rua |
| `authentication_type` | Enum | Tipo de Autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` sim é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` sim é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre remessas

| Object `Shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object  | Dados do endereço do comprador. |
| `zip_code` | String  | Código Postal |
| `state_name` | String  | Provincia |
| `city_name` | String  | Cidade |
| `street_number` | Integer | Número de rua |

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences?access_token=YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
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
            "description": "Descrição de servicio",
            "category_id": "services",
            "quantity": 1,
            "unit_price": 150,
            "event_date": "2020-06-02T12:58:41.425-04:00"
        }
    ],
    "payer": {
        "phone": {
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "[FAKER][INTERNET][FREE_EMAIL]",
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
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        }
    }
}'
```

## Turismo

### Campos a enviar 
Adicione todas as informações adicionais que você deseja.

#### Sobre ítens

| Array `Items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String  | Código |
| `title` | String  | Nome  |
| `description` | String  | Descrição |
| `category_id` | String  | Categoría |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |
| `category_descriptor` | Object | Descrição de la categoría. |
| `passenger` | Object |Informações adicionais sobre passageiros. |
| `first_name`| String | Nome |
| `last_name` | String | Sobrenome |
| `identification_type`| String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `route` | Object |Informações da rota |
| `departure` | String | Saída  |
| `destination` | String | Chegada |
| `departure_date_time` | Date | Data de saída |
| `arrival_date_time` | Date | Data de Chegada |
| `company` | String  | Companhia |

#### Sobre o comprador

| Object `Payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String  | Nome |
| `last_name` | String  | Sobrenome |
| `identification` | Object  | Dados de identificação |
| `identification_type` | String  | Tipo de identificação |
| `identification_number` | String  | Número de identificação |
| `phone` | Object  | Teléfone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de Teléfone |
| `address` | Object  | Dados do endereço |
| `zip_code` | String  | Código postal |
| `street_name` | String  | Nome de calle |
| `street_number` | Integer | Número de rua |
| `authentication_type` | Enum | Tipo de Autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` sim é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` sim é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |


```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences?access_token=YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
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
            "description": "Descrição de servicio",
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
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "[FAKER][INTERNET][FREE_EMAIL]",
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

## Hospitalidade

### Campos a enviar 
Adicione todas as informações adicionais que você deseja.

#### Sobre ítens

| Array `Items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String  | Código |
| `title` | String  | Nome  |
| `category_id` | String  | Categoría |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |
| `event_date` | Date |Data do evento |
| `category_descriptor` | Object | Descrição de la categoría. |
| `passenger` | Object |Informações adicionais sobre passageiros. |
| `first_name`| String | Nome |
| `last_name` | String | Sobrenome |
| `identification_type`| String | Tipo de identificação |
| `identification_number` | String | Número de identificação |

#### Sobre o comprador

| Object `Payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String  | Nome |
| `last_name` | String  | Sobrenome |
| `identification` | Object  | Dados de identificação |
| `identification_type` | String  | Tipo de identificação |
| `identification_number` | String  | Número de identificação |
| `phone` | Object  | Teléfone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de Teléfone |
| `address` | Object  | Dados do endereço |
| `zip_code` | String  | Código postal |
| `street_name` | String  | Nome de calle |
| `street_number` | Integer | Número de rua |
| `authentication_type` | Enum | Tipo de Autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` sim é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` sim é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences?access_token=YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
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
            "description": "Descrição de servicio",
            "category_id": "Travels",
            "category_descriptor": {
                "passenger": {
                    "first_name": "[FAKER][NAME][FIRST_NAME]",
                    "last_name": "[FAKER][NAME][LAST_NAME]",
                    "type": "[FAKER][IDENTIFICATION][TYPE]",
                    "number": 12345678
                }
            },
            "quantity": 1,
            "event_date": "2020-06-02T12:58:41.425-04:00",
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "[FAKER][INTERNET][FREE_EMAIL]",
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
Adicione todas as informações adicionais que você deseja.

#### Sobre ítens

| Array `Items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String  | Código |
| `title` | String  | Nome  |
| `category_id` | String  | Categoría |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `Payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String  | Nome |
| `last_name` | String  | Sobrenome |
| `identification` | Object  | Dados de identificação |
| `identification_type` | String  | Tipo de identificação |
| `identification_number` | String  | Número de identificação |
| `phone` | Object  | Teléfone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de Teléfone |
| `address` | Object  | Dados do endereço |
| `zip_code` | String  | Código postal |
| `street_name` | String  | Nome de calle |
| `street_number` | Integer | Número de rua |
| `authentication_type` | Enum | Tipo de Autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` sim é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` sim é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences?access_token=YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
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
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "[FAKER][INTERNET][FREE_EMAIL]",
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

## Venda direta

### Campos a enviar 
Adicione todas as informações adicionais que você deseja.

#### Sobre ítens

| Array `Items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String  | Código |
| `title` | String  | Nome  |
| `description` | String  | Descrição |
| `category_id` | String  | Categoría |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `Payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String  | Nome |
| `last_name` | String  | Sobrenome |
| `identification` | Object  | Dados de identificação |
| `identification_type` | String  | Tipo de identificação |
| `identification_number` | String  | Número de identificação |
| `phone` | Object  | Teléfone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de Teléfone |
| `address` | Object  | Dados do endereço |
| `zip_code` | String  | Código postal |
| `street_name` | String  | Nome de calle |
| `street_number` | Integer | Número de rua |
| `authentication_type` | Enum | Tipo de Autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` sim é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` sim é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre remessas

| Object `Shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object  | Dados do endereço do comprador. |
| `zip_code` | String  | Código Postal |
| `state_name` | String  | Provincia |
| `city_name` | String  | Cidade |
| `street_number` | Integer | Número de rua |
| `floor` | String | Piso |
| `apartment | String | Apartamento |
| `local_pickup` | Boolean | `True` si se retira en sucursal, `False` si no lo hace. |

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences?access_token=YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
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
            "description": "Descrição de producto",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150            
        }
    ],
    "payer": {
        "phone": {
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "[FAKER][INTERNET][FREE_EMAIL]",
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
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
            "floor": "12",
            "apartment": "B"
        }
    }
}'
```

## Automóveis e náutica

### Campos a enviar 
Adicione todas as informações adicionais que você deseja.

#### Sobre ítens

| Array `Items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String  | Código |
| `title` | String  | Nome  |
| `description` | String  | Descrição |
| `category_id` | String  | Categoría |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `Payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String  | Nome |
| `last_name` | String  | Sobrenome |
| `identification` | Object  | Dados de identificação |
| `identification_type` | String  | Tipo de identificação |
| `identification_number` | String  | Número de identificação |
| `phone` | Object  | Teléfone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de Teléfone |
| `address` | Object  | Dados do endereço |
| `zip_code` | String  | Código postal |
| `street_name` | String  | Nome de calle |
| `street_number` | Integer | Número de rua |
| `authentication_type` | Enum | Tipo de Autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_first_purchase_online` | Boolean | `True` sim é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre remessas

| Object `Shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object  | Dados do endereço do comprador. |
| `zip_code` | String  | Código Postal |
| `state_name` | String  | Provincia |
| `city_name` | String  | Cidade |
| `street_number` | Integer | Número de rua |
| `floor` | String | Piso |
| `apartment | String | Apartamento |
| `local_pickup` | Boolean | `True` si se retira en sucursal, `False` si no lo hace. |

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences?access_token=YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
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
            "description": "Descrição de producto",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150    
        }
    ],
    "payer": {
        "phone": {
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "[FAKER][INTERNET][FREE_EMAIL]",
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
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "city_name": "[FAKER][ADDRESS][CITY]",
            "state_name": "[FAKER][ADDRESS][STATE]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
            "floor": "12",
            "apartment": "B"
        }
    }
}'
```

## Transporte urbano

### Campos a enviar 
Adicione todas as informações adicionais que você deseja.

#### Sobre ítens

| Array `Items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String  | Código |
| `title` | String  | Nome  |
| `description` | String  | Descrição |
| `category_id` | String  | Categoría |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `Payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String  | Nome |
| `last_name` | String  | Sobrenome |
| `identification` | Object  | Dados de identificação |
| `identification_type` | String  | Tipo de identificação |
| `identification_number` | String  | Número de identificação |
| `phone` | Object  | Teléfone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de Teléfone |
| `address` | Object  | Dados do endereço |
| `zip_code` | String  | Código postal |
| `street_name` | String  | Nome de calle |
| `street_number` | Integer | Número de rua |
| `authentication_type` | Enum | Tipo de Autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Otro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` sim é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` sim é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

```curl
curl --location --request POST 'https://api.mercadopago.com/checkout/preferences?access_token=YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
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
            "description": "Descrição de producto",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150 
        }
    ],
    "payer": {
        "phone": {
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
        },
        "address": {
            "zip_code": "[FAKER][ADDRESS][ZIP]",
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][NUMBER][BETWEEN][1000,2000]
        },
        "identification": {
          "identification_type": "[FAKER][IDENTIFICATION][TYPE]",
          "identification_number": "12345678"
        },
        "email": "[FAKER][INTERNET][FREE_EMAIL]",
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
