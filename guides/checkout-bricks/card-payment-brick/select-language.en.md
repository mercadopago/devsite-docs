> CLIENT_SIDE
>
> h1
>
> Select language

You can select the brick language in two different ways: at the time of initialization of the brick or via SDK.

## Select language while initializing

To select the language when starting the brick, insert the code below into your project paying attention to the `locale` parameter, which must be filled in with the defined language following the following pattern: `es` , `pt-BR` and `en` for Spanish, Portuguese and English respectively.

```javascript
const settings = {
    ...,
    locale: 'en',
}
```

## Select language via SDK

To select the language via SDK, insert the code below into your project and fill the `locale` parameter with the desired language following the pattern shown in the following table.

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
  locale: 'en-US',
})
```

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

> PREV_STEP_CARD_EN
>
> Edit text
>
> You can also edit the text of the selected Card Payment Brick's layout.
>
> [Edit text](/developers/en/docs/checkout-bricks/additional-customization/modify-texts)

> NEXT_STEP_CARD_EN
>
> Possible errors
>
> Know what are the possible errors shown to the integrator when instantiating the Brick.
>
> [Possible errors](/developers/en/docs/checkout-bricks/additional-content/possible-errors)