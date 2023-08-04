# Probar tu integración Point

Antes de salir a producción, recomendamos testear el correcto funcionamiento de tu integración y del procesamiento de pagos.
El siguiente flujo te permitirá realizar pruebas para tu aplicación con Mercado Pago y la integración con los dispositivos Point. 

### Configura la integración 

> NOTE
>
> Nota
>
> Para probar tu integración con dispositivos Point deberás utilizar tu cuenta de Mercado Pago, ya que no están habilitados los pagos con usuarios de test.

1. Inicia sesión en la **web de Mercado Pago** con las credenciales de tu usuario de Mercado Pago. 
2. [Crea un local y una caja](/developers/es/docs/ecosistema-presencial/integration-configuration/create-store-point-of-sale) siguiendo las instrucciones para configurar tu integración. Recuerda utilizar tus credenciales de Mercado Pago.

### Configura tu dispositivo Point 

1. Descarga e instala la **app de Mercado Pago en tu dispositivo móvil**, e inicia sesión con tu cuenta de Mercado Pago, tal como se indica en [Iniciar sesión en un dispositivo Point](/developers/es/docs/ecosistema-presencial/integration-configuration/signin-point).
2. Luego, [activa el modo PDV en tu dispositivo Point](/developers/es/docs/ecosistema-presencial/integration-configuration/enable-pdv).

### Prueba el procesamiento de pagos

1. Utiliza tus credenciales de Mercado Pago para [crear un intent para Point](/developers/es/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/point), tal como se indica en la documentación. Recuerda que no estás utilizando usuarios ni tarjetas de prueba, por lo que recomendamos que el monto del intent sea el mínimo disponible.
----[mla]----
2. Si estás utilizando un dispositivo Point Smart, el dispositivo cargará automáticamente el intent en pantalla luego de su creación. Si esto no sucede, también puedes tocar el botón Cobrar que aparece en la pantalla del dispositivo. 
Si estás utilizando un dispositivo Point Plus, debes oprimir el botón verde para cargar el intent en el dispositivo.

------------
----[mlb]----
2. Si estás utilizando un dispositivo Point Smart, el dispositivo cargará automáticamente el intent en pantalla luego de su creación. Si esto no sucede, también puedes tocar el botón Cobrar que aparece en la pantalla del dispositivo.
Si estás utilizando un dispositivo Point Pro 2, oprime el botón verde para cargar el intent en el dispositivo.

------------
3. Sigue las instrucciones que te presenta el dispositivo para realizar el pago. 
4. Si en la creación del intent utilizaste el campo `print_on_terminal` con el valor de `SELLER_TICKET`, el dispositivo imprimirá el ticket. De lo contrario, el dispositivo no realizará impresión del ticket al finalizar el pago.

### Verificar el estado del intent y sus notificaciones

1. Sigue las indicaciones sobre cómo [Consultar el estado de un intent para Point](/developers/es/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/point) para verificar el estado final y los resultados del intent. Asegúrate de que el estado y los resultados sean coherentes con el flujo de pago que utilizaste en el paso anterior.
2. Si configuraste notificaciones Webhook, puedes verificar en tu sistema Punto de Venta (PDV) la recepción de mensajes sobre el estado de la orden.

Recuerda que también puedes probar el flujo de [devolución de un pago](/developers/es/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/point) desde tu dispositivo Point para hacer un reintegro si lo deseas.

> WARNING
>
> Importante
>
> Una vez que hayas finalizado y probado tu integración, y ya estés listo para pasar a producción, asegúrate de activar las [credenciales de producción](/developers/es/docs/ecosistema-presencial/additional-content/your-integrations/credentials) y reemplazar las credenciales de prueba si es necesario.