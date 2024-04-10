> CLIENT_SIDE
>
> h1
>
> Selecionar idioma

Puedes seleccionar el idioma del Brick de dos maneras diferentes: al inicio o mediante SDK.

----[mlm]----
> WARNING
>
> Atención
>
> Solo es posible modificar el idioma de los Bricks que operan directamente en tu tienda, como el [Payment](/developers/es/docs/checkout-bricks/payment-brick/introduction) y el [Card Payment](/developers/es/docs/checkout-bricks/card-payment-brick/introduction). <br>
> En el caso del Brick de [Wallet](developers/es/docs/checkout-bricks/wallet-brick/introduction) y del [Payment Brick de Cuenta de Mercado Pago y Financiamiento sin tarjeta,](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits) el usuario es redirigido al entorno de pago de Mercado Pago y, como la interfaz es independiente, no puede traducirse de acuerdo con las configuraciones específicas definidas para la tienda.

------------
----[mla, mlb]----
> WARNING
>
> Atención
>
> Solo es posible modificar el idioma de los Bricks que operan directamente en tu tienda, como el [Payment](/developers/es/docs/checkout-bricks/payment-brick/introduction) y el [Card Payment](/developers/es/docs/checkout-bricks/card-payment-brick/introduction). <br>
> En el caso del Brick de [Wallet](developers/es/docs/checkout-bricks/wallet-brick/introduction) y del [Payment Brick de Cuenta de Mercado Pago y Financiación sin tarjeta,](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits) el usuario es redirigido al entorno de pago de Mercado Pago y, como la interfaz es independiente, no puede traducirse de acuerdo con las configuraciones específicas definidas para la tienda.

------------
----[mlc, mlu, mco, mpe]----
> WARNING
>
> Atención
>
> Solo es posible modificar el idioma de los Bricks que operan directamente en tu tienda, como el [Payment](/developers/es/docs/checkout-bricks/payment-brick/introduction) y el [Card Payment](/developers/es/docs/checkout-bricks/card-payment-brick/introduction). <br>
> En el caso del Brick de [Wallet](developers/es/docs/checkout-bricks/wallet-brick/introduction) y del [Payment Brick de Cuenta de Mercado Pag,](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet) el usuario es redirigido al entorno de pago de Mercado Pago y, como la interfaz es independiente, no puede traducirse de acuerdo con las configuraciones específicas definidas para la tienda.

------------

## Seleccionar idioma al inicio

Para seleccionar el idioma al iniciar el Brick, inserta el siguiente código en tu proyecto prestando atención al parámetro `locale`, que debe completarse con el idioma definido siguiendo el siguiente patrón: `es`, `pt-BR` y `en` para español, portugués e inglés respectivamente.

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

## Selecciona el idioma vía SDK

Para seleccionar el idioma vía SDK, inserta el siguiente código en tu proyecto y completa el parámetro `locale` con el idioma deseado siguiendo el patrón que se muestra en la siguiente tabla.

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

| Idioma  | País  | Valor  |
| --- | --- | --- |
| Español  | Argentina  | 'es-AR'  |
| Español  | Chile  | 'es-CL'  |
| Español  | Colombia  | 'es-CO'  |
| Español  | México  | ​​'es-MX'  |
| Español  | Venezuela  | 'es-VE'  |
| Español  | Uruguay  | 'es-UY'  |
| Español  | Peru  | 'es-PE'  |
| Portugués  | Brasil  | 'pt-BR'  |
| Inglés  | Estados Unidos  | 'en-US'  |