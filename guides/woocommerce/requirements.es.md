# Requisitos previos

Para utilizar la integración de Mercado Pago con WooCommerce en un sitio WordPress, debes cumplir con los requisitos a continuación.

> NOTE
>
> Nota
>
> Accede a nuestra [página de Primeros pasos](/developers/es/docs/getting-started) para encontrar la información necesaria para comenzar a integrar las soluciones de Mercado Pago.

| Requisitos | Descripción | Especificaciones |
| --- | --- | --- |
| Ambiente | Servicio de hospedaje |  MySQL, PHP o servicio equivalente que admita la instalación de WordPress.  |
| Aplicación | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta [Dashboard](/developers/es/docs/woocommerce/additional-content/your-integrations/introduction) para obtener más información sobre cómo crear una aplicación. | N/A |
| Base de datos | Conjunto de archivos relacionados con registros sobre personas, lugares o cosas. | MySQL 5.6 o superior (Oracle o Percona), MariaDB 10.0 o superiores. |
| Configuraciones adicionales | Recomendadas para un mejor rendimiento y correcto funcionamiento del plugin Wordpress, WooCommerce y Mercado Pago. | [Modo seguro](https://wordpress.org/plugins/safe-mode/) off* [memory_limit](https://docs.woocommerce.com/document/increasing-the-wordpress-memory-limit/) superior a 256 MB (se recomiendan 512 MB). |
| Copia de seguridad de su tienda **(recomendado)** | Copia de toda la información de tu tienda para asegurar una versión sin cambios, si es necesario. | Te recomendamos que hagas una copia de seguridad de la tienda en línea antes de realizar cualquier cambio. Cuando termines de copiar, elimina todos los archivos relacionados con la versión anterior del plugin. |
| Credenciales | Las [credenciales](/developers/es/docs/woocommerce/additional-content/your-integrations/credentials) son contraseñas únicas con las que identificamos una integración en tu cuenta y nos sirven para captar pagos en tiendas virtuales y otras aplicaciones de forma segura. | Para realizar pruebas y garantizar que la integración funcione, se requerirán **credenciales de prueba**. Después de este paso, necesitarás **credenciales de producción** para recibir los pagos reales. |
| Cuenta de vendedor Mercado Pago | Para realizar ventas, necesitas una cuenta de vendedor en Mercado Pago. Si no la tienes, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crearla. | Cuenta de vendedor en Mercado Pago |
| Dependencia de la extensión | Las extensiones le dan a PHP nuevas habilidades y lo complementan con más funciones. | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (para Webservices API).  |
| Plugin Mercado Pago | Inicie sesión en su cuenta de [Wordpress](https://wordpress.com/) y, en el Panel de control de su cuenta, haz clic en **Plugins > Añadir nuevo**.. Utiliza la barra de búsqueda a la derecha para buscar "Mercado Pago" y, después de ubicar el plugin **Mercado Pago payments for WooCommerce**, haz clic en **Instalar ahora**. Una vez completada la instalación, haz clic en el botón **Activar**.| Si tienes problemas para instalar el plugin y necesitas ponerte en contacto con nuestro soporte, es posible que se te pida que realices la [instalación manual](/developers/es/docs/woocommerce/how-tos/install-module-manually). Mantén siempre el plugin actualizado con la última versión para garantizar la seguridad de los datos y la operación de integración. |
| Servidor Web | Software responsable de aceptar solicitudes HTTP de clientes, normalmente navegadores, y de atenderlas con respuestas HTTP | Apache 2.x, Nginx 1.7.x|
| Sistema operativo | Sistema responsable de la gestión del hardware informático. | Linux x86, Windows x86-64 |
| SSL | Protocolo que te permite establecer comunicaciones seguras a través de internet para actividades como navegación, correo electrónico y otras transferencias de datos. | Certificado SSL |
| Versión PHP | PHP es un lenguaje de programación ampliamente utilizado para el desarrollo de aplicaciones web. Para obtener más información, [haz clic aquí](https://www.php.net/). | PHP 7.x |
| WooCommerce | WordPress plugin que permite crear tiendas virtuales desde código abierto. [Haz clic aquí](https://woocommerce.com/es-es/woocommerce-features/) para obtener más información. | Versión requerida: 5.9.x o superior. Probado hasta 7.1.x |
| WordPress | Herramienta online para creación de tiendas, sitios web y blogs. [Haz clic aquí](https://es.wordpress.org/) para crear tu cuenta. | Versión de instalación requerida: 5.6.x o superior. Probado hasta 6.1.x |