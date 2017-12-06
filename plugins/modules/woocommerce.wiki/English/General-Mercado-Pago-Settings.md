This page will explain how to configure general Mercado Pago settings for this module. First of all, make sure that WooCommerce MercadoPago plugin is enabled, by clicking in *Plugins* item on the WordPress sidebar, as shown bellow:

[[/images/wiki3/plugins_menu.png|]]

Now, in the sidebar of WordPress, click in *Settings > Mercado Pago* option. You should get the following page:

[[/images/wiki3/mercadopago_config.png|Mercadopago Config]]

This window shows the main settings of WooCommerce MercadoPago plugin, where you can check and configure the following:

### Plugin Status and Payment Options
Is the upper part of the window. Shows platform statuses and system consistency to use this plugin. Also, there are buttons that serves as shortcuts for the payment gateways that are offered. It is a good idea to have all the field with a green-checked icon.

### Basic Checkout & Subscriptions
  * Here you should place your *Client Id* and *Client Secret* keys, the credentials that uniquely identifies you in Mercado Pago. *Client Id* and *Client Secret* are used for Basic Checkout and Subscriptions payment methods; 
  * Also, just bellow, you can enable currency conversion mode for sells with Basic Checkout and Subscriptions. Currency conversion is a feature that enables you to set an unsupported currency in WooCommerce while maintaining Mercado Pago as payment method. It will convert the unsupported currency for the currency used in your country. Pay attention that this service converts values on-the-fly in real-time and can bring some additional delay to your server.

### Custom Checkout & Tickets
  * Here you should place your *Public Key* and *Access Token* keys, the credentials that uniquely identifies you in Mercado Pago. *Public Key* and *Access Token* are used for Custom Checkout and Tickets payment methods; 
  * Also, just bellow, you can enable currency conversion mode for sells with Custom Checkout and Tickets. Currency conversion is a feature that enables you to set an unsupported currency in WooCommerce while maintaining Mercado Pago as payment method. It will convert the unsupported currency for the currency used in your country. Pay attention that this service converts values on-the-fly in real-time and can bring some additional delay to your server.

### Status Mapping of Payment x Order
Here you can map each payment state to a given order status. Only make changes over here if you're fully aware of what you're doing.

### Store Settings
These fields are general fields of your store.
  * *Statement Descriptor*: The description that will be shown in your customer's invoice;
  * *Store Category*: Sets up the category of the store;
  * *Store Identificator*: A prefix to identify your store, when you have multiple stores for only one Mercado Pago account.

### Test and Debug Options
Offers logging tools so you can analyze problems that may be occurring. Maintain this disabled if working in production with a stable system.