# Homologar una integración vía API

El proceso de homologación de una integración vía API consiste en, durante una videollamada con nuestro equipo, realizar una serie de transacciones predefinidas que permitirán verificar si los comportamientos son los deseados, además de mostrar ciertas funcionalidades que tienen que estar presentes en tu software. Si este proceso es aprobado, recibirás tus credenciales productivas para empezar a operar con Redelcom.

A continuación, encontrarás cuáles son las transacciones que deberás llevar adelante como parte de tu homologación. Podrás realizarlas con tarjetas reales y datos falsos del comprador, ya que al tratarse de un ambiente de prueba no se realizarán cargos.

> WARNING
>
> Importante
>
> Ten en cuenta que se te solicitará mostrar las distintas pantallas o comportamientos del dispositivo. Además, deberás haber integrado obligatoriamente la [consulta de intenciones de pago](/developers/es/docs/redelcom/api-integration/payments-processing/query-payment-intent) mediante el parámetro `{rdcTransactionID}`, y almacenar este parámetro asociado a cada transacción en tu base de datos.

1. [Crear una transacción](/developers/es/docs/redelcom/api-integration/payments-processing/create-payment-intent) a ser pagada con **tarjeta de débito** cuyo monto sea **superior a 20.000 CLP**.
2. [Crear una transacción](/developers/es/docs/redelcom/api-integration/payments-processing/create-payment-intent) a ser pagada con **tarjeta de crédito**, en **dos cuotas o más**, y cuyo monto sea **superior a 30.000 CLP**.
3. [Crear una transacción](/developers/es/docs/redelcom/api-integration/payments-processing/create-payment-intent) por el **monto exacto de 2.222 CLP**. Esta transacción devolverá un error configurado en el ambiente y, en tu aplicación, tienes que mostrar el campo `mensaje_visor`, que te permitirá informar al cliente el motivo del error. El uso de *pop up* para exhibir este mensaje será requerido.
4. [Crear una transacción](/developers/es/docs/redelcom/api-integration/payments-processing/create-payment-intent) a ser pagada con **tarjeta de débito**, cuyo monto sea **menor a 50 CLP**, y que no debería poder ser procesada si has implementado correctamente la validación que no permite operaciones por montos bajos. También será requerido el uso de *pop up* para esta validación.
5. **Realizar el pago** de una transacción por cualquier monto y **cancelarlo desde el dispositivo** mientras está siendo procesado. En tu aplicación, debes mostrar el campo `mensaje_visor`, que te permitirá hacer una gestión desde el dispositivo. El uso de *pop up* para exhibir este mensaje será requerido.

Además, ciertos casos particulares pueden requerir de pasos adicionales:

* Si has integrado la [obtención de terminal](/developers/es/docs/redelcom/api-integration/payments-processing/get-terminal), es posible que se te solicite una demostración.
* Si utilizas el **parámetro `responseCallback`** para recibir respuestas automáticas de los pagos realizados, deberás mostrar que esa notificación llega efectivamente a la [URL de respuesta](/developers/es/docs/redelcom/api-integration/payments-processing/create-payment-intent#bookmark_implementar_la_url_de_respuesta). 
* Si utilizas un **boleteador externo**, deberás mostrar cómo lucen las facturas impresas.

Una vez finalizado y aprobado el proceso de homologación por videollamada, nuestro equipo te facilitará tus credenciales productivas vía e-mail, y podrás comenzar a operar con Redelcom.
