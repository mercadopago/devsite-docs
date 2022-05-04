# Iniciar Brick com email

| Brick  | Card Payment Brick  |
| --- | --- |
| Momento da customização  | Ao renderizar Brick  |
| Propriedade  | initialization.payer.email  |
| Tipo  | string  |
| Observações  | Quando um e-mail válido é enviado, o campo de email é ocultado.  |

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
