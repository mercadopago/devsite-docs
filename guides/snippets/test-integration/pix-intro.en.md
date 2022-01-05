# Integrate Checkout API payment for Pix

You can offer the option to receive payments instantly with Pix (`bank_transfer`) from any bank or digital wallet, either via a **QR code** or a **payment code** where you can set an expiration date for the payment to be made.

```json
[
    {
        "id": "pix",
        "name": "PIX",
        "payment_type_id": "bank_transfer",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pix.gif",
        "thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pix.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "...": "..."
    }
]
```
> WARNING
>
> Important
>
> Remember that, for the time being, the Central Bank of Brazil is open from Monday to Friday from 9:00 am to 6:00 pm, and if you request registration outside of these hours, we will confirm it on the next business day. In addition, there is no Pix value limit for the daytime (between 6 am and 8 pm) and, at night (between 8 pm and 6 am), there is a maximum limit of R$1,000 that can be moved during these hours.

## Register Pix Key

To start using Pix as a method of payment, you must have registered a Pix key in the seller's account, this way it will be possible to identify your account and will also allow you to use all the functionalities of the payment method in question.

See below how to register your Pix key:

1. Download the Mercado Pago app on your mobile.
2. From your account home page, click **Pix** in the upper right corner.
3. Then click Register.
4. Choose one or more data that will be registered as **Pix keys** and fill in the necessary information.
5. Validate the registration of the Pix key with the security code sent by Mercado Pago. You will be able to see the status of your registered keys and manage them through the Mercado Pago app.