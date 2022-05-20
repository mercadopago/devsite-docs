# Iniciar brick con email

| Brick | Card Payment Brick |
| --- | --- |
| Momento de personalización | Al renderizar Brick |
| Propiedad | initialization.payer.email |
| Tipo | string |
| Observaciones | Cuando se envía un correo electrónico válido, el campo de correo electrónico se oculta. |

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
