## Iniciar Brick con documento

| Brick | Card Payment Brick |
| --- | --- |
| Momento de personalización | Al renderizar Brick |
| Propiedad | initialization.payer.identification.type & initialization.payer.identification.number |
| Tipo | string |
| Observaciones | Cuando se envía un número de identificación válido y un tipo de identificación correspondiente, el campo del documento del pagador ya está automaticamente completado. |

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
