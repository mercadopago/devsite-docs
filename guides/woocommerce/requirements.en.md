# Previous requirements

To use the Mercado Pago integration with WooCommerce on a WordPress site, you must comply with the requirements below.

| Requirements | Specifications |
|---|---|
| Additional settings | Recommended for better performance and correct functioning of the WordPress, WooCommerce and Mercado Pago plugin: [safe mode](https://wordpress.org/plugins/safe-mode/) off* [memory_limit](https://docs.woocommerce .com/document/increasing-the-wordpress-memory-limit/) greater than 256 MB (512 MB is recommended). |
| Application | Applications are the different integrations in one or more stores. You can create an application for each solution you implement to keep everything organized and on track for easier management. Check [Dashboard](/developers/en/docs/woocommerce/additional-content/dashboard/introduction) for more information on how to create an application. |
| Credentials | The [credentials](/developers/en/guides/additional-content/credentials/credentials) are unique passwords with which we identify an integration in your account, and are used to capture payments in virtual stores and other applications securely. In order to receive the actual payouts, you will need **production credentials**. To test and ensure the integration works, **test credentials** will be required. |
| Database | MySQL 5.6 or higher (Oracle or Percona), MariaDB 10.0 or higher. |
| Dependency on extensions | It gives new abilities to PHP, adding bad functions. Extensiones: PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (for Webservices API). |
| Environment | MySQL, PHP or the equivalent service that supports the installation of WordPress. |
| Mercado Pago seller account | To make sales, you need a seller account on Mercado Pago. If you don't have one, [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) to create it. |
| Mercado Pago plugin | Log in to your [Wordpress](https://wordpress.com/) account and in your account Dashboard, click **Plugins > Add New**. Use the search bar on the right to search for "Mercado Pago" and, after locating the **Mercado Pago Payments for WooCommerce** plugin, click on **Install now**. After the installation is complete, click the **Enable** button.| If you have problems installing the module and need to contact our support, it is possible that you will be asked to perform the [installation manually](/developers/en/docs/woocommerce/how-tos/install-module-manually). Always keep the plugin up to date with the latest version to ensure data security and integration operation. |
| Operating system | Linux x86, Windows x86-64 |
| PHP Version | PHP 7.x |
| Security copy (recommended) | We recommend that you make a security copy of the store online before making any exchange. When finishing the copy, it deletes all the files related to the previous version of the module. |
| SSL | Count on an SSL certificate. |
| Web server | Apache 2.x, Nginx 1.7.x |
| WooCommerce | WordPress plugin that allows you to create virtual stores from open source. [Click here](https://woocommerce.com/es-es/woocommerce-features/) for more information. Required version: 5.9.x or higher. Proved up to 7.1.x |
| WordPress | Herramienta Online for the creation of shops, websites and blogs. [Click here](https://es.wordpress.org/) to create your account. Required installation version: 5.6.x or higher. Proved up to 6.1.x |