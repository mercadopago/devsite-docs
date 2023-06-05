# Buenas prácticas de integración de OAuth

A la hora de utilizar OAuth, es importante tener en cuenta ciertos aspectos para que la integración funcione correctamente y puedas recibir el ‘authorization_code’ que solicitaste.

A continuación, encontrarás una guía de posibles errores y de buenas prácticas a tener en cuenta. 

## Uso correcto de los valores header en la solicitud

Utiliza siempre los header `accept` y `Content-Type` en tu solicitud POST. Ten cuidado de no agregar valores a los headers que no sean parte de la integración para evitar recibir un error de respuesta.

## Uso correcto de los valores ‘params’

En tu llamada POST, ten cuidado de utilizar sólo los valores ‘params’ solicitados. No agregues otros valores no requeridos ya que, de hacerlo, recibirás un código de error como respuesta.

![oauth-params](/images/oauth/oauth-params-v4)


## Uso correcto de los Query Params

Recuerda no enviar ningún parámetro dentro de Query Params. Envía los parámetros dentro del cuerpo de la solicitud tal como se indica en [Referencia de API](/developers/es/reference/oauth/_oauth_token/post).


## Uso correcto del campo ‘grant_type‘

Utiliza siempre el campo ‘grant_type‘ en tus solicitudes con el valor ‘authorization_code'. Recuerda que si envias otro valor, es posible que recibas un error como respuesta.



Para encontrar más información acerca de la solicitud, sus parámetros y las posibles respuestas de éxito y error que puedes recibir, ve a la documentación de [Referencia de API](/developers/es/reference/oauth/_oauth_token/post).


