# Requisitos previos

Para utilizar la integración de Mercado Pago con Magento 2 en tu tienda, debes cumplir con los requisitos que te detallamos a continuación.

> WARNING 
> 
> Mantené tu plugin actualizado para no perder ventas
> 
> Las versiones del plugin anteriores a la 11.111.111.11, ..... dejarán de funcionar el 01/oct/2022. Además, en abril de 2022, las emisoras de tarjeta de crédito aplicaron cambios internacionales a las transacciones. <b>Ver actualizaciones</b>

| Requisitos | Descripción |
| --- | --- |
| Versión del Magento | 2.x |
| Ambiente | LAMP (Linux, Apache, MySQL, y PHP)<br/>LNMP stack |
| Sistema Operativo | Linux x86-64 |
| Memoria | Mínimo 2GB de RAM |
| Web Server | Apache 2.x<br/>Nginx 1.7.x |
| Versión del PHP | 5.6.x<br/>7.0.2<br/>7.0.6–7.0.x<br/> |
| Versión del MySQL | MySQL 5.6<br/>MariaDB y Percona son compatibles con Magento porque soportan las APIs de MySQL 5.6. |
| Dependencias de Extensiones | bc-math (solo Magento Commerce)<br/>curl<br/>gd, ImageMagick 6.3.7 (o superior) o ambos<br/>intl<br/>bstring<br/>mcrypt<br/>hash<br/>openssl<br/>PDO/MySQL<br/>SimpleXML<br/>soap<br/>xml<br/>xsl<br/>zip<br/> |
| PHP 7 only | json<br/>iconv |
| SSL | Es necesario tener un certificado SSL y que el formulario de pagos sea disponibilizado en una página HTTPS.<br/>Durante las pruebas en modo de Sandbox, podrás ejecutar las pruebas en HTTP. |

> Este módulo está configurado para soportar los patrones de Magento 2. Te recomendamos no utilizar plugins o módulos que cambien las características y funcionamiento del patrón de Magento para evitar errores en el módulo o que éste deje de funcionar. 