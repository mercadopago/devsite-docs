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

```javascript
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

Para alterar os textos dos meios de pagamento offline (tickets, Pix e ATM, por exemplo), dentro do objeto de `paymentMethods` utilize o padrão `{paymentMethodId}{ValueProp/Title} `.

> NOTE
>
> Importante
>
> Somente serão exibidos os textos customizados caso estes valores apareçam no Brick. Por exemplo, caso o pagamento com `ticket` não esteja habilitado, não serão exibidos os textos referentes a ticket no Brick.