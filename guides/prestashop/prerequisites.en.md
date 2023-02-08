# Prerequisites

In order to integrate Mercado Pago with PrestaShop, you must meet the requirements below.
 
| Requirements | Description | Specifications |
|---|---|---|
| Additional configuration | Recommended tweaks for better performance and proper functioning of PrestaShop and Mercado Pago module. | safe_mode off * memory_limit greater than 256MB (512MB recommended) |
| Application | Applications are the different integrations in one or more stores. You can create an application for each solution you implement to keep everything organized and on track for easier management. Check [Dashboard](/developers/en/docs/prestashop/additional-content/dashboard/introduction) for more information on how to create an application. | N/A |
| Backup copy of your store **(recommended)** | Copy of all information from your store in order to ensure a version without any changes if necessary. | We advise you to back up the online store before making any changes. When finished copying, delete all files related to the previous version of the module. |
| Credenciais | The [credentials](/developers/en/guides/additional-content/credentials/credentials) are unique passwords with which we identify an integration in your account, and are used to capture payments in virtual stores and other applications securely. | To perform tests and ensure the integration works, **test credentials** will be required. After this step, you will need **production credentials** to receive actual payments. |
| Database | Sets of related files with records about people, places, or things. | MySql 5.6 or higher (Oracle or Percona) |
| Environment | Hosting Service | AMP (Linux, Apache, MySQL, and PHP) or LNMP stack. |
| Extension dependency | Extensions give PHP new abilities, complementing it with more functions. | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (for Webservices API) |
| Mercado Pago seller account | To make sales, you need a seller account on Mercado Pago. If you don't have one, [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) to create it.| Seller account on Mercado Pago |
| Mercado Pago module | In the **Administrative Panel** of your PrestaShop store, access the **Module Catalog** and search for Mercado Pago. Then install the module and look for it in the **Module Manager** section. Finally, click on **Activate** to be able to integrate the module into your store. | If you have problems installing the module and need to contact our support, you may be asked to perform the [installation manually](/developers/en/docs/prestashop/how-tos/install-module-manually). Always keep the module up to date with the latest version to ensure data security and integration operation. |
| Operating system | System responsible for managing computer hardware. | Linux x86, Windows x86-64 |
| PrestaShop | E-commerce platform with open source software, which allows any user to create and develop a commercial website. [Click here](https://www.prestashop.com/en/) for more information. | Required 1.7.x or higher. |
| PHP Version | PHP is a widely used programming language for web application development. For more information, [click here](https://www.php.net/). | PHP 5.6 or up for PrestaShop 1.7 |
| Security copy (recommended) | We recommend that you make a security copy of the store online before making any exchange. When finishing the copy, it deletes all the files related to the previous version of the module. |
| SSL | Protocol that allows you to establish secure communications over the Internet for activities such as browsing, e-mailing, and other data transfers. | SSL certificate |
| Web Server | Software responsible for accepting HTTP requests from clients, typically browsers, and serving them with HTTP responses | Apache 2.x, Nginx 1.7.x |

If all prerequisites are met, you can install the Mercado Pago module on the PrestaShop platform.