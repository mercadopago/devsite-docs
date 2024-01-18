# Medios de pago

La tabla a continuación muestra cuáles son las configuraciones de los medios de pago disponibles para cada _value prop_:

| Value prop | Configuraciones |
|---|---|
|`payment_methods` (por defecto) e `payment_methods_logos`| - Métodos de pago (Saldo disponible y Credits siempre estarán habilitados, tarjetas de crédito, débito y ticket) <br/><br/> - Marcas de tarjetas de crédito (Visa, Mastercard, American Express, Maestro, Naranja X, Cabal Cencosud, Cordobesa, Argencard, Diners, Tarjeta Shopping y CMR) <br/><br/> - Cantidad de cuotas (2 a 12) <br/><br/> - Cuotas con o sin interés <br/><br/> - Marcas de tarjetas de débito (Visa, Mastercard, Maestro y Cabal) <br/><br/> - Ticket (Rapipago y Pago Fácil) |
|`installments`| - Marcas de tarjetas de crédito (Visa, Mastercard, American Express, Maestro, Naranja X, Cabal Cencosud, Cordobesa, Argencard, Diners, Tarjeta Shopping y CMR) <br/><br/> - Cantidad de cuotas (2 a 12) <br/><br/> - Cuotas con o sin interés |
|`security`|No tiene configuraciones para el pop-up. |
|`credits`| No hay pop-up.|

Las personalizaciones se transfieren a Brick a través del siguiente objeto, que debe enviarse como tercer parámetro en el método `create()`.

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