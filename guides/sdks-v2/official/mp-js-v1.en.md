---
content_section_with_media: 
 - title: MercadoPago.js  V1
 - message: This is the first version of the SDK, which has already been discontinued. Please consult the MercadoPago.js V2 documentation.
 - media_image: /sdk/mpjsv1.png
---

--- mini_landing_separator ---

>>>> Compatible browsers <<<<

![compatible navigators](sdk/mp-jsv1.png)

--- mini_landing_separator ---

>>>> Installation <<<<

To install the frontend SDK, you will need to include MercadoPago.js in the HTML of your application, according to the code below.

[[[
```javascript
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```
]]]

Then, you must add the Public Key of the account you are integrating so that it can be identified when connecting to Mercado Pago.

[[[
```javascript
window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
```
]]]

> Learn more about the Public Key in [Credentials.](/developers/en/docs/your-integrations/credentials)