# Prueba tu integración 

## ¿Cómo probar tu integración?

Los usuarios de prueba te permiten probar la integración de tu sistema con Mercado Pago sin usar dinero real. 

Para realizar las pruebas es necesario que tengas como mínimo dos usuarios: un comprador y un vendedor. 

> Si no generaste tus usuarios en este punto, puedes hacerlo en los [requisitos previos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/pre-requisites).


| Tipos de usuarios | Descripción |
| --- | --- |
| Vendedor | Es la **cuenta de pruebas que usas para obtener las credenciales** a configurar en tu sistema para poder interactuar con las APIs de Mercado Pago. También podrás acceder a la [cuenta de Mercado Pago](https://www.mercadopago.com.ar/activities) y revisar las transacciones probadas. |
| Comprador | Es la **cuenta de pruebas que usas para probar el proceso de compra**. Debes acceder a la app de Mercado Pago con los datos de este usuario. En caso de tener disponible dinero en cuenta o tarjetas guardadas, estarán habilitadas como medio de pago. |



## Tarjetas de prueba

### Datos del pagador

| Simulación de pago | Nombre del titular | Documento de identidad |
| --- | --- | --- |
| Pago aprobado | APRO | 123456789 |
| Pago rechazado | OTHE | 123456789 |

### Datos de la tarjeta

| Tarjeta | Número | CVV | Fecha de vencimiento |
| --- | --- | --- | --- |
| MasterCard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4170 0688 1010 8020 | 123 | 11/25 |
| American Express | 3711 8030 3257 522 | 1234 | 11/25 |

Aquí podras encontrar mas [tarjetas de prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/local-cards). 

## Prueba el flujo de pago

### 1. Con tu usuario vendedor, asigna una orden a una caja. 

Para probar el modelo atendido, genera una orden con las [credenciales]([FAKER][CREDENTIALS][URL]) del usuario de pruebas que quieras usar como vendedor y envía una orden al QR previamente creado.

### 2. Realiza un pago con tu usuario comprador
- A. Inicia sesión en la app de Mercado Pago con tu usuario de prueba comprador.
- B. Haz clic en Pagar con QR y escanea el QR del punto de venta.
- C. Elige una tarjeta ya almacenada o completa los datos con una nueva y haz el pago.

### 3. Recibe notificaciones de la orden

Comprueba que hayas recibido las notificaciones del estado de la orden en tu sistema, ¡y listo!

## Casos para validar

| Caso | Resultado esperado | Observaciones |
| --- | --- | --- |
| **Escaneo previo a creación de la orden**. El cliente escanea un código QR válido antes de hacer el pedido. | La app muestra la pantalla de espera. | Verifica que `fixed_amount`=**true** en la caja. |
| **Escaneo de QR**. El usuario escanea un código QR válido una vez realizado el pedido y creada la orden. | La app muestra la pantalla de pago.| Verifica el monto en la pantalla de pago. |
| **Pago aprobado**. El usuario realiza un pago aprobado.| El sistema de Punto de Venta recibe la información de un pago aprobado. | Verifica recepción de [notificaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/introduction). |
| **Pago rechazado**. El usuario realiza un pago rechazado.| El sistema de Punto de Venta recibe la información de un pago rechazado y continua esperando el pago de la orden.| El `status` de la `merchant_order` debe ser **opened**. |
| **Segundo intento de pago**. El usuario realiza primero un pago rechazado y después un pago aprobado.| El sistema de Punto de Venta recibe la información de un pago rechazado y luego un pago aprobado.| No eliminar la orden luego de un pago rechazado. |
| **Devolución de pago**. Se hace una devolución de un pago desde el Punto de Venta.| En la cuenta del comprador se impacta la devolución.| Ver [devoluciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds/#bookmark_devoluciones). |
| **Cancelar orden**. El usuario se arrepiente y decide pagar en efectivo. | Se elimina la orden, y por ende al escanear el QR sólo se muestra la pantalla de espera. | Eliminar la orden de la caja. |

## Quiero salir a producción

Cuando tengas la aplicación **lista y funcionando** en modalidad de prueba y quieras empezar a procesar pagos reales, debes [activar tus credenciales]([FAKER][CREDENTIALS][URL]). 

Luego, Mercado Pago podrá auditar tu sitio, app o Software de Punto de Venta y verificar que se cumplan las reglas detalladas anteriormente. Caso contrario, un asesor entrará en contacto contigo para discutir si hay cosas que debes corregir en tu integración.

> WARNING
>
> IMPORTANTE
>
> Si no [activas tus credenciales]([FAKER][CREDENTIALS][URL]), no podrás hacer ningun tipo de devoluciones.

## ¿Por qué es necesario este proceso?

Porque así podemos garantizar la seguridad de los datos de tus clientes y lograr la mejor experiencia de compra, que ayude a maximizar la conversión de los pagos que recibas.
El incumplimiento de estas normas puede implicar desde el no procesamiento de pagos, hasta acciones legales de acuerdo a lo establecido en los [Términos y Condiciones](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/terminos-y-condiciones_299).
