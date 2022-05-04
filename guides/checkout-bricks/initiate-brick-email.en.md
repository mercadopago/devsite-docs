## Initiate Brick with e-mail

| Brick | Card Payment Brick |
| --- | --- |
| Customization moment | When rendering Brick |
| Property | initialization.payer.email |
| Type | string |
| Comments | When a valid email is sent, the email field is hidden. |

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
