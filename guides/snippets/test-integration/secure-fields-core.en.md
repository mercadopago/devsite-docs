To create a payment, you should capture card data through the buyer's browser. For security reasons, **never store data in your servers**.

> NOTE
>
> Note
>
> This documentation uses the new library version. To see the previous version, go to [integrate payment for cards with MercadoPago.js V1 section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/v1/receiving-payment-by-card).

To capture card data, follow these steps:

1. [Include MercadoPago.js library](#bookmark_1._include_mercadopago.js_library)
2. [Add payment form](#bookmark_2._add_payment_form)
3. [Configure your public key](#bookmark_3._configure_your_public_key)
4. [Create PCI fields](#bookmark_4._create_the_pci_fields)
5. [Get data for your form](#bookmark_5._get_data_for_your_form)
6. [Create card token](#bookmark_6._create_card_token)

### 1. Include MercadoPago.js library

Use our **official library** to access Mercado Pago API from your application and collect data securely.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

Card information will be turned into a token so that you can send data to your servers securely.

### 2. Add payment form

To capture sensitive data from your customer's cards, please use our form with the corresponding attributes to ensure information security and correct token generation. 

> NOTE
>
> Note
>
> The secure fields are `divs` because the real inputs will be within the iframe in a secure manner.

You can easily include anything you need, change the suggested `label` attribute, and add your own style.

The following example assumes that `transactionAmount` and `description` data were obtained in the previous step in which customers selected the product or service to be paid.

```html
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
<form id="form-checkout" method="POST" action="/process_payment">
  <div id="form-checkout__cardNumber-container" class="container"></div>
  <div id="form-checkout__expirationDate-container" class="container"></div>
  <input type="text" name="cardholderName" id="form-checkout__cardholderName" placeholder="Cardholder name" />
  <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" placeholder="E-mail" />
  <div id="form-checkout__securityCode-container" class="container"></div>
  <select name="issuer" id="form-checkout__issuer">
    <option value="" disabled selected>Issuer</option>
  </select>----[mla, mlb, mlu, mlc, mpe, mco]----
  <select name="identificationType" id="form-checkout__identificationType">
    <option value="" disabled selected>Document type</option>
  </select>------------
  <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"
    placeholder="Document vaule" />
  <select name="installments" id="form-checkout__installments">
    <option value="" disabled selected>Choose the amount of installments</option>
  </select>
  <input id="token" name="token" type="hidden" />
  <input id="paymentMethodId" name="paymentMethodId" type="hidden" />
  <input id="transactionAmount" name="transactionAmount" type="hidden" value="100" />
  <input id="description" name="description" type="hidden" value="product description" />
  <button type="submit" id="form-checkout__submit">Pay</button>
</form>
```

> NOTE
>
> Note
>
> Before following the steps below, make sure that the form is available, so it can operate correctly.

### 3. Configure your public key

Add your [public key]([FAKER][CREDENTIALS][URL]) like this:

```javascript
 
<script>
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
// Add Step #createPCIFields
 ----[mla, mlb, mlu, mlc, mpe, mco]----
// Add Step #getIdentificationTypes------------
// Add Step #getPaymentMethods
// Add Step #getIssuers
// Add Step #getInstallments
// Add Step #createCardToken
</script>
```

>  If you still don't have an account to check your credentials, [sign in](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### 4. Create the PCI fields

Safe fields (cardNumber, expirationDate and securityCode) hosted by **Mercado Pago** are created in this step with **Fields**, using the `HTML iframe` element.

The second parameter is options, and can be assigned values ​​for **placeholder** and **style**. The value for **placeholder** must be a *string*, while **style** is an *object* with the keys being the CSS property name and the values ​​a string with the styling. Invalid values ​​will be ignored, with a warning displayed on the console.

For more details on the allowed styles, [check out the technical reference](https://github.com/mercadopago/sdk-js/blob/main/API/fields.md#style).

A code example with `cardNumber`, `expirationDate` and `securityCode` would be:

```javascript
  // Step #createPCIFields
  const cardNumberElement = mp.fields.create('cardNumber', {
    placeholder: "Card number",
  }).mount('form-checkout__cardNumber-container');
 
  const expirationDateElement = mp.fields.create('expirationDate', {
    placeholder: "MM/YYYY"
  }).mount('form-checkout__expirationDate-container');
 
  const securityCodeElement = mp.fields.create('securityCode', {
    placeholder: "CVV"  
  }).mount('form-checkout__securityCode-container');
```

### 5. Get data for your form

You must get the following data:

----[mla, mlb, mlu, mlc, mpe, mco]----
* [Document types](#bookmark_get_document_types) ------------
* [Card payment method](#bookmark_get_card_payment_method)
* [Issuer](#bookmark_obtain_issuer)
* [Number of installments](#bookmark_get_number_of_installments)

----[mla, mlb, mlu, mco, mlc, mpe]----

#### Get document types

Document type is one of the mandatory fields. Use the document list to fill out your data.

Including `select` type element with id `form-checkout__identificationType` contained in the form, you can automatically fill out the available choices when you call this function:

```javascript
// Step #getIdentificationTypes
 
// Helper function to append option elements to a select input
function createSelectOptions(elem, options, labelsAndKeys = { label : "name", value : "id"}){
  const {label, value} = labelsAndKeys;
 
  elem.options.length = 0;
 
  const tempOptions = document.createDocumentFragment();
 
  options.forEach( option => {
      const optValue = option[value];
      const optLabel = option[label];
 
      const opt = document.createElement('option');
      opt.value = optValue;
      opt.textContent = optLabel;
 
      tempOptions.appendChild(opt);
  });
 
  elem.appendChild(tempOptions);
}
 
// Get Identification Types
(async function getIdentificationTypes () {
  try {
      const identificationTypes = await mp.getIdentificationTypes();
      const identificationTypeElement = document.getElementById('form-checkout__identificationType');
 
      createSelectOptions(identificationTypeElement, identificationTypes)
  }catch(e) {
      return console.error('Error getting identificationTypes: ', e);
  }
})()
```

> Find more information in the [Document type section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/localization/identification-types).

------------

#### Get card payment method

Avoid mistakes and offer the correct available installments by validating your customers' data as they fill it out. Use the code in the following example to identify payment method with the first 8 digits of the card.

```javascript
function clearHTMLSelectChildrenFrom(element) {
    const currOptions = [...element.children];
    currOptions.forEach(child => child.remove());
}

// Step #getPaymentMethods
cardNumberElement.on('binChange', async (data) => {
    const { bin } = data;
    try {
      const paymentMethodElement = document.getElementById('paymentMethodId');
      const issuerElement = document.getElementById('form-checkout__issuer');
      const installmentsElement = document.getElementById('form-checkout__installments');

      if (!bin && paymentMethodElement.value) {
        clearHTMLSelectChildrenFrom(issuerElement)
        clearHTMLSelectChildrenFrom(installmentsElement)
        paymentMethodElement.value = "";
        return
      }
      
      if (bin && !paymentMethodElement.value) {
        const paymentMethods = await mp.getPaymentMethods({ bin });
        const { id: paymentMethodId, additional_info_needed, issuer } = paymentMethods.results[0];
        // Assign payment method ID to a hidden input.
        paymentMethodElement.value = paymentMethodId;
        // If 'issuer_id' is needed, we fetch all issuers (getIssuers()) from bin.
        // Otherwise we just create an option with the unique issuer and call getInstallments().
        additional_info_needed.includes('issuer_id') ? getIssuers(bin) : (() => {
          const issuerElement = document.getElementById('form-checkout__issuer');
          createSelectOptions(issuerElement, [issuer]);
          getInstallments(bin);
        })()
      }
    } catch (e) {
      console.error('error getting payment methods: ', e)
    }
  })
```

#### Obtain issuer

When completing the form, it is important to identify card's issuing bank to avoid conflicts between the different issuers and to be able to provide the correct payment options in installments.

Add the following code to obtain the `issuer_id`:

```javascript
// Step #getIssuers
const getIssuers = async (bin) => {
    try {
      const paymentMethodId = document.getElementById('paymentMethodId').value;
      const issuerElement = document.getElementById('form-checkout__issuer');
      const issuers = await mp.getIssuers({ paymentMethodId, bin });
      createSelectOptions(issuerElement, issuers);
      getInstallments(bin);
    } catch (e) {
      console.error('error getting issuers: ', e)
    }
  };
```

#### Get number of installments

The number of installments is also a mandatory field for credit card payments. You can use the function in the following example to fill out the _select_ type suggested field called `installments` and get the available installments.

```javascript
// Step #getInstallments
const getInstallments = async (bin) => {
    try {
      const installmentsElement = document.getElementById('form-checkout__installments')
      const installments = await mp.getInstallments({
        amount: document.getElementById('transactionAmount').value,
        bin,
        paymentTypeId: 'credit_card'
      });
      createSelectOptions(installmentsElement, installments[0].payer_costs, { label: 'recommended_message', value: 'installments' })
    } catch (e) {
      console.error('error getting installments: ', e)
    }
  }
```

From this point on, when entering a valid card number (eg 5031433215406351) in the `cardNumber` field, the `issuer` and `installments` fields should be completed automatically.

### 6. Create card token

Before submitting the payment, you must create a token containing all card information securely. You should generate it as follows:

```javascript
// Step #createCardToken
const formElement = document.getElementById('form-checkout');
  formElement.addEventListener('submit', e => createCardToken(e));
  const createCardToken = async (event) => {
    try {
      const tokenElement = document.getElementById('token');
      if (!tokenElement.value) {
        event.preventDefault();
        const token = await mp.fields.createCardToken({
          cardholderName: document.getElementById('form-checkout__cardholderName').value,----[mla, mlb, mlu, mlc, mpe, mco]----
          identificationType: document.getElementById('form-checkout__identificationType').value,------------
          identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
        });
        tokenElement.value = token.id;
        formElement.requestSubmit();
      }
    } catch (e) {
      console.error('error creating card token: ', e)
    }
  }
```

The `createCardToken` method will return a token with the secure card display.

We will take and save the response token ID in a hidden attribute called `token` and then send the form to your servers.


> WARNING
>
> Important
>
> Remember that the token is valid for 7 days and can be used only once.
