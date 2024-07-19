# Configurar integración de prueba

Para poder probar tu integración con Mercado Pago Point y el procesamiento de pagos, primero debes configurar tu integración. En esta documentación encontrarás el paso a paso para hacerlo de manera adecuada utilizando nuestras APIs.

> WARNING
>
> Importante
>
> Para probar tu integración con dispositivos Point deberás utilizar tu **usuario Mercado Pago y sus credenciales productivas**, ya que no están habilitados los pagos con usuarios de prueba.

## Crear una sucursal y una caja

1. Crea una sucursal realizando un llamado al endpoint [Crear sucursal](/developers/es/reference/stores/_users_user_id_stores/post). Deberás enviar tu **Access Token productivo**, y reemplazar el valor `user_id` por la **identificación de usuario** que te fue asignada al crear tu aplicación. Si tienes dudas sobre cómo identificar este valor, accede a la documentación sobre [Detalles de aplicación](/developers/es/docs/mp-point/additional-content/your-integrations/application-details).  

2. Crea una caja realizando un llamado al endpoint [Crear caja](/developers/es/reference/pos/_pos/post), y asóciala a la sucursal creada en el paso anterior. Esto se logra reemplazando los parámetros `external_store_id` por el `external_id` que le asignaste a la sucursal, y `store_id` por el valor obtenido para el campo `id` en la respuesta a la creación de la sucursal.

3. Por último, asocia el dispositivo Point a tu cuenta de Mercado Pago. Para eso, descarga e instala la app de Mercado Pago en tu dispositivo móvil, inicia sesión con tu cuenta, y oprime el ícono QR para escanear el código que aparece al encender el dispositivo Point.


## Activar el modo PDV

La activación del modo operativo Punto de Venta (PDV) en tu dispositivo es un **requisito indispensable** para operar con nuestra API. Este proceso consta de dos etapas:

1. Primero, deberás **obtener la identificación de tu dispositivo Point**. Para hacerlo, realiza un llamado al endpoint [Obtener dispositivos](/developers/es/reference/integrations_api/_point_integration-api_devices/get), que te devolverá un listado de aquellos dispositivos asociados a la cuenta de Mercado Pago. Podrás identificar el Point que deseas activar por medio de los últimos caracteres del campo `id`, que deberán coincidir con el serial que aparece en la etiqueta trasera del dispositivo. Recuerda que debes realizar este llamado utilizando tus credenciales productivas.

> NOTE
>
> Nota
>
> Recomendamos enviar en esta solicitud los parámetros `store_id` y `pos_id` para verificar que la configuración sea correcta. Los mismos permitirán obtener no sólo los dispositivos asociados a una cuenta de Mercado Pago, sino también aquellos vinculados específicamente a una sucursal y una caja dentro de esa cuenta, respectivamente. Los valores de estos parámetros serán aquellos recibidos en las respuestas a la creación de cada una.

2. Por último, realiza una solicitud **PATCH** al endpoint [Cambiar el modo de operación](/developers/es/reference/integrations_api/_point_integration-api_devices_device-id/patch), reemplazando el valor `device-id` del *path* por el `id` del dispositivo obtenido en el paso anterior.  Además, deberás completar el campo `operating_mode` con el valor `PDV`, que habilita el funcionamiento del dispositivo en el modo integrado con la API.


## Configurar notificaciones

Previo a iniciar las pruebas con el procesamiento de pagos, recomendamos configurar las notificaciones Webhooks por medio de la sección [Tus Integraciones](/developers/panel/app). De esta manera, podrás probar también estar recibiendo las alertas necesarias para cada transacción realizada, y contrastar la información recibida con tu sistema.

Para configurar tus notificaciones con Mercado Pago Point, sigue las instrucciones a continuación:

1. Ingresa a [Tus Integraciones](/developers/panel/app) y selecciona la aplicación con la que estás probando tu integración.
2. En el menú de la izquierda, haz clic en **Webhooks**.
3. En la pantalla desplegada, haz clic en **Configurar notificaciones**, y configura la URL que serán utilizadas para recibir las notificaciones de prueba. Recomendamos utilizar dos URLs diferentes para el modo de pruebas y el modo producción:
 * **URL modo pruebas**: proporciona una URL que permita probar el correcto funcionamiento de las notificaciones de la aplicación durante la etapa de desarrollo. 
 * **URL modo producción**: proporciona una URL para recibir notificaciones con tu integración productiva. Estas notificaciones deberán ser configuradas con las credenciales productivas de tu usuario de Mercado Pago.

4. Selecciona **Integraciones Point** como el tópico sobre el cual deseas recibir notificaciones. Esto te mantendrá actualizado sobre las intenciones de pago y sus cambios de estado.
5. Por último, haz clic en **Guardar**. Esto generará una **clave secreta** exclusiva para la aplicación, que permitirá validar la autenticidad de las notificaciones recibidas, garantizando que hayan sido enviadas por Mercado Pago. Si quieres obtener más información sobre cómo validar el origen de una notificación, accede a la [documentación](/developers/es/docs/split-payments/additional-content/your-integrations/notifications/webhooks#configuracinatravsdelpaneldeldesarrollador).

Una vez que hayas realizado todas las configuraciones, puedes comenzar a probar el procesamiento de pagos.
