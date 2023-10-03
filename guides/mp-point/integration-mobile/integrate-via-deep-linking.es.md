# Crear el Deep Link

> NOTE
>
> Importante
>
> Ten en cuenta que la integración de dispositivos móviles vía deep linking no está disponible para tablets o dispositivos Huawei.


Para poder procesar pagos vía Deep Link, deberás llamar a la URL `https://www.mercadopago.com/point/integrations`

En la tabla a continuación puedes ver los parámetros que puedes incluir, sean obligatorios o no, y sus descripciones.

| Parámetro | Descripción |
|---|---|
| `amount` | **Obligatorio**. Es el monto que se le va a cobrar al cliente. |
| `description` | **Obligatorio**. Descripción de la operación (Máx.: 19 carácteres). |
| `external_reference` | **Opcional**. Código de referencia de tu sistema, el mismo es el que permitirá conciliar tu orden de compra con el pago. |
| `notification_url` | **Opcional**. Es la URL donde vas a recibir la notificación de ese pago. Dirígete al subtítulo "Configura tus notificaciones" para más información. |
| `payer_email` | **Opcional**. Email del pagador. |
| `success_url` | **Opcional**. Es la URL donde será redireccionado el usuario luego de un pago aprobado. Si no lo envías, la app permanecerá en la URL de pago exitoso. |
| `fail_url` | **Opcional**. Es la URL donde será redireccionado el usuario luego de un pago rechazado. Si no lo envías, la app permanecerá en la URL de pago rechazado. |

## Configurar notificaciones

Si quieres, puedes recibir notificaciones con las actualizaciones de los pagos generados vía Deep Link. Estas se envían desde nuestra sistema de integraciones a la `notification_url` definida en la creación del Deep Link mediante una llamada `HTTP POST`.  

En estas notificaciones podrás encontrar cuál fue la acción ejecutada (`action`), junto con el `id`y los datos del pago, tal como se muestra a continuación.

```json
{ "action": "payment.created",
  "api_version": "v1",
  "data": {
    "id": "00000000000"},
  "date_created": "2022-11-07T21:47:18Z",
  "id": 000000000000,
  "live_mode": true,
  "type": "payment",
  "user_id": "000000000"}
```