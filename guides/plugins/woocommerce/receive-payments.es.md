# Prueba y recibe pagos

## Cómo probar el módulo

> WARNING
>
> Importante
>
> Los estados de pago en WooCommerce no se actualizan en modo de prueba, podrás verlos reflejados una vez que te encuentres en modo productivo.

El módulo de Mercado Pago viene con el entorno Sandbox activo por defecto. Simula pagos en la tienda con este entorno de pruebas y verifica que todo funciona bien antes de empezar a recibir pagos reales de tus clientes. 
 
Aquí es donde entran en juego las credenciales de prueba que habrás copiado en el módulo al momento de [integrar Mercado Pago a tu tienda](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/woocommerce/integration). Las necesitas para poder probar el módulo.

Cuando hagas pruebas, verifica que el flujo de pagos funcione correctamente y que las preferencias de pago sean las que hayas configurado. ¿Ves que todo va bien? Desactiva Pruebas y ve al modo Producción para recibir pagos reales.

> NOTE
>
> Nota
>
> Todos nuestros módulos cuentan con una licencia de código abierto. ¿Quieres participar en su construcción? [Sugiere mejoras y ediciones](https://github.com/mercadopago/cart-woocommerce) en Github.

## Tarjetas de prueba

----[mla]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------
----[mlb]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 4332 1540 6351 | 123 | 11/25 |
| Visa | 4235 6477 2802 5682 | 123 | 11/25 |
| American Express | 3753 651535 56885 | 1234 | 11/25 |

------------
----[mlc]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5416 7526 0258 2580 | 123 | 11/25 |
| Visa | 4168 8188 4444 7115 | 123 | 11/25 |
| American Express | 3757 781744 61804 | 1234 | 11/25 |

------------
----[mco]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5254 1336 7440 3564 | 123 | 11/25 |
| Visa | 4013 5406 8274 6260 | 123 | 11/25 |
| American Express | 3743 781877 55283 | 1234 | 11/25 |

------------
----[mlm]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Visa | 4075 5957 1648 3764 | 123 | 11/25 |

------------
----[mlu]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |

------------
----[mpe]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4009 1753 3280 6176 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------

Para **probar distintos resultados de pago**, completa el dato que quieras en el nombre del titular de la tarjeta:

- APRO: Pago aprobado.
- CONT: Pago pendiente.
- OTHE: Rechazado por error general.
- CALL: Rechazado con validación para autorizar.
- FUND: Rechazado por monto insuficiente.
- SECU: Rechazado por código de seguridad inválido.
- EXPI: Rechazado por problema con la fecha de expiración.
- FORM: Rechazado por error en formulario.

## Ir a producción

Para empezar a cobrar debes [activar tus credenciales](https://www.mercadopago.com/mla/account/credentials/).

> Consulta los [requisitos para salir a producción](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/goto-production) si tienes alguna duda con el proceso.

Verifica que las credenciales de Producción del módulo sean las de la cuenta que reciba el dinero de las ventas. 

Activa el modo Producción solo cuando estés listo para vender y hayas puesto a prueba el módulo con pagos simulados en Sandbox.

![Flow homologación](/images/woocomerce/es_woo_homologacion.gif)

### ¡Listo! El módulo de Mercado Pago está preparado para recibir cobros online.
