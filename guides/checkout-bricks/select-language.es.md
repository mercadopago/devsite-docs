## Selecionar idioma

Puedes seleccionar el idioma del brick de dos maneras diferentes: al inicio o mediante SDK.


### Seleccionar idioma al inicio

Para seleccionar el idioma al iniciar el brick, inserta el siguiente código en tu proyecto prestando atención al parámetro `locale`, que debe completarse con el idioma definido siguiendo el siguiente patrón: `es`, `pt-BR` y ` en ` para español, portugués e inglés respectivamente.

[[[
```javascript
const settings = {
    initialization: {
        amount,
    },
    callbacks: {
        onSubmit: (data) => {
            // callback llamado cuando el usuario haga clic en el botón enviar los datos
        },
        onReady: (error) => {
            // callback llamado cuando Brick esté listo
        },
        onError: (error) => {
            // callback llamado para todos los casos de error de Brick
        },
    },
    locale: language,
}
const bricks = mp.bricks();
const cardPayment = await bricks.create('cardPayment', settings);
```
]]]


### Selecciona el idioma vía SDK

Para seleccionar el idioma vía SDK, inserta el siguiente código en tu proyecto y completa el parámetro `locale` con el idioma deseado siguiendo el patrón que se muestra en la siguiente tabla.

[[[
```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY', {

  locale: 'en-US',

})
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

