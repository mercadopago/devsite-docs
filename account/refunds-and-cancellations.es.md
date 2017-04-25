# Devoluciones y cancelaciones

Puedes devolver total o parcialmente los pagos que hayas recibido de tus usuarios. Esto te permitirá, por ejemplo, corregir situaciones en las cuales un usuario te haya pagado un monto mayor, haya pagado dos veces un mismo artículo, o se cancele la operación.

### Índice:

1. [Realiza la devolución del pago](#realiza-la-devolución-del-pago)
2. [Realiza una devolución parcial](#realiza-una-devolución-parcial)
3. [Obtén las devoluciones realizadas](#obtén-las-devoluciones-realizadas)
4. [Consideraciones sobre las devoluciones](#consideraciones-sobre-las-devoluciones)
5. [Realiza la cancelación del pago](#realiza-la-cancelación-del-pago)


## Realiza la devolución del pago

Para realizar la devolución:

Utiliza las credenciales de tu aplicación:

```
SHORT_NAME:
PUBLIC_KEY:
ACCESS_TOKEN:
```

```curl
curl -X POST \
-H "Content-Type: application/json" \
'https://api.mercadopago.com/v1/payments/:ID/refunds?access_token=ACCESS_TOKEN'
```

**Response status code: 201 Created**

```json
{
	"id": REFUND_ID,
	"payment_id": ID,
	"amount": 73.48,
	"metadata": {},
	"source": {
		"id": "130379930",
		"name": "Firstname Lastname",
		"type": "collector"
	},
	"date_created": "2014-12-11T11:26:40.537-04:00"
}
```

## Realiza una devolución parcial

También puedes realizar una devolución parcial especificando el monto de la misma:

```curl
curl -X POST \
-H "Content-Type: application/json" \
'https://api.mercadopago.com/v1/payments/:ID/refunds?access_token=ACCESS_TOKEN' \
-d '{"amount":10.5}'
```

## Obtén las devoluciones realizadas

Verás las devoluciones parciales realizadas en el pago de esta manera:

```json
{
    "id": PAYMENT_ID,
    ...

    "refunds": [
      {
        "id": 111,
        "payment_id": PAYMENT_ID,
        "amount": 16.98,
        "metadata": {
        },
        "source": {
            "id": "130379930",
            "name": "Firstname Lastname",
            "type": "collector"
        },
        "date_created": "2014-12-04T17:00:03.000-04:00",
        "unique_sequence_number": null
      },
      {
        "id": 222,
        "payment_id": PAYMENT_ID,
        "amount": 10,
        "metadata": {
        },
        "source": {
            "id": "USER_ID",
            "name": "Firstname Lastname",
            "type": "collector"
        },
        "date_created": "2014-12-04T16:55:50.000-04:00",
        "unique_sequence_number": null
      }
    ]
}
```

## Consideraciones sobre las devoluciones

Para realizar devoluciones totales o parciales, debes tener en cuenta las siguientes consideraciones.

### Restricciones

- Sólo se pueden devolver pagos en estado `approved`.
- Puedes devolver un pago dentro de los **90 días** desde su acreditación.
- Debes poseer suficiente dinero disponible en tu cuenta para devolver el monto del pago satisfactoriamente. De lo contrario obtendrás un error `400 Bad Request`.
- Puedes realizar hasta 20 devoluciones parciales a un mismo pago.
- Por el momento, no es posible hacer devoluciones parciales a pagos de artículos de Mercado Libre (`marketplace=MELI`).
- Por el momento, no es posible hacer devoluciones parciales a pagos realizados con la tarjeta de Mercado Libre de Brasil (`payment_method_id=melicard`).
- Por el momento, no es posible hacer devoluciones parciales a pagos recurrentes de Argentina (`operation_type=recurring_payment`).

### Comportamiento

- El estado del pago será `approved:partially_refunded` hasta que se haya devuelto la totalidad. Recién en ese momento el estado pasará a ser `refunded`.
- Las devoluciones de pagos hechos con tarjeta serán reintegradas en el resumen de la misma.
- Las devoluciones de pagos hechos con otros medios serán depositadas en la cuenta de Mercado Pago del comprador.
- Todas las comisiones e intereses cobrados serán devueltos parcialmente en forma proporcional.

## Realiza la cancelación del pago

Para realizar la cancelación, utiliza las credenciales de tu aplicación:

```
SHORT_NAME: 
PUBLIC_KEY: 
ACCESS_TOKEN:
```

```curl
curl -X PUT \
-H "Content-Type: application/json" \
-d '{"status":"cancelled"}' \
'https://api.mercadopago.com/v1/payments/:ID?access_token=ACCESS_TOKEN'
```

**Response status code: 200 OK**

### Consideraciones

- Puedes cancelar pagos que se encuentren en los siguientes estados de operación: `pending`, `in_process`.
- Los pagos con tarjeta de crédito que se cancelen, no podrán volver a cambiar de estado.
- Los pagos con **cupones, depósitos y/o transferencias** que se cancelen, serán depositados en la cuenta de Mercado Pago del comprador.
