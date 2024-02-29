# Payment Methods Configuration 

In order to start receiving payments with Mercado Pago, after creating a MercadoPagoV2 gateway affiliation, you will need to configure the payment methods you wish to offer.

> WARNING 
> 
> Important
> 
> The MercadoPagoV1 gateway affiliation will be discontinued. If you already have a MercadoPagoV1 gateway affiliation, you'll need to [migrate to MercadoPagoV2](/developers/en/docs/vtex/integration/v1-v2-migration) so you can keep operating with Mercado Pago and benefit from the advantages that this new conector offers.

Mercado Pago allows you to choose which payment methods to offer in VTEX stores through the configuration of our checkouts: 

* ----[mla, mlu, mlc, mlm, mpe, mco]----[Checkout API:](/developers/en/docs/vtex/payments-configuration/checkout-api)------------ ----[mlb]---- [Checkout Transparente:](/developers/es/docs/vtex/payments-configuration/checkout-api)------------ You can offer interest-free installments, ----[mla, mlm, mlb]----installments without a card,------------ debit card payments, ----[mlb]----Boleto Bancário or Pix------------, and the entire payment process will be carried out within the store's environment, without the need for redirection to an external page. 

* [Pro Checkout:](/developers/en/docs/vtex/payments-configuration/checkout-pro) The buyer will be redirected from the store to the Mercado Pago website, where the transaction will be processed and completed with any of the previously configured payment methods. After the completion of this transaction, the customer will be redirected back to the VTEX store. 

> WARNING
> 
> Important 
> 
> Make sure you have installed the **Mercado Pago Payment APP** in order to configure the payment methods in your VTEX store. If you haven't done so yet, you can install it in the "My Apps" section.
