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
| valueProp | practicality, convenience, security_details, security_safety | security_safety |

See the texts related to each option:

| Key | Option | Text |
|--- |--- | --- |
|action |pay | Pay with Mercado Pago |
|action |buy | Buy with Mercado Pago |
|valueProp |practicality | Use saved cards or your account balance |
|valueProp |convenience | Installment with or without card |
|valueProp |security_details | Protection for your data |
|valueProp |security_safety | Pay securely |

------------
----[mlu, mlc, mco, mpe]----
| Key | Available options | Default |
|--- |--- | --- |
| action | pay, buy | pay |
| valueProp | practicality, security_details, security_safety | security_safety |

See the texts related to each option:

| Key | Option | Text |
|--- |--- | --- |
|action |pay | Pay with Mercado Pago |
|action |buy | Buy with Mercado Pago |
|valueProp |practicality | Use saved cards or your account balance |
|valueProp |security_details | Protection for your data |
|valueProp |security_safety | Pay securely |

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