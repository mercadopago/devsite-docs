# Install the plugin

The Mercado Pago plugin offers more than one way to install the module, but they all have the same integration result.

You can install the Mercado Pago plugin in Magento 2 in three different ways:

* Installation via Composer
* Installation via Magento Marketplace
* Installation via FTP

## Installation via Composer

To install the Mercado Pago plugin in Magento 2 via Composer, you must follow these steps:

1. In your terminal, run this command to download the Magento 2 plugin with Composer:

```
composer require mercadopago/magento2-plugin:3.*
```

2. Then run this command to update the list of Magento plugins:

```
bin/magento setup:upgrade
```

3. Now you must run this command to clear the Magento cache:

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

And you’re done! You have already successfully installed the Mercado Pago plugin for Magento 2.

## Installation via Magento Marketplace

You can install the Mercado Pago extension at no cost through the Magento store, it's very simple. Follow these steps:

1. Access the [Official Magento Store](https://marketplace.magento.com/). In the search engine, you must enter Mercado Pago and select the [official extension](https://marketplace.magento.com/mercadopago-core.html). 
2. Open the **Edition** menu and select the  pluginedition you require. Then open the **Your store version** menu and select the type of version you need for your business. Finally, click on **Add to cart** to add the module to the cart.
3. Click on the cart at the top right of the site and then click on **Proceed to Checkout** to finalize your purchase.
4. To continue, you will need to login with your Magento account or create a new one. Once registered, you can download the Mercado Pago module and install it.


## Installation via FTP

1. Download the **Mercado Pago module** available [on Github](https://github.com/mercadopago/cart-magento2).

2. Create a folder with the name **code** inside the Magento **app** folder.

3. To access the **MercadoPago** folder, it is necessary to unzip the *.zip* file.

4. Copy the **MercadoPago** folder located in the **code / src** folder.

5. Then, follow the instructions in [Installation via Composer](#bookmark_installation_via_composer)

And you’re done! You have already successfully installed the Mercado Pago plugin for Magento 2.

> PREV_STEP_CARD_EN
>
> Integration prerequisites
>
> Know the previous requirements for your integration.
>
> [Previous requirements](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/magento-two/previous-requirements)

> NEXT_STEP_CARD_EN
>
> Payment configuration
>
> Follow the steps to set up Custom Checkout (Transparent) payments.
>
> [Payment configuration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/magento-two/payment-configuration)
