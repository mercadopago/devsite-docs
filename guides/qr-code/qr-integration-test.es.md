# Prueba tu integración

## Crear usuarios de prueba

Utiliza cuentas de prueba para asegurar que tu integración soporta todos los flujos y escenarios posibles. Tienen las mismas características que una cuenta real de Mercado Pago, lo que te permite probar el funcionamiento de las integraciones que estás desarrollando.

Si todavía no creaste usuarios de prueba, dirígete a [Requisitos previos](/developers/es/docs/qr-code/pre-requisites) para saber cómo hacerlo.

## Tarjetas de prueba

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

## Prueba el flujo de pago

### 1. Con tu usuario vendedor, asigna una orden a una caja.

Para probar el modelo atendido, genera una orden con las credenciales del usuario de pruebas que quieras usar como vendedor y envía una orden al QR previamente creado.

### 2. Realiza un pago con tu usuario comprador

- A. Inicia sesión en la app de Mercado Pago con tu usuario de prueba comprador.
- B. Haz clic en Pagar con QR y escanea el QR del punto de venta.
- C. Elige una tarjeta ya almacenada o completa los datos con una nueva y haz el pago.

### 3. Recibe notificaciones de la orden

Comprueba que hayas recibido las notificaciones del estado de la orden en tu sistema, ¡y listo!

## Valida tu integración

Detallamos todos los casos necesarios que debes probar para validar que tu sistema esté integrado correctamente con Mercado Pago.

**Casos para validar:**

|Modelo de QR|Link|
|---|---|
|Atendido|[Haz clic aquí](/developers/es/docs/qr-code/additional-content/qr-validation-cases/qr-attended-events)|
|Dinámico|[Haz clic aquí](/developers/es/docs/qr-code/additional-content/qr-validation-cases/qr-dynamic-events)|