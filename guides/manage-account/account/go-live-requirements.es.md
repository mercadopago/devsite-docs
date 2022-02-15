# Requisitos para salir a producción

Cuando tengas lista tu integración y quieras comenzar a recibir pagos, [activa las credenciales]([FAKER][CREDENTIALS][URL]) de producción y reemplaza las de prueba si hace falta.

## No te olvides de contar con un certificado SSL

Para que seas seguro y que puedas cuidar los datos, **es necesario que tengas un certificado SSL y que el formulario de pagos sea disponibilizado en una página HTTPS**. Esto permite proteger las transacciones que realicen los compradores y sus datos.
Durante las pruebas puedes no tenerlo, pero es obligatorio para salir a producción.

## ¿Por qué es necesario este proceso?

Con este proceso, se puede garantizar la seguridad de lo datos de tus clientes, el cumplimiento de las normas o disposiciones legales de cada país y lograr la mejor experiencia de compra para tus ventas.

[Conoce los términos y condiciones de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/legal/terms-and-conditions).

## Consideraciones adicionales

Te compartimos algunos puntos a tener en cuenta para elevar la calidad de tus integraciones:

+ Mejora la [aprobación del pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/payment-rejections) enviando información del ítem y del pagador, datos de envío e información de industria.
+ Mantén actualizado el estado de las órdenes en tus sistemas usando y procesando de forma correcta las notificaciones [IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/introduction) o [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/webhooks/webhooks).
+ Consume reportes de conciliación vía API para mejorar la gestión financiera del negocio.
