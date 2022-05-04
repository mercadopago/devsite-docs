## Initiate brick with document

| Brick | Card Payment Brick |
| --- | --- |
| Customization moment | When rendering Brick |
| Property | initialization.payer.identification.type & initialization.payer.identification.number |
| Type | string |
| Comments | When a valid identification.number and a corresponding identification.type are sent, the payer document field is automatically filled in. |

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
