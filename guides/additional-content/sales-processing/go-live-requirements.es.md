# Requisitos para salir a producción

Cuando tengas lista tu integración y quieras comenzar a recibir pagos, [activa las credenciales](/developers/es/guides/additional-content/your-integrations/credentials) de producción y reemplaza las de prueba si hace falta. 

Además, te recomendamos cumplir con las siguientes consideraciones adicionales.

## Homologación

Antes de salir a producción, y para poder ofrecer tanto al vendedor como al comprador la mejor experiencia, deberás evaluar la [calidad de tu integración](/developers/es/guides/additional-content/homologator/homologator) con nuestra herramienta de homologación. Esto te permitirá verificar si estás cumpliendo con los estándares de calidad y seguridad de Mercado Pago antes de salir comenzar a recibir pagos reales.


## Certificado SSL 

Para que tu integración sea segura y cuide los datos involucrados en las transacciones, **es necesario que tengas un certificado SSL y que el formulario de pagos sea disponibilizado en una página HTTPS**. Esto permite proteger las transacciones que realicen los compradores y sus datos.
Durante las pruebas puedes no tenerlo, pero es obligatorio para salir a producción.

Con este proceso, se busca garantizar la seguridad de lo datos de tus clientes, el cumplimiento de las normas o disposiciones legales de cada país y lograr la mejor experiencia de compra para tus ventas. 

Si bien durante la etapa de pruebas puedes no contar con el certificado, este es obligatorio para salir a producción. Para más información, conoce [los términos y condiciones de Mercado Pago](/developers/es/guides/resources/legal/terms-and-conditions).

----[mlb]----
## Clave Pix

La opción de pago por Pix solo se mostrará si existe una Clave Pix registrada en Mercado Pago. Si aún no las creaste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y consulta el paso a paso.

------------

## Aprobación de pagos

Conoce qué medidas puedes llevar adelante para mejorar la [aprobación de pagos](/developers/es/guides/additional-content/how-tos/payment-rejections), tales como el envío de información del ítem y del pagador, datos de envío e información de industria, entre otros.

## Notificaciones

Mantén actualizado el estado de las órdenes en tus sistemas usando y procesando de forma correcta las notificaciones [IPN](/developers/es/guides/additional-content/your-integrations/ipn) o [Webhooks](/developers/es/guides/additional-content/your-integrations/webhooks).

## Reportes

Los [reportes de Mercado Pago](/developers/es/guides/additional-content/reports/introduction) proporcionan información financiera para dar seguimiento a las transacciones de las cuentas, como el saldo disponible, los movimientos y la liquidez. Esto facilita la conciliación de las ventas y otras operaciones con sus sistemas de gestión internos.

Te recomendamos utilizar los reportes para mejorar la gestión financiera empresarial una vez que hagas tu salida a producción.
