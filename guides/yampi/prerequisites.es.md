# Requisitos previos

Para integrar Mercado Pago con Yampi, debes cumplir con los requisitos a continuación.
 
| Requisitos | Descripción | Especificaciones |
| --- | --- | --- |
| Base de dados | Conjunto de archivos relacionados con registros sobre personas, lugares o cosas. | MySql 5.6 o superior (Oracle o Percona) |
| Conta de vendedor Mercado Pago | Para realizar ventas, necesitas una cuenta de vendedor en Mercado Pago. Si no la tienes, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crearla. | Cuenta de vendedor en Mercado Pago |
| Copia de seguridad de su tienda **(recomendado)** | Copia de toda la información de tu tienda para asegurar una versión sin cambios, si es necesario. | Te recomendamos que hagas una copia de seguridad de la tienda en línea antes de realizar cualquier cambio. Cuando termines de copiar, elimina todos los archivos relacionados con la versión anterior del módulo. |
| Credenciais | Las [credenciales](/developers/es/guides/additional-content/credentials/credentials) son contraseñas únicas con las que identificamos una integración en tu cuenta y nos sirven para captar pagos en tiendas virtuales y otras aplicaciones de forma segura. | Para realizar pruebas y garantizar que la integración funcione, se requerirán **credenciales de prueba**. Después de este paso, necesitarás **credenciales de producción** para recibir los pagos reales. |
| Tienda en Yampi | Plataforma de comercio electrónico enfocada en mejorar los procesos de compra y venta en línea. [Haz clic aquí](https://www.yampi.com.br/) para obtener más información.
| Servidor Web | Software responsable de aceptar solicitudes HTTP de clientes, normalmente navegadores, y de atenderlas con respuestas HTTP | Apache 2.x, Nginx 1.7.x |
| Sistema operativo | Sistema responsable de la gestión del hardware informático. | Linux x86, Windows x86-64 y MacOS x86-64 |

Si se cumplen todos los requisitos previos, puedes instalar el checkout Mercado Pago en la plataforma Yampi.