# Configure Device Fingerprint 

**Mercado Pago** has its own fraud prevention tools, and Device Fingerprint is one of them. It is a unique identifier for the device used by the buyer when making a purchase. Device Fingerprint works in payment processing to enhance fraud risk analysis for each transaction. 

Whenever possible, we recommend that you submit information about the customer's behavior to detect unusual movements and prevent fraudulent transactions. Don't worry, we take care of your customers' data and do not share it with anyone. 

To configure **Device Fingerprint**, follow the steps below:

1. Access your store's administration panel and select **Checkout > **Store Setup**.
2. Click on the **edit** icon to access the configuration of your site.
3. In the **Files** module, access the **Code** tab and click on **checkout6-custom.js**.
4. Then, copy and paste the following code, replacing the warning.

```javascript
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
```

5. Click on **Save**

![Fingerprint configuration](/images/vtex/devicefingerprint-imagenv2-en.gif)

Now you have Device Fingerprint configured to enhance fraud risk assessment. 

> NOTE
>
> Note 
> 
> If you want to learn more about how to use Device Fingerprint to optimize payment approval, please refer to the document [How to Improve Payment Approval](/developers/en/docs/vtex/how-tos/payment-approval) or check VTEX's [support documentation](https://help.vtex.com/tutorial/configuring-mercado-pagos-device-fingerprint--m2knP9z69HGHHBIiFq0Ga).
