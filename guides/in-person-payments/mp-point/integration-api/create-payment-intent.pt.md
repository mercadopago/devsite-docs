---
sites_supported:
  - mla
  - mlb
  - mlm
---

# Comienza a procesar tus pagos

## 1. Crea una intención de pago

### 1.1. Obtén el listado de tus dispositivos disponibles
Antes de crear una intención de pago, es necesario obtener los dispositivos Point asociados a tu cuenta.

``` cURL
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/devices' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
```

Ejemplo de respuesta:

``` json
{
  "devices": [
    {
      "id": "GERTEC_MP35P__8701012051261234"
    },
    {
      "id": "INGENICO_MOVE2500__87010121123456"
    }
  ]
}
```

### 1.2. Crea la intención de pago
Puedes crear una intención de pago y asignarla a tu dispositivo Point obtenido en el paso anterior.

----[mla]----
```cURL
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--data-raw '{
    "amount": 1500,
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456",
        "print_on_terminal": true,
        "ticket_number": "S0392JED"
    }
}'
```
Campo | Descripción
:--- | :--- | 
amount             | monto total de la intención de pago |
external_reference | campo de uso exclusivo del integrador para incluir referencias propias de su sistema  |
print_on_terminal  | campo de tipo boolean que determina si el dispositivo realiza la impresión del comprobante de pago  |
ticket_number      | número de ticket de la intención de pago |

Ejemplo de respuesta

```json
{
  "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
  "device_id": "INGENICO_MOVE2500__ING-ARG-14886780",
  "amount": 1500,
  "additional_info": {
      "external_reference": "4561ads-das4das4-das4754-das456",
      "print_on_terminal": true,
      "ticket_number": "S0392JED"
  }
}
```
------------

----[mlb]----
```cURL
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--data-raw '{
    "amount": 1400,
    "description": "Your payment description",
    "payment": {
        "type": "credit_card",
        "installments": 1, 
        "installments_cost": "seller"
    },
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456",
        "print_on_terminal": true
    }
}'
```
Campo | Descripción
:--- | :---
amount                    | valor total da intenção de pagamento | 
description               | descrição da sua intenção de pagamento | 
payment.type              | tipo de cartão de pagamento | 
payment.installments      | quantidade de parcelas de pagamento | 
payment.installments_cost | quem assume o custo de parcelamento | 
external_reference        | campo de uso exclusivo do integrador para incluir referências do seu próprio sistema | 
print_on_terminal         | Campo booleano que determina se o dispositivo imprime o comprovante de pagament | 

Ejemplo de respuesta

```json
{
    "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
    "device_id": "GERTEC_MP35P__8701012051267097",
    "amount": 1400,
    "description": "Your payment description",
    "payment": {
        "type": "credit_card",
        "installments": 1, 
        "installments_cost": "seller"
    },
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456",
        "print_on_terminal": true
    }
}
```
------------

### 1.3. Cancela una intención de pago (opcional)

Puedes cancelar una intención de pago asignada a un dispositivo Point

``` cURL
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents/:paymentIntentId' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
```

Ejemplo de respuesta

``` json
{
  "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca"
}
```
## 2. Procesa tu intención de pago

Una vez creada la intención de pago, puedes obtenerla desde tu dispositivo Point oprimiendo la tecla verde y continuar 
con los pasos que se muestran en la pantalla para completar el pago.

## 3. Recibe tu notificación

Si configuraste correctamente tu sistema webhook recibirás una notificación al finalizar el proceso de pago.
Puedes consultar la tabla de [estados de una intención de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/glossary#bookmark_posibles_estados_de_una_intención_de_pago)


## 4. Consulta el estado de tu intención de pago

Puedes consultar el estado actual, solo necesitas el `id` que fue retornado en la respuesta al momento de crear la intención de pago.


``` cURL
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/payment-intents/:paymentIntentID' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}'
```

Ejemplo de respuesta:

----[mlb]----
``` json
{
    "state": "FINISHED",
    "id": "0591cb42-f69a-4334-908b-123456789012",
    "device_id": "GERTEC_MP35P_8701012123456789",
    "amount": 250,
    "description": "Your payment description ",
    "payment": {
        "id": "16123456789",
        "type": "debit_card",
        "installments": 1,
        "installments_cost": "seller"
    },
    "additional_info": {
        "external_reference": "10a01a30-a6fe-4584-b22a-07e123456798",
        "print_on_terminal": true
    }
}
```
------------

----[mla]----
``` json
{
    "state": "FINISHED",
    "id": "0aa0519d-d985-4e83-b62d-dda123456789",
    "device_id": "88731317_INGENICO_MOVE2500_ING-ARG-14123456",
    "amount": 600,
    "payment": {
        "id": "11123456789"
    },
    "additional_info": {
        "ticket_number": "123456789123456789"
    }
}
```
------------

> NOTE
>
> Consulta toda la información correspondiente al pago
>
> Toda la información del pago la puedes encontrar en nuestra [API de Pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get)
> donde necesitaras tú **ACCESS_TOKEN** y el número de referencia de pago el `payment.id` que es retornado en el **Webhook** (si lo tienes configurado) o por medio del servicio descrito en el numeral 4.


------

> LEFT_BUTTON_RECOMMENDED_ES
>
> Conoce nuestro simulador Point
>
> Haz uso de nuestro Simulador Point para que puedas probar la API de Integraciones sin necesidad de que tengas un dispositivo físico.
>
> [Simulador Point](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/simulator)
