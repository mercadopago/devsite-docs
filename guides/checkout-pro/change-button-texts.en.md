> CLIENT_SIDE
>
> h1
>
> Change button texts

The payment button offers two reading levels: the **call to action (button)** and the **value proposition**. In both cases, the text can be customized according to the options provided by Mercado Pago. By default, the payment button renders as in the following image.

[IMAGEM]

To change the default texts, modify the `customization` property during rendering.

| - | Description |
| --- |--- | 
| Customization moment | When rendering. |
| Property | customization |
| Observations | When sending an empty text, the screen will present the text defined by the default layout. On the other hand, when sending alternative text, it will replace the default text. To check which alternative texts are available, see the table below. |

Check below the texts available for alteration and a code example.

| Key | Available options | Default |
| --- |--- | --- | 
| action | pay, buy | pay |
| valueProp | practicality, convenience, security_details, security_safety | security_safety |

Check out the texts related to each option:

| Key | Option | Text |
| --- |--- | --- |
| action | pay | Pay with Mercado Pago. |
| action | buy | Buy with Mercado Pago. |
| valueProp | practicality| Use saved cards or your account balance. |
| valueProp | convenience | Installment with or without card. |
| valueProp | security_details | Protection for your data. |
| valueProp | security_safety| Pay securely. |
| valueProp | none | - |

Example of customizing button texts:

[[[
```Javascript
const settings = {
 ...,
 customization: {
      texts: {
          action: 'buy',
          valueProp: 'security_details',
      },
 },
}
```
```react-jsx
const customization = {
 texts: {
   action: 'buy',
   valueProp: 'security_details',
 },
}
```
]]]

Such customization examples will generate the following result:

[IMAGEM]