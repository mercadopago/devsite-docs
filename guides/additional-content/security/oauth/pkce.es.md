# PKCE

El **PKCE** (_Proof Key for Code Exchange_) es un protocolo de seguridad utilizado con OAuth para proteger contra ataques de código malicioso durante el intercambio de códigos de autorización por un access token. Añade una capa adicional de seguridad generando un _verifier_ que se transforma en un challenge para asegurar que incluso si el código de autorización es interceptado, no sea útil sin el _verifier_ original.

En Mercado Pago, puedes **habilitar la verificación por PKCE** desde la pantalla de [Detalles de aplicación](/developers/es/docs/your-integrations/application-details), lo que te permitirá enviar un código secreto adicional para ser utilizado durante el proceso de autorización.

> WARNING
>
> Importante
>
> Con este campo habilitado, Mercado Pago comenzará a requerir los campos `code_challenge` y `code_method` como obligatorios en las solicitudes de OAuth.

Sigue los pasos a continuación para generar los campos obligatorios y configurar la verificación por PKCE.

1. Los campos pueden generarse de varias formas, ya sea con desarrollo propio o mediante el uso de SDKs. Sigue los pasos necesarios descritos en [esta documentación oficial](https://datatracker.ietf.org/doc/html/rfc7636#section-4) para generar los campos que serán requeridos.
2. Después de generar y cifrar los campos, será necesario enviar los códigos respectivos a Mercado Pago. Para ello, envíalos a través de `query_params` utilizando la URL de autenticación a continuación.

```URL
https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=$APP_ID`redirect_uri=$YOUR_URL&code_challenge=$CODE_CHALLENGE&code_challenge_method=$CODE_METHOD
```

- `redirect_uri`: URL indicada en el campo Redirect URL de [tu aplicación](/developers/es/guides/additional-content/your-integrations/application-details).
- `code_challenge`: es el código de verificación generado a partir de un `code_verifier` (**una secuencia aleatoria de caracteres con longitud entre 43-128 caracteres, con letras mayúsculas, minúsculas, dígitos y algunos caracteres especiales**) y cifrado con el `code_challenge_method`. Consulta la [documentación oficial](https://datatracker.ietf.org/doc/html/rfc7636#section-4) para obtener más información.
- `code_challenge_method`: método _hash_ utilizado para generar el `code_challenge`, que por defecto utiliza `S256` para especificar que el `code_challenge` está cifrado mediante el algoritmo de cifrado **SHA-256**. Consulta la [documentación oficial](https://datatracker.ietf.org/doc/html/rfc7636#section-4) para obtener más información.

3. Después de enviar correctamente los códigos a Mercado Pago, obtendrás la autorización necesaria para realizar la verificación por PKCE en las transacciones realizadas con OAuth.
4. Verifica en la Redirect URL de tu servidor (https://www.redirect-url.com?code=CODE&state=RANDOM_ID) el código de autorización devuelto en el parámetro `code`.
5. Finalmente, envía tus credenciales y el código de autorización al endpoint [/oauth/token](/developers/es/reference/oauth/_oauth_token/post) para recibir como respuesta el _Access Token_.