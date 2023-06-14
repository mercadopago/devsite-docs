# Prerequisites

To use the Mercado Pago integration with Adobe Commerce (Magento) in your store, you must meet the requirements described in the table below.

> WARNING
>
> Attention
>
> All versions of the Mercado Pago module prior to 3.5.0 were discontinued.
> </br><br/>
> **Keep your module and your store always up to date so you don't lose sales.**

| Requirements | Description | Specifications |
| --- | --- | --- |
| Application | Applications are the different integrations in one or more stores. You can create an application for each solution you implement to keep everything organized and on track for easier management. Check [Dashboard](/developers/en/docs/adobe-commerce/additional-content/your-integrations/introduction) for more information on how to create an application. | N/A |
| Environment | Hosting Service | LAMP (Linux, Apache, MySQL and PHP)<br/>LNMP stack |
| Database | Sets of files related to each other with records about people, places, or things. | MySQL 5.6 (MariaDB and Percona) |
| Additional Configuration | Recommended adjustments for better performance and proper functioning of Magento 2 and the Mercado Pago module. | Minimum 2GB RAM |
| Seller account Mercado Pago | To make sales, you need a seller account on Mercado Pago. If you don't have it, [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) to create it.| Seller Account on Mercado Pago |
| Credentials | The [credentials](/developers/en/guides/additional-content/credentials/credentials) are unique passwords with which we identify an integration in your account and serve to securely capture payments in virtual stores and other applications. | To perform tests and ensure the integration works, you will need the **test credentials**. After this step, you will need the **production credentials** to receive actual payments. |
| Extensions dependencies | Extensions give PHP new abilities, supplementing it with more functions. | bc-math (Magento Commerce only)<br/>curl<br/>gd, ImageMagick 6.3.7 (or later) or both<br/>intl<br/>bstring<br/>mcrypt<br/>hash< br/>openssl<br/>PDO / MySQL<br/>SimpleXML<br/>soap<br/>xml <br/>xsl<br/>zip<br/> |
| Adobe Commerce (Magento) | 100% customizable e-commerce platform that integrates perfectly with the main technologies on the market and can be deployed in any environment. [Click here](https://business.adobe.com/br/products/magento/magento-commerce.html) for more information.| Required 2.x |
| Web Server | Software responsible for accepting HTTP requests from clients, usually browsers, and serving them with HTTP responses | Apache 2.x<br/>Nginx 1.7.x |
| Operating system | System responsible for managing computer hardware. | Linux x86-64 |
| SSL | Protocol that allows you to establish secure communications on the Internet for activities such as browsing, e-mail, and other data transfers. | It is necessary to have an SSL certificate and that the payment method is available on an HTTPS page. During tests in Sandbox mode, you can run tests in HTTP. |
| PHP Version | PHP is a programming language widely used for web application development. For more information, [click here](https://www.php.net/). | PHP 7.0 or higher (json/iconv) |

> This module is configured to support Adobe Commerce (Magento) standards. We recommend that you do not use modules or plugins that change the characteristics and operation of the Adobe Commerce (Magento) standard to avoid possible errors in the module or that it stops working.

If all the prerequisites are met, you can install the Mercado Pago módulo on the Adobe Commerce (Magento)platform.