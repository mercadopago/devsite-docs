---
sites_supported:
    - mla
    - mlb 
    - mlm
---

# Introducción

La facturación recurrente es un modelo de negocio común, y fácil de implementar con Mercado Pago, que requiere sólo tres pasos:

1. **Definir un plan** que establece cuánto debe ser facturado y en qué intervalo.
2. **Obtener datos** de una tarjeta, crear un customer y asociarle una tarjeta.
3. **Suscribir** al customer al plan.

Después de crear un plan una vez, sólo es necesario ejecutar el segundo y tercer paso para cada cliente subsiguiente.

Es importante que antes de comenzar a desarrollar, conozcas los [requerimientos]() para utilizar este servicio.

## Credenciales

Al igual que con la API de Pagos, cuentas con dos pares de claves para conectarte con la API. Estas claves las encuentras en la sección [credenciales de tu cuenta]().

La **credencial pública**, o *public key*, es la utilizada para acceder a todos los recursos que necesitará tu frontend para recolectar los datos de tarjeta de crédito, y tokenizar.

La **credencial privada**, o *secret key*, se utiliza para todas las otras llamadas a las APIs, como procesar un pago, realizar reembolsos, almacenar tarjetas y más. Las claves privadas deben ser mantenidas **confidencialmente** en tus servidores de backend y nunca deben ser publicadas.

> Haciendo click en el botón "renovar credenciales" obtienes pares nuevos y los anteriores dejan de funcionar. Usa esto sólo cuando creas que tus credenciales privadas han sido vulneradas o por cuestiones de seguridad, similares al cambio de contraseña, cada cierto período de tiempo. Recuerda reemplazar las credenciales en tu aplicación para que siga funcionando.

## Modo Sandbox y Productivo

Inicialmente tu aplicación sólo podrá interactuar con Mercado Pago en **Modo Sandbox**, una réplica exacta de **Modo Producción**, diseñado con el objetivo de facilitar las pruebas durante la integración. El uso de este modo no genera ningún tipo de cargo real, ya que todas las pruebas las puedes realizar con tarjetas que te brindamos.

Una vez tu aplicación esté lista para recibir pagos productivos, deberás habilitar el entorno productivo. Para esto, debes seleccionar la aplicación en [credenciales]() y completar un formulario con información básica sobre tu negocio. Tu aplicación será activada automáticamente, y podrás comenzar a utilizar las claves de producción.



#### Comenzar a crear [planes y suscribir clientes]()
