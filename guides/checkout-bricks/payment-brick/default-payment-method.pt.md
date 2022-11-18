# Meio de pagamento padrão

É possível inicializar o Payment Brick com uma opção de pagamento já aberta. Para configurar um meio de pagamento padrão, utilize a configuração abaixo.

```javascript
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

> WARNING
> 
> Atenção
> 
> Não é possível habilitar mais de um meio de pagamento padrão, então utilize apenas uma propriedade dentro do objeto `defaultPaymentOption`.

----[mlb]----
![default-payment-option-mlb](checkout-bricks/default-payment-option-mlb-pt.png)

------------
----[mla]----
![default-payment-option-mla](checkout-bricks/default-payment-option-mla-pt.png)

------------
----[mlc]----
![default-payment-option-mlc](checkout-bricks/default-payment-option-mlc-pt.png)

------------
----[mlm]----
![default-payment-option-mlm](checkout-bricks/default-payment-option-mlm-pt.png)

------------
----[mlu]----
![default-payment-option-mlu](checkout-bricks/default-payment-option-mlu-pt.png)

------------
----[mpe, mco]----
![default-payment-option-all](checkout-bricks/default-payment-option-all-pt.png)

------------