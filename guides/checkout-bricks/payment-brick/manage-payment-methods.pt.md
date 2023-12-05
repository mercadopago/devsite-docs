# Gerenciar meios de pagamento

O Payment Brick permite a integração com múltiplos meios de pagamento e, para isso, ajuste nas customizações do Brick os meios de pagamento aceitos. 

> Para não incluir o meio de pagamento de um determinado tipo, remova-o do objeto de `paymentMethods`.

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

A tabela abaixo mostra os métodos de pagamento disponíveis:

> Todos os tipos de meios de pagamento aceitam a opção `all`, assim todas as opções disponíveis para aquele tipo serão ativadas.

----[mlb]----

| paymentMethods | Tipo | Valores possíveis |
|--- |--- | --- |
| creditCard | string | Para obter os valores de cartões de crédito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| debitCard | string | Para obter os valores de cartões de débito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| mercadoPago |  string | ['onboarding_credits',  'wallet_purchase'] |
| ticket |  string | ['bolbradesco', 'pec'] |
| bankTransfer |  string | ['pix'] |

------------
----[mla]---- 

| paymentMethods | Tipo | Valores possíveis |
|--- |--- | --- |
| creditCard |  string | Para obter os valores de cartões de crédito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| debitCard |  string | Para obter os valores de cartões de débito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| mercadoPago |  string |['onboarding_credits',  'wallet_purchase'] |
| ticket |  string | ['pagofacil', 'rapipago'] |

------------
----[mlm]---- 

| paymentMethods | Tipo | Valores possíveis |
|--- |--- | --- |
| creditCard |  string | Para obter os valores de cartões de crédito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| debitCard |  string | Para obter os valores de cartões de débito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| mercadoPago |  strinh | ['onboarding_credits',  'wallet_purchase'] |
| ticket |  string | ['paycash', 'oxxo'] |
| atm |  string | ['banamex',  'bancomer'] |

------------
----[mco]---- 

| paymentMethods | Tipo | Valores possíveis |
|--- |--- | --- |
| creditCard |  string[] | Para obter os valores de cartões de crédito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| debitCard |  string[] | Para obter os valores de cartões de débito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| mercadoPago |  string[] | ['wallet_purchase'] |
| ticket |  string[] | ['efecty'] |
| bankTransfer |  string[] | ['pse'] |

------------
----[mlu]---- 

| paymentMethods | Tipo | Valores possíveis |
|--- |--- | --- |
| creditCard |  string[] | Para obter os valores de cartões de crédito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| debitCard |  string[] |  Para obter os valores de cartões de débito disponíveis, consulte a API[Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| mercadoPago |  string[] | ['wallet_purchase'] |
| ticket |  string[] | ['redpagos', 'abitab'] |

------------
----[mpe]---- 

| paymentMethods | Tipo | Valores possíveis |
|--- |--- | --- |
| creditCard |  string[] | Para obter os valores de cartões de crédito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| debitCard |  string[] |  Para obter os valores de cartões de débito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| mercadoPago |  string[] | ['wallet_purchase'] |
| atm |  string[] | ['pagoefectivo_atm'] |

------------
----[mlc]---- 

| paymentMethods |  Tipo | Valores possíveis |
|--- |--- | --- |
| creditCard |  string |  Para obter os valores de cartões de crédito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| debitCard |  string |  Para obter os valores de cartões de débito disponíveis, consulte a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). |
| mercadoPago |  string | ['wallet_purchase'] |

------------