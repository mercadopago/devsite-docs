---
  sites_supported:
      - mla
      - mlb
      - mlc
      - mco
      - mlm
---

# Set payment methods

----[mlb]----
**Choose how to integrate Mercado Pago on your site.**  You can [receive payments directly on your site](#bookmark_transparent_checkout) or charge through the [Mercado Pago site](#bookmark_checkout_pro). Only one of the options can be activated.
------------

----[mla, mlm, mlc, mlu, mpe, mco]----
**Choose how to integrate Mercado Pago on your site.**  You can [receive payments directly on your site](#bookmark_checkout_api) or charge through the [Mercado Pago site](#bookmark_checkout_pro). Only one of the options can be activated.
------------

You also have the option to offer [interest-free installments](#bookmark_set_interest-free_installments_in_your_mercado_pago_account) and set the [rates and terms](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options) for your online sales whenever you want.


## Checkout Pro

**The buyer will be redirected to Mercado Pago** to make the payment and complete the purchase----[mlb]---- using payment methods such as Pix, boleto parcelado, Caixa’s virtual debit and money from a Mercado Pago account. Once the payment is complete, the buyer will return to your site ------------.

1. Access the payment ----[mlb]---- [methods settings](https://lojavirtualnuvem.com.br/admin/payments/) ------------ ----[mla, mlm, mlc, mlu, mpe, mco]---- [methods settings](https://mitiendanube.com/admin/payments/) ------------ on your site menu, look for "Mercado Pago" and select "Edit".
2. In the item "Type of integration" change to the option "Purchase process on Mercado Pago site".
----[mlb]---- 
3. Select which types of payment you want to offer at your checkout. These can be Credit Card, Boleto Bancario and PIX.
4. Finally, click on "Save changes".------------
----[mla, mlm, mlc, mlu, mpe, mco]----
3. Finally, click on "Save changes". ------------
<p>&nbsp;</p>

----[mlb]----
![Payments Checkout Pro - Nuvem Shop](/images/nuvemshop/nuvemshop_checkout_redirect_3.gif)
------------
----[mla]----
![Payments Checkout Pro - Nuvem Shop](/images/nuvemshop/ar_tiendanube_checkout_redirect.gif)
------------
----[mlm, mlc, mlu, mpe, mco]----
![Payments Checkout Pro - Nuvem Shop](/images/nuvemshop/mx_tiendanube_checkout_redirect.gif)
------------


----[mlb]----
## Transparent Checkout

It allows the **client to complete the purchase on your site**, without being redirected to another siteand making it possible to receive payments with credit card, boleto, Pix and Checkout Pro.

> WARNING
>
> Important
>
> To be able to offer Pix as a payment option, you will need a Pix key registered in the seller's account. This is unique data for account identification to use the payment method functionality.<br><br>
> [Learn how to create a Pix key](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).
------------

----[mla, mlm, mlc, mlu, mpe, mco]----
## Checkout API

It allows the **client to complete the purchase on your site**, without being redirected, and receive payments by credit card and Checkout Pro.
------------


1. Access the payment ----[mlb]----[methods settings](https://lojavirtualnuvem.com.br/admin/payments/)------------ ----[mla, mlm, mlc, mlu, mpe, mco]----[methods settings](https://mitiendanube.com/admin/payments/)------------ on your site menu, look for "Mercado Pago" and select "Edit".
2. In the item "Type of integration" change to the option "Purchase process without leaving the site".
----[mlb]----
3. Select the payment options you want to offer in your site. These can be Credit Card, Boleto Bancario and Pix.
4. If you want to offer boleto bancario payments with a discount, enter the discount percentage in the "Discount for boleto barcario" field.
5. Finally, click on "Save changes". ------------
----[mla, mlm, mlc, mlu, mpe, mco]----
3. Finally, click on "Save changes". ------------
<p>&nbsp;</p>

----[mlb]----
![Payments Checkout Transparente - Nuvem Shop](/images/nuvemshop/nuvemshop_checkout_transparente_2.gif)
------------
----[mla]----
![Payments Checkout Transparente - Nuvem Shop](/images/nuvemshop/ar_tiendanube_checkout_transparente.gif)
------------
----[mlm, mlc, mlu, mpe, mco]----
![Payments Checkout Transparente - Nuvem Shop](/images/nuvemshop/mx_tiendanube_checkout_transparente.gif)
------------

> NOTE
>
> Nota
>
> After installing Mercado Pago, all the payment methods will be activated by default.