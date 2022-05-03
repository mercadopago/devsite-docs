# Payment methods
---

## How to receive payments in different currencies

----[mlb]----
Currently, Mercado Pago only allows payments in the local currency. That is, the account created in Brazil only accepts payments in reales (BRL) and from clients that have an account in the same country.
------------

----[mlm]----
Currently, Mercado Pago only allows payments in the local currency. That is, the account created in Mexico only accepts payments in Mexican pesos and from clients that have an account in the same country.
------------

----[mlc]----
Currently, Mercado Pago only allows payments in the local currency. That is, the account created in Chile only accepts payments in Chilean pesos and from clients that have an account in the same country.
------------

----[mpe]----
Currently, Mercado Pago only allows payments in the local currency. That is, the account created in Peru only accepts payments in soles (PEN) and from clients that have an account in the same country.
------------

----[mlu]----
Currently, Mercado Pago only allows payments in the local currency. That is, the account created in Uruguay only accepts payments in Uruguayan pesos (UYU) and from clients that have an account in the same country.
------------

----[mco]----
Currently, Mercado Pago only allows payments in the local currency. That is, the account created in Colombia only accepts payments in Colombian pesos (COP) and from clients that have an account in the same country.
------------

----[mla]----
Currently, Mercado Pago only allows payments in the local currency. That is, the account created in Argentina only accepts payments in Argentine pesos (ARS) and from clients that have an account in the same country.
------------

----[mla, mco, mlu, mpe, mlc, mlm]----
## Payment methods do not appear in my checkout

Mercado Pago has an amount validation when offering the available payment methods.

If the amount does not comply with the requirements for [minimum and maximum amounts](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/_620) for the payment method, our checkout will request the log in into the Mercado Pago account, since the only option available to use will be the money available in the account. For this reason, your clients won’t be able to pay as guests.

Because of this, according to the amount selected, you can only see some payment methods, the ones which are not shown do not comply with the necessary requirements. In other words, the available payment methods will be shown based on the value of the product and the minimum and maximum allowed.
------------

----[mlb]----
## Payment methods do not appear in my checkout

Mercado Pago has an amount validation when offering the available payment methods.

If the amount does not comply with the requirements for [minimum and maximum amounts](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/_620) for the payment method, our checkout will request the log in into the Mercado Pago account, since the only option available to use will be the money available in the account. For this reason, your clients won’t be able to pay as guests.

Because of this, according to the amount selected, you can only see some payment methods, the ones which are not shown do not comply with the necessary requirements. In other words, the available payment methods will be shown based on the value of the product and the minimum and maximum allowed.
------------

----[mlb]----
## How to generate the same ticket again

To generate a duplicate of the ticket, it is necessary to use the [GET method from the API of Payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get) sending the payment ID and the seller’s Access Token.

The query would be as follows:

`https://api.mercadopago.com/v1/payments/PAYMENT_ID`

The callback is going to return the parameter `transaction_details` containing the `external_resource_url` with the link for the duplicated ticket.

## Remove ticket as payment method

Based on the type of checkout and integration used, the process may be different.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checkout Pro

You can remove the ticket option through the payment preference. For more details please refer to our [documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations#bookmark_atributos_para_la_preferencia).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checkout API

You can remove it directly from your frontend. Get the payment methods excluding the ticket in the call with the parameter `"payment_type_id" = credit_card` as filter, for example.

> For more details please refer to the [API Reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payment_methods/_payment_methods/get).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plugins and e-commerce solutions ready to use

If you are selling through our plugins or e-commerce solutions ready to use, and that setting was made available by the plugin or platform, it will be necessary to verify the information or the payment methods settings on the panel of the corresponding solution.

## Setting a date of expiration for the ticket

By default, the date of expiration is 3 calendar days but you can set the [date of expiration for the ticket through API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/other-payment-ways) using the field `date_of_expiration`.
------------

## Improve the approval process of your payments

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Verify your integration
Check the information for the integration you are implementing and test all the necessary steps.
Don’t forget to create both test users, seller and buyer, to avoid rejected payments, since you can not pay and buy from the same account.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Validate your account
Verify if the id of the seller’s account is validated in the Mercado Pago panel. Go to My account > My details > Verify identity.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add our security code into your website
It is important to add to your integration all the necessary information to [improve the approval process of your payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/payment-rejections/#bookmark_tips_to_improve_the_approval_process).

----[mla, mco, mlu, mpe, mlc, mlm]----
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A payment has been rejected
If you are having trouble with a payment, you can contact us through Help > Collections > I have a problem with a collection > [Solve a problem with a collection](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/charges).
------------

----[mlb]----
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A payment has been rejected
If you are having trouble with a payment, you can contact us through Help > Collections > I have a problem with a collection > [Solve a problem with a collection](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/charges).
------------

----[mla, mco, mlu, mpe, mlc, mlm]----
> If you still need help, please contact us through [Help](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda).
------------

----[mlb]----
> If you still need help, please contact us through [Help](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda).
------------