# Value prop

The textual content displayed within the banner and pop-up depends on the choice of a **value prop**.

There are four available value propositions for use, and each one enables specific customizations. The table below shows how each value proposition impacts the messages displayed in the banner:

| Value prop | Message on the banner|
|---|---|
|`payment_methods` (default)| Logo Mercado Pago + "Pay by [payment method] or with your account money on Mercado Pago. Learn more" (link para pop-up)|
|`payment_methods_logos`|Logos + "Available payment methods with Mercado Pago. Learn more" (link para pop-up)|
|`installments`|Logo Mercado Pago + "Up to 12 interest-free installments with Mercado Pago. Learn more" (link para pop-up)|
|`security`|Logo Mercado Pago + "Pay safely with Mercado Pago"|
|`credits`|Logo Mercado Pago + "Up to 12 installments without cards through Mercado Pago. Learn more" (link para pop-up)|

Customizations are passed to Brick through the object below, which must be sent as a third parameter in the `create()` method.

[[[
```javascript
const settings = {
    customization: {
      text: {
        valueProp: "payment_methods", // optional "installments" | "payment_methods" | "security" | "payment_methods_icons"
      },
    },
  };
```
```react-jsx
const customization = {
   text: {
   valueProp: "payment_methods", // optional "installments" | "payment_methods" | "security" | "payment_methods_icons"
    },
};
```
]]]