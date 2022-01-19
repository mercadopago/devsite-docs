# Notificaciones IPN para pagos presenciales

## Introducción

La IPN (instant payment notification) es una notificación que se envía de un servidor de Mercado Pago a un servidor disponibilizado por ti mediante una llamada `HTTP POST` con información de tus transacciones.

Para recibir las notificaciones de los eventos en tu plataforma, puedes configurar previamente una url a la cual Mercado Pago tenga acceso desde el atributo `notification_url` al crear la orden que deseas cobrar.

## Flujo de notificaciones

Para entender el proceso de confirmación de pago podemos dividir todo el proceso en 2 partes:

1. Evento de notificación
2. Consulta de la orden

## Eventos

> WARNING 
> 
> Importante
> 
> Un evento es cualquier tipo de actualización sobre el objeto notificado, incluyendo cambios de estado o de atributos.

Notificamos eventos referidos a tus órdenes (`merchant_order`) o pagos recibidos (`payment`).

Las `merchant_order` son una entidad que agrupa tanto pagos como retiros. Tendrás que consultar los datos de las órdenes que te sean notificadas.

Siempre que suceda un evento relacionado a alguno de los recursos mencionados, te enviaremos una notificación usando `HTTP POST` a la `notification_url` que especificaste.

Los eventos que se notifican son los siguientes:

1. **Registrar la Merchant Order (MO).** Al escanear un QR que contenga un monto, este creará automáticamente una merchant order, enviando una notificación (si se escanean varias veces el mismo QR, cada uno creará una merchant order distinta y por lo tanto una nueva notificación, la integración debe tomar en cuenta este escenario).
2. **Actualización de Payments.** Cada intento de pago por parte del cliente, actualizará la información de la merchant order y enviará una notificación.
3. **Cierre de la MO.** Una vez que se realice un pago aprobado, el status de la MO aparecerá closed y se enviará una notificación.

Si el servidor no está disponible o demora en responder más de 22 segundos, Mercado Pago reintentará notificar periódicamente siguiendo el siguiente esquema:

Evento | Plazo después del primer envío | Tiempo de espera de confirmación
----------------- | ----------------- | -----------------
Envío | - | 22 segundos
Primer intento | 30 segundos | 5 segundos
Segundo intento | 5 minutos | 5 segundos
Tercer intento | 30 minutos | 5 segundos

Mercado Pago informará a esta `notification_url` tanto en la creación como actualización de los estados de pagos u órdenes con dos parámetros:

Campo | Descripción
----------------- | -----------------
“topic” | Identifica de qué se trata. Puede ser `payment` o `merchant_order`
“id” | Es un identificador único del recurso notificado.

Ejemplo: Si configuraste la notification_url: `https://www.yoursite.com/notifications`, recibirás notificaciones de pago de esta manera: `https://www.yoursite.com/notifications?topic=merchant_order&id=123456789`

## ¿Qué debo hacer al recibir una notificación?

Cuando recibas una notificación en tu PDV, Mercado Pago espera una respuesta para validar que la recibiste correctamente. Para esto, debes devolver un `HTTP STATUS 200 (OK)` ó `201 (CREATED)`.

Recuerda que esta comunicación es exclusivamente entre los servidores de Mercado Pago y tu servidor, por lo cual no habrá un usuario físico viendo ningún tipo de resultado.

Para pagos presenciales, te recomendamos utilizar notificaciones IPN de topic `merchant_order` ya que están optimizadas para este tipo de productos. Para ello, ten en cuenta las siguientes reglas:

1.  El campo `status` de la `merchant_order` permanecerá en **opened** cuando aún no tenga pagos asociados, o los tenga y estén rechazados o aprobados por un monto menor al total de la orden.

2. El campo `status` de la `merchant_order` será **closed** cuando la suma de los pagos aprobados sea igual al total de la orden.

Dentro de la orden, en el objeto payments, encontrarás todos los pagos de la misma. Es importante obtener el id de los pagos con `status` = **approved** para poder realizar devoluciones.


> WARNING 
> 
> Importante
> 
> Mercado Pago indica a las integraciones que utilicen este método de notificación IPN como método principal para recibir notificaciones de pago.

## Consulta Mediante GET a Merchant Orders

Para poder consultar los estados de las órdenes mediante el topic merchant order necesitarás hacer un GET usando el id que recibiste en el servidor de notificaciones al siguiente endpoint:

```curl
curl --location --request GET 'https://api.mercadopago.com/merchant_orders/MERCHANT_ORDER_ID' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

Cuya respuesta será la siguiente:

```json
{
 "id": 1126664483,
 "status": "closed",
 "payments": [
    {
     "id": 4996721469,
     "transaction_amount": 4,
     "status": "rejected"
   },
    {
     "id": 4996721476,
     "transaction_amount": 4,
     "status": "approved"
   }
   ...
 ]
}
```
Recuerda que el campo `status` de la `merchant_order` será **closed** cuando la suma de los pagos aprobados sea igual al total de la orden

Dentro de la MO, en el objeto de pagos, encontrarás todos los pagos realizados, ya sean aprobados o rechazados. Es importante obtener el ID de los pagos con estado aprobado para poder realizar devoluciones de cargo/reembolsos.

## Get a Payments

En caso de requerir mayor información de los pagos puedes utilizar el payment ID para obtener una respuesta más detallada

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/payments/PAYMENT_ID' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

Al consultar este servicio se obtendrá una respuesta como la siguiente:

```json
{
  "acquirer": null,
  "acquirer_reconciliation": [],
  "additional_info": {
    "authentication_code": null,
    "available_balance": null,
    "nsu_processadora": null,
    "poi_id": null,
    "tracking_id": "platform:v1-blacklabel,so:ALL,type:N/A,security:2fa"
  },
  "api_version": "2",
  "application_id": 1311377052931992,
  "authorization_code": null,
  "available_actions": [
    "refund"
  ],
  "binary_mode": true,
  "brand_id": null,
  "call_for_authorize_id": null,
  "captured": true,
  "card": {},
  "charges_details": [],
  "client_id": "1311377052931992",
  "collector": {
    "email": "user+826213799@vendedor.com",
    "first_name": "Test",
    "id": 826213799,
    "identification": {
      "number": "CUPU800825569",
      "type": "RFC"
    },
    "last_name": "Test",
    "operator_id": null,
    "phone": {
      "area_code": "01",
      "extension": null,
      "number": "1111-1111"
    }
  },
  "collector_id": 826213799,
  "collector_tags": [],
  "contingencies": {
    "list": [],
    "status": "none"
  },
  "corporation_id": null,
  "counter_currency": null,
  "coupon_amount": 0,
  "coupon_id": null,
  "currency_id": "MXN",
  "date_approved": "2021-12-02T19:13:41.000-04:00",
  "date_created": "2021-12-02T19:13:41.000-04:00",
  "date_last_updated": "2021-12-02T19:13:41.000-04:00",
  "date_of_expiration": null,
  "deduction_schema": null,
  "description": "B06 Glorias",
  "differential_pricing_id": null,
  "external_reference": "001-1192919",
  "fee_details": [],
  "financing_type": null,
  "id": 18560680076,
  "installments": 1,
  "integrator_id": null,
  "internal_metadata": {
    "app_version": "2.196.2.0",
    "hide_payer_information": true,
    "in_store_flow": "attended",
    "internal_risk_analysis": "by_risk",
    "pos_id": "36540388",
    "rule_engine": {
      "rules": [
        {
          "rule_id": 21000005210,
          "rule_set": "processing_fee_and_release"
        }
      ],
      "valid_promise": false,
      "with_promise": false
    },
    "subtype": "store",
    "type": "qr",
    "user_location": {
      "latitude": 20.4999472,
      "longitude": -103.4148599
    }
  },
  "is_test": true,
  "issuer_id": null,
  "live_mode": true,
  "marketplace": "NONE",
  "marketplace_owner": null,
  "merchant_account_id": null,
  "merchant_number": null,
  "metadata": {},
  "money_release_date": "2021-12-02T19:13:41.000-04:00",
  "money_release_days": 0,
  "money_release_schema": null,
  "notification_url": null,
  "operation_type": "regular_payment",
  "order": {
    "id": "3701439528",
    "type": "mercadopago"
  },
  "payer": {
    "email": "prueba+694333235@comprador.com",
    "entity_type": null,
    "first_name": "Test",
    "id": "694333235",
    "identification": {
      "number": "CUPU800825569",
      "type": "RFC"
    },
    "last_name": "Test",
    "operator_id": null,
    "phone": {
      "area_code": "01",
      "extension": null,
      "number": "1111-1111"
    },
    "type": "registered"
  },
  "payer_id": 694333235,
  "payer_tags": [],
  "payment_method_id": "account_money",
  "payment_type_id": "account_money",
  "platform_id": null,
  "point_of_interaction": {
    "business_info": {
      "sub_unit": "qr",
      "unit": "wallet"
    },
    "type": "UNSPECIFIED"
  },
  "pos_id": "36540388",
  "processing_mode": "aggregator",
  "product_id": "bh31umv10flg01nmhg60",
  "profile_id": null,
  "refunds": [],
  "reserve_id": "3671589532",
  "risk_execution_id": 505395628142,
  "shipping_amount": 0,
  "site_id": "[FAKER][GLOBALIZE][UPPER_SITE_ID] ",
  "splitter_id": null,
  "sponsor_id": null,
  "statement_descriptor": null,
  "status": "approved",
  "status_detail": "accredited",
  "store_id": "43633322",
  "taxes_amount": 0,
  "transaction_amount": 39,
  "transaction_amount_refunded": 0,
  "transaction_details": {
    "acquirer_reference": null,
    "external_resource_url": null,
    "financial_institution": null,
    "installment_amount": 0,
    "net_received_amount": 39,
    "overpaid_amount": 0,
    "payable_deferral_period": null,
    "payment_method_reference_id": null,
    "total_paid_amount": 39
  },
  "transaction_id": null,
  "version": 0
}
```

## Contingencia 

Si no se reciben notificaciones, será necesario aplicar como método de contingencia la búsqueda a demanda utilizando el external_reference de la orden como criterio de búsqueda. La misma se puede realizar mediante dos mecanismos:

Formas | Descripción
----------------- | -----------------
Manual | El punto de venta debe incluir un botón para realizar la búsqueda.
Automática | Después de 30 segundos sin recibir ninguna notificación, se inicia una búsqueda de pedidos en cada intervalo de, por ejemplo, 5 segundos.

Para cualquiera de los mecanismos descritos anteriormente utilizaremos el endpoint:

```curl
curl --location --request GET 'https://api.mercadopago.com/merchant_orders?external_reference=EXTERNAL_REFERENCE' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

La respuesta será la misma que utilizando el ID de la orden y deberán utilizar los mismos criterios antes mencionados para confirmar el pago de la misma.
Si no se ha escaneado el QR en el que se publicó el pedido, la respuesta será:

```json
{
  "elements": null,
  "next_offset": 0,
  "total": 0
}
```

> WARNING 
> 
> Importante
> 
> Desde Mercado Pago requerimos para homologar la integración de pagos presenciales que tengan implementada la notificación (IPN) a Merchant Orders como método principal. La búsqueda de orden por `external_reference` deberá usarse sólo como contingencia ante el eventual caso que no se reciban notificaciones.


## Herramientas Adicionales

## Búsqueda de pagos


En caso de que requieras un listado de los pagos realizados puedes utilizar el siguiente recurso:

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/payments/search?limit=30&range=date_created&begin_date=2019-8-4T00:00:00.001-04:00&end_date=2021-12-4T23:59:59.999-04:00&sort=date_created&criteria=desc' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

Puedes utilizar parámetros del body de un payment como query params para poder filtrar los resultados:

- begin date: fecha de inicio de la búsqueda
- end date: fecha de fin de la búsqueda
- status: estado del pago
