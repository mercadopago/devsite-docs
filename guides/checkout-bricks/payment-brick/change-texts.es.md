> CLIENT_SIDE
>
> h1
>
> Cambiar textos

Es posible cambiar los textos que se cargan en Brick. Para esto, en el objeto de inicialización de Brick, es necesario enviar el objeto `customization.visual.texts` con los valores de texto deseados.

Si los textos personalizados son más grandes que el espacio disponible, el texto mostrado será **interrumpido hasta el tamaño máximo permitido y el exceso será reemplazado por el símbolo "..."**. También preste atención al hecho de que los textos personalizados ignoran los valores vacíos.

> WARNING
>
> Atención
>
> Los textos modificados sobrescriben la configuración de idioma pasada a Brick.

Los textos personalizables se muestran a continuación.

[[[
```Javascript
const settings = {
  "customization": {
      "visual": {
          "texts": {
               "formTitle": "",
               "emailSectionTitle": "",
               "installmentsSectionTitle": "",
               "cardholderName": {
                   "label": "",
                   "placeholder": ""
               },
               "email": {
                   "label": "",
                   "placeholder": ""
               },
               "cardholderIdentification": {
                   "label": ""
               },
               "cardNumber": {
                   "label": "",
                   "placeholder": ""
               },
               "expirationDate": {
                   "label": "",
                   "placeholder": ""
               },
               "securityCode": {
                   "label": "",
                   "placeholder": ""
               },
               "selectInstallments": "",
               "selectIssuerBank": "",
               "formSubmit": "",
               "paymentMethods": {
                   "newCreditCardTitle": "",
                   "creditCardTitle": "",
                   "creditCardValueProp": "",
                   "newDebitCardTitle": "",
                   "debitCardTitle": "",
                   "debitCardValueProp": "",
               "ticketTitle": "",
                   "ticketValueProp": "",
                 }
           }
      },
  }
};
```
```react-jsx
const customization = {
 visual: {
   texts: {
     formTitle: 'string',
     emailSectionTitle: 'string',
     installmentsSectionTitle: 'string',
     cardholderName: {
       label: 'string',
       placeholder: 'string'
     },
     email: {
       label: 'string',
       placeholder: 'string'
     },
     cardholderIdentification: {
       label:'string'
     },
     cardNumber: {
       label: 'string',
       placeholder: 'string'
     },
     expirationDate: {
       label: 'string',
       placeholder: 'string'
     },
     securityCode: {
       label: 'string' ,
       placeholder: 'string'
     },
     selectInstallments: 'string' ,
     selectIssuerBank: 'string' ,
     formSubmit: 'string' ,    
     paymentMethods: {
       newCreditCardTitle: 'string',
       creditCardTitle: 'string',
       creditCardValueProp: 'string',
       newDebitCardTitle: 'string',
       debitCardTitle: 'string',
       debitCardValueProp: 'string',
	   ticketTitle: 'string',
       ticketValueProp: 'string',
     }
   }
 }
};
```
]]]

Para cambiar los textos de los métodos de pago fuera de línea (tickets, Pix y ATM, por ejemplo), dentro del objeto `paymentMethods`, use el patrón `{paymentMethodId}{ValueProp/Title} `.

> NOTA
>
> Importante
>
> Los textos personalizados solo se mostrarán si estos valores aparecen en Brick. Por ejemplo, si no se habilita el pago con `ticket`, no se mostrarán los textos referentes al ticket en Brick.