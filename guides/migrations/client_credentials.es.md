# Modifcación del flujo de autenticación

Se llevarán a cabo modificaciones sobre el flujo de autenticación para cumplir con los estándares requeridos del protocolo OAuth2. Para que estos cambios puedan realizarse de forma transparente, es necesario que realices ciertas modificaciones en tu integración.

## ¿Qué es OAuth2?

OAuth2 es un protocolo abierto de seguridad que nos indica cómo debemos interactuar con nuestros integradores para poder identificarlos de manera correcta y otorgarles acceso a recursos privados.

## ¿A quiénes afecta?

Si estás usando el flujo autenticación mediante Client ID y Client Secret, este cambio podría afectarte.
Una vez implementadas las modificaciones, ya no enviaremos el campo refresh_token en la respuesta. Ejemplo:


Respuesta actual:

```json
{
    access_token: “APP_USR-XXXXXX”,
    refresh_token: “TG-XXXXX”,
    scope: [read, write, offline],
    token_type: "bearer",
    expires_in: 500000,
    creation_date: “2018-06-15T12:00:00Z”,
    user_id: 9999
}
```

Respuesta nueva:

```json
{
    access_token: “APP_USR-XXXXXX”,
    refresh_token: “”,
    scope: [read, write, offline],
    token_type: "bearer",
    expires_in: 500000,
    creation_date: “2018-06-15T12:00:00Z”,
    user_id: 9999
}
```

Por este motivo, las integraciones que utilicen el flujo refresh token se verán afectadas al no poder renovar las credenciales.


## ¿En qué fecha se realizará el cambio?

Los cambios se llevarán a cabo el día 20 de Agosto de 2018.

## Recomendaciones

- Solicitar nuevas credenciales para cada flujo de pago.
- Evaluar si realmente es necesario renovar las credenciales automáticamente en tu integración. Si éste fuera el caso, te solicitamos contactar a nuestro soporte técnico para evaluar tu caso particular.
