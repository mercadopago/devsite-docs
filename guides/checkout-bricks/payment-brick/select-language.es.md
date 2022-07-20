> CLIENT_SIDE
>
> h1
>
> Selecionar idioma

Puedes seleccionar el idioma del brick de dos maneras diferentes: al inicio o mediante SDK.

## Seleccionar idioma al inicio

Para seleccionar el idioma al iniciar el brick, inserta el siguiente código en tu proyecto prestando atención al parámetro `locale`, que debe completarse con el idioma definido siguiendo el siguiente patrón: `es`, `pt-BR` y `en` para español, portugués e inglés respectivamente.

```javascript
const settings = {
    ...,
    locale: 'en',
}
```

## Selecciona el idioma vía SDK

Para seleccionar el idioma vía SDK, inserta el siguiente código en tu proyecto y completa el parámetro `locale` con el idioma deseado siguiendo el patrón que se muestra en la siguiente tabla.

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
  locale: 'en-US',
})
```

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

> PREV_STEP_CARD_ES
>
> Modificar textos
>
> Aprende cómo cambiar los textos del diseño elegido en Card Payment Brick cuando lo requieras.
>
> [Modificar textos](/developers/es/docs/checkout-bricks/additional-customization/modify-texts)

> NEXT_STEP_CARD_ES
>
> Posibles errores
>
> Saber cuáles son los posibles errores que se muestran al integrador al instanciar el brick.
>
> [Posibles errores](/developers/es/docs/checkout-bricks/additional-content/possible-errors)