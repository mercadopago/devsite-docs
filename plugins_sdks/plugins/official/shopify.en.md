# Shopify  

## Features

Mercado Pago's plugin for shopify has available the next features:

| Feature                                                   | Smart Checkout 		  |
|---------------------------------------------------------- |-------------------|
| Credit card Payments                                      | ✔                 |
| Other payment methods                                     | ✔                 |
| Payment with two payment methods	                     	  | ✔               	|
| Mercado Pago's interface                                  | ✔                 |
| Installments calculator                                   | ✔                 |
| IPN and webhooks                                          | ✔                 |
| Mercado Pago coupon discounts                             | ✔                 |

### Smart Checkout

Great for merchants who want to get going quickly and easily.

* Easy website integration— no coding required.
* Limited control of buying experience— display Checkout window as redirect, modal or iframe.
* Store buyer’s card for fast checkout.
* Accept tickets, bank transfer and account money in addition to cards.
* Accept Mercado Pago's discount coupons.

## Configuration

<center>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ZLINrH8WB0A" frameborder="0" allowfullscreen=""></iframe>
</center>

1) In your Shopify admin panel, go to the menu **Settings > Payments**.

![Configuring Mercado Pago in shopify](/images/shopify/shopify-config-1.gif)

2) In Accept credit cards, select **MercadoPago**.

3) Fill the **CLIENT ID** and **CLIENT SECRET**. [Get your credentials](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mla/account/credentials?type=basic)

  ![Configuring client id and client secret in shopify](/images/shopify/shopify-config-2.gif)

4) Click the button "**Activate**".

  ![Saving All Settings](/images/shopify/shopify-config-3.gif)

5) Congrats! **Mercado Pago** was installed and configured!

### Mapping of payment status

The following scheme represents the correlation between the payment status in Mercado Pago and the status of the order in Shopify.

| Mercado Pago status | Shopify order status |
|---------------------|----------------------|
| Approved            | Completed            |
| Pending             | Pending              |
| In process          | Pending              |
| In Mediation        | Pending              |
| Cancelled           | Failed               |
| Refunded            | Failed               |
| Rejected            | Failed               |
