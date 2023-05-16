# Installation via Composer

To install the Mercado Pago module in Adobe Commerce (Magento) via Composer, you must follow these steps:

1. In your terminal, run this command to download the Adobe Commerce (Magento) module with Composer:

```
composer require mercadopago/magento2-plugin:3.*
```

2. Then run this command to update the list of Adobe Commerce (Magento) modules:

```
bin/magento setup:upgrade
```

3. Now you must run this command to clear the Adobe Commerce (Magento) cache:

```
bin/magento cache:clean
```

4. When the store is in **productive mode**, it will be necessary to generate the `static` files again. You can do it this way:

```
bin/magento setup:static-content:deploy
```

In case you experience folder permission issues when accessing the store, you will need to renew the permissions like this:

```
chmod 777 -R var/ pub/ generated/
```

And you’re done! You have already successfully installed the Mercado Pago module for Adobe Commerce (Magento).