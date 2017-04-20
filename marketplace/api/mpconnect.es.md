# Vinculando cuentas

MercadoPago te permite acceder a la información de las cuentas de tus clientes. Esto te posibilita realizar cobros para ellos y acceder a la información de los mismos.

Además, si eres una tienda virtual o cualquier otro sistema que permita a tus clientes cobrar, puedes ofrecerles cualquier solución de pagos y cobrar una comisión por el servicio.


## Cómo es el flujo?

Cuando tu cliente desee conectar su cuenta de Mercado Pago a tu aplicación para que gestiones sus pagos, tendrá que realizar los siguientes pasos:

1. Comenzando en tu sitio, tu cliente podrá vincular su cuenta a tu aplicación a través de un link que lo llevará a una ventana de Mercado Pago. De este modo, podrá darle a tu aplicación los permisos necesarios para gestionar sus cobros.

2. En la ventana de Mercado Pago, tu cliente deberá iniciar sesión con su cuenta de Mercado Pago o crear una nueva cuenta en caso que no tenga una.

3. Una vez que finalice el flujo, el cliente será redirigido nuevamente a tu sitio (especificamente a la redirect_uri definida en tu aplicación), enviando un código de autorización. En caso que la vinculación sea denegada, recibirás un error en lugar del código de autorización.

4. Tu sitio usará el código de autorización del paso anterior para obtener las credenciales de tu cliente y almacenarlas en tu sitio.

5. A partir de este momento, podrás gestionar los pagos de tu cliente utilizando las credenciales obtenidas en el paso anterior.

## Implementación

### 1. Crea tu aplicación

Crea tu aplicación y obtén el APP_ID (identificador de aplicación) necesario para el siguiente paso. 

Asegúrate de marcar la opción para indicar que deseas operar en modo marketplace y seleccionar el scope offline_access.

### 2. Conecta tus usuarios

Para operar en MercadoPago en nombre de tu cliente, debes primero solicitarle autorización. 
Para esto, redirige a tu cliente a la siguiente URL enviando en client_id el valor de APP_ID que obtuviste en el paso anterior:

https://auth.mercadopago.com.ar/authorization?client_id=APP_ID&response_type=code&platform_id=mp&redirect_uri=http%3A%2F%2Fwww.URL_de_retorno.com

Recibirás el código de autorización en la redirect_uri que especificaste:

http://www.URL_de_retorno.com?code=AUTHORIZATION_CODE

Este AUTHORIZATION_CODE tiene un tiempo de validez de 10 minutos, así que asegúrate de utilizarlo pronto.

Consejo: puedes incluir algún parámetro en redirect_uri para identificar a qué vendedor corresponde el código de autorización que recibiste, como su e-mail, el ID de usuario en tu sistema o cualquier otra referencia útil. 

### 3. Obtén las credenciales de tu usuario

Usa el código de autorización obtenido en el paso anterior para generar las credenciales del usuario mediante la API de OAuth y así poder operar en su nombre.

Utiliza las credenciales de tu aplicación:  
SHORT_NAME:
CLIENT_ID:
CLIENT_SECRET:

``
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=CLIENT_ID' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'grant_type=authorization_code' \
     -d 'code=AUTHORIZATION_CODE' \
     -d 'redirect_uri=REDIRECT_URI'
     ``

Los parámetros que debes incluir son:

client_id: El valor de APP_ID.
client_secret: Tu CLIENT_SECRET.
code: El código de autorización que obtuviste al redirigir al usuario de vuelta a tu sitio.
redirect_uri: Debe ser la misma Redirect URI que configuraste en tu aplicación.
La respuesta contendrá las credenciales del usuario conectado:

``
{
    "access_token":"seller_access_token", 
    "token_type":"bearer", 
    "expires_in":10800, 
    "scope":"offline_access read write", 
    "refresh_token":"TG-XXXXXXXX"
``

Además del access_token y la public_key generados para ser usados como las credenciales de tu usuario, la respuesta también contiene un refresh_token que puedes usar para renovarlas, y el identificador de la cuenta de MercadoPago de tu usuario (user_id).

Consejo: Guarda y mantén actualizadas las credenciales obtenidas, asociadas a tus usuarios, ya que las necesitarás para operar más adelante. Si no lo haces, deberás volver a solicitar la autorización al usuario.

### 4. Recibe notificaciones
Utilizá webhooks para recibir todas las novedades cada vez que un cliente autorice o desautorice tu aplicación.


## Tu cliente ya está conectado!
A partir de ahora, podes gestionar los pagos de tu cliente utilizando las credenciales que obtuviste.

## Próximos pasos:
Recibir un pago para tu cliente cobrando o no una comisión.
