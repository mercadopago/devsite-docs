> CLIENT_SIDE
>
> h1
>
> Inicializar dados nos Bricks

## Iniciar Brick com e-mail 

| Brick  | Card Payment Brick  |
| --- | --- |
| Momento da customização  | Ao renderizar Brick  |
| Propriedade  | initialization.payer.email  |
| Tipo  | string  |
| Observações  | Quando um e-mail válido é enviado, o campo de email é ocultado.  |

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
   email: 'jose@maria.com',
 },
};
```
]]]

## Iniciar Brick com documento 

| Brick  | Card Payment Brick  |
| --- | --- |
| Momento da customização  | Ao renderizar Brick  |
| Propriedade  | initialization.payer.identification.type & initialization.payer.identification.number  |
| Tipo  | string  |
| Observações  | Quando envia-se um identification.number válido e um identification.type correspondente, o campo de documento do pagador é automaticamente preenchido.  |

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