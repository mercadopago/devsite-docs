---
content_section_with_media: 
 - title: SDK JS - ES Module
 - message: Version 2 of the client-side SDK has functions based on Promises. In addition, it has a renewed interface for developers and handles errors more efficiently.
 - media_image: /sdk/mpjsv1.png
---

--- mini_landing_separator ---

>>>> Compatible browsers <<<<

![Compatible navigators](sdk/mp-jsv2.png)

---
bullet_section_with_media: 
 - title: Fraud prevention
 - type: normal
 - message: This version has a functionality that, based on the analysis of the buyer's behavior, identifies if a transaction is fraudulent or suspicious. This analysis is intended to improve the approval of payments. If you wish, you can turn off this feature. Check our [technical reference](https://github.com/mercadopago/sdk-js#api).
 - image:/sdk/mpjsv2-3.png
---


--- mini_landing_separator ---

>>>> Instalación <<<<

To install the frontend SDK, include MercadoPago.js in your application's HTML or install the package on npm according to the code below.

[[[
```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
```bash
npm install @mercadopago/sdk-js

```
]]]

Then, add the Public key of the account being integrated so that it can be identified when connecting to Mercado Pago. Learn more about Public key in [Credentials](/developers/en/docs/checkout-api/additional-content/credentials).

[[[
```html
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>
```
```javascript
import { loadMercadoPago } from "@mercadopago/sdk-js";


await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]

