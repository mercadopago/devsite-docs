# How to migrate from SDK JS V1 to SDK JS V2 with Secure Fields

Mercado Pago launched _Secure Fields_, a new security feature to process card payments that is only available in the most current version of the JS SDK and has several benefits such as:

- Simpler implementation
- Greater security for your store
- Ease of obtaining PCI SAQ A certification

In this article we will explain the necessary settings for the migration from **using JavaScript SDK in Version 1** to **using JavaScript SDK in Version 2 with Secure Fields**.

Below we show the main differences between the migration steps.

* We changed the way to instantiate Mercado Pago;
* We will no longer use the callback functions of each method, but their return to work with the data;
* The names of some methods have also undergone some minor changes and these have become clearer in the comparison snippets.

> WARNING
>
> Attention
>
> The migration will not affect your backend in any way, the modifications are entirely on the frontend of the application.

See below for a comparison of the diagrams.

* **V1 sequence diagram**

![java-v1](/images/sdk/sdk-java-v1-en.png)

* **V2 sequence diagram**

![java-v2](/images/sdk/sdk-java-v2-en.png)

## Changing the script import

The name of the JS file on the CDN has been changed and it will be necessary to modify the script import in the HTML.

* **V1**

```html
<script
   src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
`````

* **V2**

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
`````

## Mercado Pago Instance

As mentioned earlier, the instantiation of Mercado Pago has also changed.

* **V1**

```javascript
 
   window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
````

* **V2**

```javascript
 
   const mp = new MercadoPago("YOUR_PUBLIC_KEY");
````

## Creating PCI fields

With Secure Fields, the way the `card number`, `expiration date` and `security code` fields are implemented has changed a bit. With this new proposal much safer, it is not necessary to create input tags for these fields in your HTML, now we will only have to create the `divs` where the inputs will be rendered and let Mercado Pago send iframes for the fields, as in the examples below.

* **The expiration date in V1**

```html
<div>
  <input type="text" placeholder="MM" id="cardExpirationMonth" data-checkout="cardExpirationMonth">
  <span class="date-separator">/</span>
  <input type="text" placeholder="YY" id="cardExpirationYear" data-checkout="cardExpirationYear">
</div>
`````

* **Card number in V1**

```html
<input type="text" id="cardNumber" data-checkout="cardNumber" />
`````

* **Security code in V1**

```html
<input id="securityCode" data-checkout="securityCode" type="text" />
`````

Now, with just the `divs` and the corresponding `IDs`, it will look like this:

* **The expiration date on the V2**

```html
<div id="expirationDate"></div>
`````

* **Card number in V2**

```html
<div id="cardNumber"></div>
`````

* **Security code on V2**

```html
<div id="securityCode"> </div>
`````

And in addition to the `divs`, in the case of Secure Fields we will need to inform the MPs where it should mount the inputs. Using the `divs` above as an example, the script will look like this:

```javascript

  const cardNumberElement = mp.fields.create('cardNumber', {
  placeholder: "Card Number"
}).mount('cardNumber');

const expirationDateElement = mp.fields.create('expirationDate', {
  placeholder: "MM/YY",
}).mount('expirationDate');

const securityCodeElement = mp.fields.create('securityCode', {
  placeholder: "Security Code"
}).mount('securityCode');
````

With that, we now have our secure PCI fields inside the form.

## Get document types

Now `getIdentificationTypes` returns a promise and the way to populate the select tag has changed.

In the case of **SDK V1**, the select tag was automatically populated in the select with `id='docType'`, after the `getIdentificationTypes()` call.

* **V1**

```html
<body
   <select id="docType" name="docType" data-checkout="docType" type="text"></select>
</body>
`````

```javascript
 window.Mercadopago.getIdentificationTypes();
````

In **V2** the method call returns a promise with a list of `identificationTypes` and you should populate the select tag with the ID you want, using the previous example with `id='docType'`, the implementation would look like this:

> Knowing that the `getIdentificationTypes` method is a return a promise and it should be executed right after rendering, one option is to use a [IIFE,](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) as in the example below.

```javascript
 (async function getIdentificationTypes() {
      try {
        const identificationTypes = await mp.getIdentificationTypes();

        const identificationTypeElement = document.getElementById('docType');

        createSelectOptions(identificationTypeElement, identificationTypes);

      } catch (e) {
        return console.error('Error getting identificationTypes: ', e);
      }
})();

function createSelectOptions(elem, options, labelsAndKeys = { label: "name", value: "id" }) {

      const { label, value } = labelsAndKeys;

      heem.options.length = 0;

      const tempOptions = document.createDocumentFragment();

      options.forEach(option => {
        const optValue = option[value];
        const optLabel = option[label];

        const opt ​​= document.createElement('option');
        opt.value = optValue;
        opt.textContent = optLabel;

        tempOptions.appendChild(opt);
      });

      elem.appendChild(tempOptions);
}
````

## Get card payment method

Now `getPaymentMethod` is `getPaymentMethods` (plural). Still in V1 this method received two parameters, an object containing the `bin` (first 6 digits of the card still in V1) and a callback function that would be executed in the return of the method.

* **V1**

```javascript
window.Mercadopago.getPaymentMethod({
    "bin": bin
}, callbackFn);
````

```javascript
document.getElementById('cardNumber').addEventListener('change', guessPaymentMethod);
````

> NOTE
>
> Important
>
> The `bin` code in V2 is not just 6 digits, but 8 digits and this change does not interfere with the implementation at all. Also, the code is no longer accessible through the `cardNumber` component because now there is no longer an input in the field but a `div` and, inside the `div`, there is an iframe. <br/><br/>
> <br/> <br/>
> Now, to retrieve the bin we must listen the `binChange` event that exists in the div where the **card number** is contained.

* **V2**

```javascript
cardNumberElement.on('binChange', guessPaymentMethod);
````

The function that will be executed in the `binChange` event will receive an object containing the `bin` as a parameter. In V2, this `getPaymentMethods` is a **promise** that only receives an object containing the `bin` as a parameter and returns an object containing an array of **payment methods** when the promise resolves.

```javascript
async function getPaymentMethods(data) {
    const { bin } = date
    const { results } = await mp.getPaymentMethods({ bin });
        // The payment id will be in results[0].id
    …
}
````

## Get issuing bank

Previously, `getIssuers` received two parameters, the `paymentMethodId` and a callback function that was executed when the method returned.

* **V1**

```javascript
window.Mercadopago.getIssuers(
    paymentMethodId, callBackFn
);

function callBackFn(status, response) {
    if (status == 200) {
        response.forEach( issuer => {
           ...
        });
    }
}
````

In V2 this corresponding method is a promise that takes an object containing `bin` and the `paymentMethodId` as parameters, returning the _issuers_ when the promise is resolved.

* **V2**

```javascript
async function getIssuers(paymentMethodId, bin) {
    const issuears = await mp.getIssuers({paymentMethodId, bin });
    ...
};
````

## Get number of installments

Previously, `getInstallments` received two parameters, an object containing the `payment_method_id`, the `amount` and the `issuer_id`, and the other parameter was a callback function that was executed on the method return.

* **V1**

```javascript
window.Mercadopago.getInstallments({
       "payment_method_id": paymentMethodId,
       "amount": parseFloat(transactionAmount),
       "issuer_id": parseInt(issuerId)
   }, callbackFn
);

function callBackFn(status, response) {
   if (status == 200) {
      response[0].payer_costs.forEach( payerCost => {
        ...
       });
   }
}
````

In V2 this method is a promise and receives an object as a parameter containing the `amount`, the `bin` and the `paymentTypeId` where the `paymentTypeId` must always receive the value `credit_card`.

* **V2**

```javascript
async function getInstallments(paymentMethodId, bin) {
    const installments = await mp.getInstallments({
        amount: document.getElementById('transactionAmount').value,
        bin,
        paymentTypeId: 'credit_card'
    });
    ...
};
````

## Create card token

Finally, in the form's submit, the token is generated and sent to the backend and this continues to work partially the same, just a few changes to the invocations and the names of the methods.

The token creation method also had a name change, in V1 it was `createToken` and in V2 it is `createCardToken`.

In V1, the `createToken` method received two parameters, the form, and the callback function that is executed at the end of the token creation.

* **V1**

```javascript
window.Mercadopago.createToken($form, setCardTokenAndPay);
````

In V2, the method receives an object containing the `cardholderName`, `identificationType` and `identificationNumber`, and this method returns a promise with the token.

* **V2**

```javascript
async function createCardToken(){
    const token = await mp.fields.createCardToken({
        cardholderName,
        identificationType,
        identificationNumber,
    });
    ...
}
````

## Send payment

Now with the token in hand, just add the token to the form and submit it, as explained in the documentation of [Integration via Core Methods](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-core-methods#bookmark_send_payment).

Implementation example:

```javascript
doSubmit = false;
document.getElementById('paymentForm').addEventListener('submit', getCardToken);

async function getCardToken(event) {
    event.preventDefault();
    if (!doSubmit) {
        let $form = document.getElementById('paymentForm');
        const token = await mp.fields.createCardToken({
            cardholderName: document.getElementById('cardholderName').value,
            identificationType: document.getElementById('docType').value,
            identificationNumber: document.getElementById('docNumber').value,
        })
        setCardTokenAndPay(token.id)
    }
};

function setCardTokenAndPay(token) {
    let form = document.getElementById('paymentForm');
    let card = document.createElement('input');
    card.setAttribute('name', 'token');
    card.setAttribute('type', 'hidden');
    card.setAttribute('value', token);
    form.appendChild(card);
    doSubmit = true;
    form.submit();
};
````

> NOTE
>
> Important
>
> For more information, go to [Documentation for JS SDK V2 with Secure Fields.](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-core-methods) In addition, we provide a [complete example](https://github.com/lucmkz/mp-migracao-sdk-v1-para-sdk-v2-sf/blob/main/migracao.html) migration in source code with comments you can use as model.

## Other alternatives

There are two other implementation alternatives that do not include **core methods**, which were the methods discussed in this article, and both alternatives are as safe as using core methods. See below for these alternatives.

### Cardform

The integration of card payments is done via **cardform**. In this integration mode, **MercadoPago.js** is responsible for the flows necessary to obtain the information required to create a payment. When initialized, a search is performed to collect the types of documents available for the country in question. Check out [Checkout API](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) documentation for more information.


### Checkout Bricks

Checkout Bricks is a set of UI modules that come front-end ready and are optimized for better usability and conversion. Each Brick can be used independently or together, forming a complete checkout experience. Check out [Checkout Bricks](/developers/en/docs/checkout-bricks/landing) documentation for more information.