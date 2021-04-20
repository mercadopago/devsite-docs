# Web Tokenize Checkout - Recoveries

> NOTE
>
> Note
>
> Avoid rejected payments with our recommendations to [improve the approval process](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/payment-rejections).

In the event that a payment is rejected you can offer the buyer the option to retry it and recover the sale.

At that moment you will receive the response status *rejected* (`rejected`) and it is advisable to inform the user of said status.

Along with the communication you can also offer the possibility of re-entering the card data, **using the _Web Tokenize Checkout_ again**. You also have the possibility to [change the button text](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/web-tokenize-checkout/personalization) using the `buttonLabel` attribute to complement the communication.

For example:

```html
<h1>Something went wrong!</h1>
<p>An error occurred with the payment. Please try again:</p>

<script src="https://sdk.mercadopago.com/js/v2"></script>

<script>
const mp = new MercadoPago('PUBLIC_KEY', {locale: 'es-AR'});

// Initialize the Web Tokenize Checkout
mp.checkout({
  tokenizer: {
    totalAmount: 4000,
    backUrl: 'https://www.mi-sitio.com/process'
  },
 render: {
    container: '.tokenizer-container',
    label: 'Retry' // button text
 }
});
</script>
```

![Retrieve the sale button Mercado Pago](/images/cow/cow-recovery-page.png)

## Checkout open by default

Another possibility, in case a payment is rejected, is to invoke the *Web Tokenize Checkout* with the form already opened in the context where the user originally loaded the data.

The option to open the checkout by default is controlled from the `autoOpen` attribute and it is only a matter of setting its value to `true`.

Find out more information on how to configure the checkout to open automatically in the [Customizations section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/web-tokenize-checkout/personalization#bookmark_ways_to_open_the_web_tokenize_checkout).

> This documentation uses the new library version. To see the previous version, go to [Recoveries section with MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/web-tokenize-checkout/v1/recoveries).
