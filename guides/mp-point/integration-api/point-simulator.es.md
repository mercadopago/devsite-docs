# Simulador Point

El Simulador Point es una herramienta que te brinda la oportunidad de interactuar con diversos endpoints de nuestra API para integrar Puntos de Venta con los dispositivos. Su objetivo principal es que comprendas el flujo de creación y cancelación de un intento de pago. 

Por este motivo, el Simulador es una herramienta que también te permitirá probar el funcionamiento de tu integración Point y del procesamiento de pagos. Aunque no replica exactamente el dispositivo, su objetivo es educativo, para ayudar a familiarizarte con nuestra API.  

El simulador cuenta con dos modos de uso:

 * **PDV mode**: simula la integración de un sistema completo (dispositivo y Punto de Venta) con nuestra API.

 * **Device mode**: simula un dispositivo Point virtual para que puedas probar tu integración desde los requests HTTP.


Para utilizar el simulador, sigue los pasos a continuación.

## 1. Genera el ambiente de prueba

Para comenzar a probar integraciones y flujos de pago con el Simulador Point, deberás generar un [usuario de prueba](/developers/es/docs/mp-point/additional-content/your-integrations/test/accounts) identificado como **vendedor** y acceder a sus **credenciales de producción**. Si bien el Simulador te pedirá sus credenciales de prueba, necesitarás las productivas para acceder a la cuenta y sus configuraciones.

Para generar estas credenciales, accede a [Tus Integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/), selecciona la aplicación en la que integraste Mercado Pago Point y, en la sección **Cuentas de prueba**, haz clic en el botón **+ Crear cuenta de prueba**. Deberás completar los campos solicitados según las indicaciones. 

![Crear cuenta](/images/woocomerce/test-create-account-es.gif)


Si deseas, puedes también crear usuarios de prueba usando el siguiente comando:

----[mlm]----
``` curl
curl -X POST \
-h "Content-Type: application/json" \
--h 'Authorization: Bearer YOUR_TEST_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"MLM","description" : "a description"}'
```
------------

----[mla]----
``` curl
curl -X POST \
-h "Content-Type: application/json" \
--h 'Authorization: Bearer YOUR_TEST_ACCESS_TOKEN'\
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"MLA","description" : "a description"}'
```
------------

----[mlb]----
``` curl
curl -X POST \
-h "Content-Type: application/json" \
--h 'Authorization: Bearer YOUR_TEST_ACCESS_TOKEN'\
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"MLB","description" : "a description"}'
```
------------

Ten en cuenta que, al crear un usuario de prueba para una aplicación ya integrada con Point, **se generarán automáticamente una sucursal y una caja asociadas a esa cuenta vendedor de prueba**. Esto quiere decir que podrás realizar tus pruebas sobre el procesamiento de pagos sin necesidad de configuraciones adicionales.


## 2. Configura tu ambiente de pruebas

Previo a acceder al Simulador, deberás terminar de configurar tu ambiente de pruebas. Sigue las indicaciones a continuación para hacerlo:

 1. Inicia sesión con las **credenciales productivas del usuario vendedor de pruebas** en una ventana de incógnito. 
 2. Accede a [Tus Integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/), y crea una aplicación con Mercado Pago Point como el producto a integrar. 
 3. Configura tus notificaciones de prueba accediendo a la opción **Notificaciones > Webhooks** en el panel lateral izquierdo. Ten en cuenta que deberás hacerlo en la pestaña **Modo de prueba**, y que es recomendable que la URL configurada sea distinta a aquella en la que recibirás luego las notificaciones de tus pagos reales. Puedes ver la documentación sobre [Notificaciones](/developers/es/docs/mp-point/additional-content/your-integrations/notifications/webhooks) para obtener más detalles sobre cómo configurarlas. 
 4. En el panel lateral izquierdo, accede a **Pruebas > Credenciales de pruebas** para obtener el **Access Token de pruebas de tu usuario vendedor**. El Simulador te lo solicitará para darte acceso a la herramienta y asignarte un dispositivo virtual asociado a tu integración.


![Credenciales de prueba en el Panel del Desarrollador](/images/woocomerce/test-test-credentials-es.png)


## 3. Accede al Simulador

Para acceder al Simulador, selecciona la opción que se corresponda con tu tipo de integración, y completa los campos solicitados por cada una. 

* **PDV mode:** Ingresa al [Simulador PDV mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true) y proporciona el _Access-Token_ de prueba de tu usuario de prueba vendedor (`TEST-XXXXX-XXXXX-XXXXXXX`). Al hacerlo, el Simulador te asignará un dispositivo virtual.

 > Para hacer uso del Simulador no es necesario cambiar el modo de operación ya que funciona, por defecto, en modo PDV.

* **Device mode:** Ingresa al [Simulador device mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true)  y proporciona el Access-Token de prueba de tu usuario de prueba vendedor (`TEST-XXXXX-XXXXX-XXXXXXX`) junto con la identificación del dispositivo obtenido al [listar tus dispositivos](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/payment-processing).

Una vez que hayas proporcionado la información de acuerdo al modo del Simulador elegido, haz clic en el botón **Confirm** para acceder al dispositivo virtual.

![pantalla del Simulador](/images/point-api/point-device-simulator.png)


## 4. Simula una intención de pago

Para probar distintos flujos de pago, hemos preparado distintos escenarios que te permiten simular una experiencia real. 

Para comenzar la simulación, [crea una intención de pago](/developers/es/reference/integrations_api/_point_integration-api_devices_deviceid_payment-intents/post) y asígnala a tu dispositivo Simulador. Para el campo `amount`, debes seleccionar el monto de acuerdo con el estado que deseas obtener, tal como indica la tabla a continuación.

> WARNING
>
> Importante
>
> Si utilizas el Simulador en device mode, recuerda utilizar `X-Test-Scope:sandbox` en el header para lograr que el intento de pago llegue al dispositivo del simulador.

| Estado | Monto |
|---|---|
| Reversed | $1100 |
| Rejected | $1200 |
| Error | $1300 |
| Successful | Cualquier otro valor diferente a los anteriores |



## 5. Obtén la intención de pago desde el Simulador

Una vez creada la intención de pago, deberás dar clic en el **botón verde** del dispositivo virtual para obtener la intención de pago creada. 

Cuando suceda, verifica que el monto ingresado inicialmente coincida con el mostrado en la pantalla del dispositivo.

## 6. Procesa el pago

Si la obtención de la intención de pago desde el Simulador fue exitosa, procede a realizar el pago haciendo clic en la animación de la tarjeta. Esto representa el deslizamiento de la misma en el dispositivo. 


![Simulador con tarjeta](/images/point-api/point-simulator-process.png)


En seguida, se iniciará el procesamiento y el dispositivo mostrará el resultado de acuerdo al monto ingresado.

| Estado | Comportamiento del Simulador |
|---|---|
| Reversed | La pantalla mostrará un error y dará el detalle “Reversed”. |
| Rejected | La pantalla mostrará un error y dará el detalle “Rejected”. |
| Error | La pantalla mostrará un error y dará el detalle “Error”. |
| Successful | Se mostrará una pantalla de pago exitoso y dará el detalle “Approved”. |


> WARNING
>
> Importante
>
> Para consultar un pago realizado por el simulador a través de la [API de Pagos](/developers/es/reference/payments/_payments_id/get), debes utilizar el mismo `access-token` de prueba que utilizas en el Simulador. 


## 7. Recibe la notificación

Cuando las  intenciones de pago son procesadas, se envía una alerta a la URL configurada como canal de notificación por el integrador. En el caso de las notificaciones de los pagos de prueba realizados por medio del Simulador, serán enviadas al canal que definiste como vía de notificación al configurar tu ambiente de pruebas con tu usuario vendedor.

Para validar su recepción y correcto funcionamiento, dirígete al registro de tus notificaciones. Allí encontrarás la notificación enviada con el estado de la transacción, y podrás verificar sus detalles.


> Una vez concluídas tus pruebas con el Simulador, recuerda **reemplazar las credenciales de prueba del usuario vendedor por las credenciales productivas de tu usuario real**.


