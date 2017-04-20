# MP Connect

## Crea tu aplicación

Crea tu aplicación y obtén el APP_ID (identificador de aplicación) necesario para el siguiente paso.
Asegúrate de marcar la opción para indicar que deseas operar en MP Connect / 
modo marketplace y seleccionar el scope offline_access.

## Conecta tus usuarios

Para operar en MercadoPago en nombre de tu usuario, debes primero solicitarle autorización. Para esto, redirige al usuario a la siguiente URL enviando en client_id el valor de APP_ID que obtuviste en el paso anterior:

https://auth.mercadopago.com.ar/authorization?client_id=APP_ID&response_type=code&platform_id=mp&redirect_uri=http%3A%2F%2Fwww.URL_de_retorno.com

Recibirás el código de autorización en la redirect_uri que especificaste:

http://www.URL_de_retorno.com?code=AUTHORIZATION_CODE

Este AUTHORIZATION_CODE tiene un tiempo de validez de 10 minutos, así que asegúrate de utilizarlo pronto.

Consejo: puedes incluir algún parámetro en redirect_uri para identificar a qué vendedor corresponde el código de autorización que recibiste, como su e-mail, el ID de usuario en tu sistema o cualquier otra referencia útil. 

Puedes recibir notificaciones vía Webhooks cada vez que un usuario autorice o desautorice tu aplicación.

