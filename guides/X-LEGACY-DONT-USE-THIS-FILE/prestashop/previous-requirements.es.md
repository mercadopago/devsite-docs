# Requisitos previos de integración
 
Para integrar el Mercado Pago con PrestaShop, debes cumplir con los requisitos a continuación.
 
| Requisitos | Descripción | Especificaciones |
| --- | --- | --- |
| Cuenta de vendedor pagada por el mercado | Para realizar ventas, necesitas una cuenta de vendedor en Mercado Pago. Si no la tienes, [haga clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crearla. | Cuenta de vendedor en Mercado Pago |
| PrestaShop | Plataforma de comercio electrónico con software de código abierto, que permite a cualquier usuario crear y desarrollar un sitio web comercial. [Haz clic aquí](https://www.prestashop.com/pt/) para obtener más información. | Requerido 1.6.xo superior. |
| Credenciales | Las [credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/credentials/credentials) son contraseñas únicas con las que identificamos una integración en tu cuenta y nos sirven para captar pagos en tiendas virtuales y otras aplicaciones de forma segura. | Para realizar pruebas y garantizar que la integración funcione, se requerirán **credenciales de prueba**. Después de este paso, necesitarás **credenciales de producción** para recibir los pagos reales. |
| Ambiente | Servicio de hospedaje | AMP (Linux, Apache, MySQL y PHP) o LNMP stack. |
| Sistema operativo | Sistema responsable de la gestión del hardware informático. | Linux x86, Windows x86-64 |
| Servidor web | Software responsable de aceptar solicitudes HTTP de clientes, normalmente navegadores, y de atenderlas con respuestas HTTP | Apache 2.x, Nginx 1.7.x |
| Versión PHP | PHP es un lenguaje de programación ampliamente utilizado para el desarrollo de aplicaciones web. Para obtener más información, [haz clic aquí](https://www.php.net/). | PHP 5.6 hasta 7.1 para PrestaShop 1.6 <br> PHP 5.6 o superior para PrestaShop 1.7 |
| Base de datos | Conjunto de archivos relacionados con registros sobre personas, lugares o cosas. | MySql 5.6 o superior (Oracle o Percona) |
| Dependencia de la extensión | Las extensiones le dan a PHP nuevas habilidades y lo complementan con más funciones. | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (para API de servicios web) |
| Configuración adicional | Ajustes recomendados para un mejor rendimiento y correcto funcionamiento del plugin PrestaShop y Mercado Pago. | safe_mode off memory_limit superior a 256 MB (se recomiendan 512 MB) |
| SSL | Protocolo que te permite establecer comunicaciones seguras a través de Internet para actividades como navegación, correo electrónico y otras transferencias de datos. | Certificado SSL |
| Copia de seguridad de su tienda **(recomendado)** | Copia de toda la información de tu tienda para asegurar una versión sin cambios, si es necesario. | Te recomendamos que hagas una copia de seguridad de la tienda en línea antes de realizar cualquier cambio. Cuando termines de copiar, elimina todos los archivos relacionados con la versión anterior del plugin. |
 
Si se cumplen todos los requisitos previos, puedes instalar el plugin Mercado Pago en la plataforma PrestaShop.
