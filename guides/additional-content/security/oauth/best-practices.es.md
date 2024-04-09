# Buenas prácticas de integración de OAuth

A la hora de utilizar OAuth, es importante tener en cuenta ciertos aspectos para que la integración funcione correctamente.

A continuación, encontrarás una guía de posibles errores y de buenas prácticas a tener en cuenta. 

## Uso correcto de los valores en los header de la solicitud

Utiliza siempre los header `accept` y `content-type` en tu solicitud POST. Ten cuidado de no agregar valores a los headers que no sean parte de la integración para evitar recibir un error como respuesta.

![oauth_header](oauth/oauth_header.png)

## Uso correcto de los valores 'params'

En tu llamada POST, ten cuidado de utilizar sólo los valores `params` solicitados. No agregues otros valores no requeridos ya que, de hacerlo, recibirás un código de error como respuesta.

![oauth_params](oauth/oauth-1.png)


## Uso correcto de los Query Params

Recuerda no enviar ningún parámetro dentro de Query Params. Envía los parámetros dentro del cuerpo de la solicitud tal como se indica en [Referencia de API](/developers/es/reference/oauth/_oauth_token/post).

![oauth_queryparams](oauth/oauth_queryparams_v2.png)

## Uso correcto del campo 'grant_type'

Utiliza siempre el campo `grant_type` en tus solicitudes con el valor `authorization_code`. Recuerda que si envias otro valor, es posible que recibas un error como respuesta.

![oauth_grant_type](oauth/oauth_granttype_v2.png)

## Uso del campo 'state' en la solicitud del 'autorization code'

Para aumentar la seguridad de la integración, recomendamos incluir el parámetro `state` en el flujo de solicitud del `authorization code`. Así, podrás garantizar que la respuesta pertenezca a una solicitud iniciada por la misma aplicación. 

**Asegúrate de que el `redirect_uri` sea una URL estática**. Si deseas enviar parámetros adicionales en esa URL, utiliza el parámetro `state` para incluir esa información. De lo contrario, la llamada recibirá una respuesta de error si el `redirect_uri` no coincide exactamente con la configuración de la aplicación.


![oauth_state](oauth/oauth_state_v4.png)

Para encontrar más información acerca de la solicitud, sus parámetros y las posibles respuestas de éxito y error que puedes recibir, ve a la documentación de [Referencia de API](/developers/es/reference/oauth/_oauth_token/post).


