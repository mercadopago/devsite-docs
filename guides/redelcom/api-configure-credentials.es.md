# Configurar credenciales

Puedes generar solicitudes de pago en las terminales Redelcom utilizando [nuestra API](https://api-dev.redelcom.cl:20010/v2).

</center>

![diagrama explicando la integración vía API](/images/Redelcom/integrate-via-API.png)

</center>



Para comenzar a integrar vía API, deberás contar con las **credenciales que te fueron otorgadas por correo electrónico** al momento de solicitar el dispositivo. Estas te ayudarán a generar el *token* necesario para operar con Redelcom vía API. 

Tus **credenciales Redelcom** están compuestas por:

| Tipo | Descripción |
|---|---|
| clientId | Es un identificador numérico único del cliente en el sistema Redelcom.  |
| Secret | Es la contraseña asociada al cliente dentro del sistema Redelcom. |


Una vez que tengas tus credenciales únicas, deberás realizar una encriptación, que será lo que te permitirá obtener el *token* necesario para operar con nuestra API. A continuación, te acercamos un prescript de postman para que puedas ver cómo realizarla:


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

Una vez realizada la encriptación, obtendrás tu *token*, que recibe el nombre de `X-Authentication` . Este *token* deberá ser utilizado en los headers de los llamados a la API. 

> WARNING
>
> Importante
>
> Si necesitas actualizar la aplicación RDCPass desde computadores MacOS o Windows, entra en contacto con nuestro equipo de integradores para recibir la última versión, y accede a [nuestra documentación](/developers/es/docs/redelcom/how-tos/install-app-android-macos-windows) para saber cómo instalar una aplicación Android en los dispositivos. 