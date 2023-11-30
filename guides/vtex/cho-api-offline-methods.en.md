# Offline payment methods 

----[mlb]---- 
When configuring Checkout Transparente in VTEX stores, you can offer payments with offline payment methods such as Boleto Bancário or Pix. 

> WARNING 
> 
> Important 
> 
> To offer Pix as a payment method, you must first ensure that you have configured your Pix key. If you haven't done so yet, follow the instructions provided in [our documentation](https://www.mercadopago.com.br/ajuda/17843). 
------------ 

----[mco]---- 
When configuring Checkout API in VTEX stores, you can offer payments with offline payment methods such as PSE or Efecty. 

> WARNING 
> 
> Important 
> 
> To offer PSE as a payment method, make sure you first install the **PSE app developed by VTEX**. If you haven't done so yet, go to **Account Settings>Apps > App Store**, and search for **Banks for PSE**. 
> <br> 
> If the app is not available in the store, request its installation from the VTEX team through a ticket in [VTEX Support](https://help.vtex.com/en/support). 
------------ 

----[mla]---- 
When configuring Checkout API in VTEX stores, you can offer payments with offline payment methods such as Pago Fácil, Rapipago, Red Link, or Provincia Net. 
------------ 

----[mlm]---- 
When configuring Checkout API in VTEX stores, you can offer payments with offline payment methods such as Oxxo, Paycash, Banamex, or Bancomer. 
------------ 

----[mlu]---- 
When configuring Checkout API in VTEX stores, you can offer payments with offline payment methods such as Abitab or Redpagos. 
------------ 

----[mlc]----
 When configuring Checkout API in VTEX stores, you can offer payments with offline payment methods such as Wip. 
------------ 

----[mpe]---- 
When configuring Checkout API in VTEX stores, you can offer payments with offline payment methods such as Pago Efectivo. 
------------ 

To configure these payment methods, access the administration panel of your VTEX platform, and then **Payments > Configuration > Payment plans**. Then, follow the steps below: 

1. Click on the "+ (Add new payment plan for...)" button. 
2. Within the **Other** category, search for the offline payment method you want to offer.
3. Fill in the fields displayed on the next screen: 
    1. Enter the **Rule name**, which will allow you to identify this payment method. 
    2. In **Process with affiliation**, select **MercadoPagoV2**. 
    3. In the **Status** field, activate the payment condition using the slider button. 
4. Click **Save** to activate the configuration.

![Configure payment conditions](/images/vtex/paymentconditions-imagenv2-en.gif)

> NOTE 
> 
> Nota 
> 
> Changes in payment conditions may take up to 10 minutes to be applied.

