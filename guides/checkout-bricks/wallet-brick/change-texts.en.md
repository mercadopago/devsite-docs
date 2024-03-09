> CLIENT_SIDE
>
> h1
>
> Change texts

Wallet Brick offers two reading levels: the **call to action (button)** and the **value proposition (Value Prop)**. In both cases, the text can be customized according to the options provided by Mercado Pago.

The "call to action" is divided into two parts: the action, determined by the `Action` property, and the complement of the action, determined by the `Action Complement` property.

> WARNING
>
> Attention
>
> To provide a better experience aligned with our brand's proposition, we currently do not support full customization of the texts.

| - | Description |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.texts.{action, actionComplement, valueProp}  |
| Type  | String  |
| Comments  | When sending an empty text, the screen will present the text defined by the default layout shown after the [rendering of the Brick](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering#bookmark_renderizar_o_brick). On the other hand, when you submit a alternative text, it will replace the default text. To check what the default texts are, check out the table below. |

Check below the available texts for modification, how they are organized in the display, and an example of code.

<center>

![wallet-brick-actioncomplement](checkout-bricks/wallet-brick-actioncomplement-en.png)

</center>

| Key | Available options | Default |
|--- |--- | --- |
| action | pay, buy | pay |
| actionComplement |brand, amount | brand |
| valueProp | practicality, convenience_all, security_details, security_safety, smart_option, convenience_credits, payment_methods_logos | security_safety |

See the texts related to each option:

----[mlb, mla, mlm]----
| Key | Option | Text |
|--- |--- | --- |
|action |pay | Pay |
|action |buy | Buy |
|actionComplement |brand | with Mercado Pago |
|actionComplement |amount | Purchase amount obtained through preference, in the currency format of the payment.  |
|valueProp |practicality | Use saved cards or your account balance |
|valueProp |convenience_all | Installment with or without card |
|valueProp |security_details | Protection for your data |
|valueProp |security_safety | Pay securely |
|valueProp |smart_option| The text will be chosen automatically by Wallet Brick to increase the chances of sale according to the characteristics of the purchase. |
|valueProp |convenience_credits *| Up to 12 installments without card |
|valueProp |payment_methods_logos** | The logos of the available payment methods will be displayed. To configure the payment methods, use the preference. |

------------
----[mpe, mco, mlu, mlc]----
| Key | Option | Text |
|--- |--- | --- |
|action |pay | Pay |
|action |buy | Buy |
|actionComplement |brand | with Mercado Pago |
|actionComplement |amount | Purchase amount obtained through preference, in the currency format of the payment.  |
|valueProp |practicality | Use saved cards or your account balance |
|valueProp |convenience_all | Installment with or without card |
|valueProp |security_details | Protection for your data |
|valueProp |security_safety | Pay securely |
|valueProp |smart_option| The text will be chosen automatically by Wallet Brick to increase the chances of sale according to the characteristics of the purchase. |
|valueProp |convenience_credits| Up to 12 installments without card |

------------

When testing your integration, make sure that the `action`, `actionComplement`, and `valueProp` make sense within their context.

----[mlm]----
> NOTE
>
> Important
>
> To use the `convenience_credits` Value Prop, it is necessary for the Brick to be initialized with a preference, and the preference should have the purpose of `onboarding_credits`.
> <br><br>
> It is recommended to initialize with a preference using the Value Prop `payment_methods_logos`. If the preference has only one valid payment method, it will stop displaying images and will show the text: "**Account money or installments with no card**"
> <br><br>
> Ao remover da preferência um meio de pagamento de _ticket_ ("paycash", por exemplo) ou _ATM_ ( "banamex", por exemplo), todos os ícones de pontos de pagamento vinculados a estes meios não serão exibidos.

------------
----[mlb, mla]----
> NOTE
>
> Important
>
> To use the `convenience_credits` Value Prop, it is necessary for the Brick to be initialized with a preference, and the preference should have the purpose of `onboarding_credits`.
> <br><br>
> It is recommended to initialize with a preference using the Value Prop `payment_methods_logos`. If the preference has only one valid payment method, it will stop displaying images and will show the text: "**Account money or installments with no card**".

------------
----[mpe, mco, mlu, mlc]----
> NOTE
>
> Important
>
> It is recommended to initialize with a preference using the Value Prop `payment_methods_logos`. If the preference has only one valid payment method, it will stop displaying images and will show the text: "**With account money**".

------------

[[[
```javascript
const settings = {
    ...,
    customization: {
         texts: {
             action: 'buy',
             actionComplement: 'amount',
             valueProp: 'payment_methods_logos',
         },
    },
}
```
```react-jsx
const customization = {
 visual: {
   texts: {
     action: 'buy',
     valueProp: 'security_details'
     ...,
   }
 }
};
```
]]]