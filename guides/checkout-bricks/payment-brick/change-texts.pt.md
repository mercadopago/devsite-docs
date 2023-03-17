> CLIENT_SIDE
>
> h1
>
> Alterar textos

É possível alterar os textos que vêm carregados no Brick. Para isso, no objeto de inicialização do Brick, é preciso enviar o objeto `customization.visual.texts` com os valores de textos desejados.

Caso os textos customizados sejam maiores do que o espaço disponível, o texto apresentado será **interrompido até o tamanho máximo permitido e o excedente será substituído pelo símbolo "..."**. Se atente também ao fato que os textos customizados ignoram valores vazios.

> WARNING
>
> Atenção
>
> Os textos alterados sobrescrevem as configurações de idioma passadas para o Brick. 

Os textos customizáveis estão indicados abaixo.

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
               "payerFirstName": {
               "placeholder": "",
                   "label": ""
               },
               "payerLastName": {
                   "placeholder": "",
                   "label": ""
               },
               "zipCode": {
                   "placeholder": "",
                   "label": ""
               },
               "addressState": {
                   "placeholder": "",
                   "label": ""
               },
               "addressCity": {
                   "placeholder": "",
                   "label": ""
               },
               "addressNeighborhood": {
                   "placeholder": "",
                   "label": ""
               },
               "addressStreet": {
                   "placeholder": "",
                   "label": ""
               },
               "addressNumber": {
                   "label": ""
               },
               "addressComplement": {
                   "label": ""
               },
               "paymentMethods": {
                   "newCreditCardTitle": "",
                   "creditCardTitle": "",
                   "creditCardValueProp": "",
                   "newDebitCardTitle": "",
                   "debitCardTitle": "",
                   "debitCardValueProp": "",
                   "ticketTitle": "",
                   "ticketValueProp": "",
                   "bankTransferTitle": "",
                   "bankTransferValueProp": "",
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
     payerFirstName: {
       placeholder: 'string',
       label:  'string'
     },
     payerLastName: {
       placeholder: 'string',
       label: 'string'
     },
     zipCode: {
       placeholder: 'string',
       label: 'string'
     },
     addressState: {
       placeholder: 'string',
       label: 'string'
     },
     addressCity: {
       placeholder: 'string',
       label: 'string'
     },
     addressNeighborhood: {
       placeholder: 'string',
       label: 'string'
     },
     addressStreet: {
       placeholder: 'string',
       label: 'string'
     },
     addressNumber: {
       label: 'string'
     },
     addressComplement: {
       label: 'string'
     },
     paymentMethods: {
       newCreditCardTitle: 'string',
       creditCardTitle: 'string',
       creditCardValueProp: 'string',
       newDebitCardTitle: 'string',
       debitCardTitle: 'string',
       debitCardValueProp: 'string',
       ticketTitle: 'string',
       ticketValueProp: 'string',
       bankTransferTitle: 'string',
       bankTransferValueProp: 'string',
     }
   }
 }
};
```
]]]

Para alterar os textos dos meios de pagamento offline (tickets, Pix e ATM, por exemplo), dentro do objeto de `paymentMethods` utilize o padrão `{paymentMethodId}{ValueProp/Title} `.

> NOTE
>
> Importante
>
> Somente serão exibidos os textos customizados caso estes valores apareçam no Brick. Por exemplo, caso o pagamento com `ticket` não esteja habilitado, não serão exibidos os textos referentes a ticket no Brick.