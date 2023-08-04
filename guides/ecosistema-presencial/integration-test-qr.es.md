# Probar tu integración QR

Antes de salir a producción, recomendamos testear el correcto funcionamiento de tu integración y del procesamiento de pagos.

El siguiente flujo te permitirá realizar pruebas para tu aplicación con Mercado Pago, incluyendo diferentes flujos y estados de pago. 

> NOTE
>
> Nota
>
> Las pruebas de integración se llevan a cabo con usuarios y métodos de pago de test. No se utilizan datos ni dinero real. Sigue las instrucciones a continuación para saber cómo configurarlos.

### Prueba de integración

1. Crea un usuario de test para simular el vendedor (*seller*) siguiendo las instrucciones de la [documentación de Pruebas](/developers/es/docs/ecosistema-presencial/additional-content/your-integrations/test/accounts).
2. Inicia sesión en **la web de Mercado Pago** con las credenciales del usuario de prueba que creaste.
3. [Crea un local y una caja](/developers/es/docs/ecosistema-presencial/integration-configuration/create-store-point-of-sale) siguiendo las instrucciones para configurar tu integración. Recuerda utilizar las credenciales del usuario de prueba del vendedor.

### Prueba el procesamiento de pagos

1. Utiliza las credenciales del usuario de prueba de vendedor para [crear un intent para código QR](/developers/es/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/qr), tal como se indica en la documentación.
2. Genera un pago teniendo en cuenta:
 * Si utilizas el **campo `qr_payment_mode` = `STATIC`** o no defines ningún qr_payment_mode al crear el intent, ingresa a la web de Mercado Pago. Allí, dirígete a **Tu negocio > Locales y cajas**, y selecciona el local y la caja asociados. 
 Luego, haz clic en el símbolo de QR junto al nombre de la caja, y selecciona **Imprimir QR**. Este código QR estará asociado al intent que creaste en el paso anterior.

 * Si utilizas el **campo `qr_payment_mode` = `DYNAMIC`**, obtendrás el campo `qr_data` en la respuesta con una trama de QR. Puedes utilizar herramientas o librerías que te ayudarán a convertir esta trama en una imagen de un código QR.

3. Crea un usuario de test para simular el comprador (*buyer*) siguiendo las instrucciones de la [documentación de Pruebas](/developers/es/docs/ecosistema-presencial/additional-content/your-integrations/test/accounts).
4. Descarga e instala la **app de Mercado Pago en tu dispositivo móvil**, e inicia sesión con la cuenta de prueba del comprador.
5. Escanea el código QR que generaste en el paso anterior desde tu dispositivo móvil, con la cuenta de prueba del comprador. La app mostrará el monto del intent y las opciones de pago disponibles.

> NOTE
>
> Nota
>
> Puedes configurar tarjetas de prueba para simular distintos flujos de pago. Chequea la [documentación de pruebas](/developers/es/docs/ecosistema-presencial/additional-content/your-integrations/test/cards) para saber cómo hacerlo.

### Verificar el estado del intent y sus notificaciones

1. Sigue las indicaciones sobre cómo [Consultar el estado de un intent para código QR](/developers/es/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/qr) para verificar el estado final y los resultados del intent. Asegúrate de que el estado y los resultados sean coherentes con el flujo de pago que utilizaste en el paso anterior.
3. Si configuraste notificaciones Webhook, puedes verificar en tu sistema Punto de Venta (PDV) la recepción de mensajes sobre el estado de la orden.

> WARNING
>
> Importante
>
> Una vez que hayas finalizado y probado tu integración, y ya estés listo para pasar a producción, asegúrate de activar las [credenciales de producción](/developers/es/docs/ecosistema-presencial/additional-content/your-integrations/credentials) y reemplazar las credenciales de prueba si es necesario.