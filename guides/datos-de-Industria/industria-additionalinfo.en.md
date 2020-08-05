# Datos sobre industrias

Check what fields you can submit according to your industry to improve your approval.

## Apparel

### Fields to send 
Add all the additional information you want.

#### About items

| Array `Items` | Type | Description |
| --- | --- | --- |
| `id` | String  | Code |
| `title` | String  | Name  |
| `type` | String  | Type |
| `description` | String  | Description |
| `picture_url`  | String  | Picture Urls |
| `category_id` | String  | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit Price |

#### About the buyer

| Object `Payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String  | Name |
| `last_name` | String  | Surname |
| `identification` | Object  | Identification data |
| `identification_type` | String  | Identification type |
| `identification_number` | String  | Identification number |
| `phone` | Object  | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object  | Adress data |
| `zip_code` | String  | Postal code |
| `street_name` | String  | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Web Nativa" - "Other") |
| `registration_date` | Date |Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is,` False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is,` False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `Shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object  | Address of the buyer. |
| `zip_code` | String  | Postal code |
| `state_name` | String  | Province |
| `city_name` | String  | City |
| `street_number` | Integer | Street number |
| `express_shipment` | Boolean | `True` if it is,` False` if it is not. |

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
            "description": "Product Description",
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

### Fields to send 
Add all the additional information you want.

#### About items

| Array `Items` | Type | Description |
| --- | --- | --- |
| `id` | String  | Code |
| `title` | String  | Name  |
| `category_id` | String  | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit Price |
| `warranty` | Boolean | `True` if the product has a guarantee,` False` if it does not. |

#### About the buyer

| Object `Payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String  | Name |
| `last_name` | String  | Surname |
| `identification` | Object  | Identification data |
| `identification_type` | String  | Identification type |
| `identification_number` | String  | Identification number |
| `phone` | Object  | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object  | Adress data |
| `zip_code` | String  | Postal code |
| `street_name` | String  | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum |Authentication type ("Gmail" - "Facebook" - "Web Nativa" - "Other") |
| `registration_date` | Date |Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is,` False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is,` False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `Shipment` | Type | Description |
| --- | --- | --- |
| `local_pickup` | Boolean | `True` if you withdraw in branch,` False` if you do not |
| `receiver_address` | Object  | Address of the buyer. |
| `zip_code` | String  | Postal code |
| `state_name` | String  | Province |
| `city_name` | String  | City |
| `street_number` | Integer | Street number |
| `express_shipment` | Boolean | `True` if it is,` False` if it is not. |

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

## Entertainment

### Fields to send 
Add all the additional information you want.

#### About items

| Array `Items` | Type | Description |
| --- | --- | --- |
| `id` | String  | Code |
| `title` | String  | Name  |
| `category_id` | String  | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit Price |
| `event_date` | Date | Fecha del evento |

#### About the buyer

| Object `Payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String  | Name |
| `last_name` | String  | Surname |
| `identification` | Object  | Identification data |
| `identification_type` | String  | Identification type |
| `identification_number` | String  | Identification number |
| `phone` | Object  | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `authentication_type` | Enum |Authentication type ("Gmail" - "Facebook" - "Web Nativa" - "Other") |
| `registration_date` | Date |Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is,` False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is,` False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |




#### About shipments

| Object `Shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object  | Address of the buyer. |
| `zip_code` | String  | Postal code |
| `state_name` | String  | Province |
| `city_name` | String  | City |
| `street_number` | Integer | Street number |
| `express_shipment` | Boolean | `True` if it is,` False` if it is not. |

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

### Fields to send 
Add all the additional information you want.

#### About items

| Array `Items` | Type | Description |
| --- | --- | --- |
| `id` | String  | Code |
| `title` | String  | Name  |
| `description` | String  | Description |
| `category_id` | String  | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit Price |
| `warranty` | Boolean | `True` if the product has a guarantee,` False` if it does not. |

#### About the buyer

| Object `Payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String  | Name |
| `last_name` | String  | Surname |
| `identification` | Object  | Identification data |
| `identification_type` | String  | Identification type |
| `identification_number` | String  | Identification number |
| `phone` | Object  | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object  | Adress data |
| `zip_code` | String  | Postal code |
| `street_name` | String  | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum |Authentication type ("Gmail" - "Facebook" - "Web Nativa" - "Other") |
| `registration_date` | Date |Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is,` False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is,` False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `Shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object  | Address of the buyer. |
| `zip_code` | String  | Postal code |
| `state_name` | String  | Province |
| `city_name` | String  | City |
| `street_number` | Integer | Street number |
| `express_shipment` | Boolean | `True` if it is,` False` if it is not. |


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
            "description": "Product Description",
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

## Applications and online platforms

### Fields to send 
Add all the additional information you want.

#### About items


| Array `Items` | Type | Description |
| --- | --- | --- |
| `id` | String  | Code |
| `title` | String  | Name  |
| `category_id` | String  | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit Price |

#### About the buyer

| Object `Payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String  | Name |
| `last_name` | String  | Surname |
| `identification` | Object  | Identification data |
| `identification_type` | String  | Identification type |
| `identification_number` | String  | Identification number |
| `phone` | Object  | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object  | Adress data |
| `zip_code` | String  | Postal code |
| `street_name` | String  | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum |Authentication type ("Gmail" - "Facebook" - "Web Nativa" - "Other") |
| `registration_date` | Date |Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is,` False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is,` False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

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
            "description": "Product Description",
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

### Fields to send 
Add all the additional information you want.

#### About items

| Array `Items` | Type | Description |
| --- | --- | --- |
| `id` | String  | Code |
| `title` | String  | Name  |
| `description` | String  | Description |
| `picture_url`  | String  | Picture url |
| `category_id` | String  | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit Price |

#### About the buyer

| Object `Payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String  | Name |
| `last_name` | String  | Surname |
| `identification` | Object  | Identification data |
| `identification_type` | String  | Identification type |
| `identification_number` | String  | Identification number |
| `phone` | Object  | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object  | Adress data |
| `zip_code` | String  | Postal code |
| `street_name` | String  | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum |Authentication type ("Gmail" - "Facebook" - "Web Nativa" - "Other") |
| `registration_date` | Date |Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is,` False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is,` False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `Shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object  | Address of the buyer. |
| `zip_code` | String  | Postal code |
| `state_name` | String  | Province |
| `city_name` | String  | City |
| `street_number` | Integer | Street number |
| `express_shipment` | Boolean | `True` if it is,` False` if it is not. |

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
            "description": "Product Description",
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

## Government and public services

### Fields to send 
Add all the additional information you want.

#### About items

| Array `Items` | Type | Description |
| --- | --- | --- |
| `id` | String  | Code |
| `title` | String  | Name  |
| `description` | String  | Description |
| `category_id` | String  | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit Price |
| `event_date` | Date | Fecha del evento |

#### About the buyer

| Object `Payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String  | Name |
| `last_name` | String  | Surname |
| `identification` | Object  | Identification data |
| `identification_type` | String  | Identification type |
| `identification_number` | String  | Identification number |
| `phone` | Object  | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object  | Adress data |
| `zip_code` | String  | Postal code |
| `street_name` | String  | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum |Authentication type ("Gmail" - "Facebook" - "Web Nativa" - "Other") |
| `registration_date` | Date |Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is,` False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is,` False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `Shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object  | Address of the buyer. |
| `zip_code` | String  | Postal code |
| `state_name` | String  | Province |
| `city_name` | String  | City |
| `street_number` | Integer | Street number |

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
            "description": "Service description",
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

## Tourism

### Fields to send 
Add all the additional information you want.

#### About items

| Array `Items` | Type | Description |
| --- | --- | --- |
| `id` | String  | Code |
| `title` | String  | Name  |
| `description` | String  | Description |
| `category_id` | String  | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit Price |
| `category_descriptor` | Object | Category description. |
| `passenger` | Object | Additional passenger information. |
| `first_name`| String | Name |
| `last_name` | String | Surname |
| `identification_type`| String | Identification type |
| `identification_number` | String | Identification number |
| `route` | Object | Route information |
| `departure` | String | Departure  |
| `destination` | String | Arrival |
| `departure_date_time` | Departure date | 
| `arrival_date_time` | Date | Arrival date |
| `company` | String  | Company |

#### About the buyer

| Object `Payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String  | Name |
| `last_name` | String  | Surname |
| `identification` | Object  | Identification data |
| `identification_type` | String  | Identification type |
| `identification_number` | String  | Identification number |
| `phone` | Object  | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object  | Adress data |
| `zip_code` | String  | Postal code |
| `street_name` | String  | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum |Authentication type ("Gmail" - "Facebook" - "Web Nativa" - "Other") |
| `registration_date` | Date |Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is,` False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is,` False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |


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
            "description": "Service description",
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
            	 "company": "Company"
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

## Hotelería

### Fields to send 
Add all the additional information you want.

#### About items

| Array `Items` | Type | Description |
| --- | --- | --- |
| `id` | String  | Code |
| `title` | String  | Name  |
| `category_id` | String  | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit Price |
| `event_date` | Date | Fecha del evento |
| `category_descriptor` | Object | Category description. |
| `passenger` | Object | Additional passenger information. |
| `first_name`| String | Name |
| `last_name` | String | Surname |
| `identification_type`| String | Identification type |
| `identification_number` | String | Identification number |

#### About the buyer

| Object `Payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String  | Name |
| `last_name` | String  | Surname |
| `identification` | Object  | Identification data |
| `identification_type` | String  | Identification type |
| `identification_number` | String  | Identification number |
| `phone` | Object  | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object  | Adress data |
| `zip_code` | String  | Postal code |
| `street_name` | String  | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum |Authentication type ("Gmail" - "Facebook" - "Web Nativa" - "Other") |
| `registration_date` | Date |Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is,` False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is,` False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

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
            "description": "Service description",
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

### Fields to send 
Add all the additional information you want.

#### About items

| Array `Items` | Type | Description |
| --- | --- | --- |
| `id` | String  | Code |
| `title` | String  | Name  |
| `category_id` | String  | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit Price |

#### About the buyer

| Object `Payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String  | Name |
| `last_name` | String  | Surname |
| `identification` | Object  | Identification data |
| `identification_type` | String  | Identification type |
| `identification_number` | String  | Identification number |
| `phone` | Object  | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object  | Adress data |
| `zip_code` | String  | Postal code |
| `street_name` | String  | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Web Nativa" - "Other") |
| `registration_date` | Date |Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is,` False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is,` False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

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

## Direct sale

### Fields to send 
Add all the additional information you want.

#### About items

| Array `Items` | Type | Description |
| --- | --- | --- |
| `id` | String  | Code |
| `title` | String  | Name  |
| `description` | String  | Description |
| `category_id` | String  | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit Price |

#### About the buyer

| Object `Payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String  | Name |
| `last_name` | String  | Surname |
| `identification` | Object  | Identification data |
| `identification_type` | String  | Identification type |
| `identification_number` | String  | Identification number |
| `phone` | Object  | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object  | Adress data |
| `zip_code` | String  | Postal code |
| `street_name` | String  | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum |Authentication type ("Gmail" - "Facebook" - "Web Nativa" - "Other") |
| `registration_date` | Date |Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is,` False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is,` False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `Shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object  | Address of the buyer. |
| `zip_code` | String  | Postal code |
| `state_name` | String  | Province |
| `city_name` | String  | City |
| `street_number` | Integer | Street number |
| `floor` | String | Piso |
| `apartment | String | Apartament |
| `local_pickup` | Boolean | `True` if withdrawn at branch,` False` if not. |

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
            "description": "Product description",
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

## Automobiles and nautical

### Fields to send 
Add all the additional information you want.

#### About items

| Array `Items` | Type | Description |
| --- | --- | --- |
| `id` | String  | Code |
| `title` | String  | Name  |
| `description` | String  | Description |
| `category_id` | String  | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit Price |

#### About the buyer

| Object `Payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String  | Name |
| `last_name` | String  | Surname |
| `identification` | Object  | Identification data |
| `identification_type` | String  | Identification type |
| `identification_number` | String  | Identification number |
| `phone` | Object  | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object  | Adress data |
| `zip_code` | String  | Postal code |
| `street_name` | String  | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum |Authentication type ("Gmail" - "Facebook" - "Web Nativa" - "Other") |
| `registration_date` | Date |Buyer's registration date on the site. |
| `is_first_purchase_online` | Boolean | `True` if it is,` False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

#### About shipments

| Object `Shipment` | Type | Description |
| --- | --- | --- |
| `receiver_address` | Object  | Address of the buyer. |
| `zip_code` | String  | Postal code |
| `state_name` | String  | Province |
| `city_name` | String  | City |
| `street_number` | Integer | Street number |
| `floor` | String | Piso |
| `apartment | String | Apartament |
| `local_pickup` | Boolean | `True` if withdrawn at branch,` False` if not. |

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
            "description": "Product Description",
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

## Urban transport

### Fields to send 
Add all the additional information you want.

#### About items

| Array `Items` | Type | Description |
| --- | --- | --- |
| `id` | String  | Code |
| `title` | String  | Name  |
| `description` | String  | Description |
| `category_id` | String  | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit Price |

#### About the buyer

| Object `Payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String  | Name |
| `last_name` | String  | Surname |
| `identification` | Object  | Identification data |
| `identification_type` | String  | Identification type |
| `identification_number` | String  | Identification number |
| `phone` | Object  | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `address` | Object  | Adress data |
| `zip_code` | String  | Postal code |
| `street_name` | String  | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum |Authentication type ("Gmail" - "Facebook" - "Web Nativa" - "Other") |
| `registration_date` | Date |Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is,` False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is,` False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

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
            "description": "Product Description",
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
