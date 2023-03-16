# Administrar medios de pago

Payment Brick permite la integración con múltiples medios de pago y, para eso, ajusta los medios de pago aceptados en las personalizaciones de Brick. 

> Para no incluir el medios de pago de un determinado tipo, elimínelo del objeto `paymentMethods`.

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

La siguiente tabla muestra los medios de pago disponibles:

> Todos los tipos de medios de pago aceptan la opción `todos`, por lo que se activarán todas las opciones disponibles para ese tipo.

----[mlb]----

| paymentMethods | Valores posibles |
|--- |--- |
| creditCard | string[] <br><br> Para conocer los montos de tarjetas de crédito disponibles, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get).|
| debitCard | string[] <br><br> Para conocer los montos de tarjetas de débito disponibles, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['onboarding_credits',  'wallet_purchase'] |
| ticket | ['bolbradesco', 'pec'] |
| bankTransfer | ['pix'] |

------------
----[mla]---- 

| paymentMethods | Valores posibles |
|--- |--- |
| creditCard | string[] <br><br> Para conocer los montos de tarjetas de crédito disponibles, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get).|
| debitCard | string[] <br><br> Para conocer los montos de tarjetas de débito disponibles, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['onboarding_credits',  'wallet_purchase'] |
| ticket | ['pagofacil', 'rapipago'] |

------------
----[mlm]---- 

| paymentMethods | Valores posibles |
|--- |--- |
| creditCard | string[] <br><br> Para conocer los montos de tarjetas de crédito disponibles, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get).|
| debitCard | string[] <br><br> Para conocer los montos de tarjetas de débito disponibles, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['onboarding_credits',  'wallet_purchase'] |
| ticket | ['paycash', 'oxxo'] |
| atm | ['banamex',  'bancomer'] |

------------
----[mco]---- 

| paymentMethods | Valores posibles |
|--- |--- |
| creditCard | string[] <br><br> Para conocer los montos de tarjetas de crédito disponibles, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get).|
| debitCard | string[] <br><br> Para conocer los montos de tarjetas de débito disponibles, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['wallet_purchase'] |
| ticket | ['redpagos', 'abitab'] |

------------
----[mlu]---- 

| paymentMethods | Valores posibles |
|--- |--- |
| creditCard | string[] <br><br> Para conocer los montos de tarjetas de crédito disponibles, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get).|
| debitCard | string[] <br><br> Para conocer los montos de tarjetas de débito disponibles, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['wallet_purchase'] |
| ticket | ['efecty'] |

------------
----[mlc, mpe]---- 

| paymentMethods | Valores posibles |
|--- |--- |
| creditCard | string[] <br><br> Para conocer los montos de tarjetas de crédito disponibles, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get).|
| debitCard | string[] <br><br> Para conocer los montos de tarjetas de débito disponibles, consulte la API [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['wallet_purchase'] |

------------