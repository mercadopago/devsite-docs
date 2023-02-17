# Requisitos previos

Para integrar el Mercado Pago con Tiendanube, debes cumplir con los requisitos a continuación.
 
| Requisitos | Descripción | Especificaciones |
| --- | --- | --- |
| Aplicación | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta [Dashboard](/developers/es/docs/nuvemshop/additional-content/dashboard/introduction) para obtener más información sobre cómo crear una aplicación. | N/A |
| Ambiente | Servicio de hospedaje | AMP (Linux, Apache, MySQL y PHP) o LNMP stack. |
| Base de dados | Conjunto de archivos relacionados con registros sobre personas, lugares o cosas. | MySql 5.6 o superior (Oracle o Percona) |
| Configuración adicional | Ajustes recomendados para un mejor rendimiento y correcto funcionamiento del módulo PrestaShop y Mercado Pago. | safe_mode off memory_limit superior a 256 MB (se recomiendan 512 MB) |
| Conta de vendedor Mercado Pago | Para realizar ventas, necesitas una cuenta de vendedor en Mercado Pago. Si no la tienes, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crearla. | Cuenta de vendedor en Mercado Pago |
| Copia de seguridad de su tienda **(recomendado)** | Copia de toda la información de tu tienda para asegurar una versión sin cambios, si es necesario. | Te recomendamos que hagas una copia de seguridad de la tienda en línea antes de realizar cualquier cambio. Cuando termines de copiar, elimina todos los archivos relacionados con la versión anterior del módulo. |
| Credenciais | Las [credenciales](/developers/es/docs/nuvemshop/additional-content/credentials) son contraseñas únicas con las que identificamos una integración en tu cuenta y nos sirven para captar pagos en tiendas virtuales y otras aplicaciones de forma segura. | Para realizar pruebas y garantizar que la integración funcione, se requerirán **credenciales de prueba**. Después de este paso, necesitarás **credenciales de producción** para recibir los pagos reales. |
| Dependencia de la extensión | Las extensiones le dan a PHP nuevas habilidades y lo complementan con más funciones. | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (para API de servicios web) |
| Plugin de Mercado Pago | Mantén siempre el módulo actualizado con la última versión para garantizar la seguridad de los datos y el funcionamiento de la integración. | Para obtener más información sobre cómo instalar el plugin, acceda a la sección [Configuración de integración](/developers/es/docs/nuvemshop-V0/integration) |
| Tiendanube | Es una plataforma de e-commerce que permite recibir pagos con Mercado Pago. [Haz clic aquí](https://www.nuvemshop.com) para obtener más información. | Requerido 1.7.xo superior. |
| Servidor Web | Software responsable de aceptar solicitudes HTTP de clientes, normalmente navegadores, y de atenderlas con respuestas HTTP | Apache 2.x, Nginx 1.7.x |
| Sistema operativo | Sistema responsable de la gestión del hardware informático. | Linux x86, Windows x86-64 |
| SSL | Protocolo que te permite establecer comunicaciones seguras a través de Internet para actividades como navegación, correo electrónico y otras transferencias de datos. | Certificado SSL |
| Versão PHP | PHP es un lenguaje de programación ampliamente utilizado para el desarrollo de aplicaciones web. Para obtener más información, [haz clic aquí](https://www.php.net/). | PHP 5.6 o superior |

Si se cumplen todos los requisitos previos, puedes instalar el módulo Mercado Pago en la plataforma Tiendanube.