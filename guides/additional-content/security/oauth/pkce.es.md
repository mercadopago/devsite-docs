# PKCE

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
https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=$APP_ID`redirect_uri=$YOUR_URL&code_challenge=$CODE_CHALLENGE&code_challenge_method=$CODE_METHOD
```

- **Redirect_uri**: URL proporcionada en el campo "Redirect URL" de [tu aplicación](/developers/es/guides/additional-content/your-integrations/application-details).
- **Code_verifier**: código que debe generarse, respetando los requisitos para su funcionamiento, que son: una secuencia aleatoria de caracteres con una longitud entre 43 y 128 caracteres, que incluya letras mayúsculas, minúsculas, números y algunos caracteres especiales. Por ejemplo: **47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU**.
- **Code_challenge**: a continuación, es necesario crear un `code_challenge` a partir del `code_verifier` utilizando una de las siguientes transformaciones:
  - Si es posible utilizar **S256**, será necesario seleccionar esta opción transformando el `code_verifier` en un `code_challenge` mediante una codificación `BASE64URL` después de aplicar la función "SHA256".
  - Si no es posible utilizar **S256** por alguna razón técnica y el servidor admite el método **Plain**, es posible definir el `code_challenge` igual al `code_verifier`.
- **Code_challenge_method**: es el método utilizado para generar el `code_challenge`, según se describe en el ítem anterior. Este campo puede ser, por ejemplo, **S256** o **Plain**, dependiendo de la codificación seleccionada en la etapa de `code_challenge`. <br><br>

3. Después de enviar correctamente los códigos a Mercado Pago, obtendrás la autorización necesaria para realizar la verificación por PKCE en las transacciones realizadas con OAuth.
4. Verifica en la Redirect URL de tu servidor (https://www.redirect-url.com?code=CODE&state=RANDOM_ID) el código de autorización devuelto en el parámetro `code`.
5. Finalmente, envía tus credenciales y el código de autorización al endpoint [/oauth/token](/developers/es/reference/oauth/_oauth_token/post) para recibir como respuesta el _Access Token_.