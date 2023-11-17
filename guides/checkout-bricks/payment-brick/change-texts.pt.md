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

----[mlm]----
[[[
```javascript
const settings = {
  customization: {
    visual: {
      texts: {
        formTitle: "string",
        emailSectionTitle: "string",
        installmentsSectionTitle: "string",
        cardholderName: {
          label: "string",
          placeholder: "string",
        },
        email: {
          label: "string",
          placeholder: "string",
        },
        cardholderIdentification: {
          label: "string",
        },
        cardNumber: {
          label: "string",
          placeholder: "string",
        },
        expirationDate: {
          label: "string",
          placeholder: "string",
        },
        securityCode: {
          label: "string",
          placeholder: "string",
        },
        entityType: {
          placeholder: "string",
          label: "string",
        },
        financialInstitution: {
          placeholder: "string",
          label: "string",
        },
        selectInstallments: "string",
        selectIssuerBank: "string",
        formSubmit: "string",
        paymentMethods: {
          newCreditCardTitle: "string",
          creditCardTitle: "string",
          creditCardValueProp: " string",
          newDebitCardTitle: "string",
          debitCardTitle: "string",
          debitCardValueProp: "string",
          ticketTitle: "string",
          ticketValueProp: "string",
        },
        reviewConfirm: {
          componentTitle: "",
          payerDetailsTitle: "",
          shippingDetailsTitle: "",
          billingDetailsTitle: "",
          paymentMethodDetailsTitle: "",
          detailsTitle: "",
          summaryItemsTitle: "",
          summaryShippingTitle: "",
          summaryDiscountTitle: "",
          summaryYouPayTitle: "",
          summaryTotalTitle: "",
        },
      },
    },
  },
};
```
```react-jsx
const settings = {
  customization: {
    visual: {
      texts: {
        formTitle: "string",
        emailSectionTitle: "string",
        installmentsSectionTitle: "string",
        cardholderName: {
          label: "string",
          placeholder: "string",
        },
        email: {
          label: "string",
          placeholder: "string",
        },
        cardholderIdentification: {
          label: "string",
        },
        cardNumber: {
          label: "string",
          placeholder: "string",
        },
        expirationDate: {
          label: "string",
          placeholder: "string",
        },
        securityCode: {
          label: "string",
          placeholder: "string",
        },
        entityType: {
          placeholder: "string",
          label: "string",
        },
        financialInstitution: {
          placeholder: "string",
          label: "string",
        },
        selectInstallments: "string",
        selectIssuerBank: "string",
        formSubmit: "string",
        paymentMethods: {
          newCreditCardTitle: "string",
          creditCardTitle: "string",
          creditCardValueProp: " string",
          newDebitCardTitle: "string",
          debitCardTitle: "string",
          debitCardValueProp: "string",
          ticketTitle: "string",
          ticketValueProp: "string",
        },
        reviewConfirm: {
          componentTitle: "string",
          payerDetailsTitle: "string",
          shippingDetailsTitle: "string",
          billingDetailsTitle: "string",
          paymentMethodDetailsTitle: "string",
          detailsTitle: "string",
          summaryItemsTitle: "string",
          summaryShippingTitle: "string",
          summaryDiscountTitle: "string",
          summaryYouPayTitle: "string",
          summaryTotalTitle: "string",
      },
    },
  },
};
```
]]]

------------
----[mla, mlb, mpe, mco, mlu, mlc]----
[[[
```javascript
const settings = {
  customization: {
    visual: {
      texts: {
        formTitle: "string",
        emailSectionTitle: "string",
        installmentsSectionTitle: "string",
        cardholderName: {
          label: "string",
          placeholder: "string",
        },
        email: {
          label: "string",
          placeholder: "string",
        },
        cardholderIdentification: {
          label: "string",
        },
        cardNumber: {
          label: "string",
          placeholder: "string",
        },
        expirationDate: {
          label: "string",
          placeholder: "string",
        },
        securityCode: {
          label: "string",
          placeholder: "string",
        },
        entityType: {
          placeholder: "string",
          label: "string",
        },
        financialInstitution: {
          placeholder: "string",
          label: "string",
        },
        selectInstallments: "string",
        selectIssuerBank: "string",
        formSubmit: "string",
        paymentMethods: {
          newCreditCardTitle: "string",
          creditCardTitle: "string",
          creditCardValueProp: " string",
          newDebitCardTitle: "string",
          debitCardTitle: "string",
          debitCardValueProp: "string",
          ticketTitle: "string",
          ticketValueProp: "string",
        },
      },
    },
  },
};
```
```react-jsx
const customization = {
  visual: {
    texts: {
      formTitle: "string",
      emailSectionTitle: "string",
      installmentsSectionTitle: "string",
      cardholderName: {
        label: "string",
        placeholder: "string",
      },
      email: {
        label: "string",
        placeholder: "string",
      },
      cardholderIdentification: {
        label: "string",
      },
      cardNumber: {
        label: "string",
        placeholder: "string",
      },
      expirationDate: {
        label: "string",
        placeholder: "string",
      },
      securityCode: {
        label: "string",
        placeholder: "string",
      },
      entityType: {
        placeholder: "string",
        label: "string",
      },
      financialInstitution: {
        placeholder: "string",
        label: "string",
      },
      selectInstallments: "string",
      selectIssuerBank: "string",
      formSubmit: "string",
      paymentMethods: {
        newCreditCardTitle: "string",
        creditCardTitle: "string",
        creditCardValueProp: "string",
        newDebitCardTitle: "string",
        debitCardTitle: "string",
        debitCardValueProp: "string",
        ticketTitle: "string",
        ticketValueProp: "string",
      },
    },
  },
};
```
]]]

------------

Para alterar os textos dos meios de pagamento offline (tickets, Pix e ATM, por exemplo), dentro do objeto de `paymentMethods` utilize o padrão `{paymentMethodId}{ValueProp/Title} `.

> NOTE
>
> Importante
>
> Somente serão exibidos os textos customizados caso estes valores apareçam no Brick. Por exemplo, caso o pagamento com `ticket` não esteja habilitado, não serão exibidos os textos referentes a ticket no Brick.