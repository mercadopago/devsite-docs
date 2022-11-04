# How to prevent a payment from being charged back?

It is not possible to avoid all chargebacks; however, you can reduce the probability of having a payment charged back by following these recommendations:

1. Keep all the [business data in your account up to date](https://www.mercadopago[FAKE][URL][DOMAIN]/business#from-section=menu) so that your buyers can recognize you.
   
2. Add the Mercado Pago security script to your page and replace the `view` value with the name of the section (e.g., home, search, item)
```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

> WARNING
>
> Attention
>
> If you don't have a value available for the section, you can leave it empty!

3. Be sure to add all payment and customer details as name, address, and payment method in the [Create payment](/developers/en/reference/payments/_payments/post) request.
   
4. [Send the payment voucher](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/16170) to your customer via e-mail or text message.
   
5. Configure and enable [IPN notifications](/developers/panel/notifications/ipn) on your dashboard to receive alerts for irregular behavior by enabling **Fraud Alert** (`delivery_cancellation`) 

> NOTE
>
> Important
> 
> When charging with Point, review the buyer's details and always request an ID.
