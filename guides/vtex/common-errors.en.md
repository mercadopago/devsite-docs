# Integration configuration errors

When configuring Mercado Pago integration in VTEX stores, you may encounter some common errors. Below, we list some specifically related to Mercado Pago, their explanations, and possible solutions. 


|Message|Description|
|---|---|
|`unauthorized_use_of_live_credentials`|This means that the Mercado Pago account credentials are not activated. You must go to the [credentials page](/developers/en/docs/vtex/additional-content/your-integrations/credentials) and activate them.|
|`invalid installments`|This means that you're attempting to process the payment with a rate that is not enabled. You must go to the [configuration of the payment method](https://help.vtex.com/en/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros) and set the rates to "Automatic".|
|`invalid_users`|You are attempting to pay with the same user that you are charging with. Please retry the payment with a different payer email.|
|`Cannot infer Payment Method`|You are attempting to pay with a card that is not the selected card type (for example, a credit card number has been entered for the debit card option). Try again with the proper card type.|
|`Invalid users involved`|This occurs when productive credentials are used in a test environment or vice versa. <br> **Example:** Using a test email on the "payer" node while using the production credential of a real user.|
----[mlb]----|`Collector user without key enabled for QR render`|This occurs when the seller has not yet created a **Pix** key with the Mercado Pago account.|------------

> WARNING
>
> Important
>
> Before going to production, you must activate your [credentials](/developers/en/docs/vtex/additional-content/your-integrations/credentials). 

If you encounter an error that is not listed, we recommend consulting the [official VTEX website](https://help.vtex.com/) to see the most common errors within the platform, and the [VTEX status website](https://status.vtex.com/) to check reported incidents in real time.
