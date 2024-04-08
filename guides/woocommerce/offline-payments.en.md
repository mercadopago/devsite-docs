# ----[mlb]---- Boleto e lotérica ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Efectivo------------

This means of payment will add----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------and it will allow you to offer cash payments using offline payment methods through Mercado Pago.

1. To activate the Checkout, go to the settings of the WooCommerce panel (**WooCommerce > Mercado Pago**).
2. Click on **3. Activate and configure payment methods**.
----[mlb]----
3. In the "Boleto and lottery" option, click on **Configure**.

![Active and configure](/images/woocomerce/cho-pro-active-configure-pt.png)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
3. In the "Efectivo" option, click on **Configure**.

![Activar y configurar](/images/woocomerce/cho-pro-active-configure-es.png)

------------
4. The "Activate checkout" option allows you to enable or disable the Checkout in your store. To activate, click on the sliding button.
5. In the **Title on store checkout** field, enter the name by which this payment method will be identified in the store. For example, you can call it **Cash payment**.
----[mlb]----
![Activar y título](/images/woocomerce/api-active-boleto-pt-br.png)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
![Activar y configurar](/images/woocomerce/api-active-efectivo-es.png)

------------
6. The **Convert currency** option allows the value of the currency set in WooCommerce to be compatible with the value of the currency you use in Mercado Pago. To activate it, click on the sliding button.
7. In the **Payment methods** section, enable which cash payment methods you want to offer in the store. You can enable the "All payment methods" option or only some.
8. In **Payment expiration**, configure how many days orders with cash payment will expire.
----[mlb]----
![Convertir y métodos de pago](/images/woocomerce/api-convert-and-payments-methods-boleto-pt-br.png)

------------
----[mla]----
![Convert and payments methods](/images/woocomerce/api-convert-and-payments-methods-efectivo-es-ar.png)

------------
----[mlm]----
![Convert and payments methods](/images/woocomerce/api-convert-and-payments-methods-efectivo-es-mx.png)

------------
----[mpe, mco, mlu, mlc]----
> To find out which types and payment methods are accepted in each country, access the [documentation](/developers/en/docs/sales-processing/payment-methods).

------------
To save the changes in the settings, click on the **Finish setup** button.

### Advanced settings

It is possible to customize options in the advanced settings section of the payment method, providing a more customized experience in the store. To access these options, click on the **Advanced settings** title, and the options described below will be displayed:

- **Reduce inventory**: Activate inventory reduction during order creation, regardless of payment approval. Deactivate this option only when payments are approved.
- **Discounts on Mercado Pago checkouts**: Enter a percentage discount value for customers paying with this payment method. To activate it, enter a discount percentage and check the option "Activate and show this information on the Mercado Pago checkout".
- **Commission on Mercado Pago checkouts**: Enter an additional percentage value that you want to charge as a commission to customers choosing this payment method. To activate it, enter a discount percentage and check the option "Activate and show this information on the Mercado Pago checkout".

![Advanced settings](/images/woocomerce/advanced-settings-efectivo-es.gif)

To save the changes in the settings, click on the **Finish setup** button.