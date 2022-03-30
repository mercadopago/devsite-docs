---
indexable: false  
---

# Migrate to the new MercadoPago.js version

Learn how to install the **new MercadoPago.js SDK beta version to integrate the Checkout API**. 

With MercadoPago.js SDK you can create the card token required to securely send the data to your backend.

## About the new version

The new version **optimizes your integration as it includes the CardForm feature, which gets and validates all data required** to make a payment with no need for any additional step.

If you don't want to use the new CardForm feature, you can keep the basic characteristics of the previous version. Check the [technical reference](https://github.com/mercadopago/sdk-js) to see what changes you need to make and to know the new names of the parameters.


## Installation steps

We leave you a overview of what you will have to do to start using the new MercadoPago.js beta version:

* First, add the script to your site and install the version. 
* Then, set up the credentials of the account you are integrating so we can identify it when connecting to Mercado Pago.
* Finally, update your payment form with the CardForm feature and start using it.

<br>

> CLIENT_SIDE
>
> h2
>
> Install MercadoPago.js beta version

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Include MercadoPago.js

Add the following script to your site:

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Set up credentials

Initialize the library with the [Public Key]([FAKER][CREDENTIALS][URL]) of the account to be integrated for identification when connecting to Mercado Pago.

```javascript
const mercadopago = new MercadoPago('YOUR_PUBLIC_KEY')
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Update your payment form

In the previous version, you were required to add the form with the `data-checkout` attributes, paying attention to the `name` attribute for sensitive information field management. 

You were also required to add several JavaScript functions to fill out information on each field.  For example, you were required to add a function to detect the method of payment based on credit card number, or to list possible issuers, or even to get the number of installments that can be offered.

Now, **you just need to initialize our CardForm. Link the ID of each form field to the relevant attributes, and the library will fill out, get, and validate all data required for payment confirmation**.

```html
<form id="form-checkout" >
   <input name="cardNumber" id="form-checkout__cardNumber" />
   <input name="CVV" id="form-checkout__CVV" />
   <input name="expirationMonth" id="form-checkout__expirationMonth" />
   <input name="expirationYear" id="form-checkout__expirationYear" />
   <input name="cardholderName" id="form-checkout__cardholderName"/>
   <select name="issuer" id="form-checkout__issuer"></select>
   <select name="docType" id="form-checkout__docType"></select>
   <input name="docValue" id="form-checkout__docValue"/>
   <select name="installments" id="form-checkout__installments"></select>
   <button type="submit" id="form-checkout__submit">Pay</button>
 </form>

 <script>
     const cardForm = mercadopago.cardForm({
         amount: 1000,
         autoMount: true,
         form: {
             id: 'form-checkout',
             cardholderName: {
                 id: 'form-checkout__cardholderName',
                 placeholder: 'Full name',
             },
             cardNumber: {
                 id: 'form-checkout__cardNumber',
                 placeholder: 'Card number',
             },
             CVV: {
                 id: 'form-checkout__CVV',
                 placeholder: 'Security code',
             },
             installments: {
                 id: 'form-checkout__installments',
                 placeholder: 'Installments'
             },
             expirationMonth: {
                 id: 'form-checkout__expirationMonth',
                 placeholder: 'Expiration month'
             },
             expirationYear: {
                 id: 'form-checkout__expirationYear',
                 placeholder: 'Expiration year'
             },
             docType: {
                 id: 'form-checkout__docType',
                 placeholder: 'Document type'
             },
             docValue: {
                 id: 'form-checkout__docValue',
                 placeholder: 'Document number'
             },
             issuer: {
                 id: 'form-checkout__issuer',
                 placeholder: 'Issuing bank'
             }
         },
         callbacks: {
            onFormMounted: function(error) {
                if (error) return console.log('Callback handling error ', error);
            },
            onCardTokenReceived: function(error, token) {
                if (error) return console.log('Callback handling error ', error);

                const formData = cardForm.getCardFormData()
                console.log('form Data: ', formData)
                // post data to your backend
            },
        }
     })

     document.getElementById('form-checkout').addEventListener('submit', function(e) {
         e.preventDefault();
         cardForm.createCardToken()
     })
 </script>
```

> GIT
> 
> Technical Reference
> 
> Find information about the different attributes in the [technical reference](https://github.com/mercadopago/sdk-js).

---
### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Integrate Checkout API for cards
>
> Create and configure your own payment experience.
>
> [Integrate Checkout API for cards](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/receiving-payment-by-card)


> RIGHT_BUTTON_RECOMMENDED_EN
>
> API References
>
> Find all the information required to interact with our APIs.
>
> [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference)
