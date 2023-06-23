# Requisitos para salir a producción

Cuando tengas lista tu integración y quieras comenzar a recibir pagos, [activa las credenciales]([FAKER][CREDENTIALS][URL]) de producción y reemplaza las de prueba si hace falta.

Además, deberás evaluar la [calidad de tu integración](/developers/es/docs/checkout-api/additional-content/integration-quality) para verificar si estás cumpliendo con los estándares de calidad y seguridad de Mercado Pago.

## No te olvides de contar con un certificado SSL 

Para que seas seguro y que puedas cuidar los datos, **es necesario que tengas un certificado SSL y que el formulario de pagos sea disponibilizado en una página HTTPS**. Esto permite proteger las transacciones que realicen los compradores y sus datos.
Durante las pruebas puedes no tenerlo, pero es obligatorio para salir a producción.

### ¿Por qué es necesario este proceso?

Con este proceso, se puede garantizar la seguridad de lo datos de tus clientes, el cumplimiento de las normas o disposiciones legales de cada país y lograr la mejor experiencia de compra para tus ventas.

[Conoce los términos y condiciones de Mercado Pago](/developers/es/guides/resources/legal/terms-and-conditions).

----[mlb]----
## Recibir pagos con Pix

La opción de pago por Pix solo se mostrará si existe una Clave de Pix registrada en Mercado Pago. Si aún no las creaste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y consulta el paso a paso.

------------

## Consideraciones adicionales

Te compartimos algunos puntos a tener en cuenta para elevar la calidad de tus integraciones:

+ Mejora la [aprobación del pago](/developers/es/guides/additional-content/how-tos/improve-approval) enviando información del ítem y del pagador, datos de envío e información de industria.
+ Mantén actualizado el estado de las órdenes en tus sistemas usando y procesando de forma correcta las notificaciones [IPN](/developers/es/guides/additional-content/your-integrations/notifications/ipn) o [Webhooks](/developers/es/guides/additional-content/your-integrations/notifications/webhooks).
+ Consume reportes de conciliación vía API para mejorar la gestión financiera del negocio.