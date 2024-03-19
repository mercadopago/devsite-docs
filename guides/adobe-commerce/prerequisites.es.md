# Requisitos previos

Para utilizar la integración de Mercado Pago con Adobe Commerce en tu tienda, debes cumplir con los requisitos descritos en la siguiente tabla.

> WARNING
>
> Importante
>
> Las versiones del módulo de Mercado Pago anteriores a la **3.19** han sido descontinuadas. Si aún lo tiene instalado, recomendamos que [actualice al nuevo plugin de Adobe Commerce.](/developers/es/docs/adobe-commerce/upgrade-to-the-new-plugin) **Asegúrese de mantener tanto el módulo como la tienda actualizados para no perder ventas**.

| Requisitos | Descripción | Especificaciones |
| --- | --- | --- |
| Aplicación | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta [Tus integraciones](/developers/es/guides/additional-content/your-integrations/introduction) para obtener más información sobre cómo crear una aplicación. | N/A |
| Ambiente | Servicio de alojamiento | LAMP (Linux, Apache, MySQL y PHP) <br/> Pila LNMP | 
| Base de datos | Conjuntos de archivos relacionados entre sí con registros sobre personas, lugares o cosas. | MySQL 5.6 (MariaDB y Percona) |
| Configuración adicional | Ajustes recomendados para un mejor desempeño y correcto funcionamiento de Magento 2 y el módulo de Mercado Pago. | Mínimo 2 GB de RAM |
| Vendedor Cuenta Mercado Pago | Para realizar ventas necesitas una cuenta de vendedor en Mercado Pago. Si no lo tiene, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crearlo.| Cuenta de Vendedor en Mercado Pago |
| Credenciales | Las [credenciales](/developers/es/guides/additional-content/your-integrations/credentials) son contraseñas únicas con las que identificamos una integración en su cuenta y sirven para capturar pagos de forma segura en tiendas virtuales y otras aplicaciones. | Para realizar pruebas y garantizar que la integración funcione, necesitará las **credenciales de prueba**. Después de este paso, necesitará las **credenciales de producción** para recibir pagos reales. |
| Dependencias de extensiones | Las extensiones le dan a PHP nuevas habilidades, complementándolo con más funciones. | bc-math (solo Magento Commerce)<br/>curl<br/>gd, ImageMagick 6.3.7 (o posterior) o ambos<br/>intl<br/>bstring<br/>mcrypt<br/>hash< br/>openssl<br/>PDO / MySQL<br/>SimpleXML<br/>soap<br/>xml <br/>xsl<br/>zip<br/> |
| Adobe Commerce | Plataforma de comercio electrónico 100% personalizable que se integra perfectamente con las principales tecnologías del mercado y puede desplegarse en cualquier entorno. [Haz clic aquí](https://business.adobe.com/br/products/magento/magento-commerce.html) para obtener más información.| Requerido 2.3.x |
| Servidor Web | Software responsable de aceptar solicitudes HTTP de clientes, normalmente navegadores, y atenderlas con respuestas HTTP | Apache 2.x<br/>Nginx 1.7.x |
| Sistema operativo | Sistema encargado de gestionar el hardware informático. | Linuxx86-64 |
| SSL | Protocolo que permite establecer comunicaciones seguras en Internet para actividades como navegación, correo electrónico y otras transferencias de datos. | Es necesario disponer de un certificado SSL y que el método de pago esté disponible en una página HTTPS. Durante las pruebas en modo Sandbox, puede ejecutar pruebas en HTTP. |
| Versión PHP | PHP es un lenguaje de programación ampliamente utilizado para el desarrollo de aplicaciones web. Para obtener más información, [haz clic aquí](https://www.php.net/). | PHP 7.0 o superior (json/iconv) |

> Este módulo está configurado para soportar los estándares Adobe Commerce. Recomendamos no utilizar módulos o plugins que cambien las características y funcionamiento del estándar Adobe Commerce para evitar posibles errores en el módulo o que deje de funcionar.

Si se cumplen todos los requisitos previos, puedes instalar el módulo de Mercado Pago en la plataforma Adobe Commerce.