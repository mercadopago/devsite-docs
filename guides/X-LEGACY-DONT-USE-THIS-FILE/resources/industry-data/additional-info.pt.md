# Dados de indústria

Verifique quais campos você pode enviar de acordo com o seu setor para melhorar sua aprovação.

> WARNING 
> 
> Atenção
>
> Uso de exemplos
>
> Essas informações funcionam apenas para a API de Preferências.

## Apparel

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens

| Array `items` | Tipo | Descrição|
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `type` | String | Tipo |
| `description` | String | Descrição|
| `picture_url` | String | Imagem URL |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `payer` | Tipo | descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | Telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `address` | Object | Dados do endereço |
| `zip_code` | String | Código postal |
| `street_name` | String | Nome da rua |
| `street_number` | Integer | Número da rua |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se nao é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre remessa

| Object `shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object | Dados do endereço do comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Província |
| `city_name` | String | Cidade |
| `street_number` | Integer | Número da rua |
| `express_shipment` | Boolean | `True` se é, `False` se não é. |

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
            "title": "Produto",
            "picture_url": "",
            "description": "Descrição de produto",
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

## Eletro

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |
| `warranty` | Boolean | `True` se o produto tiver garantia, `False` se não tiver. |

#### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | Telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `address` | Object | Dados do endereço |
| `zip_code` | String | Código postal |
| `street_name` | String | Nome da rua |
| `street_number` | Integer | Número da rua |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre envios

| Object `shipment` | Tipo | Descrição |
| --- | --- | --- |
| `local_pickup` | Boolean | `True` se retira na agência ou na loja, `False` se não retira. |
| `receiver_address` | Object | Dados do endereço do comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Província |
| `city_name` | String | Cidade |
| `street_number` | Integer | Número da rua |
| `express_shipment` | Boolean | `True` se é, `False` se não é. |

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
            "title": "Produto",
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

## Entretenimento

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |
| `event_date` | Date |Data do evento |

#### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | Telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |




#### Sobre envios

| Object `shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object | Dados do endereço do comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Província |
| `city_name` | String | Cidade |
| `street_number` | Integer | Número da rua |
| `express_shipment` | Boolean | `True` se é, `False` se não é. |

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
            "title": "Produto",
            "category_id": "entertainment",
            "quantity": 1,
            "unit_price": 150,
            "event_date": "2020-06-02T12:58:41.425-04:00",
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

## Casa e decoração

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `description` | String | Descrição |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |
| `warranty` | Boolean | `True` se o produto tiver garantia, `False` se não tiver. |

#### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `address` | Object | Dados do endereço |
| `zip_code` | String | Código postal |
| `street_name` | String | Nome da rua |
| `street_number` | Integer | Número da rua |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre envios

| Object `shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object | Dados do endereço do comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Província |
| `city_name` | String | Cidade |
| `street_number` | Integer | Número da rua |
| `express_shipment` | Boolean | `True` se é, `False` se não é. |


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
            "title": "Produto",
            "picture_url": "",
            "description": "Descrição de produto",
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

## Aplicativos e plataformas online

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens


| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `address` | Object | Dados do endereço |
| `zip_code` | String | Código postal |
| `street_name` | String | Nome da rua |
| `street_number` | Integer | Número da rua |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

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
            "title": "Produto",
            "picture_url": "",
            "description": "Descrição de produto",
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

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `description` | String | Descrição |
| `picture_url` | String | Imagem URL |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `address` | Object | Dados do endereço |
| `zip_code` | String | Código postal |
| `street_name` | String | Nome da rua |
| `street_number` | Integer | Número da rua |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre envios

| Object `shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object | Dados do endereço do comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Província |
| `city_name` | String | Cidade |
| `street_number` | Integer | Número da rua |
| `express_shipment` | Boolean | `True` se é, `False` se não é. |

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
            "title": "Produto",
            "picture_url": "",
            "description": "Descrição de produto",
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

## Serviços governamentais e públicos

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `description` | String | Descrição |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |
| `event_date` | Date |Data do evento |

#### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `address` | Object | Dados do endereço |
| `zip_code` | String | Código postal |
| `street_name` | String | Nome da rua |
| `street_number` | Integer | Número da rua |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre envios

| Object `shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object | Dados do endereço do comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Província |
| `city_name` | String | Cidade |
| `street_number` | Integer | Número da rua |

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
            "title": "Serviço",
            "picture_url": "",
            "description": "Descrição de serviço",
            "category_id": "services",
            "quantity": 1,
            "unit_price": 150,
            "event_date": "2020-06-02T12:58:41.425-04:00"
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

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `description` | String | Descrição |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |
| `category_descriptor` | Object | Descrição de la categoría. |
| `passenger` | Object |Informações adicionais sobre passageiros. |
| `first_name`| String | Nome |
| `last_name` | String | Sobrenome |
| `identification_type`| String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `route` | Object |Informações da rota |
| `departure` | String | Saída |
| `destination` | String | Chegada |
| `departure_date_time` | Date | Data de saída |
| `arrival_date_time` | Date | Data de chegada |
| `company` | String | Companhia |

#### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `address` | Object | Dados do endereço |
| `zip_code` | String | Código postal |
| `street_name` | String | Nome da rua |
| `street_number` | Integer | Número da rua |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |


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
            "title": "Serviço",
            "description": "Descrição de serviço",
            "category_id": "travels",
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

## Hospitalidade

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `category_id` | String | Categoria |
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

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `address` | Object | Dados do endereço |
| `zip_code` | String | Código postal |
| `street_name` | String | Nome da rua |
| `street_number` | Integer | Número da rua |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

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
            "title": "Serviço",
            "description": "Descrição de serviço",
            "category_id": "travels",
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

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `address` | Object | Dados do endereço |
| `zip_code` | String | Código postal |
| `street_name` | String | Nome da rua |
| `street_number` | Integer | Número da rua |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

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
            "title": "Produto",
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

## Venda direta

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `description` | String | Descrição |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `address` | Object | Dados do endereço |
| `zip_code` | String | Código postal |
| `street_name` | String | Nome da rua |
| `street_number` | Integer | Número da rua |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre envios

| Object `shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object | Dados do endereço do comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Província |
| `city_name` | String | Cidade |
| `street_number` | Integer | Número da rua |
| `floor` | String | Piso |
| `apartment` | String | Apartamento |
| `local_pickup` | Boolean | `True` se retira na agência ou na loja, `False` se não retira. |

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
            "title": "Produto",
            "picture_url": "",
            "description": "Descrição de produto",
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

## Automóveis e náutica

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `description` | String | Descrição |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `address` | Object | Dados do endereço |
| `zip_code` | String | Código postal |
| `street_name` | String | Nome da rua |
| `street_number` | Integer | Número da rua |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

#### Sobre envios

| Object `shipment` | Tipo | Descrição |
| --- | --- | --- |
| `receiver_address` | Object | Dados do endereço do comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Província |
| `city_name` | String | Cidade |
| `street_number` | Integer | Número da rua |
| `floor` | String | Piso |
| `apartment` | String | Apartamento |
| `local_pickup` | Boolean | `True` se retira na agência ou na loja, `False` se não retira. |

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
            "title": "Produto",
            "picture_url": "",
            "description": "Descrição de produto",
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

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `description` | String | Descrição |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |

#### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `address` | Object | Dados do endereço |
| `zip_code` | String | Código postal |
| `street_name` | String | Nome da rua |
| `street_number` | Integer | Número da rua |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

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
            "title": "Produto",
            "picture_url": "",
            "description": "Descrição de produto",
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
