# Fingerprint configuration

**Mercado Pago** has its own fraud prevention tools. **Device Fingerprint** is an identifier that acts in the processing of a payment, with the aim of improving the fraud risk analysis in each transaction.

Whenever possible, we recommend that you submit information on customer behavior to detect unusual movements and avoid fraudulent transactions. Don't worry, we take care of your customers' data and we don't share it with anyone.

**To configure device fingerprint**, follow the steps below:

1. In your store's administration panel, select the **Checkout** option from the **Store Setup** module.
2. Click on the **edit** icon to access the configuration of your site.
3. Select the **Code** tab and click on **checkout6-custom.js** in the **Files** module.
4. Copy and paste the following code, then click on **Save**.

```javascript
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
```

![Fingerprint configuration](/images/vtex/devicefingerprint-en.gif)

