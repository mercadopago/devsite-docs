# Default payment method

It is possible to initialize Payment Brick with a payment option already open. To configure a default payment method, use the configuration below.

```Javascript
settings = {
 ...,
 customization: {
   ...,
   visual: {
     ...,
     defaultPaymentOption: {
       walletForm: true,
       // creditCardForm: true,
       // debitCardForm: true,
       // savedCardForm: 'card id sent in the initialization',
       // ticketForm: true,
       // bankTransferForm: true,
     },
   },
 }
}
```

```react-jsx
const customization = {
 visual: {
   defaultPaymentOption: {
     walletForm: true,
     // creditCardForm: true,
     // debitCardForm: true,
     // savedCardForm: 'card id sent in the initialization',
     // ticketForm: true,
     // bankTransferForm: true,
   },
 }
};
```

> WARNING
> 
> Attention
> 
> It is not possible to enable more than one default payment method, so use only one property inside the `defaultPaymentOption` object.

----[mlb]----
![default-payment-option-mlb](checkout-bricks/default-payment-option-mlb-en.png)

------------
----[mla]----
![default-payment-option-mla](checkout-bricks/default-payment-option-mla-en.png)

------------
----[mlc]----
![default-payment-option-mlc](checkout-bricks/default-payment-option-mlc-en.png)

------------
----[mlm]----
![default-payment-option-mlm](checkout-bricks/default-payment-option-mlm-en.png)

------------
----[mlu]----
![default-payment-option-mlu](checkout-bricks/default-payment-option-mlu-en.png)

------------
----[mpe, mco]----
![default-payment-option-all](checkout-bricks/default-payment-option-all-en.png)

------------