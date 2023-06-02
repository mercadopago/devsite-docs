# Buenas prácticas de integración de OAuth

A la hora de utilizar OAuth, es importante tener en cuenta ciertos aspectos para que la integración funcione correctamente y puedas recibir el ‘authorization_code’ que solicitaste.

A continuación, encontrarás una guía de posibles errores y de buenas prácticas a tener en cuenta. 

## Uso correcto de los valores header en la solicitud

Utiliza siempre los header `accept` y `Content-Type` en tu solicitud POST. Ten cuidado de no agregar valores a los headers que no sean parte de la integración para evitar recibir un error de respuesta.

![oauth-params](/images/oauth/oauth-params-v3.png)


