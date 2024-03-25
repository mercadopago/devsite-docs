# Previous requirements

To use the Mercado Pago integration with WooCommerce on a WordPress site, you must comply with the requirements below.

> NOTE
>
> Note
> 
> Please visit our [Getting Started page](/developers/en/docs/getting-started) to find the necessary information to begin integrating Mercado Pago solutions.

| Requirements | Description | Specifications |
|---|---|---|
| Additional settings | Recommended tweaks for better performance and proper functioning of PrestaShop and Mercado Pago module. | safe_mode off * memory_limit greater than 256MB (512MB recommended) |
| Application | Applications are the different integrations in one or more stores. You can create an application for each solution you implement to keep everything organized and on track for easier management. Check [Dashboard](/developers/en/docs/woocommerce/additional-content/your-integrations/introduction) for more information on how to create an application. | N/A |
| Backup copy of your store **(recommended)** | Copy of all information from your store in order to ensure a version without any changes if necessary. | We advise you to back up the online store before making any changes. When finished copying, delete all files related to the previous version of the module. |
| Credentials | The [credentials](/developers/en/docs/woocommerce/additional-content/your-integrations/credentials) are unique passwords with which we identify an integration in your account, and are used to capture payments in virtual stores and other applications securely. | To perform tests and ensure the integration works, **test credentials** will be required. After this step, you will need **production credentials** to receive actual payments. |
| Database | Sets of related files with records about people, places, or things. | MySQL 5.6 or higher (Oracle or Percona), MariaDB 10.0 or higher. |
| Environment | Hosting Service | AMP (Linux, Apache, MySQL, and PHP) or LNMP stack. |
| Extension dependency | Extensions give PHP new abilities, complementing it with more functions. | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (for Webservices API). |
| Mercado Pago seller account | To make sales, you need a seller account on Mercado Pago. If you don't have one, [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) to create it.| Seller account on Mercado Pago |
| Mercado Pago plugin | Log in to your [Wordpress](https://wordpress.com/) account and in your account Dashboard, click **Plugins > Add New**. Use the search bar on the right to search for "Mercado Pago" and, after locating the **Mercado Pago Payments for WooCommerce** plugin, click on **Install now**. After the installation is complete, click the **Enable** button.| If you have problems installing the module and need to contact our support, it is possible that you will be asked to perform the [installation manually](/developers/en/docs/woocommerce/how-tos/install-module-manually). Always keep the plugin up to date with the latest version to ensure data security and integration operation. |
| Operating system | System responsible for managing computer hardware. | Linux x86, Windows x86-64 |
| PHP version | PHP is a widely used programming language for web application development. For more information, [click here](https://www.php.net/). | PHP 7.x |
| Security copy **(recommended)** | Copy of all your store information in order to guarantee an unaltered version if necessary. | We advise you to back up your online store before making any changes. When copying is complete, delete all files related to the previous version of the plugin. |
| SSL | Protocol that allows you to establish secure communications over the Internet for activities such as browsing, e-mailing, and other data transfers. | SSL certificate |
| Web server | Software responsible for accepting HTTP requests from clients, typically browsers, and serving them with HTTP responses | Apache 2.x, Nginx 1.7.x |
| WooCommerce | WordPress plugin that allows you to create virtual stores from open source. [Click here](https://woocommerce.com/es-es/woocommerce-features/) for more information. | Required version: 5.9.x or higher. Proved up to 7.1.x |
| WordPress | Online tool for the creation of shops, websites and blogs. [Click here](https://es.wordpress.org/) to create your account.| Required installation version: 5.6.x or higher. Proved up to 6.1.x |