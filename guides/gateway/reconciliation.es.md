---
sites_supported:
  - mla
  - mco
  - global
---

# Mercado Pago Gateway: Conciliación

A continuación verás información de como conciliar las operaciones de Mercado Pago Gateway con las operaciones de los adquirentes y emisores.

## Utilizando un partner

La forma más fácil es trabajar con uno de nuestros partners:

|País|Partner|
|---|---|
|Argentina|[Increase](https://www.increasecard.com/mercadopago/)|

> Estamos trabajando para ofrecerte más partners

## Utilizando tu sistema

Si deseas realizar la conciliación a través de tu sistema de gestión o con un desarrollo propio, tienes dos opciones:

### Conciliar vía API

Realizando un **GET** al endpoint /payments de la API de Mercado Pago puedes obtener el listado de operaciones:

```curl -X GET \
"https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN" \
-H "Content-Type: application/json"
-d "{
  'status': 'approved'
}"
```

Cada operación (payment) contendrá la información de conciliación dentro del nodo `acquirer_reconciliation`:

```json
{
  "id": "",
  "acquirer_reconciliation": [
    {
      "authorization_code": "646382",
      "batch_closing_date": "2019-06-10T17:00:00.000-04:00",
      "batch_number": "017",
      "date_created": "2019-06-10T10:49:47.000-04:00",
      "date_last_updated": "2019-06-10T10:49:53.000-04:00",
      "operation": "authorization",
      "operation_status": "approved",
      "refund_id": null,
      "terminal_number": "98809468",
      "transaction_number": "0036"
    },
    {
      "authorization_code": "646382",
      "batch_closing_date": "2019-06-10T17:00:00.000-04:00",
      "batch_number": "017",
      "date_created": "2019-06-10T10:49:48.000-04:00",
      "date_last_updated": "2019-06-10T10:49:53.000-04:00",
      "operation": "capture",
      "operation_status": "approved",
      "refund_id": null,
      "terminal_number": "98809468",
      "transaction_number": "0037"
    }
  ],
  ...
}
```

### Atributos

|Atributo|Descripción|
|---|---|
|`authorization_code`| Código de autorización |
|`batch_closing_date`| Fecha de cierre de lote |
|`batch_number`| Número de lote |
|`date_created`| Fecha de creación del registro |
|`date_last_updated`| Fecha de última modificación del registro |
|`operation`| Tipo de operación |
|`operation_status`| Estado de la operación |
|`refund_id`| ID del reembolso |
|`terminal_number`| Número de terminal |
|`transaction_number`| Número de operación o de cupón |

> Es importante mencionar que la información de `acquirer_reconciliation` puede ir variando en el tiempo según los distintos casos de uso y que los datos varían según cada adquirente.

### Tipos de operación

Los valores posibles de `operation` son:

* **authorization:** autorización
* **capture:** captura
* **online_purchase:** compra directa
* **refund_online_purchase:** devolución / reeembolso de una compra directa
* **refund_capture:** devolución / reeembolso de una captura
* **refund_authorization:** devolución / reeembolso de una autorización

### Estados de una operación

Los valores posibles de `operation_status` son:

* **approved:** aprobada
* **rejected:** rechazada
* **in_process:** en proceso

### Conciliar vía Archivo

En la sección _Operaciones Gateway_ podrás ver el listado de operaciones.

![Operaciones](/images/gateway/operations.png)

Al presionar el vínculo _Exportar_ verás la siguiente vista:

![Exportar](/images/gateway/export.png)

Elegí tu formato preferido y el archivo será generado

> Si el archivo es muy grande lo recibirás unos minutos más tarde via e-mail a la casilla de tu cuenta de Mercado Pago

## ¿Necesitás ayuda?

Comunicate con tu ejecutivo de cuenta.