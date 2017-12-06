Instant Payment Notifications (IPN) is a mechanism that enables your store to receive messages from Mercado Pago server about the status of a given payment. In this plugin, you don't need to worry about IPN configuration as it is already implemented and configured for you.

### Configuring IPN for Subscriptions
Subscriptions is the only gateway that you must configure IPN to properly receive notifications in your server. To configure it, do as follow:

1. In your store administration, access *WooCommerce > Settings > Checkout* and then, in the listed gateway options, select *Mercado Pago - Subscriptions*;

2. Take note of the informed URL in *Instant Payment Notification (IPN) URL* field and access the IPN/Webhook environment for you country: [Argentina](https://www.mercadopago.com.ar/ipn-notifications), [Brazil](https://www.mercadopago.com.br/ipn-notifications), or [Mexico](https://www.mercadopago.com.mx/ipn-notifications);

3. Insert the URL in the field and click in *save* button. You'll get a message notifying you if Mercado Pago properly accessed your server and received a valid response. If everything is OK you should get a confirmation message.

> HINT 1: When configuring or testing your IPN/Webhooks and server communications be sure that your server can access Mercado Pago server.

> HINT 2: Make sure that your firewall haves [Mercado Pago IP Ranges](https://www.mercadopago.com.ar/developers/en/api-docs/basics/design-considerations#ip-range) within its white-list.

> HINT 3: Pay attention that Mercado Pago uses TSL protocol version 1.0, so your server needs to support/accept connections with this protocol version.

> HINT 4: Make sure that any other WordPress plugin can block Mercado Pago.