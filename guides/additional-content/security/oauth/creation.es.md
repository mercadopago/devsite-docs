# Obtener Access Token

Aprende a utilizar los flujos, también conocidos como _grant types_, para obtener un Access Token y acceder a los datos expuestos por una API. Estos flujos responden  a todos los escenarios de negocios que pueden aparecer en el consumo de APIs con base en el tipo de aplicación consumidora, su grado de confianza y cómo es la interacción del usuario en el proceso.

Los flujos de acceso disponibles para la generación del Access Token son:

- [Authorization code](/developers/es/docs/security/oauth/creation#bookmark_authorization_code): flujo que debe ser usado si se van a usar credenciales para acceder a un recurso a nombre de un tercero.
- [Client credentials](/developers/es/docs/security/oauth/creation#bookmark_client_credentials): flujo que debe ser usado si se van a usar credenciales para acceder a un recurso en nombre propio.

> NOTE
>
> Importante
>
> Si un Access Token generado a partir del flujo **Authorization code** es inválido o ha expirado, podrás utilizar el flujo **Refresh Token** para intercambiar una concesión temporal del tipo `refresh_token` por un Access Token. Esto  permite que el Access Token se actualice sin la necesidad de una nueva interacción del usuario después de la autorización concedida. Para más información, visita la documentación [Renovar Access Token](/developers/es/guides/additional-content/security/oauth/renewal).

## Authorization code

Este flujo se caracteriza por la intervención del vendedor para autorizar explícitamente el acceso de la aplicación a sus datos, y por el uso de un código otorgado por el servidor de autenticación para que la aplicación pueda obtener un Access Token y un _refresh token_ asociado.
Como se trata de un flujo basado en la redirección, debes permitir la interacción con el navegador del vendedor y recibir el `request` a través de la redirección del servidor de autorización. En este flujo, la aplicación solicita al vendedor el consentimiento expreso para acceder a los datos mediante la apertura de una página web, en la que se explicitan los ámbitos para los que se solicita el acceso.

> WARNING
>
> Importante
>
> Recuerda que utilizarás información sensible de tus vendedores. Asegúrate de guardarla de forma segura. No la utilices en la URL de autenticación y gestiona todo el proceso únicamente desde tu servidor.

Una vez autorizado, el servidor genera un código de acceso que llega a la aplicación a través de una redirección. En este paso, la aplicación solicita acceso al servidor de autenticación enviando el código obtenido y sus datos. Una vez hecho esto, el servidor otorga el Access Token y el _refresh token_ a la aplicación.

Mira a continuación cómo **configurar el protocolo PKCE** (un protocolo de seguridad no obligatorio que brinda una capa de protección extra, por lo que es recomendado) y luego **generar el Access Token**.

### Configurar PKCE

El **PKCE** (_Proof Key for Code Exchange_) es un protocolo de seguridad utilizado con OAuth para proteger contra ataques de código malicioso durante el intercambio de códigos de autorización por Access Token. Añade una capa adicional de seguridad generando un _verifier_ que se transforma en un _challenge_ para asegurar que, incluso si el código de autorización es interceptado, no sea útil sin el _verifier_ original.

Siga los pasos a continuación para habilitar y configurar el uso del flujo de código de autorización con PKCE.

1. Primero, en la pantalla de [Detalles de la aplicación](/developers/es/docs/your-integrations/application-details), haz clic en **Edita**r y **habilite el uso del flujo de código de autorización con PKCE**. Con el campo habilitado, Mercado Pago comenzará a **requerir como obligatorios** los campos `code_challenge` y `code_method` en las solicitudes de OAuth.
2. Los campos requeridos pueden generarse de varias formas, ya sea con desarrollo propio o mediante el uso de SDKs. Sigue los pasos necesarios descritos en [esta documentación oficial](https://datatracker.ietf.org/doc/html/rfc7636#section-4) para hacerlo.
3. Después de generar y cifrar los campos, será necesario enviar los códigos respectivos a Mercado Pago a través de `query_params`. Para eso, utiliza la URL de autenticación presentada a continuación, reemplazando los campos necesarios según se describen debajo.

```URL
https://auth.mercadopago.com/authorization?response_type=code&client_id=$APP_ID`redirect_uri=$YOUR_URL&code_challenge=$CODE_CHALLENGE&code_challenge_method=$CODE_METHOD
```

- **Redirect_uri**: URL proporcionada en el campo "URLs de redireccionamiento" de [tu aplicación](/developers/es/guides/additional-content/your-integrations/application-details).
- **Code_verifier**: código que debe generarse, respetar los requisitos para su funcionamiento; es decir, ser una secuencia aleatoria de caracteres con una longitud de entre 43 y 128 caracteres, que incluya letras mayúsculas, minúsculas, números y algunos caracteres especiales. Por ejemplo: **47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU**.
- **Code_challenge**: a continuación, es necesario crear un `code_challenge`, a partir del `code_verifier`, utilizando una de las siguientes transformaciones:
 - Si es posible utilizar **S256**, será necesario seleccionar esta opción transformando el `code_verifier` en un `code_challenge` mediante una codificación `BASE64URL` después de aplicar la función "SHA256".
 - Si **no es posible utilizar S256** por alguna razón técnica, y el servidor admite el método **Plain**, es posible definir el `code_challenge` igual al `code_verifier`.
- **Code_challenge_method**: es el método utilizado para generar el `code_challenge`, según se describe en el ítem anterior. Este campo puede ser, por ejemplo, **S256** o **Plain**, dependiendo de la codificación seleccionada en la etapa de `code_challenge`. <br><br>

4. Después de enviar correctamente los códigos a Mercado Pago, obtendrás la autorización necesaria (`code_verifier`) para obtener el Access Token y realizar la verificación por PKCE en las transacciones realizadas con OAuth.

### Obtener token

El Access Token es el código utilizado en diferentes solicitudes de origen público para acceder a un recurso protegido. En este flujo, representa una autorización otorgada por un vendedor a una aplicación cliente, que contiene scopes y un tiempo de vigencia limitado para dicho acceso, y se concede por medio de una URL de redirección 

Sigue los pasos a continuación para obtenerlo.

> WARNING
>
> Atención
>
> Se recomienda realizar este procedimiento de una única vez junto con el usuario, ya que el código recibido por la "URL de redireccionamiento" después de la autorización tiene una validez de 10 minutos y el Access Token recibido a través del endpoint tiene una validez de 180 días (6 meses).

1. Edita tu aplicación para que contenga tu URLs de redireccionamiento. Consulta [Editar aplicación](/developers/es/guides/additional-content/your-integrations/application-details).
2. Envía la **URL de autenticación** con los siguientes campos al vendedor con cuya cuenta deseas vincular la tuya:

   ```Authentication_URL
   https://auth.mercadopago.com/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com
   ```

   |Campos|Descripción|
   |---|---|
   |Client_id| Reemplaza el valor "APP_ID" con el **número de su aplicación**. Consulta [Detalles de la aplicación](/developers/es/guides/additional-content/your-integrations/application-details) para más información.|
   |State| Reemplaza el valor "RANDOM_ID" con un identificador que sea único para cada intento y que no incluya información sensible, de forma que pueda identificar de quién es el código recibido. Así, podrás garantizar que la respuesta pertenezca a una solicitud iniciada por la misma aplicación. |
   |Redirect_uri| Agrega la URL informada en el campo "URLs de redireccionamiento" de su aplicación. **Asegúrate de que el redirect_uri sea una URL estática**. Consulta [Detalles de la aplicación](/developers/es/guides/additional-content/your-integrations/application-details) para más información.|

   > Si deseas enviar parámetros adicionales en `redirect_uri`, utiliza el parámetro `state` para incluir esa información. De lo contrario, la llamada recibirá una respuesta de error si la URL no coincide exactamente con la configuración de la aplicación.

3. Espera a que el vendedor acceda a la URL y permita el acceso. Al ingresar a la URL, el vendedor será dirigido a Mercado Pago y deberá iniciar sesión en su cuenta para realizar la autorización.
4. Verifica la **URL de redireccionamiento** de tu servidor para ver el código de autorización devuelto en el parámetro de **code**.

   ```Redirect_URL
   https://www.redirect-url.com?code=CODE&state=RANDOM_ID 
   ```
  
5. Envía tus [credenciales](/developers/es/docs/your-integrations/credentials) (`client_id` y `client_secret`), el **código de autorización** que fue devuelto en la propiedad `code` y, si has [configurado el PKCE](/developers/pt/docs/security/oauth/creation#:~:text=Access%20Token.-,Configurar%20PKCE,-O%20PKCE%20), el valor `code_verifier` al endpoint [/oauth/token](/developers/es/reference/oauth/_oauth_token/post) para recibir el Access Token como respuesta.

[[[
```php
<?php
  $client = new OauthClient();
   $request = new OAuthCreateRequest();
     $request->client_secret = "CLIENT_SECRET";
     $request->client_id = "CLIENT_ID";
     $request->code = "CODE";
     $request->redirect_uri = "REDIRECT_URI";

  $client->create($request);
?>
```
```java

OauthClient client = new OauthClient();

String authorizationCode = "TG-XXXXXXXX-241983636";
client.createCredential(authorizationCode, null);
```
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } }); 

const oauth = new OAuth(client);

oauth.create({
	'client_secret': 'your-client-secret',
	'client_id': 'your-client-id',
	'code': 'return-of-getAuthorizationURL-function',
	'redirect_uri': 'redirect-uri'
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
curl -X POST \
    'https://api.mercadopago.com/oauth/token'\
    -H 'Content-Type: application/json' \
    -d '{
  "client_id": "client_id",
  "client_secret": "client_secret",
  "code": "TG-XXXXXXXX-241983636",
  "grant_type": "authorization_code",
  "redirect_uri": "APP_USR-4934588586838432-XXXXXXXX-241983636",
  "refresh_token": "TG-XXXXXXXX-241983636",
  "test_token": "false"
}'
]]]

> Para generar credenciales de _sandbox_ para pruebas, envía el parámetro `test_token` con el valor `true`.

## Client credentials

Este flujo se utiliza cuando las aplicaciones solicitan un Access Token usando solo sus propias credenciales y para acceder a sus propios recursos. La principal diferencia con respecto a los otros flujos es que el usuario no interactúa en el proceso y, por lo tanto, la aplicación no puede actuar en su nombre.

### Obtener token

Access Token es el código utilizado en diferentes solicitudes de origen público para acceder a un recurso protegido. En este flujo, se obtiene el Access Token sin interacción del usuario y solo para acceder a sus propios recursos.

Sigue los pasos a continuación para obtenerlo.

1. Envía tus [credenciales](/developers/es/docs/your-integrations/credentials) (`client_id` y `client_secret`) al endpoint [/oauth/token](/developers/es/reference/oauth/_oauth_token/post), incluyendo el código `client_credentials` en el parámetro `grant_type` para recibir una nueva respuesta con un nuevo `access_token`.
2. Actualiza la aplicación con el Access Token recibido en la respuesta. **El _token_ recibido tiene una validez de 6 horas.**

[[[
```php
<?php
  $client = new OauthClient();
   $request = new OAuthCreateRequest();
     $request->client_secret = "CLIENT_SECRET";
     $request->client_id = "CLIENT_ID";

  $client->create($request);
?>
```
```java

OauthClient client = new OauthClient();

String clientecredentials = "TG-XXXXXXXX-241983636";
client.createCredential(clientecredentials, null);
```
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } }); 

const oauth = new OAuth(client);

oauth.create({
	'client_secret': 'your-client-secret',
	'client_id': 'your-client-id',
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
curl -X POST \
    'https://api.mercadopago.com/oauth/token'\
    -H 'Content-Type: application/json' \
    -d '{
  "client_id": "client_id",
  "client_secret": "client_secret",
  "code": "TG-XXXXXXXX-241983636",
  "grant_type": "client_credentials",
}'
]]]