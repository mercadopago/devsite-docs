> CLIENT_SIDE
>
> h1
>
> Select language

You can select the Brick language in two different ways: at the time of initialization of the Brick or via SDK.

> WARNING
>
> Attention
>
> It is only possible to modify the language of the Bricks that process payments directly on the site, such as the [Payment](/developers/en/docs/checkout-bricks/payment-brick/introduction) and [Card Payment](/developers/en/docs/checkout-bricks/card-payment-brick/introduction). In the case of the [Wallet Brick](developers/en/docs/checkout-bricks/wallet-brick/introduction), the user is redirected to the Mercado Pago payment environment, and since the interface is independent, it cannot be translated according to the specific settings defined for the store. In this case, it is only possible to change the language directly on the site.

## Select language while initializing

To select the language when starting the Brick, insert the code below into your project paying attention to the `locale` parameter, which must be filled in with the defined language following the following pattern: `es` , `pt-BR` and `en` for Spanish, Portuguese and English respectively.

[[[
```Javascript
const settings = {
    ...,
    locale: 'en',
}
```
```react-jsx
import { initMercadoPago } from '@mercadopago/sdk-react';
initMercadoPago('YOUR_PUBLIC_KEY', {locale: 'pt-BR'});
```
]]]

## Select language via SDK

To select the language via SDK, insert the code below into your project and fill the `locale` parameter with the desired language following the pattern shown in the following table.

[[[
```Javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
  locale: 'en-US',
})
```
```react-jsx
import { initMercadoPago } from '@mercadopago/sdk-react';
initMercadoPago('YOUR_PUBLIC_KEY', {locale: 'pt-BR'});
```
]]]

| Language | Country | Value |
|---|---|---|
| Spanish | Argentina | 'es-AR' |
| Spanish | Chile | 'es-CL' |
| Spanish | Colombia |  'es-CO' |
| Spanish | Mexico | ​​'es-MX' |
| Spanish | Venezuela | 'es-VE' |
| Spanish | Uruguay | 'es-UY' |
| Spanish | Peru | 'es-PE' |
| Portuguese | Brazil | 'pt-BR' |
| English | U.S | 'en-US' |