# Gerenciar meios de pagamento

O Payment Brick permite a integração com múltiplos meios de pagamento. Ppara isso, ajuste nas customizações do Brick os meios de pagamento aceitos. Para não incluir o meio de pagamento de um determinado tipo, remova-o do objeto de `paymentMethods`.

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

A tabela abaixo mostra os métodos de pagamento disponíveis:

> Todos os tipos de meios de pagamento aceitam a opção `all`, assim todas as opções disponíveis para aquele tipo serão ativadas.

----[mlb]----

| paymentMethods | Valores possíveis |
|--- |--- |
| creditCard | string[] <br><br> Para obter os valores de cartões de crédito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| debitCard | string[] <br><br> Para obter os valores de cartões de débito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['onboarding_credits',  'wallet_purchase'] |
| ticket | ['bolbradesco', 'pec'] |
| bankTransfer | ['pix'] |

------------
----[mla]---- 

| paymentMethods | Valores possíveis |
|--- |--- |
| creditCard | string[] <br><br> Para obter os valores de cartões de crédito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| debitCard | string[] <br><br> Para obter os valores de cartões de débito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['onboarding_credits',  'wallet_purchase'] |
| ticket | ['pagofacil', 'rapipago'] |

------------
----[mlm]---- 

| paymentMethods | Valores possíveis |
|--- |--- |
| creditCard | string[] <br><br> Para obter os valores de cartões de crédito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| debitCard | string[] <br><br> Para obter os valores de cartões de débito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['onboarding_credits',  'wallet_purchase'] |
| ticket | ['paycash', 'oxxo'] |
| atm | ['banamex',  'bancomer'] |

------------
----[mco]---- 

| paymentMethods | Valores possíveis |
|--- |--- |
| creditCard | string[] <br><br> Para obter os valores de cartões de crédito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| debitCard | string[] <br><br> Para obter os valores de cartões de débito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['wallet_purchase'] |
| ticket | ['redpagos', 'abitab'] |

------------
----[mlu]---- 

| paymentMethods | Valores possíveis |
|--- |--- |
| creditCard | string[] <br><br> Para obter os valores de cartões de crédito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| debitCard | string[] <br><br> Para obter os valores de cartões de débito disponíveis, consulte a API[Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['wallet_purchase'] |
| ticket | ['efecty'] |

------------
----[mlc, mpe]---- 

| paymentMethods | Valores possíveis |
|--- |--- |
| creditCard | string[] <br><br> Para obter os valores de cartões de crédito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| debitCard | string[] <br><br> Para obter os valores de cartões de débito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| mercadoPago | ['wallet_purchase'] |

------------