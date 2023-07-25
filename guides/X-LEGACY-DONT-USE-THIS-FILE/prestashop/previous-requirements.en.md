# Integration prerequisites
 
In order to integrate Mercado Pago with PrestaShop, you must meet the requirements below.
 
| Requirements | Description | Specifications |
|---|---|---|
| Mercado Pago Seller Account | To make sales, you need a seller account on Mercado Pago. If you don't have one, [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) to create it.| Seller account on Mercado Pago |
| PrestaShop | E-commerce platform with open source software, which allows any user to create and develop a commercial website. [Click here](https://www.prestashop.com/en/) for more information. | Required 1.6.x or higher. |
| Credentials | The [credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/credentials/credentials) are unique passwords with which we identify an integration in your account, and are used to capture payments in virtual stores and other applications securely. | To perform tests and ensure the integration works, **test credentials** will be required. After this step, you will need **production credentials** to receive actual payments. |
| Environment | Hosting Service | AMP (Linux, Apache, MySQL, and PHP) or LNMP stack. |
| Operating system | System responsible for managing computer hardware. | Linux x86, Windows x86-64 |
| Web Server | Software responsible for accepting HTTP requests from clients, typically browsers, and serving them with HTTP responses | Apache 2.x, Nginx 1.7.x |
| PHP Version | PHP is a widely used programming language for web application development. For more information, [click here](https://www.php.net/). | PHP 5.6 up to 7.1 for PrestaShop 1.6 <br> PHP 5.6 or up for PrestaShop 1.7 |
| Database | Sets of related files with records about people, places, or things. | MySql 5.6 or higher (Oracle or Percona) |
| Extension dependency | Extensions give PHP new abilities, complementing it with more functions. | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (for Webservices API) |
| Additional configuration | Recommended tweaks for better performance and proper functioning of PrestaShop and Mercado Pago plugin. | safe_mode off * memory_limit greater than 256MB (512MB recommended) |
| SSL | Protocol that allows you to establish secure communications over the Internet for activities such as browsing, e-mailing, and other data transfers. | SSL certificate |
| Backup copy of your store **(recommended)** | Copy of all information from your store in order to ensure a version without any changes if necessary. | We advise you to back up the online store before making any changes. When finished copying, delete all files related to the previous version of the plugin. |
 
If all prerequisites are met, you can install the Mercado Pago plugin on the PrestaShop platform.
