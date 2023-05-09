# Dados adicionais de indústria

Dependendo do ramo de atividades ou setor de sua loja, existe uma série de dados que podem ser enviados na hora de gerar um pagamento que vão ajudar a melhorar sua aprovação. Você pode vê-los detalhados por setor abaixo.

> WARNING 
> 
> Atenção
>
> Uso de exemplos
>
> Esta informação só funciona para integrações com Payment API. Para informações sobre integrações padrão, clique [aqui](/developers/pt/reference/payments/_payments/post).

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
| `pick_up_on_seller` | Boolean | `True` se retira na agência ou na loja, `False` se não retira. |
| `receiver_address` | Object | Dados do endereço do comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Província |
| `city_name` | String | Cidade |
| `street_number` | Integer | Número da rua |
| `express_shipment` | Boolean | `True` se é, `False` se não é. |


## Tickets e entretenimento

### Campos para enviar
Adicione todas as informações adicionais que você deseja.

#### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Codigo |
| `title` | String | Nome |
| `description` | String | Motivo do pagamento ou nome do item |
| `picture_url` | String | URL da foto do produto |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |
| `event_date` | Date | Data |

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
| `pick_up_on_seller` | Boolean | `1` se retira na agência ou na loja, `0` se não retira. |


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


