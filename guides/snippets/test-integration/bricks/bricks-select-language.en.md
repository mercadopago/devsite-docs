> CLIENT_SIDE
>
> h1
>
> Select language

You can select the Brick language in two different ways: at the time of initialization of the Brick or via SDK.

## Select language while initializing

To select the language when starting the Brick, insert the code below into your project paying attention to the `locale` parameter, which must be filled in with the defined language following the following pattern: `es` , `pt-BR` and `en` for Spanish, Portuguese and English respectively.

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