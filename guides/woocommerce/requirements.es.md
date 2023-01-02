# Requisitos previos

Para utilizar la integración de Mercado Pago con WooCommerce en un sitio WordPress, debes cumplir con los requisitos a continuación.

| Requisitos | Especificaciones |
|---|---|
| Aplicación | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta [Dashboard](/developers/es/docs/woocommerce/additional-content/dashboard/introduction) para obtener más información sobre cómo crear una aplicación. |
| Cuenta de vendedor Mercado Pago | Para realizar ventas, necesitas una cuenta de vendedor en Mercado Pago. Si no la tienes, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crearla. |
| Credenciales | Las [credenciales](/developers/es/guides/additional-content/credentials/credentials) son contraseñas únicas con las que identificamos una integración en tu cuenta y nos sirven para captar pagos en tiendas virtuales y otras aplicaciones de forma segura. Para recibir los pagos reales, necesitarás las **credenciales de producción**. Para realizar pruebas y garantizar que la integración funcione, se requerirán **credenciales de prueba**. |
| WordPress | Herramienta Online para creación de tiendas, sitios web y blogs. [Haz clic aquí](https://es.wordpress.org/) para crear tu cuenta. Versión de instalación requerida: 5.6.x o superior. Probado hasta 6.1.x |
| WooCommerce | WordPress Plugin que permite crear tiendas virtuales desde código abierto. [Haz clic aquí](https://woocommerce.com/es-es/woocommerce-features/) para obtener más información. Versión requerida: 5.9.x o superior. Probado hasta 7.1.x |
| Ambiente | MySQL, PHP o servicio equivalente que admita la instalación de WordPress. |
| Sistema operativo | Linux x86, Windows x86-64 |
| Servidor web | Apache 2.x, Nginx 1.7.x |
| Versión PHP | PHP 7.x |
| Base de datos | MySQL 5.6 o superior (Oracle o Percona), MariaDB 10.0 o superiores. |
| Dependencia de extensiones | Brindan nuevas habilidades a PHP, agregando más funciones. Extensiones: PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (para Webservices API). |
| Configuraciones adicionales | Recomendadas para un mejor rendimiento y correcto funcionamiento del plugin Wordpress, WooCommerce y Mercado Pago: [modo seguro](https://wordpress.org/plugins/safe-mode/) off* [memory_limit](https://docs.woocommerce.com/document/increasing-the-wordpress-memory-limit/) superior a 256 MB (se recomiendan 512 MB). |
| SSL | Contar con un certificado SSL. |
| Copia de seguridad (recomendado) | Te recomendamos hacer una copia de seguridad de la tienda online antes de realizar cualquier cambio. Al finalizar la copia, elimina todos los archivos relacionados con la versión anterior del módulo. |

