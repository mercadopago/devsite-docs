# Configure your credentials

You can generate payment requests on Redelcom terminals using [our API](https://api-dev.redelcom.cl:20010/v2).

![diagram explaining API Integration](/images/redelcom/integrate-via-api.png)

To start integrating via API, you should have the **credentials that were provided to you by email** when you requested the device. These credentials will help you generate the *token* required to operate with Redelcom via API.

Your **Redelcom credentials** consist of:

| Type | Description |
|---|---|
| clientId | It is a unique numerical identifier of the client in the Redelcom system. |
| Secret | It is the password associated with the client within the Redelcom system. |

Once you have your unique credentials, you need to perform encryption, which will allow you to obtain the *token* required to operate with our API. Below, we provide a Postman pre-script to show you how to do it:

```javascript
// get path with query params
const path = pm.request.url.getPath().replace("/redelcom","");
let queryParam;
let httpPath = path;
if (pm.request.url.query != "") {
    pm.request.url.query.all().forEach((param) => queryParam = param.key + "=" +  param.value);
    httpPath +=  "?" + queryParam;
}
console.log("httpPath: " + httpPath);
// execute algorithm
const SECRET_KEY = pm.collectionVariables.get("secret");
const body = pm.request.body
const message = httpPath + "," + body;
console.log("message: " + message);
const token = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(message, SECRET_KEY));
console.log("token: " + token);
pm.environment.set("X-Authentication", pm.collectionVariables.get("clientId") + ";" + token);
```

Once you've performed the encryption, you will get your *token*, named `X-Authentication`. This *token* should be used in the headers of API requests.
