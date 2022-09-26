# Upload the store

To activate Mercado Pago in the store, follow the steps below.

> To upload and deploy the site, you can use a WebDAV compatible tool.

## Cartridge configuration

To activate the “int_mercadopago” cartridge and use it as a payment processor, it is necessary to configure it as indicated in the following steps.

1. Go to the Salesforce Commerce Cloud settings panel, at **Admin > Sites > Manage Sites > _your site_ > Settings**.
2. Add "int_mercadopago" to the list of cartridges as the first element (or, at least, before "app_storefront_base").
3. Compress the "int_mercadopago/metadata" folder in a _.zip_ file.
4. In **Administration > Site Development > Site Import and Export**, upload this .zip file using the **Upload** option.
5. Select the uploaded .zip and import it using the **Import** option.
6. Scroll to the bottom of this page and check the results in the **Status** section.

## Mercado Pago credentials configuration

To use Mercado Pago with Salesforce Commerce Cloud, you must have a Mercado Pago account. Follow [this documentation](/developers/en/docs/salesforce-commerce-cloud/additional-content/credentials) to generate your credentials. After that, go to **Merchant Tools > Custom Preferences > MercadopagoCredentials** and fill in the **Public Key** and **Access Token** fields.

Done! You can now use the Mercado Pago cartridges on your Salesforce Commerce Cloud store site.