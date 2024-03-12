# Creación
 
El flujo de `authorization_code` se caracteriza por la intervención del vendedor para autorizar explícitamente el acceso de la aplicación a sus datos y por el uso de un código otorgado por el servidor de autenticación para que la aplicación pueda obtener un _Access token_ y un refresh token asociado.
 
Debido a que se trata de un flujo basado en la redirección, debes permitir la interacción con el navegador del vendedor y recibir el `request` a través de la redirección del servidor de autorización. En este flujo, la aplicación solicita al vendedor el consentimiento expreso para acceder a los datos mediante la apertura de una página web en la que se explicitan los ámbitos a los que se solicita el acceso.
  
> WARNING
>
> Importante
>
> Recuerda que utilizarás información sensible de tus vendedores. Asegúrate de guardarla de forma segura. No la utilices en la URL de autenticación y gestiona todo el proceso únicamente desde tu servidor.

Una vez permitido el acceso, el servidor genera un código de acceso que llega a la aplicación a través de una redirección. En este paso, la aplicación solicita acceso al servidor de autenticación enviando el código obtenido y los datos de la aplicación. Una vez hecho esto, el servidor otorga el _Access token_ y el _refresh token_ a la aplicación.
 
Para generar el código de autorización, es preciso cumplir con los requisitos a continuación.
 
| Requisitos | Descripción | Especificaciones |
| --- | --- | --- |
| Cuentas de vendedor de Mercado Pago | Se requerirán cuentas de vendedor de Mercado Pago. Uno para ti y otro para el vendedor. | Cuenta de vendedor en Mercado Pago. Si no la tienes, haz [clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crear. |
| Aplicación | Las aplicaciones son las distintas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes, con el fin de tener todo organizado y mantener un control que facilite la gestión. | Para usar OAuth necesitarás tener una aplicación creada. Consulta la documentación del [Panel del desarrollador](/developers/es/guides/additional-content/your-integrations/introduction) para obtener información sobre cómo crear una aplicación. |
| Credenciales | Las [credenciales](/developers/es/guides/additional-content/your-integrations/credentials) son contraseñas únicas con las que identificamos una integración en tu cuenta y sirven para capturar pagos de forma segura en tiendas virtuales y otras aplicaciones. | Para realizar pruebas y garantizar que la integración funcione, se requerirán credenciales de prueba. Después de este paso, necesitarás credenciales de producción para recibir pagos reales. |
| Redirect URL | Dirección a la que deseas reenviar a los vendedores después de haberlos vinculado correctamente. | Esta es una dirección en tu servidor donde se recibirán los _Access tokens_. |
| URL de autenticación | Dirección a la que desea enviar a los vendedores para autorizar el acceso a datos privados. | Esta es una dirección en el servidor de Mercado Pago donde se otorga expresamente el permiso para acceder a los datos privados. |

## Configurar PKCE

El **PKCE** (_Proof Key for Code Exchange_) es un protocolo de seguridad utilizado con OAuth para proteger contra ataques de código malicioso durante el intercambio de códigos de autorización por _Access Token_. Añade una capa adicional de seguridad generando un _verifier_ que se transforma en un challenge para asegurar que, incluso si el código de autorización es interceptado, no sea útil sin el _verifier_ original.

En Mercado Pago, puedes **habilitar la verificación por PKCE** desde la pantalla de [Detalles de aplicación](/developers/es/docs/your-integrations/application-details), lo que te permitirá enviar un código secreto adicional para ser utilizado durante el proceso de autorización.

> WARNING
>
> Importante
>
> Con el campo PKCE habilitado, Mercado Pago comenzará a requerir los campos `code_challenge` y `code_method` como obligatorios en las solicitudes de OAuth.

Sigue los pasos a continuación para generar los campos obligatorios y configurar la verificación por PKCE.

1. Los campos pueden generarse de varias formas, ya sea con desarrollo propio o mediante el uso de SDKs. Sigue los pasos necesarios descritos en [esta documentación oficial](https://datatracker.ietf.org/doc/html/rfc7636#section-4) para generar los campos que serán requeridos.
2. Después de generar y cifrar los campos, será necesario enviar los códigos respectivos a Mercado Pago a través de `query_params` utilizando la URL de autenticación a continuación.

```URL
https://auth.mercadopago.com/authorization?response_type=code&client_id=$APP_ID`redirect_uri=$YOUR_URL&code_challenge=$CODE_CHALLENGE&code_challenge_method=$CODE_METHOD
```

- **Redirect_uri**: URL proporcionada en el campo "Redirect URL" de [tu aplicación](/developers/es/guides/additional-content/your-integrations/application-details).
- **Code_verifier**: código que debe generarse, respetando los requisitos para su funcionamiento, que son: una secuencia aleatoria de caracteres con una longitud entre 43 y 128 caracteres, que incluya letras mayúsculas, minúsculas, números y algunos caracteres especiales. Por ejemplo: **47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU**.
- **Code_challenge**: a continuación, es necesario crear un `code_challenge` a partir del `code_verifier` utilizando una de las siguientes transformaciones:
  - Si es posible utilizar **S256**, será necesario seleccionar esta opción transformando el `code_verifier` en un `code_challenge` mediante una codificación `BASE64URL` después de aplicar la función "SHA256".
  - Si no es posible utilizar **S256** por alguna razón técnica y el servidor admite el método **Plain**, es posible definir el `code_challenge` igual al `code_verifier`.
- **Code_challenge_method**: es el método utilizado para generar el `code_challenge`, según se describe en el ítem anterior. Este campo puede ser, por ejemplo, **S256** o **Plain**, dependiendo de la codificación seleccionada en la etapa de `code_challenge`. <br><br>

3. Después de enviar correctamente los códigos a Mercado Pago, obtendrás la autorización necesaria obtener el _Access token_ y realizar la verificación por PKCE en las transacciones realizadas con OAuth.

## Obtener Access token

_Access token_ es el código utilizado en diferentes solicitudes de origen público para acceder a un recurso protegido que representa una autorización otorgada por un vendedor a una aplicación cliente que contiene scopes y un tiempo de vigencia limitado para dicho acceso. Sigue los pasos a continuación para obtenerlo.

1. Edita tu aplicación para que contenga tu Redirect URL. Consulta [Editar aplicación](/developers/es/guides/additional-content/your-integrations/application-details).
2. Envía la URL de autenticación con los siguientes campos al vendedor con cuya cuenta deseas vincular  la tuya:

   |Descripción|URL| 
   |---|---|
   | URL de autenticación | https://auth.mercadopago.com/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com |
 
     * **client_id**: edita tu aplicación para que contenga tu Redirect  URL. Consulta [ID de aplicación](/developers/es/guides/additional-content/your-integrations/application-details).
     * **state**: reemplaza el valor "RANDOM_ID" con un identificador que sea único para cada intento y que no incluya información confidencial para que puedas identificar de quién es el código recibido.
     * **redirect_uri**: agrega la URL informada en el campo Redirect URL de tu aplicación.
     <br/>
 
3. Espera a que el vendedor acceda a la URL y permita el acceso. Al acceder a la URL, el vendedor será dirigido a Mercado Pago y deberá iniciar sesión en su cuenta para realizar la autorización.
4. Verifica la Redirect URL de tu servidor para ver el código de autorización devuelto en el parámetro de **code**.

   |Descripción|URL|
   |---|---|
   | Redirect URL | https://www.redirect-url.com?code=CODE&state=RANDOM_ID |
 
5. Envía tus credenciales y código de autorización al endpoint [/oauth/token](/developers/es/reference/oauth/_oauth_token/post) para recibir el _Access token_ como respuesta.
 
> WARNING
>
> Importante
>
> Se recomienda realizar este procedimiento de una única vez junto con el usuario, ya que el código recibido por la Redirect URL después de la autorización tiene una validez de 10 minutos y el _Access token_ recibido a través del endpoint tiene una validez de 180 días.
> <br><br>
> Para generar credenciales de sandbox para pruebas, envíe el parámetro `test_token` con el valor `true`.