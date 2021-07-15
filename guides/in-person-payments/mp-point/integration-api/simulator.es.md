---
sites_supported:
  - mla
  - mlb
  - mlm
---

# Simulador Point

Hemos diseñado esta herramienta para que puedas interactuar de forma directa con nuestra API de Integraciones como si estuvieras en tu comercio con un dispositivo físico en tu mano. El simulador te permitirá realizar la búsqueda de un intento de pago en el dispositivo y simular diferentes estados.

> - [Entrar al simulador](https://api.mercadopago.com/point/integrator-simulator/device?ignoreapidoc=true)

## Valores de prueba

Hemos preparado distintos escenarios para permitir simular una experiencia real, por eso podrás seleccionar el monto de acuerdo con el estado que deseas probar:

- **Reversed:** $1100

- **Rejected:** $1200

- **Error:** $1300

- **Successful:** Cualquier otro valor, diferente a los anteriores

## ¿Cómo funciona el simulador?

**Paso 1**

Ingresar en el simulador y realiza la configuración del Access Token y Device Id.

**Paso 2**

De clic en el botón verde del dispositivo para obtener el intento de pago creado, una vez encontrado verifica que el monto ingresado inicialmente coincida con el mostrado en la pantalla del dispositivo.

**Paso 3**

Si el paso anterior fue exitoso, da clic en la animación, la cual representa el deslizamiento de una tarjeta en el dispositivo, en seguida se iniciará el procesamiento y el dispositivo mostrará el respectivo resultado.

**Paso 4**

Si realizaste los pasos de configuración del Webhook, es momento que revises tus logs, allí verás que fue enviada la notificación del estado de la transacción.