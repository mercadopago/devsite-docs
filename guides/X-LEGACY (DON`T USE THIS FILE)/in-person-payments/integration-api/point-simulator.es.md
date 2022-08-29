# Simulador Point

Esta herramienta te permite probar tu integración de forma segura como si estuvieras en tu comercio con un dispositivo físico.
Con este simulador, podrás crear una intención de pago y procesarla desde el dispositivo virtual, simulando los posibles estados que puede presentar un pago.

El simulador cuenta con dos modos de uso:

* **PDV mode**: simula la integración de un sistema completo (dispositivo y PDV) con nuestra API de Integraciones. Ingresa al [Simulador PDV mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true).
* **Device mode**: simula un dispositivo Point virtual para que puedas probar tu integración desde los requests HTTP. Ingresa al [Simulador device mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true).

## Cómo usar el simulador 

### 1. Configura tus credenciales

Al utilizar el simulador por primera vez, deberás ingresar tus credenciales y seleccionar uno de tus dispositivos disponibles. 

* **PDV mode:** debes ingresar tu `access-token` de prueba y el simulador te asignará un dispositivo virtual.

* **Device mode:** debes ingresar tu `access-token` de prueba y la Identificación del dispositivo obtenido al [listar tus dispositivos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/create-payment-intent#bookmark_obtén_el_listado_de_tus_dispositivos_disponibles).

> WARNING
>
> Importante
>
> Recuerda que para utilizar el simulador debes configurar un `access-token` de prueba (`TEST-XXXXX-XXXXX-XXXXXXX`) y lo puedes obtener en tus [integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications), opción **Mis credenciales > Credenciales de prueba**.
> <br/>
> Para consultar un pago realizado por el simulador a través de la [API de payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get), debe utilizar el `access-token` de prueba  (el mismo que se usa en el simulador).

### 2. Simula una intención de pago

Hemos preparado distintos escenarios que te permiten simular una experiencia real. Para ello, debes seleccionar el monto de acuerdo con el estado que deseas obtener:

| Estado | Monto |
|---|---|
| Reversed | $1100 |
| Rejected | $1200 |
| Error | $1300 |
| Successful | Cualquier otro valor diferente a los anteriores |


### 3. Obtén la intención de pago desde el dispositivo

Una vez creada la intención de pago, deberás dar clic en el botón verde del dispositivo virtual para obtener la intención de pago creada. Una vez encontrado, puedes verificar que el monto ingresado inicialmente coincida con el mostrado en la pantalla del dispositivo.

### 4. Desliza la tarjeta y procesa el pago

Si el paso anterior fue exitoso, puedes dar clic en la animación de la tarjeta, la cual representa el deslizamiento de la misma en el dispositivo. En seguida se iniciará el procesamiento y el dispositivo mostrará el respectivo resultado.

### 5. Recibe la notificación

Si realizaste los pasos de configuración de las [notificaciones Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/integration#bookmark_3._Prepara_y_configura_tus_notificaciones_de_Webhook), es momento de que revises tus registros. Allí verás que fue enviada la notificación del estado de la transacción.

> NOTE
>
> Nota
>
> El simulador te permitirá realizar pagos de prueba, de esta forma, puedes consultar toda la información correspondiente en la sección [API de Pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get).

> PREV_STEP_CARD_ES
>
> Configura las notificaciones
>
> Te explicamos cómo comenzar a recibir notificaciones de Webhooks.
>
> [Configura las notificaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/notifications)
