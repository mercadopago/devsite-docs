# Pagos online

----[mlb]----
El **Checkout Transparente** de Mercado Pago permite que todo el proceso de finalización de compra, desde el llenado de los datos del usuario hasta la realización del pago, ocurra en un único entorno, sin la necesidad de redirigir a una página externa a su tienda.

------------
----[mla, mlm]----
El **Checkout API** de Mercado Pago permite que todo el proceso de finalización de compra, desde el llenado de los datos del usuario hasta la realización del pago, ocurra en un único entorno, sin la necesidad de redirigir a una página externa a su tienda.

------------

Una Order de Pagos online puede ser creada para ser procesada de dos maneras: **Modo automático** y **Modo manual**.

## Modo automático

El Modo automático, como su nombre indica, es el modo predeterminado de la aplicación. A través de este modo, la transacción se completa en una sola etapa y las modificaciones son limitadas. Para crear la Order en modo automático, es necesario asegurarse de que el campo `processing_mode` esté como `automatic` y que toda la información se envíe en esta única solicitud. El campo `processing_mode`  es responsable de definir el formato de creación y procesamiento de la transacción.

Las operaciones permitidas son:

- [**Crear y procesar Order**](/development/es/reference/order/online-payments/create/post): responsable de la creación de la Order ya con el procesamiento de la transacción simultáneo.
- [**Buscar transacción**](/development/es/reference/order/online-payments/get-order/get): permite localizar una intención de Order existente.
- [**Capturar transacción**](/development/es/reference/order/online-payments/capture/delete): permite capturar el monto autorizado de una Order. Esta opción solo es válida para tarjetas de crédito.
- [**Cancelar transacción**](/development/es/reference/order/online-payments/cancel-order/post): responsable de la cancelación de una Order ya existente, pero que aún no ha sido procesada/terminada.
- [**Reembolsar transacción**](/development/es/reference/order/online-payments/refund/post): en el caso del modo automático, el reembolso siempre será total.

## Modo manual

El Modo manual es donde podemos dividir el procesamiento de la transacción en etapas que pueden ser configuradas y ejecutadas de manera incremental. Permite la personalización de cada etapa del proceso de pago, adaptándose a diferentes necesidades y escenarios. Para crear la Order en modo manual, es necesario asegurarse de que el campo `processing_mode` esté como `manual`. El campo `processing_mode`  es responsable de definir el formato de creación y procesamiento de la transacción.

Las operaciones permitidas son:

- [**Crear Order (sin transacciones o con transacciones)**](/development/es/reference/order/online-payments/create/post): responsable de la creación y autorización de la Order, pero sin el procesamiento simultáneo.
- [**Agregar transacción**](/development/es/reference/order/online-payments/add-transaction/post): esta operación de adición de transacciones solo puede realizarse en modo manual y es responsable de agregar más de una transacción en un mismo _payload_.
- **[Modificar transacción](/development/es/reference/order/online-payments/update-transaction/patch) y/o [eliminar](/development/es/reference/order/online-payments/delete-transaction/delete) transacción**: esta operación de modificación y eliminación de transacciones solo puede realizarse en modo manual y es responsable de cambiar la información de pago que ya se había agregado anteriormente a la Order. Es una operación que modifica un elemento dentro de cualquier campo del parámetro `transactions`.
- [**Capturar transacción**](/development/es/reference/order/online-payments/capture/delete): responsable de capturar el monto autorizado de una Order. Esta opción solo es válida para tarjetas de crédito.
- [**Procesar transacción**](/development/es/reference/order/online/process-order/post): permite ejecutar las transacciones creadas y/o modificadas en modo manual.
- [**Buscar transacción**](/development/es/reference/order/online-payments/get-order/get): permite localizar una intención de Order existente.
- [**Cancelar transacción**](/development/es/reference/order/online-payments/cancel-order/post): responsable de la cancelación de una Order ya existente, pero que aún no ha sido procesada/terminada.
- [**Reembolsar transacción**](/development/es/reference/order/online-payments/refund/post): en modo manual se pueden crear reembolsos totales o parciales de un pago. La Order será reembolsada totalmente si todas las transacciones son reembolsadas por completo.
- **Reembolso total**: no se debe indicar un monto a reembolsar en el `body` de la solicitud.
- **Reembolso parcial**: se debe especificar la cantidad a reembolsar en el `body` de la solicitud. Todas las otras transacciones permanecerán como están y solo la transacción modificada será reembolsada.