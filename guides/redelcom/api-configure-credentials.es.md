# Configurar credenciales

Puedes generar solicitudes de pago en las terminales Redelcom utilizando [nuestra API](https://api-dev.redelcom.cl:20010/v2).

[diagrama explicando a Integração com a API](integrate-via-API.png)

Para comenzar a integrar vía API, deberás contar con las **credenciales que te fueron otorgadas por correo electrónico** al momento de solicitar el dispositivo. Estas te ayudarán a generar el *token* necesario para operar con Redelcom vía API. 

Tus **credenciales Redelcom** están compuestas por:

| Tipo | Descripción |
|---|---|
| clientId | Es un identificador numérico único del cliente en el sistema Redelcom.  |
| Secret | Es la contraseña asociada al cliente dentro del sistema Redelcom. |


Una vez que tengas tus credenciales únicas, deberás realizar una encriptación, que será lo que te permitirá obtener el *token* necesario para operar con nuestra API. A continuación, te acercamos un prescript de postman para que puedas ver cómo realizarla:


```javascript
var CryptoJS = require("crypto-js");

var client_id = "seu_client_id";
var secret = "sua_senha";
var current_date = new Date();
var str_date = current_date.toISOString();
var random_str = Math.random().toString(36).substring(7);

var body_str = current_date + random_str + client_id;

var hash = CryptoJS.HmacSHA256(body_str, secret);

postman.setEnvironmentVariable("X-Authentication", hash);
```

Una vez realizada la encriptación, obtendrás tu *token*, que recibe el nombre de `X-Authentication` . Este *token* deberá ser utilizado en los headers de los llamados a la API. 