# Reembolsos y cancelaciones

**Reembolsos** son transacciones que se realizan cuando un determinado cargo se revierte y las cantidades pagadas se devuelven al comprador. Esto significa que el cliente recibirá en su cuenta o en el extracto de su tarjeta de crédito el monto pagado por la compra de un determinado producto o servicio.

**Cancelaciones** ocurren cuando se realiza una compra pero el pago aún no ha sido aprobado por algún motivo. En este caso, considerando que la transacción no fue procesada y el establecimiento no recibió ningún monto, la compra se cancela y no hay cargo.

Si bien son transacciones similares, es importante tener en cuenta que la cancelación se realiza el mismo día en que se captura el pago, devolviendo el límite a la tarjeta del comprador dentro del plazo definido por el banco emisor. El reembolso referente a la reversión se realiza directamente en la factura de la tarjeta de crédito, o en la cuenta corriente en los casos de pago vía Pix, boleto bancário o débito.

## Cancelaciones

Antes de cancelar una compra, se deben tener en cuenta los siguientes factores: 

- **Status de pago**: Cancelaciones solo se pueden realizar si el estado de pago es Pending o In process. Estos estados se muestran en la respuesta a la llamada de la API de cancelación en los campos de, *Status* y *Status detail* respectivamente.

- **Fecha de vencimiento**: Un pago vence a los 30 días sin confirmación y la cancelación es automática. El status final de esta transacción aparecerá como *Cancelled* o *Expired*. Esta información se mostrará en la respuesta a la llamada de la API de cancelación, en los campos de, *Status* y *Status detail* respectivamente.

----[mlb]----
- **Boleto bancário**: Si expira el período de vigencia de un boleto bancário, el usuario puede volver a generarlo ingresando el ID de transacción de su cuenta de Mercado Pago. Sin embargo, si deseas evitar problemas de retención de inventario, por ejemplo, puedes optar por no hacer disponible una nueva emisión de este boleto. Para hacer esto, simplemente cancélalo.

------------

> Visita nuestra Referencia de API para acceder a la [API de Crear cancelación](/developers/es/reference/chargebacks/_payments_payment_id/put).

## Reembolsos

[TXTSNIPPET][/guides/snippets/test-integration/refunds]
