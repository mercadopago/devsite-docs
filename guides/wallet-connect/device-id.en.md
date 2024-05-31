# Integrate the Device ID

The **Device ID** is an important piece of information to ensure better security and, consequently, a better payment approval rate. It's a **unique number that's used to identify a customer's device** when they are buying.

If a customer makes a purchase on a different device than usual, this may represent an atypical behaviour. Even if it’s not necessarily a fraude, the Device ID could help us to make a correct assessment and avoid legitimate payment rejections.

## Get and send the Device ID

You can add the Mercado Pago security code to your website by replacing the value `view` with the name of the section of your website where you want to add it.

> NOTE
>
> Important
>
> In case of unavailable value for a section, leave it empty.

## Implement the Device ID in your site

To use the Device ID on your web and prevent possible fraudulent purchases, follow the steps below:

### 1. Add the security code

To generate device IDs on your website, add the following code to your Checkout page:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

### 2. Getting the device ID

When you add the Mercado Pago security code to your site, a global JavaScript variable is automatically created with the name `MP_DEVICE_SESSION_ID`, whose value is the device ID. 

If you prefer that we assign it to another variable, indicate the name by adding the attribute `output`, as in the following example:  

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceId"></script>
```

You can also **create your own variable** by adding an HTML tag on your site as `id="deviceId"` and the code will automatically assign the value device_id.

```html
<input type="hidden" id="deviceId">
```

### 3. Use the device ID

Once you have the Device ID, you must **send it to our servers** when creating a payment. To do so, simply add the following **header** to the request:

```http
X-meli-session-id: device_id
```

> WARNING
> 
> Attention
>
> Remember to replace `device_id` with the name of the variable that contains your Device ID value.