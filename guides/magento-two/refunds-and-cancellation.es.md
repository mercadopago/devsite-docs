# Devoluciones y cancelaciones

Las **devoluciones** son transacciones que se realizan cuando se revierte un determinado cargo y los importes abonados se devuelven al comprador. Esto significa que el cliente recibirá el monto pagado por la compra de un determinado producto o servicio en su cuenta o en el extracto de su tarjeta de crédito.

Las **cancelaciones** ocurren cuando se realiza una compra pero el pago aún no ha sido aprobado por algún motivo. En este caso, considerando que la transacción no fue procesada y el establecimiento no recibió ningún monto, la compra se cancela y no ocurre ningún cargo.

A continuación encontrarás los pasos necesarios para aceptar devoluciones y realizar cancelaciones en tu tienda.

## Devoluciones

Para aceptar la devolución de pagos en tu tienda, deberás activar la opción en la configuración de tu medio de pago seleccionando la opción "Yes" en el campo desplegable.

Al habilitar esta opción, el módulo realizará la devolución parcial o total del pago en el Mercado Pago cuando se cree un memo de crédito en la órden. La devolución sólo se realiza en los pagos que tienen el estado Approved (aprobados).

> Si la devolución se realiza en el panel del Mercado Pago, el módulo no está preparado para crear memo de crédito automáticamente. Debido a esta limitación, es aconsejable que sea creado a partir de la tienda.

## Cancelaciones

Para cancelar pagos de transacciones reaizadas en tu tienda, deberás activar la opción en la configuración de tu medio de pago seleccionando la opción "Yes" en el campo desplegable. 
Al habilitar esta opción, el módulo cancelará el pago en Mercado Pago cuando se cancele la órden.
El pago se cancelará cuando el estado esté en `pending` o `in_process`, de lo contrario el módulo devolverá un mensaje de error.
