# Manage payment methods

Payment Brick allows integration with multiple payment methods. To do so, adjust the accepted payment methods in Brick's customizations. To not include the payment method of a certain type, remove it from the `paymentMethods` object.

```Javascript
const settings = {
 ...,
 customization: {
   paymentMethods: {
     ...,
     creditCard: "all",
   },
 },
```

```react-jsx
const customization = {
 paymentMethods: {
   ...,
   creditCard: 'all'
 }
};
```

The table below shows the available payment methods:

> All types of payment methods accept the `all` option, so all options available for that type will be activated.

----[mlb]----

| paymentMethods | Possible values |
|--- |--- |
| creditCard | string[] <br><br> To obtain available debit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| debitCard | string[] <br><br> To obtain available credit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['onboarding_credits',  'wallet_purchase'] |
| ticket | ['bolbradesco', 'pec'] |
| bankTransfer | ['pix'] |

------------
----[mla]---- 

| paymentMethods | Possible values |
|--- |--- |
| creditCard | string[] <br><br> To obtain available debit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| debitCard | string[] <br><br> To obtain available credit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['onboarding_credits',  'wallet_purchase'] |
| ticket | ['pagofacil', 'rapipago'] |

------------
----[mlm]---- 

| paymentMethods | Possible values |
|--- |--- |
| creditCard | string[] <br><br> To obtain available debit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| debitCard | string[] <br><br> To obtain available credit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['onboarding_credits',  'wallet_purchase'] |
| ticket | ['paycash', 'oxxo'] |
| atm | ['banamex',  'bancomer'] |

------------
----[mco]---- 

| paymentMethods | Possible values |
|--- |--- |
| creditCard | string[] <br><br> To obtain available debit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| debitCard | string[] <br><br> To obtain available credit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['wallet_purchase'] |
| ticket | ['redpagos', 'abitab'] |

------------
----[mlu]---- 

| paymentMethods | Possible values |
|--- |--- |
| creditCard | string[] <br><br> To obtain available debit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| debitCard | string[] <br><br> To obtain available credit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['wallet_purchase'] |
| ticket | ['efecty'] |

------------

----[mlc, mpe]---- 

| paymentMethods | Possible values |
|--- |--- |
| creditCard | string[] <br><br> To obtain available debit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| debitCard | string[] <br><br> To obtain available credit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['wallet_purchase'] |

------------