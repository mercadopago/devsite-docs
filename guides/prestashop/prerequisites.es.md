# Requisitos previos

Para integrar el Mercado Pago con PrestaShop, debes cumplir con los requisitos a continuación.
 
| Requisitos | Descripción | Especificaciones |
| --- | --- | --- |
| Ambiente | Servicio de hospedaje | AMP (Linux, Apache, MySQL y PHP) o LNMP stack. |
| Aplicación | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta [Panel del desarrollador](/developers/es/docs/prestashop/additional-content/your-integrations/dashboard) para obtener más información sobre cómo crear una aplicación. | N/A |
| Base de dados | Conjunto de archivos relacionados con registros sobre personas, lugares o cosas. | MySql 5.6 o superior (Oracle o Percona) |
| Configuración adicional | Ajustes recomendados para un mejor rendimiento y correcto funcionamiento del módulo PrestaShop y Mercado Pago. | safe_mode off memory_limit superior a 256 MB (se recomiendan 512 MB) |
| Conta de vendedor Mercado Pago | Para realizar ventas, necesitas una cuenta de vendedor en Mercado Pago. Si no la tienes, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crearla. | Cuenta de vendedor en Mercado Pago |
| Copia de seguridad de tu tienda **(recomendado)** | Copia de toda la información de tu tienda para asegurar una versión sin cambios, si es necesario. | Te recomendamos que hagas una copia de seguridad de la tienda en línea antes de realizar cualquier cambio. Cuando termines de copiar, elimina todos los archivos relacionados con la versión anterior del módulo. |
| Credenciales | Las [credenciales](/developers/es/docs/prestashop/additional-content/your-integrations/credentials) son contraseñas únicas con las que identificamos una integración en tu cuenta y nos sirven para captar pagos en tiendas virtuales y otras aplicaciones de forma segura. | Para realizar pruebas y garantizar que la integración funcione, se requerirán **credenciales de prueba**. Después de este paso, necesitarás **credenciales de producción** para recibir los pagos reales. |
| Dependencia de la extensión | Las extensiones le dan a PHP nuevas habilidades y lo complementan con más funciones. | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (para API de servicios web) |
| Módulo Mercado Pago | En el **Panel Administrativo** de tu tienda PrestaShop, accede al **Catálogo de Módulos** y busca por Mercado Pago. Luego, instala el módulo y búscalo en la sección **Administrador de módulos**. Finalmente, haz clic en **Activar** para poder integrarlo en tu tienda. | Si tienes problemas para instalarlo y necesitas ponerte en contacto con nuestro soporte, es posible que se te pida que realices la [instalación manual](/developers/es/docs/prestashop/how-tos/install-module-manualmente). Mantén siempre el módulo actualizado con la última versión para garantizar la seguridad de los datos y el funcionamiento de la integración. |
| PrestaShop | Plataforma de comercio electrónico con software de código abierto, que permite a cualquier usuario crear y desarrollar un sitio web comercial. [Haz clic aquí](https://www.prestashop.com/pt/) para obtener más información. | Requerido 1.7.xo superior. |
| Servidor Web | Software responsable de aceptar solicitudes HTTP de clientes, normalmente navegadores, y de atenderlas con respuestas HTTP | Apache 2.x, Nginx 1.7.x |
| Sistema operativo | Sistema responsable de la gestión del hardware informático. | Linux x86, Windows x86-64 |
| SSL | Protocolo que te permite establecer comunicaciones seguras a través de internet para actividades como navegación, correo electrónico y otras transferencias de datos. | Certificado SSL |
| Versão PHP | PHP es un lenguaje de programación ampliamente utilizado para el desarrollo de aplicaciones web. Para obtener más información, [haz clic aquí](https://www.php.net/). | PHP 5.6 o superior para PrestaShop 1.7 |

Si se cumplen todos los requisitos previos, puedes instalar el módulo Mercado Pago en la plataforma PrestaShop.