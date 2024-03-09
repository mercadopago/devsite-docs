# Automatic payments

This documentation aims to provide all the necessary tools for integrating the payment solution without the need to use the CVV (Card Verification Value) of the card for recurring payments.

> WARNING
> 
> Attention
> 
> This documentation is intended for internal use only because it is an exclusive product. For more details, please contact the sales or integrations team.

----[mlb]----
With CVV-free payments, it is possible to carry out recurring charges (school fees, utility bills, etc.) with Mercado Pago, having the freedom to adapt the solution in the most optimal way for your business. Pre-approval is only available through custom checkout, i.e., using [Checkout Transparente](/developers/en/docs/checkout-api/landing) or [Checkout Bricks](/developers/en/docs/checkout-bricks/landing).

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
With CVV-free payments, it is possible to carry out recurring charges (school fees, utility bills, etc.) with Mercado Pago, having the freedom to adapt the solution in the most optimal way for your business. Pre-approval is only available through custom checkout, i.e., using [Checkout API](/developers/en/docs/checkout-api/landing) or [Checkout Bricks](/developers/en/docs/checkout-bricks/landing).

------------

In addition, the seller must comply with the following Mercado Pago integration policies:

- The seller must communicate clearly and unequivocally to their user or customer base that the payment platform on their website is provided by Mercado Pago, also indicating the deadlines, dates, and values of recurring payments.

- In the case of existing users or customers of the seller being migrated to Mercado Pago's recurring payment platform, the seller must communicate in writing indicating that Mercado Pago will process the payments, informing that the charge will appear as Mercado Pago or Mercado Libre on the invoice.

> For **Master** and **Amex** credit cards, the charge on the statement will appear as `MP*&ltbrand_name&gt`, where `&ltbrand_name&gt` is the name configured in the seller's Mercado Pago account, which can be modified by accessing [Menu > Configuration > Business Name.](https://www.mercadopago[FAKER][URL][DOMAIN]/business#from-section=menu) For this reason, for these card brands, we recommend the message "On your statement, you will see the charge as `MP*&ltbrand_name&gt`", replacing `&ltbrand_name&gt` with the business name.