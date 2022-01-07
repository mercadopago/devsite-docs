# Simulador Point

Esta herramienta te permite probar tu integración de forma segura como si estuvieras en tu comercio con un dispositivo físico.
Con este simulador, podrás crear una intención de pago y procesarla desde el dispositivo virtual, simulando los posibles estados que puede presentar un pago.

El simulador cuenta con dos modos de uso:

* **PDV Mode**: simula la integración de un sistema completo (dispositivo y PDV) con nuestra API de Integraciones. Ingresa al [Simulador PDV Mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true)
* **Device Mode**: simula un dispositivo Point virtual para que puedas probar tu integración desde los requests HTTP. Ingresa al [Simulador Device Mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true).

## Cómo usar el simulador 

### 1. Configura tus credenciales

Al utilizar el simulador por primera vez, deberás ingresar tus llaves y seleccionar uno de tus dispositivos disponibles. 

Para utilizar **PDV Mode** necesitarás tu llave Access Token. Si estás utilizando un Access Token de prueba, el simulador te asignará un dispositivo virtual.

Al utilizar **Device Mode**, debes ingresar tu Access Token y tu Device Id obtenido al [listar tus dispositivos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/create-payment-intent#bookmark_Crea_la_intención_de_pago)

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

