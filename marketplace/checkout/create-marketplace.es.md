# Comenzar a crear mi Marketplace

* Crea una Aplicación y solita a tus vendedores que se vinculen
* Crea preferencias de pago en nombre de tus vendedores
* El pago se divide automáticamente entre tu cuenta y la de tus vendedores

## Vinculación de cuentas

Crea tu aplicación desde [este link](https://applications.mercadopago.com/), marcando la opción de modo Marketplace y el scope de offline\_access. Obtén el APP\_ID (identificador de aplicación) necesario para el siguiente paso. 

Para operar en MercadoPago en nombre de tu vendedor, debes primero solicitarle autorización. Para esto, redirige al usuario a la siguiente URL enviando en client_id el valor de APP\_ID que obtuviste en el paso anterior:

https://auth.mercadopago.com.ar/authorization?client_id=APP_ID&response_type=code&platform_id=mp&redirect_uri=http%3A%2F%2Fwww.URL_de_retorno.com

Recibirás el código de autorización en la redirect_uri que especificaste:

http://www.URL_de_retorno.com?code=AUTHORIZATION_CODE  
  
    
Este AUTHORIZATION_CODE tiene un tiempo de validez de 10 minutos, así que asegúrate de utilizarlo pronto.

_**Consejo**: puedes incluir algún parámetro en redirect\_uri para identificar a qué vendedor corresponde el código de autorización que recibiste, como su e\-mail, el ID de usuario en tu sistema o cualquier otra referencia útil._


## Almacena las credenciales de tus vendedores


Usa el código de autorización, obtenido en el paso anterior, para obtener las credenciales del usuario mediante la API de OAuth y así poder operar en su nombre.  

Request:

```curl 
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=CLIENT_ID' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'grant_type=authorization_code' \
     -d 'code=AUTHORIZATION_CODE' \
     -d 'redirect_uri=REDIRECT_URI'
```

Los parámetros que debes incluir son:

**client\_id:** El valor de APP\_ID  
**client\_secret:** Tu CLIENT\_SECRET  
**code:** El código de autorización que obtuviste al redirigir al usuario de vuelta a tu sitio  
**redirect_uri:** Debe ser la misma Redirect URI que configuraste en tu aplicación.


Response:

```
{
    "access_token":"seller_access_token", 
    "token_type":"bearer", 
    "expires_in":10800, 
    "scope":"offline_access read write", 
    "refresh_token":"TG-XXXXXXXX"
}

```

En la respuesta, además del **Access Token** del vendedor que se ha vinculado, obtienes el **Refresh Token** que debes utilizar para renovar periódicamente sus credenciales dado a que éstas tienen un tiempo de validéz dentro de tu marketplace.


### Renueva las credenciales de tus vendedores

Este proceso debes efectuarlo periódicamente para asegurar tener almacenado en tu sistema credeciales de vendedores que esten vigentes, dado a que éstas vencen 6 meses.  
Además, sugerimos que si en el flujo de pago obtienes algun error por el Access Token actualizado, tengas programado que se refresquen automáticamente y se reintete el pago, antes de mostrar un error al comprador.



```
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=CLIENT_ID' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=USER_RT'

```

## Integra el checkout

Para efectivamente cobrar en nombres de tus vendedores debes integrar checkout básico, generando las preferencias de pago con el Access Token de cada vendedor para tu aplicación. 
Además en la preferencia debes incluir el atributo *marketplace_fee* para indicar qué monto te corresponde cobrar.   
El vendedor va a recibir la diferencia entre el monto total y las comisiones, tanto la de Mercado Pago como la del Marketplace, así como cualquier otro importe que se deba descontar de la venta.


