# Meios de pagamento

A seguinte tabela demonstra quais são as configurações de meios de pagamento disponíveis para cada _value prop_:

| Value prop | Mensagem no banner |
|---|---|
|`payment_methods` (padrão) e `payment_methods_logos`| - Meios de pagamento (Saldo disponível e Credits sempre estarão ativados, cartões de créditos, débito e ticket) <br/><br/> - Bandeiras de cartão de crédito (Visa, Mastercard, American Express, Maestro, Naranja X, Cabal Cencosud, Cordobesa, Argencard, Diners, Tarjeta Shopping e CMR) <br/><br/> - Quantidade de parcelas (2 à 12) <br/><br/> - Parcelas com ou sem acréscimos <br/><br/> - Bandeiras de cartão de débito (Visa, Mastercard, Maestro e Cabal) <br/><br/> - Ticket (Rapipago e Pago Fácil)|
|`installments`| - Bandeiras de cartão de crédito (Visa, Mastercard, American Express, Maestro, Naranja X, Cabal Cencosud, Cordobesa, Argencard, Diners, Tarejeta Shopping e CMR) <br/><br/> - Quantidade de parcelas (2 à 12) <br/><br/> - Parcelas com ou sem acréscimos|
|`security`|Não tem configurações para o pop-up.|
|`credits`|Não tem pop-up.|

As customizações são passadas para o Brick através do objeto abaixo, que deve ser enviado como terceiro parâmetro no método `create()`.

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