---
sites_supported:
  - mla
  - mlb
  - mlm
---

# Simulador Point

Hemos diseñado una herramienta para que puedas probar tu integración de forma segura como si estuvieras en tu comercio con un dispositivo físico.
El simulador te permite crear una intención de pago y procesarla desde el dispositivo virtual simulando los posibles estados que puede presentar un pago.

El simulador cuenta con dos modos de uso:

- **PDV Mode**: Simula la integración de un sistema completo (dispositivo y PDV) con nuestra API de Integraciones.
  [Simulador Device Mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true)
- **Device Mode**: Simula un dispositivo Point virtual para que puedas probar tu integración desde los requests HTTP.
  [Simulador PDV Mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true)

## Cómo usar el PDV Mode

**Paso 1. Configura tus credenciales** 

Al utilizar el simulador por primera vez debes ingresar tu Access Token y seleccionar uno de tus dispositivos disponibles, si 
estás utilizando un Access Token de prueba el simulador te asignará un dispositivo virtual.

**Paso 2. Crea una intención de pago**

Hemos preparado distintos escenarios que te permiten simular una experiencia real, para ello debes seleccionar el monto de acuerdo con el estado que deseas obtener:

- **Reversed:** $1100

- **Rejected:** $1200

- **Error:** $1300

- **Successful:** Cualquier otro valor, diferente a los anteriores


**Paso 3. Obtén la intención de pago desde el dispositivo**

Una vez creada la intención de pago, debes dar clic en el botón verde del dispositivo virtual para obtener la intención de pago creada, una vez encontrado, puedes verificar que el monto ingresado inicialmente coincida con el mostrado en la pantalla del dispositivo.

**Paso 4. Desliza la tarjeta y procesa el pago**

Si el paso anterior fue exitoso, puedes dar clic en la animación de la tarjeta, la cual representa el deslizamiento de la misma en el dispositivo, en seguida se iniciará el procesamiento y el dispositivo mostrará el respectivo resultado.

**Paso 5. Recibe la notificación**

Si realizaste los pasos de configuración del Webhook, es momento que revises tus logs, allí verás que fue enviada la notificación del estado de la transacción.

## Cómo usar el Device Mode

**Paso 1. Configura tus credenciales** 

Al utilizar el simulador en Device Mode por primera vez debes ingresar tu Access Token y tu Device Id obtenido al [listar tus dispositivos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/create-payment-intent#bookmark_1._crea_una_intención_de_pago)

**Paso 2. Crea una intención de pago**

Debes [crear una intención](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/create-payment-intent#bookmark_1._crea_una_intención_de_pago) con uno de los siguientes montos para simular el estado correspondiente.

- **Reversed:** $1100

- **Rejected:** $1200

- **Error:** $1300

- **Successful:** Cualquier otro valor, diferente a los anteriores


**Paso 3. Obtén la intención de pago desde el dispositivo**

Una vez creada la intención de pago, debes dar clic en el botón verde del dispositivo virtual para obtener la intención de pago creada, una vez encontrado, puedes verificar que el monto ingresado inicialmente coincida con el mostrado en la pantalla del dispositivo.

**Paso 4. Desliza la tarjeta y procesa el pago**

Si el paso anterior fue exitoso, puedes dar clic en la animación de la tarjeta, la cual representa el deslizamiento de la misma en el dispositivo, en seguida se iniciará el procesamiento y el dispositivo mostrará el respectivo resultado.

**Paso 5. Recibe la notificación**

Si realizaste los pasos de configuración del Webhook, es momento que revises tus logs, allí verás que fue enviada la notificación del estado de la transacción.
