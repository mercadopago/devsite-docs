# Requisitos previos

Para utilizar la integración de Mercado Pago con WooCommerce en un sitio WordPress, debes cumplir con los requisitos a continuación.

| Requisitos | Especificaciones |
|---|---|
| Ambiente | MySQL, PHP o servicio equivalente que admita la instalación de WordPress. |
| Aplicación | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta [Dashboard](/developers/es/docs/woocommerce/additional-content/dashboard/introduction) para obtener más información sobre cómo crear una aplicación. |
| Base de datos | MySQL 5.6 o superior (Oracle o Percona), MariaDB 10.0 o superiores. |
| Configuraciones adicionales | Recomendadas para un mejor rendimiento y correcto funcionamiento del plugin Wordpress, WooCommerce y Mercado Pago: [modo seguro](https://wordpress.org/plugins/safe-mode/) off* [memory_limit](https://docs.woocommerce.com/document/increasing-the-wordpress-memory-limit/) superior a 256 MB (se recomiendan 512 MB). |
| Copia de seguridad (recomendado) | Te recomendamos hacer una copia de seguridad de la tienda online antes de realizar cualquier cambio. Al finalizar la copia, elimina todos los archivos relacionados con la versión anterior del módulo. |
| Cuenta de vendedor Mercado Pago | Para realizar ventas, necesitas una cuenta de vendedor en Mercado Pago. Si no la tienes, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crearla. |
| Credenciales | Las [credenciales](/developers/es/guides/additional-content/credentials/credentials) son contraseñas únicas con las que identificamos una integración en tu cuenta y nos sirven para captar pagos en tiendas virtuales y otras aplicaciones de forma segura. Para recibir los pagos reales, necesitarás las **credenciales de producción**. Para realizar pruebas y garantizar que la integración funcione, se requerirán **credenciales de prueba**. |
| Dependencia de extensiones | Brindan nuevas habilidades a PHP, agregando más funciones. Extensiones: PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (para Webservices API). |
| Plugin Mercado Pago | Inicie sesión en su cuenta de [Wordpress](https://wordpress.com/) y, en el Panel de control de su cuenta, haz clic en **Plugins > Añadir nuevo**.. Utilice la barra de búsqueda a la derecha para buscar "Mercado Pago" y, después de ubicar el plugin **Mercado Pago payments for WooCommerce**, haz clic en **Instalar ahora**. Una vez completada la instalación, haz clic en el botón **Activar**.| Si tiene problemas para instalar el plugin y necesita ponerse en contacto con nuestro soporte, es posible que se le pida que realice la [instalación manual](/developers/es/docs/woocommerce/how-tos/install-module-manualmente). Mantenga siempre el plugin actualizado con la última versión para garantizar la seguridad de los datos y la operación de integración. |
| WooCommerce | WordPress plugin que permite crear tiendas virtuales desde código abierto. [Haz clic aquí](https://woocommerce.com/es-es/woocommerce-features/) para obtener más información. Versión requerida: 5.9.x o superior. Probado hasta 7.1.x |
| WordPress | Herramienta Online para creación de tiendas, sitios web y blogs. [Haz clic aquí](https://es.wordpress.org/) para crear tu cuenta. Versión de instalación requerida: 5.6.x o superior. Probado hasta 6.1.x |
| Servidor web | Apache 2.x, Nginx 1.7.x |
| Sistema operativo | Linux x86, Windows x86-64 |
| SSL | Contar con un certificado SSL. |
| Versión PHP | PHP 7.x |