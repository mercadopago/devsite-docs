This page will explain how to configure the module to accept subscriptions paid with recurrent payments. On your store administration, go to *WooCommerce > Settings > Checkout* tab. In *Checkout Options*, click in *Mercado Pago - Subscription*. You should get the following page:

[[/images/wiki3/subscription_checkout_config.png|Subscription Checkout Config]]

If you have properly configured your credentials in <a href="https://github.com/mercadopago/cart-woocommerce/wiki/General-Mercado-Pago-Settings">General Mercado Pago Settings</a>, then you can now customize your credit card checkout:

### Checkout Interface
How checkout is shown.
  * *Title*: This is the title of the payment option that will be shown to your customers;
  * *Description*: This is the description of the payment option that will be shown to your customers;
  * *Integration Method*: How your customers will interact with Mercado Pago to pay their orders;
  * *iFrame Width*: The width, in pixels, of the iFrame (used only with iFrame Integration Method);
  * *iFrame Height*: The height, in pixels, of the iFrame (used only with iFrame Integration Method).

### Checkout Navigation
How checkout navigations will behave.
  * *Instant Payment Notification (IPN) URL*: In this part, you can check your IPN URL, where you will get notified about payment updates. For this solution, you need to configure an IPN URL in your Mercado Pago account. Take note of your URL, click in link of your country and place the URL in the asked field. Then save it;
  * *Success URL*: Customize a URL to be redirected when a payment is approved. Let blank to redirect to the store;
  * *Failure URL*: Customize a URL to be redirected when a payment has failed. Let blank to redirect to the store;
  * *Pending URL*: Customize a URL to be redirected when a payment is pending. Let blank to redirect to the store.

### Payment Options
How the payment option behaves.
  * *Discount by Gateway*: Gives a percentual discount for your customers if they use Credit Cards as payment method.

# Creating an Assignable Product
A subscription needs a special kind of product, that will be sold periodically. You can configure a product to be assignable following bellow steps:
1. Go to *Products* in the side menu and click in *Add Product* button. The opened page should contain the product details and fields in *Product Data* window;<br>[[/images/wiki3/subscription_checkout_product.png|Subscription Checkout Product]]
2. Complete your product informations (name, price, images, etc), and then check *Recurrent Product* checkbox;
3. Fill the information fields for the subscription: *Frequency* (frequency of which the charges will be made to your customer), *Frequency Type* (frequency type can be in [Days] or [Months]), and *End Date* (date that the signature should end).

> IMPORTANT: A subscription should be unique in the customer cart. Customers can only sign a product each time, and it can't be mixed with other non-assignable products.