---
  indexable: false
---

# Inicio rápido

### Pagos de Marketplace con split

> WARNING
>
> Pre-requisitos
>
> Esta guía asume que ya has creado y configurado correctamente tu [Marketplace](https://www.mercadopago.com.ar/developers/es/guides/online-payments/marketplace/checkout-api/introduction/) y sabes cómo [generar un token de tarjeta](https://www.mercadopago.com.ar/developers/en/guides/online-payments/checkout-api/receiving-payment-by-card). De no ser el caso, contactate con tu ejecutivo de cuenta para configurar correctamente tu Marketplace.
>
> Tus vendedores deben contar con una cuenta de Mercado Pago y tienen que [configurar los permisos necesarios para recibir los cobros](https://www.mercadopago.com.ar/developers/es/guides/online-payments/marketplace/advanced-payments/sellers-permissions).

El modelo de negocio de carrito de compras consta de un pago por el monto total de la operación, efectuado por el comprador. Este pago se divide en los correspondientes pagos a cada Vendedor por la venta de su producto. A su vez, por cada pago realizado a los vendedores, el Marketplace puede retener una parte del monto de la venta en concepto de comisión.

A continuación vemos como crear un Advanced Payment donde el comprador paga con tarjeta de crédito y se realiza el split para dos vendedores:

#### Request
```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer MKT_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments' \
    -d '{...}'
```

> NOTE
>
> Nota
>
> El parámetro MKT_ACCESS_TOKEN es el access_token de tu aplicación.

Dentro del `body` se definen los siguientes campos:
* `payer`: Información del Comprador.
* `payments`: Pago del Comprador por el total de la transacción.
* `disbursements`: Básicamente se definen las reglas de división de pagos para los Vendedores.
    * `collector_id`: ID de la cuenta de Mercado Pago del Vendedor.
    * `application_fee`: Comisión que retiene el Marketplace.
    * `money_release_days`: Cantidad de días en que se liberará el dinero del Vendedor a partir de la aprobación del pago.
* `external_reference`: Identificador que define el Marketplace para este advanced payment en particular.

```json
{
  "payer": {
    "email": "test@user.com"
  },  
  "payments": [
    {
      "payment_method_id": "visa",
      "payment_type_id": "credit_card",
      "token": "jhuyt786r5yhfcgjvhkuoy7t86r75erdfhcgv",
      "transaction_amount": 1000,
      "installments": 1,
      "processing_mode": "aggregator"
    }
  ],
  "disbursements": [
    {
      "amount": 200,
      "external_reference": "ref-collector-1",
      "collector_id": 44444444,
      "application_fee": 20,
      "money_release_days": 30
    },
    {
      "amount": 800,
      "external_reference": "ref-collector-2",
      "collector_id": 55555555,
      "application_fee": 80,
      "money_release_days": 30
    }
  ],
  "external_reference": "ref-transaction"
}
```

La respuesta exitosa será un `HTTP Status 201 Created` y devolverá el advanced payment completo. De lo contrario devolverá el `HTTP Status` correspondiente al error y un mensaje aclaratorio.

```json
{
  "id": 64576879,
  "status": "approved",
  "payments": [
    {
      "id": 967654546,
      ...
    }
  ],
  "disbursements": [
    {
      "id": 987654,
      ...
    },
    {
      "id": 456678,
      ...
    }
  ],
  ...
}
```

En tu cuenta de Mercado Pago verás acreditado el monto de tus comisiones y cada vendedor verá en su cuenta el saldo actualizado con el monto correspondiente.
