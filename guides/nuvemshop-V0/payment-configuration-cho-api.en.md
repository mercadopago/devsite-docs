# Configure payments with Checkout API

With the [Checkout API](/developers/en/docs/checkout-pro/landing), the entire checkout process will take place within the online store environment, without the need to redirect to an external page. In addition to allowing greater control in the customization and integration process, the checkout offers a complete structure for processing payments with the main means available on the market.

To integrate the Checkout API, follow the steps below.

1. In your store's Administrative Panel at Tiendanube, access **Settings > Payment Methods**.
2. Locate the Mercado Pago plugin in the list of payment methods and click on **Edit**.
3. Select your store's **country of operation** and **currency**.
4. In the "Type of integration" field, change it to **Checkout process without leaving the store**.
5. Choose the payment methods you want to offer in the Mercado Pago payment environment, which can be:
  ----[mlb]----
  * **Credit card**.
  * **Bank slip (or Mercado Pago account balance)**.
  * **Pix**. The Pix payment option will only be displayed if there is a Pix key registered with Mercado Pago. If you haven't created it yet, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) and see the step by step.
  ------------
----[mla, mlm, mpe, mco, mlu, mlc]----
  * **Credit card**.
  * **Cash payment networks**.
   ------------
6. If you want the payment with bank slip to have a discount, enter the discount percentage in the field “Discount for payments with bank slip”.
7. Although Tiendanube uses **installment payment information directly from your Mercado Pago account**, in the "Installments" field you can apply a minimum amount of installments for payment.
8. Finally, click on **Save Changes**.

> NOTE
>
> Attention
>
> Changes made to the installment settings in your account will be reflected in your online store within 24 hours. <br/></br>
> <br/></br>
> To **synchronize your installment changes manually**, go to your store's "Administrative Panel", access **Settings > Payment Methods > Mercado Pago**, click on **Edit** and, on the item " Installments", click on **Activate now**.

Ready! The Checkout API is now ready to receive payments from your store.