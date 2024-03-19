# Installation via Composer

To install the Mercado Pago module in Adobe Commerce via Composer, you must follow these steps:

1. In your terminal, execute this command to download the Adobe Commerce module using Composer:

```
composer require mercadopago/adb-payment
```

2. Next, execute this command to install the module:

```
bin/magento setup:upgrade
```

3. Execute this command to compile the module files:

```
bin/magento setup:di:compile
```

4. Next, run this command to clean the Adobe Commerce cache:

```
bin/magento cache:clean
```

5. When the store is in production mode, you will need to regenerate the static files. You can do it this way:

```
bin/magento setup:static-content:deploy
```

In case you experience folder permission issues when accessing the store, you will need to renew the permissions like this:

```
chmod 777 -R var/ pub/ generated/
```

Done! You have already successfully installed the Mercado Pago module for Adobe Commerce.