# How to update the plugin version?

We are constantly improving the Mercado Pago plugin for Adobe Commerce. To take advantage of the latest implemented features, it is essential to keep your plugin up to date. The update process is simple, and your customizations are preserved. Follow the step-by-step guide below to ensure a successful update:

> WARNING
>
> Note
>
> This documentation is intended for users who have already upgraded to the **new Adobe Commerce plugin (module)**. Versions of the Mercado Pago plugin for Adobe Commerce prior to **3.19** have been discontinued. If you still have it installed, we recommend [updating to the new Adobe Commerce plugin](/developers/en/docs/adobe-commerce/upgrade-to-the-new-plugin).

1. In your terminal, execute the following command to download the module:

```terminal
composer update mercadopago/adb-payment
```

2. Next, execute the following command to update the module:

```terminal
bin/magento setup:upgrade
```

3. Execute the following command to compile the module files:

```terminal
bin/magento setup:di:compile
```

4. Finally, execute the following command to clear the Adobe Commerce cache:

```terminal
bin/magento cache:clean
```

> NOTE
>
> Note
>
> The plugin is built based on the platform, implying the preservation of customizations during the update. There is no loss of data or settings when updating the version of your plugin.