# Payment methods

The following table demonstrates the available payment method settings for each value prop:

| Value prop | Settings|
|---|---|
|`payment_methods` (default) e `payment_methods_logos`|Payment methods (Available balance and Credits will always be enabled, credit cards, debit cards and ticket) <br/><br/> - Credit card brands (Visa, Mastercard, American Express, Maestro, Naranja X, Cabal Cencosud, Cordobesa, Argencard, Diners, Tarjeta Shopping and CMR) <br/><br/> - Number of installments (2 to 12) <br/><br/> - Installments with or without interest <br/><br/> - Debit card brands (Visa, Mastercard, Maestro and Cabal) <br/><br/> - Ticket (Rapipago and Pago Fácil)|
|`installments`| - Credit card brands (Visa, Mastercard, American Express, Maestro, Naranja X, Cabal Cencosud, Cordobesa, Argencard, Diners, Tarjeta Shopping and CMR) <br/><br/> - Number of installments (2 to 12) <br/><br/> - Installments with or without interest |
|`security`|No settings for the pop-up|
|`credits`|No pop-up |

Customizations are passed to Brick through the object below, which must be sent as the third parameter in the `create()`` method.

[[[
```javascript
const settings = {
    customization: {
      paymentMethods: {
        excludedPaymentMethods: ["master"], // optional string[]. default []. options ["master", "visa", "amex", "naranja", "maestro", "cabal", "cencosud", "cordobesa", "argencard", "diners", "tarshop", "cmr", "rapipago", "pagofacil", "mercadopago"]
        excludedPaymentTypes: ["ticket"], // optional string[]. default []. options ["credit_card", "debit_card", "ticket", "account_money", "mercado_credito"]
        maxInstallments: 12, // optional number. min 2 max 12
        interestFreeInstallments: false, // optional boolean
     },
  },

};
```
```react-jsx
const customization = {
    paymentMethods: {
      excludedPaymentMethods: ["master"], // optional string[]. default []
      excludedPaymentTypes: ["ticket"], // optional string[]. default []
      maxInstallments: 12, // optional number. min 2 max 12
      interestFreeInstallments: false, // optional boolean
    },
};
```
]]]