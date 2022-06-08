To create a payment, you should capture card data through the buyer's browser. For security reasons, **never store data in your servers**.

To capture card data, follow these steps:

1. [Include and configure MercadoPago.js library](#bookmark_1._include_and_configure_mercadopago.js_library)
2. [Add payment form](#bookmark_2._add_payment_form)
3. [Integrate the form with MercadoPago.js library](#bookmark_3._integrate_the_form_with_mercadopago.js_library)

### 1. Include and configure MercadoPago.js library

**Use our official library to access Mercado Pago API** from your frontend to collect data securely and to configure your [public key]([FAKER][CREDENTIALS][URL]) like this:

```html
<body>
  <!-- Add step #2 -->
  <script src="https://sdk.mercadopago.com/js/v2"></script>
  <script>
      const mp = new MercadoPago('YOUR_PUBLIC_KEY');
      // Add step #3
  </script>
</body>
```

Card information will be turned into a token so that you can send data to your servers securely.

If you still don't have an account to check your credentials, [sign in](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

> NOTE
>
> Note
>
> This documentation uses the new library version. To see the previous version, go to [integrate credit card payment with MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/v1/receiving-payment-by-card) section.

The card information will be converted into a token so you can send the data to your servers in a secure way.

### 2. Add payment form

Before capturing the card data, provide a form to load all the information.

With MercadoPago.js V2 library CardForm functionality you can get and validate all the data needed to identify the type and name of payment method, issuing bank, number of installments and more. 

CardForm provides secure implementation and correct token of card data. 

For the PCI fields (**Card Number**, **Expiration Date** and **Security Code**) you must create `divs` that will serve as containers for the `iFrames`.

Use the following form and add the styles of your choice.

```html
<!-- Step #2 -->
<style>
  #form-checkout {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }

  .container {
    height: 18px;
    display: inline-block;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 2px;
    padding: 1px 2px;
  }
</style>
<form id="form-checkout">
   <div id="form-checkout__cardNumber-container" class="container"></div>
   <div id="form-checkout__expirationDate-container" class="container"></div>
   <input type="text" name="cardholderName" id="form-checkout__cardholderName"/>
   <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail"/>
   <div id="form-checkout__securityCode-container" class="container"></div>
   <select name="issuer" id="form-checkout__issuer"></select>----[mla, mlb, mlu, mlc, mpe, mco]----
   <select name="identificationType" id="form-checkout__identificationType"></select>------------
   <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"/>
   <select name="installments" id="form-checkout__installments"></select>
   <button type="submit" id="form-checkout__submit">Pay</button>
   <progress value="0" class="progress-bar">Loading...</progress>
 </form>
```

> GIT
> 
> Technical reference
> 
> Find information about the different attributes in the [technical references](https://github.com/mercadopago/sdk-js).

### 3. Integrate the form with MercadoPago.js library

Now, to initialize the CardForm, relate each form field ID with the relevant attributes. The library will be responsible for filling out, getting and validating all the data needed for payment confirmation.

For the IFrame to be rendered, it is necessary to pass the `iframe` option with `true` value in the parameter object received by the cardForm. It is also possible to pass the `style` to the elements.

```javascript

// Step #3
const cardForm = mp.cardForm({
   amount: '100.5',
   iframe: true,
   form: {
     id: 'form-checkout',
     cardholderName: {
       id: 'form-checkout__cardholderName',
       placeholder: "Card Holder",
     },
     cardholderEmail: {
       id: 'form-checkout__cardholderEmail',
       placeholder: 'E-mail'
     },
     cardNumber: {
       id: 'form-checkout__cardNumber-container',
       placeholder: 'Card Number',
     },
     securityCode: {
       id: 'form-checkout__securityCode-container',
       placeholder: 'CVV'
     },
     installments: {
       id: 'form-checkout__installments',
       placeholder: 'Installments'
     },
     expirationDate: {
       id: 'form-checkout__expirationDate-container',
       placeholder: 'Expiration Date (MM/YYYY)',
     },----[mla, mlb, mlu, mlc, mpe, mco]----
     identificationType: {
       id: 'form-checkout__identificationType',
       placeholder: 'Document type'
     },------------
     identificationNumber: {
       id: 'form-checkout__identificationNumber',
       placeholder: 'Document value'
     },
     issuer: {
       id: 'form-checkout__issuer',
       placeholder: 'Issuer'
     }
   },
   callbacks: {
     onFormMounted: function (error) {
       if (error) return console.log('Callback para tratar o erro: montando o cardForm ', error)
     },
     onSubmit: function (event) {
       event.preventDefault();
 
       const {
         paymentMethodId: payment_method_id,
         issuerId: issuer_id,
         cardholderEmail: email,
         amount,
         token,
         installments,
         identificationNumber----[mla, mlb, mlu, mlc, mpe, mco]----,
         identificationType------------
       } = cardForm.getCardFormData();
 
        fetch('/process_payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token,
            issuer_id,
            payment_method_id,
            transaction_amount: Number(amount),
            installments: Number(installments),
            description: 'product description',
            payer: {
              email,
              identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
                type: identificationType,------------
                number: identificationNumber
             }
           }
         })
       })
     },
     onFetching: function (resource) {
       console.log('fetching... ', resource)
       const progressBar = document.querySelector('.progress-bar')
       progressBar.removeAttribute('value')
 
       return () => {
         progressBar.setAttribute('value', '0')
       }
     }
   }
 });
```

The callbacks option accepts different functions that are activated in different flow moments.

> GIT
> 
> Technical reference
> 
> Learn more information about callbacks in the [technical references](https://github.com/mercadopago/sdk-js/blob/main/API/card-form.md).

When submitting the form, we generate a token as a secure representation of the card data. You can access this token using the `getCardFormData` function, as we showed in the previous example in the `onSubmit` callback. We will also store the token in a hidden `input` within your form which we will name `MPHiddenInputToken`.

> WARNING
>
> Important
>
> Remember that the token is valid for 7 days and can be used only once.
