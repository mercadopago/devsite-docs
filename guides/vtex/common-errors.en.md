# Errors list

The following are common errors that can occur during your integration:

|Message|Description|
|---|---|
|`unauthorized_use_of_live_credentials`|This means that the Mercado Pago account credentials are not activated. You must go to the [credentials]([FAKER][CREDENTIALS][URL]) page and activate them.|
|`invalid installments`|This means that you're attempting to process the payment with a rate that is not enabled. You must go to the [configuration of the payment method](https://help.vtex.com/en/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros) and set the rates to "Automatic".|
|`invalid_users`|You are attempting to pay with the same user that you are charging with. Please retry payment with a different payer email.|
|`Cannot infer Payment Method`|You are attempting to pay with a card that is not the selected card type (for example, a credit card number has been entered for the debit card option).|
|`Invalid users involved`|This occurs when productive credentials are used in a test environment or vice versa. **Example:** Using a test email on the "payer" node while using the production credential of a real user.|
----[mlb]----|`Collector user without key enabled for QR render`|This occurs when the seller has not yet created a **Pix** key with the Mercado Pago account.|------------

> WARNING
>
> Important
>
> Before starting your production operation, you must activate your [credentials.]([FAKER][CREDENTIALS][URL])

For more information, visit the [VTEX official site](https://help.vtex.com/) and the [VTEX status site](https://status.vtex.com/).