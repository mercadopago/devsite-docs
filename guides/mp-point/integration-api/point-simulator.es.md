# Simulador Point

El Simulador Point es una herramienta que te brinda la oportunidad de interactuar con diversos endpoints de nuestra API para integrar los Puntos de Venta con los dispositivos. Su objetivo principal es que comprendas el flujo de creación y cancelación de un intento de pago. 

Ten en cuenta que esta herramienta no es una réplica exacta del dispositivo, sino que tiene un enfoque educativo y está diseñada para familiarizarte con nuestra API. 


El simulador cuenta con dos modos de uso:

* **PDV mode**: simula la integración de un sistema completo (dispositivo y Punto de Venta) con nuestra API de Integraciones. Ingresa al [Simulador PDV mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true).
 
 > Para hacer uso del simulador no es necesario [Cambiar el modo de operación](/developers/es/reference/integrations_api/_point_integration-api_devices_device-id/patch) ya que el simulador funciona por defecto en modo PDV.

* **Device mode**: simula un dispositivo Point virtual para que puedas probar tu integración desde los requests HTTP. Ingresa al [Simulador device mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true).



Para utilizar el simulador, sigue los pasos a continuación.

## 1. Generar el ambiente de prueba

Para comenzar a probar integraciones y flujos de pago con el Simulador Point, deberás generar [usuarios de prueba](/developers/es/docs/mp-point/additional-content/your-integrations/test/accounts) y acceder a sus credenciales de producción. 

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

## 2. Configurar tus credenciales

Al utilizar el simulador por primera vez, deberás ingresar [tus credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials). Para obtenerlas, accede a [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications), opción **Mis credenciales > Credenciales de prueba**. 

Además, deberás seleccionar uno de tus dispositivos disponibles.

* **PDV mode:** debes ingresar tu `access-token` de prueba (`TEST-XXXXX-XXXXX-XXXXXXX`) y el simulador te asignará un dispositivo virtual.

* **Device mode:** debes ingresar tu `access-token` de prueba (`TEST-XXXXX-XXXXX-XXXXXXX`) y la identificación del dispositivo obtenido al [listar tus dispositivos](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/payment-processing).


## 3. Simular una intención de pago

Hemos preparado distintos escenarios que te permiten simular una experiencia real. Para ello, debes seleccionar el monto de acuerdo con el estado que deseas obtener, tal como indica la tabla a continuación:

| Estado | Monto |
|---|---|
| Reversed | $1100 |
| Rejected | $1200 |
| Error | $1300 |
| Successful | Cualquier otro valor diferente a los anteriores |

> WARNING
>
> Importante
>
> Si utilizas el Simulador en device mode, recuerda utilizar `X-Test-Scope:sandbox` en el header para lograr que el intento de pago llegue al dispositivo del simulador.


## 4. Obtener la intención de pago desde el dispositivo

Una vez creada la intención de pago, deberás dar clic en el botón verde del dispositivo virtual para obtener la intención de pago creada. 

Cuando suceda, verifica que el monto ingresado inicialmente coincida con el mostrado en la pantalla del dispositivo.

## 5. Deslizar la tarjeta y procesar el pago

Si el paso anterior fue exitoso, puedes dar clic en la animación de la tarjeta. Esto representa el deslizamiento de la misma en el dispositivo. En seguida, se iniciará el procesamiento y el dispositivo mostrará el resultado.

> WARNING
>
> Importante
>
> Para consultar un pago realizado por el simulador a través de la [API de Pagos](/developers/es/reference/payments/_payments_id/get), debes utilizar el mismo `access-token` de prueba que utilizas en el Simulador. 


## 6. Recibir la notificación

> Las notificaciones del pago de prueba realizado por medio del Simulador serán enviadas por el mismo canal que definiste como vía de notificación al configurar tu integración. Dirígete a [Configurar notificaciones](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/notifications) en caso de dudas.

Una vez que la intención de pago esté procesada, dirígete al registro de tus notificaciones. Allí verás que fue enviada la notificación del estado de la transacción y podrás chequear los detalles.

