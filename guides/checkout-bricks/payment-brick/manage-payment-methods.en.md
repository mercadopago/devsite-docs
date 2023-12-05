# Manage payment methods

Payment Brick allows integration with multiple payment methods and, to do so, adjust the accepted payment methods in Brick's customizations. 

> To not include the payment method of a certain type, remove it from the `paymentMethods` object.

[[[
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
]]]

The table below shows the available payment methods:

> All types of payment methods accept the `all` option, so all options available for that type will be activated.

----[mlb]----

| paymentMethods | Type | Possible values |
|--- |--- | --- |
| creditCard | string | To obtain available debit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| debitCard | string | To obtain available credit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| mercadoPago | string | ['onboarding_credits',  'wallet_purchase'] |
| ticket | string | ['bolbradesco', 'pec'] |
| bankTransfer | string | ['pix'] |

------------
----[mla]---- 

| paymentMethods | Type | Possible values |
|--- |--- | --- |
| creditCard | string | To obtain available debit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| debitCard | string | To obtain available credit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| mercadoPago | string | ['onboarding_credits',  'wallet_purchase'] |
| ticket | string | ['pagofacil', 'rapipago'] |

------------
----[mlm]---- 

| paymentMethods | Type | Possible values |
| --- | --- | --- |
| creditCard | string | To obtain available debit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| debitCard | string | To obtain available credit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| mercadoPago | string | ['onboarding_credits',  'wallet_purchase'] |
| ticket | string | ['paycash', 'oxxo'] |
| atm | string | ['banamex',  'bancomer'] |

------------
----[mco]---- 

| paymentMethods | Type | Possible values |
| --- | --- | --- |
| creditCard | string | To obtain available debit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| debitCard | string | To obtain available credit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| mercadoPago | string | ['wallet_purchase'] |
| ticket | string | ['efecty'] |
| bankTransfer |  string | ['pse'] |

------------
----[mlu]---- 

| paymentMethods | Type | Possible values |
| --- | --- | --- |
| creditCard | string | To obtain available debit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| debitCard | string | To obtain available credit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| mercadoPago | string | ['wallet_purchase'] |
| ticket | string | ['redpagos', 'abitab'] |

------------
----[mpe]---- 

| paymentMethods | Type |Possible values |
| --- | --- | --- |
| creditCard | string | To obtain available debit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| debitCard | string | To obtain available credit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| mercadoPago | string | ['wallet_purchase'] |
| atm | string | ['pagoefectivo_atm'] |

------------
----[mlc]---- 

| paymentMethods | Type | Possible values |
| --- | --- | --- |
| creditCard | string | To obtain available debit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| debitCard | string | To obtain available credit card amounts, check out the API [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get). |
| mercadoPago | string | ['wallet_purchase'] |

------------