# Prueba tu integración

Los usuarios de prueba te permiten probar la integración de tu sistema con Mercado Pago sin usar dinero real.
Para realizar las pruebas es necesario que tengas como mínimo dos usuarios: un comprador y un vendedor.
> Si no generaste tus usuarios en este punto, puedes hacerlo en los [requisitos previos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/qr-code/pre-requisites).

| Tipos de usuario | Descripción |
| --- | --- |
| Vendedor | Es la **cuenta de pruebas que usas para obtener las credenciales** a configurar en tu sistema para poder interactuar con las APIs de Mercado Pago. También podrás acceder a la [cuenta de Mercado Pago](https://www.mercadopago.com.ar/activities) y revisar las transacciones probadas. |
| Comprador | Es la **cuenta de pruebas que usas para probar el proceso de compra**. Debes acceder a la app de Mercado Pago con los datos de este usuario. En caso de tener disponible dinero en cuenta o tarjetas guardadas, estarán habilitadas como medio de pago. |

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

