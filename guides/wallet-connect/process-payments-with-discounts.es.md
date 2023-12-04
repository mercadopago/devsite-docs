# Procesar pagos con descuento

En esta sección, detallamos las solicitudes y los parámetros necesarios para procesar pagos con descuento, y las respuestas esperadas para cada una de ellas.

> NOTE
>
> Importante
>
> El reembolso del descuento no es instantáneo; puede tardar unos 200 milisegundos sin un cupón y hasta 10 segundos con un cupón. Por lo tanto, recomendamos crear la promesa de descuento y proceder inmediatamente con el pago.

Para realizar el procesamiento de los pagos con descuento, utiliza el _curl_ a continuación y asegúrate de que los parámetros de la solicitud estén completos de acuerdo con la información descrita en la siguiente tabla.

| Parámetro  | Tipo  | Descripción   | Ejemplo  |
| --- | --- | --- | --- |
| Authorization  | String  | Token de autorización del usuario (Access token). Esta información se puede obtener a través del menú [Tus integraciones](/developers/es/docs/wallet-connect/additional-content/your-integrations/credentials).  | APP_USR-123456-test-access-t0ken  |
| wallet_payment  | Object  | Objeto que agrupa información de pago procesado a través de Wallet Connect.  | N/A  |
| transaction_amount  | Double  | Valor por el cual se efectúa el pago.  | 550.0  |
| description  | String  | Descripción genérica del pago que se está efectuando.  | "Descripción del pago"  |
| external_reference  | String  | Referencia de pago asignada por el vendedor. Solo acepta números y letras.  | "Pagamento_123"  |
| discount  | Object  | Campo opcional que agrupa los datos del descuento a aplicar. Este campo sólo es obligatorio si deseas crear un pago con descuento. Si se envía vacío, creará un pago sin descuento.  | N/A  |
| amount  | Double  | Valor del descuento a aplicar en el pago.  | 55.0  |
| description  | String  | Descripción del descuento.  | "Descuento para Black Friday".  |
| detail  | Object  | Objeto que proporciona información sobre las características del descuento.  | N/A  |
| value  | Double  | Cantidad de descuento a aplicar en el pago. Este campo se corresponde con el `type` mencionado abajo, por ejemplo, 30 por ciento.  | 10.0  |
| type  | String  | Unidad de medida del valor de descuento, pudiendo ser porcentual o un monto fijo.  | percent (para porcentaje) o fixed (para valores fijos).  |
| cap  | Double  | Valor máximo por el cual el descuento puede ser aplicado en un pago.  | 5000  |
| payer  | Object  | Objeto que contiene los datos del pagador.  | N/A  |
| token  | String  | Token específico del pagador, utilizado para realizar toda la validación del flujo de pago.  | payer1-token2-test3-example4  |
| type_token  | String  | Tipo de token a ser utilizado en los pagos.  | wallet-token (este es el único tipo de token aceptado para los pagos a través de Wallet Connect).  |

[[[
```curl
curl -X POST \
'https://api.mercadopago.com/v1/advanced_payments' \
--header 'Authorization: <YOUR_ACCESS_TOKEN>' \
--data '{
    "wallet_payment": {
        "transaction_amount": 550,
        "description": "Descripción del pago",
        "external_reference": "Pago_123",
        "discount": {
            "amount": 55.0,
            "description": "Pruebas wc",
            "detail": {
                "value": 10.0,
                "type": "percent",
                "cap": 5000
            }
        }
    },
    "payer": {
        "token": "PAYER_TOKEN",
        "type_token": "wallet-token"
    }
}'

```
]]]




## Respuestas

A continuación detallamos las diferentes respuestas que pueden recibirse al procesar un pago con descuento. Las mismas se categorizan en base al resultado de la solicitud, variando desde el éxito en el procesamiento hasta un error específico.

### Éxito

```Json
{
  "id": 1234567,
  "status": "approved",
  "marketplace": null,
  "sponsor_id": null,
  "payments": [
    {
      "id": "PAYMENT-ID",
      "status": "approved",
      "status_detail": "accredited",
      "payment_type_id": "account_money",
      "payment_method_id": "account_money",
      "token": null,
      "transaction_amount": 500,
      "installments": 1,
      "processing_mode": "aggregator",
      "issuer_id": null,
      "coupon_amount": 10.0,
      "campaign_id": "CAMPAIGN-ID",
      "coupon_code": null,
      "description": "Payment Wallet",
      "external_reference": null,
      "statement_descriptor": null,
      "date_of_expiration": null,
      "merchant_account_id": null,
      "payment_method_option_id": null,
      "additional_info": null,
      "transaction_details": null,
      "net_amount": null,
      "taxes": null
    }
  ],
  "disbursements": null,
  "payer": {
    "id": "PAYER-ID",
    "email": "PAYER-EMAIL",
    "address": null,
    "identification": null,
    "first_name": null,
    "last_name": null,
    "phone": null,
    "token": "PAYER-TOKEN",
    "external_payer_id": "EXTERNAL-PAYER-ID"
  },
  "external_reference": null,
  "description": null,
  "binary_mode": true,
  "capture": true,
  "date_created": "2023-07-24T14:30:45.574-04:00",
  "date_last_updated": "2023-07-24T14:30:46.517-04:00",
  "metadata": null,
  "additional_info": null,
  "wallet_payment": {
    "transaction_amount": 550,
    "description": "Payment Wallet",
    "external_reference": null,
    "subscription_data": null,
    "user_present": null,
    "discount": {
      "amount": 50.0,
      "description": "wallet connect test",
      "detail": {
        "value": 10.0,
        "type": "percent",
        "cap": 100000.0
      }
    },
    "payment_preference": {
      "active": true,
      "user_id": 1431302201,
      "payment_method": [
        {
          "priority": 1,
          "payment_method": "account_money"
        }
      ]
    }
  },
  "pos_id": null,
  "store_id": null,
  "wallet_connect_discount": {
    "amount": 10.0,
    "token": "DISCOUNT-TOKEN"
  }
}
```

### Error

En caso de que el descuento aplicado en el pago no sea válido o el valor indicado en el pedido no corresponda al valor del descuento establecido, se generará un error, como se describe a continuación.

```Json
{
  "error": "bad_request",
  "message": "discount doesn't exist or amount is incorrect",
  "status": 400,
  "cause": [
    {
      "code": 400136,
      "description": "discount doesn't exist or amount is incorrect",
      "data": null
    }
  ]
}
```
