# General: Additional Info

## Campos a enviar



Revisá que campos podes enviar, dependiendo de tu industria, para mejorar tu aprobación:

- **[Apparel](#Apparel)**
- **[Electro](#Electro)**
- **[Entretenimiento](#Entretenimiento)**
- **[Home & Deco](#Home-&-Deco)**
- **[Apps y Plataformas Online](#Apps-y-Plataformas-Online)**
- **[Retail](#Retail)**
- **[Gobierno y Servicios Publicos](#Gobierno-y-Servicios Públicos)**
- **[Turismo](#Turismo)**
- **[Hotelería](#Hotelería)**
- **[Servicios](#Servicios)**
- **[Utilities](#Utilities)**
- **[Automoviles y Nauticas](#Automóviles-y-Náuticas)**
- **[Transporte Urbano](#Transporte-Urbano)**



# Apparel

## Campos a enviar: Additional Info

### **Items:**

| Array: Items | Tipo    | Descripción          |
| ------------ | ------- | -------------------- |
| id           | String  | Código de item       |
| title        | String  | Nombre de item       |
| type         | String  | Tipo de item         |
| description  | String  | Descripción del item |
| picture_url  | String  | URL de imagen        |
| category_id  | String  | Categoría del item   |
| quantity     | Integer | Cantidad de items    |
| unit_price   | Float   | Precio unitario      |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |



### **Shipments:**

| Object: Shipment | Tipo    | Descripción                            |
| ---------------- | ------- | -------------------------------------- |
| receiver_address | Object  | Datos de dirección del comprador       |
| zip_code         | String  | Código Postal                          |
| state_name       | String  | Provincia                              |
| city_name        | String  | Ciudad                                 |
| street_number    | Integer | Número de calle                        |
| express_shipment | Boolean | True si lo tiene, False si no lo tiene |

```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "picture_url": "",
            "description": "Test - Description",
            "type": "test",
            "category_id": "fashion",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "first_name": "Test",
        "last_name": "Tester",
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
            "zip_code": "12345",
            "street_name": "Street Name",
            "city_name": "Rio de Janeiro",
            "state_name": "Rio de Janeiro",
            "street_number": 1234
        },
        "express_shipment": false
    }
}'
```



# Electro

## Campos a enviar: Additional Info

### **Items:**

| Array: Items | Tipo    | Descripción                                              |
| ------------ | ------- | -------------------------------------------------------- |
| id           | String  | Código de item                                           |
| title        | String  | Nombre de item                                           |
| category_id  | String  | Categoría del item                                       |
| quantity     | Integer | Cantidad de items                                        |
| unit_price   | Float   | Precio unitario                                          |
| warranty     | Boolean | True si el producto tiene garantía, False si no la tiene |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |



### **Shipments:**

| Object: Shipment | Tipo    | Descripción                                     |
| ---------------- | ------- | ----------------------------------------------- |
| local_pickup     | Boolean | True si retira en sucursal, False si no lo hace |
| receiver_address | Object  | Datos de dirección del comprador                |
| zip_code         | String  | Código Postal                                   |
| state_name       | String  | Provincia                                       |
| city_name        | String  | Ciudad                                          |
| street_number    | Integer | Número de calle                                 |
| express_shipment | Boolean | True si lo tiene, False si no lo tiene          |

```json
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
            "currency_id": "ARS",
            "title": "Test AM - Title",
            "category_id": "phones",
            "quantity": 1,
            "unit_price": 150,
            "warranty": false,
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "first_name": "Test",
        "last_name": "Tester",
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
            "zip_code": "12345",
            "street_name": "Street Name",
            "city_name": "Rio de Janeiro",
            "state_name": "Rio de Janeiro",
            "street_number": 1234
        },
        "express_shipment": false,
        "local_pickup": false
    }
}'
```



# Entretenimiento

## Campos a enviar: Additional Info

### **Items:**

| Array: Items | Tipo    | Descripción        |
| ------------ | ------- | ------------------ |
| id           | String  | Código de item     |
| title        | String  | Nombre de item     |
| category_id  | String  | Categoría del item |
| quantity     | Integer | Cantidad de items  |
| unit_price   | Float   | Precio unitario    |
| event_date   | Date    | Fecha del evento   |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |



### **Shipments:**

| Object: Shipment | Tipo    | Descripción                                     |
| ---------------- | ------- | ----------------------------------------------- |
| local_pickup     | Boolean | True si retira en sucursal, False si no lo hace |
| receiver_address | Object  | Datos de dirección del comprador                |
| zip_code         | String  | Código Postal                                   |
| state_name       | String  | Provincia                                       |
| city_name        | String  | Ciudad                                          |
| street_number    | Integer | Número de calle                                 |
| express_shipment | Boolean | True si lo tiene, False si no lo tiene          |

```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "category_id": "entertainment",
            "quantity": 1,
            "unit_price": 150,
            "event_date": "2020-06-02T12:58:41.425-04:00",
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "fisrt_name": "Test",
        "last_name": "Tester",
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
            "zip_code": "12345",
            "street_name": "Street Name",
            "city_name": "Rio de Janeiro",
            "state_name": "Rio de Janeiro",
            "street_number": 1234
        },
        "express_shipment": false,
        "local_pickup": false
    }
}'
```



# Home & Deco

## Campos a enviar: Additional Info

### **Items:**

| Array: Items | Tipo    | Descripción                                              |
| ------------ | ------- | -------------------------------------------------------- |
| id           | String  | Código de item                                           |
| title        | String  | Nombre de item                                           |
| description  | String  | Descripción del item                                     |
| category_id  | String  | Categoría del item                                       |
| quantity     | Integer | Cantidad de items                                        |
| unit_price   | Float   | Precio unitario                                          |
| warranty     | Boolean | True si el producto tiene garantía, False si no la tiene |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |



### **Shipments:**

| Object: Shipment | Tipo    | Descripción                                     |
| ---------------- | ------- | ----------------------------------------------- |
| local_pickup     | Boolean | True si retira en sucursal, False si no lo hace |
| receiver_address | Object  | Datos de dirección del comprador                |
| zip_code         | String  | Código Postal                                   |
| state_name       | String  | Provincia                                       |
| city_name        | String  | Ciudad                                          |
| street_number    | Integer | Número de calle                                 |
| express_shipment | Boolean | True si lo tiene, False si no lo tiene          |

```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "picture_url": "",
            "description": "Test - Description",
            "category_id": "home",
            "quantity": 1,
            "unit_price": 150,
            "warranty": false,
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "first_name": "Test",
        "last_name": "Tester",
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
            "zip_code": "12345",
            "street_name": "Street Name",
            "city_name": "Rio de Janeiro",
            "state_name": "Rio de Janeiro",
            "street_number": 1234
        },
        "express_shipment": false,
        "local_pickup": false
    }
}'
```



# Apps y Plataformas Online

## Campos a enviar: Additional Info

### **Items:**

| Array: Items | Tipo    | Descripción        |
| ------------ | ------- | ------------------ |
| id           | String  | Código de item     |
| title        | String  | Nombre de item     |
| category_id  | String  | Categoría del item |
| quantity     | Integer | Cantidad de items  |
| unit_price   | Float   | Precio unitario    |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |

```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "picture_url": "",
            "description": "Test - Description",
            "category_id": "services",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "name": "Test",
        "surname": "Tester",
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



# Apps y Plataformas Online

## Campos a enviar: Additional Info

### **Items:**

| Array: Items | Tipo    | Descripción        |
| ------------ | ------- | ------------------ |
| id           | String  | Código de item     |
| title        | String  | Nombre de item     |
| category_id  | String  | Categoría del item |
| quantity     | Integer | Cantidad de items  |
| unit_price   | Float   | Precio unitario    |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |

```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "picture_url": "",
            "description": "Test - Description",
            "category_id": "services",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "name": "Test",
        "surname": "Tester",
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



# Retail

## Campos a enviar: Additional Info

### **Items:**

| Array: Items | Tipo    | Descripción          |
| ------------ | ------- | -------------------- |
| id           | String  | Código de item       |
| title        | String  | Nombre de item       |
| description  | String  | Descripción del item |
| picture_url  | String  | URL de imagen        |
| category_id  | String  | Categoría del item   |
| quantity     | Integer | Cantidad de items    |
| unit_price   | Float   | Precio unitario      |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |



### **Shipments:**

| Object: Shipment | Tipo    | Descripción                                     |
| ---------------- | ------- | ----------------------------------------------- |
| local_pickup     | Boolean | True si retira en sucursal, False si no lo hace |
| receiver_address | Object  | Datos de dirección del comprador                |
| zip_code         | String  | Código Postal                                   |
| state_name       | String  | Provincia                                       |
| city_name        | String  | Ciudad                                          |
| street_number    | Integer | Número de calle                                 |
| express_shipment | Boolean | True si lo tiene, False si no lo tiene          |

```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "picture_url": "",
            "description": "Test - Description",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "name": "Test",
        "surname": "Tester",
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
            "zip_code": "12345",
            "street_name": "Street Name",
            "city_name": "Rio de Janeiro",
            "state_name": "Rio de Janeiro",
            "street_number": 1234
        },
        "express_shipment": false,
        "local_pickup": false
    }
}'
```



# Gobierno y Servicios Públicos

## Campos a enviar: Additional Info

### **Items:**

| Array: Items | Tipo    | Descripción          |
| ------------ | ------- | -------------------- |
| id           | String  | Código de item       |
| title        | String  | Nombre de item       |
| description  | String  | Descripción del item |
| category_id  | String  | Categoría del item   |
| quantity     | Integer | Cantidad de items    |
| unit_price   | Float   | Precio unitario      |
| event_date   | Date    | Fecha del evento     |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |



### **Shipments:**

| Object: Shipment | Tipo    | Descripción                      |
| ---------------- | ------- | -------------------------------- |
| receiver_address | Object  | Datos de dirección del comprador |
| zip_code         | String  | Código Postal                    |
| state_name       | String  | Provincia                        |
| city_name        | String  | Ciudad                           |
| street_number    | Integer | Número de calle                  |

```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "picture_url": "",
            "description": "Test - Description",
            "category_id": "services",
            "quantity": 1,
            "unit_price": 150,
            "event_date": "2020-06-02T12:58:41.425-04:00"
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "name": "Test",
        "surname": "Tester",
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
            "zip_code": "12345",
            "street_name": "Street Name",
            "city_name": "Rio de Janeiro",
            "state_name": "Rio de Janeiro",
            "street_number": 1234
        }
    }
}'
```



# Turismo

## Campos a enviar: Additional Info

### **Items:**

| Array: Items          | Tipo    | Descripción                        |
| --------------------- | ------- | ---------------------------------- |
| id                    | String  | Código de item                     |
| title                 | String  | Nombre de item                     |
| description           | String  | Descripción del item               |
| category_id           | String  | Categoría del item                 |
| quantity              | Integer | Cantidad de items                  |
| unit_price            | Float   | Precio unitario                    |
| category_descriptor   | Object  | Descripción de la categoría        |
| passenger             | Object  | Información adicional del pasajero |
| first_name            | String  | Nombre                             |
| last_name             | String  | Apellido                           |
| identification_type   | String  | Tipo de identificación             |
| identification_number | String  | Número de identificación           |
| route                 | Object  | Información de la ruta             |
| departure             | String  | Salida                             |
| destination           | String  | Llegada                            |
| departure_date_time   | Date    | Fecha de salida                    |
| arrival_date_time     | Date    | Fecha de llegada                   |
| company               | String  | Compañía                           |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |



```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "description": "Test - Description",
            "category_id": "Travels",
            "category_descriptor":{
             "passenger": {
               "first_name": "Test",
               "last_name": "Tester",
              	   	"type": "DNI",
              	 	  "number": 12345678
              },
              "route": {
            	 "departure": "Buenos Aires",
            	 "destination": "Londres",
            	 "departure_date_time": "2022-03-12T12:58:41.425-04:00",
            	 "arrival_date_time": "2022-03-14T12:58:41.425-04:00",
            	 "company": "Airlines"
            }
},
            "quantity": 1,
            "unit_price": 150
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "name": "Test",
        "surname": "Tester",
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



# Hotelería

## Campos a enviar: Additional Info

### **Items:**

| Array: Items          | Tipo    | Descripción                        |
| --------------------- | ------- | ---------------------------------- |
| id                    | String  | Código de item                     |
| title                 | String  | Nombre de item                     |
| category_id           | String  | Categoría del item                 |
| quantity              | Integer | Cantidad de items                  |
| unit_price            | Float   | Precio unitario                    |
| event_date            | Date    | Fecha del evento                   |
| category_descriptor   | Object  | Descripción de la categoría        |
| passenger             | Object  | Información adicional del pasajero |
| first_name            | String  | Nombre                             |
| last_name             | String  | Apellido                           |
| identification_type   | String  | Tipo de identificación             |
| identification_number | String  | Número de identificación           |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |

```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "description": "Test - Description",
            "category_id": "Travels",
            "category_descriptor": {
                "passenger": {
                    "first_name": "Test",
                    "last_name": "Tester",
                    "type": "DNI",
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
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "name": "Test",
        "surname": "Tester",
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



# Servicios

## Campos a enviar: Additional Info

### **Items:**

| Array: Items | Tipo    | Descripción          |
| ------------ | ------- | -------------------- |
| id           | String  | Código de item       |
| title        | String  | Nombre de item       |
| description  | String  | Descripción del item |
| category_id  | String  | Categoría del item   |
| quantity     | Integer | Cantidad de items    |
| unit_price   | Float   | Precio unitario      |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |

```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "picture_url": "",
            "description": "Test - Description",
            "category_id": "services",
            "quantity": 1,
            "unit_price": 150
            
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "name": "Test",
        "surname": "Tester",
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



# Utilities

## Campos a enviar: Additional Info

### **Items:**

| Array: Items | Tipo    | Descripción        |
| ------------ | ------- | ------------------ |
| id           | String  | Código de item     |
| title        | String  | Nombre de item     |
| category_id  | String  | Categoría del item |
| quantity     | Integer | Cantidad de items  |
| unit_price   | Float   | Precio unitario    |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |

```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "picture_url": "",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150
            
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "name": "Test",
        "surname": "Tester",
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



# Venta Directa

## Campos a enviar: Additional Info

### **Items:**

| Array: Items | Tipo    | Descripción          |
| ------------ | ------- | -------------------- |
| id           | String  | Código de item       |
| title        | String  | Nombre de item       |
| description  | String  | Descripción del item |
| category_id  | String  | Categoría del item   |
| quantity     | Integer | Cantidad de items    |
| unit_price   | Float   | Precio unitario      |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |



### **Shipments:**

| Object: Shipment | Tipo    | Descripción                                     |
| ---------------- | ------- | ----------------------------------------------- |
| receiver_address | Object  | Datos de dirección del comprador                |
| zip_code         | String  | Código Postal                                   |
| state_name       | String  | Provincia                                       |
| city_name        | String  | Ciudad                                          |
| street_number    | Integer | Número de calle                                 |
| floor            | String  | Piso                                            |
| apartment        | String  | Apartamento                                     |
| local_pickup     | Boolean | True si retira en sucursal, False si no lo hace |

```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "picture_url": "",
            "description": "Test - Description",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150
            
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "name": "Test",
        "surname": "Tester",
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
            "zip_code": "12345",
            "street_name": "Street Name",
            "city_name": "Rio de Janeiro",
            "state_name": "Rio de Janeiro",
            "street_number": 1234,
            "floor": "12",
            "apartment": "B"
        }
    }
}'
```



# Automóviles y Náuticas

## Campos a enviar: Additional Info

### **Items:**

| Array: Items | Tipo    | Descripción          |
| ------------ | ------- | -------------------- |
| id           | String  | Código de item       |
| title        | String  | Nombre de item       |
| description  | String  | Descripción del item |
| category_id  | String  | Categoría del item   |
| quantity     | Integer | Cantidad de items    |
| unit_price   | Float   | Precio unitario      |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |



### **Shipments:**

| Object: Shipment | Tipo    | Descripción                                     |
| ---------------- | ------- | ----------------------------------------------- |
| receiver_address | Object  | Datos de dirección del comprador                |
| zip_code         | String  | Código Postal                                   |
| state_name       | String  | Provincia                                       |
| city_name        | String  | Ciudad                                          |
| street_number    | Integer | Número de calle                                 |
| floor            | String  | Piso                                            |
| apartment        | String  | Apartamento                                     |
| local_pickup     | Boolean | True si retira en sucursal, False si no lo hace |

```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "picture_url": "",
            "description": "Test - Description",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150
            
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "name": "Test",
        "surname": "Tester",
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
            "zip_code": "12345",
            "street_name": "Street Name",
            "city_name": "Rio de Janeiro",
            "state_name": "Rio de Janeiro",
            "street_number": 1234,
            "floor": "12",
            "apartment": "B"
        }
    }
}'
```



# Transporte Urbano

## Campos a enviar: Additional Info

### **Items:**

| Array: Items | Tipo    | Descripción          |
| ------------ | ------- | -------------------- |
| id           | String  | Código de item       |
| title        | String  | Nombre de item       |
| description  | String  | Descripción del item |
| category_id  | String  | Categoría del item   |
| quantity     | Integer | Cantidad de items    |
| unit_price   | Float   | Precio unitario      |



### **Payer:**

| Object: Payer            | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| identification           | Object  | Datos de identificación                                      |
| identification_type      | String  | Tipo de identificación                                       |
| identification_number    | String  | Número de identificación                                     |
| phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | Enum    | Tipo de autenticación: ("Gmail"-"Facebook"-"Web Nativa"-"Otro") |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Boolean | True si lo es, False si no lo es                             |
| is_first_purchase_online | Boolean | True si lo es, False si no lo es                             |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |

```json
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
            "currency_id": "ARS",
            "title": "Test - Title",
            "picture_url": "",
            "description": "Test - Description",
            "category_id": "others",
            "quantity": 1,
            "unit_price": 150
            
        }
    ],
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "44445555"
        },
        "address": {
            "zip_code": "12345",
            "street_name": "Street Name",
            "street_number": 1234
        },
        "identification": {
          "identification_type": "DNI",
          "identification_number": "12345678"
        },
        "email": "test_user_5043659@testuser.com",
        "name": "Test",
        "surname": "Tester",
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

