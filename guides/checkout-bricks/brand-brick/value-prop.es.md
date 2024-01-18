# Propuesta de valor (value prop)

El contenido textual mostrado dentro del banner y del pop-up depende de la elección de una **_value prop_** (propuesta de valor).

Hay cuatro propuestas de valor disponibles para su uso, y cada una permite ciertas personalizaciones. La tabla a continuación muestra cómo cada propuesta de valor impacta en los mensajes mostrados en el banner:

| Value prop | Mensaje en el banner |
|---|---|
|`payment_methods` (por defecto)| Logo Mercado Pago + "Paga con [medio de pago] o tu dinero disponible en Mercado Pago. Saber más" (link para pop-up)|
|`payment_methods_logos`|Logos + "Medios de pago disponibles con Mercado Pago. Saber más" (link para pop-up)|
|`installments`|Logo Mercado Pago + "Hasta 12 cuotas sin interés con Mercado Pago. Saber más" (link para pop-up)|
|`security`|Logo Mercado Pago + "Paga de forma segura con Mercado Pago"|
|`credits`|Logo Mercado Pago + "Hasta 12 cuotas sin tarjeta con Mercado Pago. Saber más" (link para pop-up)|

Las personalizaciones se pasan a Brick a través del objeto siguiente, que debe enviarse como un tercer parámetro en el método `create()`.

[[[
```javascript
const settings = {
    customization: {
      text: {
        valueProp: "payment_methods", // optional "installments" | "payment_methods" | "security" | "payment_methods_logos"
      },
    },
  };
```
```react-jsx
const customization = {
   text: {
   valueProp: "payment_methods", // optional "installments" | "payment_methods" | "security" | "payment_methods_logos"
    },
};
```
]]]