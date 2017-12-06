If you already had installed a previous version of WooCommerce MercadoPago, please follow the instructions. In same way of the installation, again you have two options: from your WordPress Store, or by downloading and manually copying the module directory.

### Upgrade from WordPress
1. On your store administration, go to *Plugins* option in sidebar;
2. Click in *update now* button in your plugin dashboard window;
3. In a few seconds it should be installed with *Updated!* message shown.

### Upgrade with Manual Download
1. Get the module sources from a repository (<a href="https://github.com/mercadopago/cart-woocommerce/archive/master.zip">Github</a> or <a href="https://br.wordpress.org/plugins/woocommerce-mercadopago/">WordPress Plugin Directory</a>);
2. Unzip the folder and change its name to "woocommerce-mercadopago";
3. Go to *[WordPressRootDirectory]/wp-content/plugins/* directory and delete the existing directory "woocommerce-mercadopago";
4. Copy "woocommerce-mercadopago" directory to *[WordPressRootDirectory]/wp-content/plugins/* directory.

### Upgrade from 2.x to 3.x
Before updating, please, consider the following:
* This is a major update (2.x to 3.x) and also we’re moving the project’s slugname in WordPress Plugin Directory, so creating a backup of your site and data should be a good idea;
* For now, the update consists in the following steps:
   1. Deactivate the plugin Woo Mercado Pago Module;
   2. Uninstall the plugin Woo Mercado Pago Module;
   3. Install the plugin WooCommerce MercadoPago;
   4. Activate the plugin WooCommerce MercadoPago;
   5. Configure the plugin WooCommerce MercadoPago.
* You can find the version 3.x in this link: https://wordpress.org/plugins/woocommerce-mercadopago/;
* The soon as posible we'll be placing a native migration as a feature for version 2.x.

To confirm that your module is really updated, you can see in *Plugins* item in the store administration menu, and check your just updated module. The version should match the just-updated plugin.

> HINT: Always remember to make a backup of your system and data before making any changes.