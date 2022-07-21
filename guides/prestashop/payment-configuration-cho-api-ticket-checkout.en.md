# Configure payments with ticket checkout

With **ticket checkout**, offer cash payments in your store using the [Checkout API](/developers/en/guides/checkout-api/landing).

To integrate the payment method, follow the steps below.

1. Selecione **Sim** para ativar a experiência de pagamentos em dinheiro no checkout de sua loja.
2. Escolha os meios de pagamento que deseja oferecer, podendo ser: 
 ----[mlb]---- 
 * Dinheiro (balance on Mercado Pago or boleto bancário); 
 * Payment at the lottery without a boleto bancário (with CPF)
 ------------ 
 ----[mla, mlm, mpe, mco, mlu, mlc]---- 
 * Cash (Mercado Pago or cash);
 ------------
3. Indicate in how many days these will expire after their issuance.
4. If necessary, define a percentage discount for customers who pay with Mercado Pago.

Ready! Checkout ticket payment via Checkout API has been set up and is ready to receive payments in your store.

> PREV_STEP_CARD_EN
>
> Configure payments with cards
>
> See how to set up Checkout Transparente to receive card payments in your store.
>
> [Configure payments with cards](/developers/en/docs/prestashop/payment-configuration/checkout-api/cards)

----[mlb]----
> NEXT_STEP_CARD_EN
>
> Configure payments with Pix
>
> See how to set up Checkout Transparente to receive Pix payments in your store.
>
> [Pix](/developers/en/docs/prestashop/payment-configuration/checkout-api/pix)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> NEXT_STEP_CARD_EN
>
> Test payments
>
> Learn how to make a test purchase and ensure the integration works.
>
> [Test payments](/developers/en/docs/prestashop/sales-processing/integration-test)
------------