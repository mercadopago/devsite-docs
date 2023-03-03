---
content_section_with_media: 
 - title: MercadoPago.js  V2
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
 - message: This version has a functionality that, based on the analysis of the buyer's behavior, identifies if a transaction is fraudulent or suspicious. This analysis is intended to improve the approval of payments. If you wish, you can turn off this feature. Check our technical reference: https://github.com/mercadopago/sdk-js#api.
 - image:/sdk/mpjsv2-3.png
---

--- mini_landing_separator ---

>>>> Installation <<<<

To install the frontend SDK, you must include MercadoPago.js in the HTML of your application, as shown in the code below or install the SDK JS library by npm.

[[[
```html
<script src="https://sdk.mercadopago.com/js/v2"></script>

```
```bash

npm install @mercadopago/sdk-js;

```
]]]

Then, you must add the Public Key of the account you are integrating so that it can be identified when connecting to Mercado Pago. 

[[[
```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```
]]]

If you are using the **npm package** use the code below.

[[[
```javascript
import { loadMercadoPago } from '@mercadopago/sdk-js';

await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]

>
> Learn more about the Public Key at [Credentials](/developers/en/docs/credentials).
