# Additional industry data

Depending on the branch of activities or industry of your store, there is a series of data that can be sent when creating a payment that will help improve your approval. You can see them detailed by industry below.

> WARNING 
> 
> Attention
> 
> This information applies only for Payment API integrations. To see information about the standard integration with payments api, click [here](/developers/en/reference/payments/_payments/post).

## Apparel

### Fields to send
Add all the additional information you want.

#### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `type` | String | Type |
| `description` | String | Description |
| `picture_url` | String | Picture URL |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |

#### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object | Adress data |
| `zip_code` | String | Postal code |
| `street_name` | String | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object | Address of the buyer. |
| `zip_code` | String | Postal code |
| `state_name` | String | Province |
| `city_name` | String | City |
| `street_number` | Integer | Street number |
| `express_shipment` | Boolean | `True` if it is, `False` if it is not. |


## Electro

### Fields to send
Add all the additional information you want.

#### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |
| `warranty` | Boolean | `True` if the product has a guarantee, `False` if it does not. |

#### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object | Adress data |
| `zip_code` | String | Postal code |
| `street_name` | String | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `shipment` | Type | Description |
| --- | --- | --- |
| `pick_up_on_seller` | Boolean | `True` if you withdraw in branch, `False` if you do not. |
| `receiver_address` | Object | Address of the buyer. |
| `zip_code` | String | Postal code |
| `state_name` | String | Province |
| `city_name` | String | City |
| `street_number` | Integer | Street number |
| `express_shipment` | Boolean | `True` if it is, `False` if it is not. |


## Tickets and entertainment

### Fields to send 
Add all the additional information you want.

#### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `description` | String | Payment reason or item title |
| `picture_url` | String | URL of the product’s picture |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |
| `event_date` | Date | Event date |

#### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |




#### About shipments

| Object `shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object | Address of the buyer. |
| `zip_code` | String | Postal code |
| `state_name` | String | Province |
| `city_name` | String | City |
| `street_number` | Integer | Street number |
| `express_shipment` | Boolean | `True` if it is, `False` if it is not. |

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

### Fields to send 
Add all the additional information you want.

#### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `description` | String | Description |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |
| `warranty` | Boolean | `True` if the product has a guarantee, `False` if it does not. |

#### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area code |
| `number` | Integer | Phone number |
| `address` | Object | Adress data |
| `zip_code` | String | Postal code |
| `street_name` | String | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object | Address of the buyer. |
| `zip_code` | String | Postal code |
| `state_name` | String | Province |
| `city_name` | String | City |
| `street_number` | Integer | Street number |
| `express_shipment` | Boolean | `True` if it is, `False` if it is not. |


## Applications and online platforms

### Fields to send 
Add all the additional information you want.

#### About items


| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |

#### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area code |
| `number` | Integer | Phone number |
| `address` | Object | Adress data |
| `zip_code` | String | Postal code |
| `street_name` | String | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |


## Retail

### Fields to send 
Add all the additional information you want.

#### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `description` | String | Description |
| `picture_url` | String | Picture URL |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |

#### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area code |
| `number` | Integer | Phone number |
| `address` | Object | Adress data |
| `zip_code` | String | Postal code |
| `street_name` | String | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object | Address of the buyer. |
| `zip_code` | String | Postal code |
| `state_name` | String | Province |
| `city_name` | String | City |
| `street_number` | Integer | Street number |
| `express_shipment` | Boolean | `True` if it is, `False` if it is not. |


## Government and public services

### Fields to send 
Add all the additional information you want.

#### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `description` | String | Description |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |
| `event_date` | Date | Event date |

#### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area code |
| `number` | Integer | Phone number |
| `address` | Object | Adress data |
| `zip_code` | String | Postal code |
| `street_name` | String | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object | Address of the buyer. |
| `zip_code` | String | Postal code |
| `state_name` | String | Province |
| `city_name` | String | City |
| `street_number` | Integer | Street number |


## Tourism

### Fields to send
Add all the additional information you want.

#### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `description` | String | Description |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |
| `category_descriptor` | Object | Category description. |
| `passenger` | Object | Additional passenger information. |
| `first_name`| String | Name |
| `last_name` | String | Surname |
| `route` | Object | Route information |
| `departure` | String | Departure |
| `destination` | String | Arrival |
| `departure_date_time` | Date | Departure date |
| `arrival_date_time` | Date | Arrival date |
| `company` | String | Company |

#### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area code |
| `number` | Integer | Phone number |
| `address` | Object | Adress data |
| `zip_code` | String | Postal code |
| `street_name` | String | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |


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

## Hospitality

### Fields to send
Add all the additional information you want.

#### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |
| `event_date` | Date | Event date |
| `category_descriptor` | Object | Category description. |
| `passenger` | Object | Additional passenger information. |
| `first_name`| String | Name |
| `last_name` | String | Surname |
| `identification_type`| String | Identification type |
| `identification_number` | String | Identification number |

#### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area code |
| `number` | Integer | Phone number |
| `address` | Object | Adress data |
| `zip_code` | String | Postal code |
| `street_name` | String | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |


## Utilities

### Fields to send 
Add all the additional information you want.

#### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |

#### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area code |
| `number` | Integer | Phone number |
| `address` | Object | Adress data |
| `zip_code` | String | Postal code |
| `street_name` | String | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |


## Direct sale

### Fields to send 
Add all the additional information you want.

#### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `description` | String | Description |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |

#### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area code |
| `number` | Integer | Phone number |
| `address` | Object | Adress data |
| `zip_code` | String | Postal code |
| `street_name` | String | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object | Address of the buyer. |
| `zip_code` | String | Postal code |
| `state_name` | String | Province |
| `city_name` | String | City |
| `street_number` | Integer | Street number |
| `floor` | String | Floor |
| `apartment` | String | Apartament |
| `pick_up_on_seller` | Boolean | `1` if withdrawn at branch, `0` if not. |


## Automobiles and nautical

### Fields to send 
Add all the additional information you want.

#### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `description` | String | Description |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |

#### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object | Adress data |
| `zip_code` | String | Postal code |
| `street_name` | String | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object | Address of the buyer. |
| `zip_code` | String | Postal code |
| `state_name` | String | Province |
| `city_name` | String | City |
| `street_number` | Integer | Street number |
| `floor` | String | Floor |
| `apartment` | String | Apartament |
| `local_pickup` | Boolean | `True` if withdrawn at branch, `False` if not. |


## Urban transport

### Fields to send 
Add all the additional information you want.

#### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `description` | String | Description |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |

#### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object | Adress data |
| `zip_code` | String | Postal code |
| `street_name` | String | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

