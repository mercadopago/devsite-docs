# Probar el procesamiento de pagos

Para poder probar el correcto procesamiento de pagos con Mercado Pago Point, deberás realizar una serie de transacciones y sus correspondientes validaciones utilizando nuestra API. 

> WARNING
>
> Importante
>
> En estas transacciones, deberás utilizar **tarjetas reales** y realizar operaciones por **montos mínimos**. No te preocupes: el mismo flujo de prueba garantiza que ese dinero sea reintegrado a la tarjeta que efectúa el pago.

## Crear y procesar una intención de pago

Para probar la correcta creación y procesamiento de una intención de pago, sigue los pasos a continuación.

1. Realiza un llamado a la API [Crear una intención de pago](/developers/es/reference/integrations_api_paymentintent_mlb/_point_integration-api_devices_deviceid_payment-intents/post) utilizando tus credenciales de producción. Deberás asignarla al dispositivo Point previamente configurado reemplazando el valor `deviceId` en el *path* del llamado por el valor correspondiente a su identificador. Utiliza, además, un valor que te permita identificar esta intención de prueba en tu sistema mediante el campo `external_reference`, y recuerda disponer de un monto mínimo para el campo `amount`.

> NOTE
>
> Nota
>
> Recomendamos que, **previo a procesar la intención de pago**, valides su correcta creación realizando un llamado para [Buscar intención de pago](/developers/es/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get) utilizando el `id` obtenido en la respuesta. Si bien no es obligatorio, te permitirá verificar que tu integración está funcionando correctamente y contrastar la información de la intención con aquella recibida mediante notificaciones Webhooks.

2. Procesa la intención de pago oprimiendo el botón para iniciar el cobro desde tu dispositivo Point y siguiendo los pasos posteriores indicados en la pantalla.

3. Chequea haber recibido las notificaciones Webhooks de Mercado Pago para cada uno de los eventos sucedidos. 

| Tópico | Evento | Valor de referencia |
|---|---|---|
| Integraciones Point | Creación de intención de pago | Identificarás la intención de pago por medio del campo `external_reference`, que tendrá el mismo valor que le asignaste al momento de crearla. |
| Integraciones Point | Finalización de intención de pago | Identificarás la intención de pago por medio del campo `external_reference`, que tendrá el mismo valor que le asignaste al momento de crearla. Adicionalmente, el campo `payment.id` te permitirá identificar el pago, y contrastar esa información con la recibida en la notificación de Pagos. |

4. Valida que el procesamiento del pago fue exitoso enviando un **GET** a la API [v1/payments](/developers/es/reference/payments/_payments_id/get), utilizando el `id` del pago obtenido en tus notificaciones. 

## Reembolsar un pago

Para poder confirmar que el flujo de pagos funciona correctamente, deberás realizar un reembolso de la transacción procesada en la instancia anterior directamente desde tu dispositivo Point. De esta manera, también se devolverá el monto de dinero implicado en esta etapa de pruebas. 

Para eso,  sigue los pasos a continuación.

1. En la pantalla principal de tu dispositivo Point, desliza hasta llegar a la pestaña **Más opciones**.
2. Allí, presiona el botón **Ver más** dentro de la sección “Actividad con este Point”. Accederás a los detalles de la operación realizada.
3. En la pantalla **Detalles de la operación**, desliza hasta abajo, y selecciona la opción **Devolver dinero**. 
4. Confirma que deseas devolver el dinero de esa operación de prueba.

La pantalla de “Detalles de la operación” ahora deberá mostrarte el monto devuelto y, retrocediendo a “Más opciones”, podrás ver esta nueva actividad con ese dispositivo.


## Crear una intención de pago y rechazar el pago

Para validar que el flujo de rechazo de pagos funciona correctamente, sigue los pasos a continuación.

1. Realiza un llamado a la API [Crear una intención de pago](/developers/es/reference/integrations_api_paymentintent_mlb/_point_integration-api_devices_deviceid_payment-intents/post) utilizando tus credenciales de producción. Deberás asignarla al dispositivo Point previamente configurado reemplazando el valor `deviceId` en el *path* del llamado por el valor correspondiente a su identificador. Utiliza, además, un valor que te permita identificar esta intención de prueba en tu sistema mediante el campo `external_reference`, y recuerda disponer de un monto mínimo para el campo `amount`.

2. Obtén la intención de pago en el dispositivo Point y presiona el botón **Más opciones** en el sector inferior derecho de la pantalla.

3. En la pantalla, aparecerá un mensaje consultando si deseas salir sin finalizar el cobro. Haz clic en **Sí** para rechazar el pago generado. 

4. Chequea haber recibido las notificaciones Webhooks de Mercado Pago para cada uno de los eventos sucedidos. 

| Tópico | Evento | Valor de referencia |
|---|---|---|
| Integraciones Point | Creación de intención de pago | Identificarás la intención de pago por medio del campo `external_reference`, que tendrá el mismo valor que le asignaste al momento de crearla. |
| Integraciones Point | Cancelación de intención de pago | Identificarás la intención de pago por medio del campo `external_reference`, que tendrá el mismo valor que le asignaste al momento de crearla.|



