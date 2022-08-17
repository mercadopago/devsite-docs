# Mercado Pago Wallet
 
The Mercado Pago Wallet is a payment method that allows you to accept payments only from registered users. By offering this option, users will be able to pay by card, available balance, and Mercado Crédito.
 
> WARNING
>
> Important
>
> By adding this option, it will not be possible to receive payments from users who are not registered in Mercado Pago. Moreover, you willnot be able to receive payments via cash or transfer.
 
To configure payments with Mercado Pago Wallet, send a POST with the `purpose` parameter and the `wallet_purchase` value to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) and execute the request.
