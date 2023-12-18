> CLIENT_SIDE
>
> h1
>
> Inicializar datos en Bricks

## Iniciar Brick con email

| Brick | Card Payment Brick |
| --- | --- |
| Momento de personalización | Al renderizar Brick |
| Propiedad | initialization.payer.email |
| Tipo | string |
| Observaciones | Cuando se envía un correo electrónico válido, el campo de correo electrónico se oculta. |

[[[
```javascript
const settings = {
   initialization: {
       amount: number,
       payer: {
           email: 'string',
       },
   },
   ...
}
```
```react-jsx
const initialization = {
 ...,
 payer: {
   ...,
   email: '<PAYER_EMAIL_HERE>',
 },
};
```
]]]

## Iniciar Brick con documento

| Brick | Card Payment Brick |
| --- | --- |
| Momento de personalización | Al renderizar Brick |
| Propiedad | initialization.payer.identification.type & initialization.payer.identification.number |
| Tipo | string |
| Observaciones | Cuando se envía un número de identificación válido y un tipo de identificación correspondiente, el campo del documento del pagador ya está automaticamente completado. |

[[[
```javascript
const settings = {
   initialization: {
       amount: number,
       payer: {
           identification: {
               type: 'string',
               number: 'string',
           },
       },
   },
   ...
}
```
```react-jsx
const initialization = {
 ...,
 payer: {
   ...,
   identification: {
     type: 'string',
     number: 'string',
   },
 },
};
```
]]]