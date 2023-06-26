> CLIENT_SIDE
>
> h1
>
> Change texts

Wallet Brick offers two reading levels: the **call to action (button)** and the **value proposition**. In both cases, the text can be customized according to the options provided by Mercado Pago.

> WARNING
>
> Attention
>
> To offer a better experience in line with our brand proposal, it is currently not possible to fully customize the texts.

| - | Description |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.texts.{action, valueProp} |
| Type  | String  |
| Comments  | When sending empty text, the screen will present the text defined by the default layout. On the other hand, when you submit a alternative text, it will replace the default text. To check what the default texts are, check out the table below. |

Check below the texts available for alteration and a code example.

----[mla, mlb, mlm]----
| Key | Available options | Default |
|--- |--- | --- |
| action | pay, buy | pay |
| valueProp | practicality, convenience_all, security_details, security_safety, smart_option, convenience_credits | security_safety |

See the texts related to each option:

| Key | Option | Text |
|--- |--- | --- |
|action |pay | Pay with Mercado Pago |
|action |buy | Buy with Mercado Pago |
|valueProp |practicality | Use saved cards or your account balance |
|valueProp |convenience_all | Installment with or without card |
|valueProp |security_details | Protection for your data |
|valueProp |security_safety | Pay securely |
|valueProp |smart_option| The text will be chosen automatically by Wallet Brick to increase the chances of sale according to the characteristics of the purchase. |
|valueProp |convenience_credits| Up to 12 installments without card |

> NOTE
>
> Important
>
> To use the Value Prop of `convenience_credits`, the Brick must be [initialized with a preference](/developers/en/docs/checkout-bricks/wallet-brick/additional-customization/preference-startup) and the preference must have the `purpose` from [onboarding_credits.](/developers/en/docs/checkout-bricks/wallet-brick/additional-customization/preferences)

------------
----[mlu, mlc, mco, mpe]----
| Key | Available options | Default |
|--- |--- | --- |
| action | pay, buy | pay |
| valueProp | practicality, security_details, security_safety, smart_option | security_safety |

See the texts related to each option:

| Key | Option | Text |
|--- |--- | --- |
|action |pay | Pay with Mercado Pago |
|action |buy | Buy with Mercado Pago |
|valueProp |practicality | Use saved cards or your account balance |
|valueProp |security_details | Protection for your data |
|valueProp |security_safety | Pay securely |
|valueProp |smart_option| The text will be chosen automatically by Wallet Brick to increase the chances of sale according to the characteristics of the purchase. |

------------

[[[
```javascript
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