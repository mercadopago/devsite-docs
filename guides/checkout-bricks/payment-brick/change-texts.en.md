> CLIENT_SIDE
>
> h1
>
> Change texts

It is possible to change the texts that are loaded in Brick. For this, in Brick's initialization object, it is necessary to send the `customization.visual.texts` object with the desired text values.

If the customized texts are larger than the available space, the displayed text will be **interrupted up to the maximum size allowed and the excess will be replaced by the symbol "..."**. Also pay attention to the fact that custom texts ignore empty values.

> WARNING
>
> Attention
>
> Changed texts overwrite the language settings passed to Brick.

Customizable texts are displayed below.

[[[
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
                "entityType": {
                    "placeholder": "",
                    "label": ""
                },
                "financialInstitution": {
                    "placeholder": "",
                    "label": ""
                },
                "selectInstallments": "",
                "selectIssuerBank": "",
                "formSubmit": "",
                "paymentMethods": {
                    "newCreditCardTitle": "aaaaaa",
                    "creditCardTitle": "bbbbbbb",
                    "creditCardValueProp": " cccccc",
                    "newDebitCardTitle": "aaaaaaa",
                    "debitCardTitle": "ddddd",
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
        placeholder: "",
        label: "",
      },
      financialInstitution: {
        placeholder: "",
        label: "",
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

To change the texts of offline payment methods (tickets, Pix and ATM, for example), within the `paymentMethods` object, use the pattern `{paymentMethodId}{ValueProp/Title} `.

> NOTE
>
> Important
>
> Customized texts will only be displayed if these values appear in Brick. For example, if payment with `ticket` is not enabled, the texts referring to the ticket in Brick will not be displayed.