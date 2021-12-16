# Reembolsos y cancelaciones

**Reembolsos** son transacciones que se realizan cuando un determinado cargo se revierte y las cantidades pagadas se devuelven al comprador. Esto significa que el cliente recibirá en su cuenta o en el extracto de su tarjeta de crédito el monto pagado por la compra de un determinado producto o servicio.

**Cancelaciones** ocurren cuando se realiza una compra pero el pago aún no ha sido aprobado por algún motivo. En este caso, considerando que la transacción no fue procesada y el establecimiento no recibió ningún monto, la compra se cancela y no hay cargo.

Si bien son transacciones similares, es importante tener en cuenta que la cancelación se realiza el mismo día en que se captura el pago, devolviendo el límite a la tarjeta del comprador dentro del plazo definido por el banco emisor. El reembolso referente a la reversión se realiza directamente en la factura de la tarjeta de crédito, o en la cuenta corriente en los casos de pago vía Pix, boleto bancário o débito.

En esta documentación, encontrarás las instrucciones y los links de las APIs necesarias para realizar un reembolso total, parcial y cancelar una compra en tu tienda.


> WARNING
>
> Importante
>
> Al ejecutar las API a las que se hace referencia en esta documentación, es posible que encuentres el atributo **X-Idempotency-Key**. Completarlo es importante para asegurar la ejecución y re-ejecución de solicitudes sin efectos secundarios como pagos duplicados en casos de reversión.

## Cancelaciones

Antes de cancelar una compra, se deben tener en cuenta los siguientes factores: 

- **Status de pago**: Cancelaciones solo se pueden realizar si el estado de pago es Pending o In process. Estos estados se muestran en la respuesta a la llamada de la API de cancelación en los campos de, *Status* y *Status detail* respectivamente.

- **Fecha de vencimiento**: Un pago vence a los 30 días sin confirmación y la cancelación es automática. El status final de esta transacción aparecerá como *Cancelled* o *Expired*. Esta información se mostrará en la respuesta a la llamada de la API de cancelación, en los campos de, *Status* y *Status detail* respectivamente.

- **Boleto bancário**: Si expira el período de vigencia de un boleto bancário, el usuario puede volver a generarlo ingresando el ID de transacción de su cuenta de Mercado Pago. Sin embargo, si deseas evitar problemas de retención de inventario, por ejemplo, puedes optar por no hacer disponible una nueva emisión de este boleto. Para hacer esto, simplemente cancélalo.

Teniendo en cuenta la información anterior, haz clic aquí y visita nuestra Referencia de API para acceder a la API de cancelación.

## Devoluciones

Las devoluciones se pueden realizar de dos formas: **total**, cuando el monto total de la venta se devuelve al comprador, o **parcial**, cuando solo se devuelve al comprador una parte del monto pagado.

Antes de realizar una devolución, es importante considerar los siguientes factores.

- **Fecha límite de devolución:** es posible devolver un pago dentro de los 180 días posteriores a la fecha de aprobación.
- **Saldo de la cuenta:** debes tener suficiente saldo disponible en tu cuenta para reembolsar el monto, de lo contrario no se realizará la transacción.
- **Forma de pago:** para pagos con tarjeta de crédito, el monto se reembolsará directamente en la factura. Para otros métodos de pago como Pix, por ejemplo, el monto se devolverá directamente a la cuenta del pagador.

Para realizar devoluciones totales o parciales de un pago y verificar las devoluciones realizadas en tu tienda, visita nuestra Referencia API y accede a las APIs de devolución total y parcial haciendo clic en los links a continuación.

- Devolución total y parcial
- Ver devoluciones
