> CLIENT_SIDE
>
> h1
>
> Initialize data on the Bricks

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