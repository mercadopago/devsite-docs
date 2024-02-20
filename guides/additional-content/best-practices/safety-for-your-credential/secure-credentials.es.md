# Mantén tus credenciales seguras 

Al integrar las soluciones de Mercado Pago, manejarás datos sensibles que deberás proteger de posibles pérdidas o vulnerabilidades. Estos datos pueden ser tus credenciales, las de tus integraciones y las de tus clientes. 

Las credenciales son contraseñas únicas con las que identificamos una integración en tu cuenta. Sirven para capturar pagos en tiendas online y otras aplicaciones de forma segura. Para conocer información en detalle de las credenciales, ve a [Credenciales](/developers/es/guides/additional-content/your-integrations/credentials).

Te mostraremos cómo puedes optimizar la seguridad de tus integraciones de manera simple y rápida.

## Envía el access token por header

Cada vez que realices llamadas a la API, **envía el Access Token por header** en lugar de hacerlo por query param. Esto te permitirá resguardar tu access_token para que no sea expuesto a cualquier persona ajena a tu integración.

Por ejemplo, si realizas un GET al recurso _/users/me_, sería de esta manera:

```curl
curl -H 'Authorization: Bearer APP_USR-12345678-031820-X-12345678' \
https://api.mercadolibre.com/users/me
```
> WARNING
>
> Importante
>
> Mantén siempre tus credenciales ocultas. Nunca expongas tu Access Token en algún parámetro o del lado público de tu integración.

## Usa la Public Key en el front-end

Public Key es una llave pública de la aplicación que normalmente se utiliza en el frontend y permite, por ejemplo, conocer los métodos de pago y cifrar los datos de la tarjeta. Recuerda utilizar únicamente este tipo de llave del lado público end de tu integración. Para conocer más, ve a [Credenciales](/developers/es/guides/additional-content/your-integrations/credentials).

## Renueva tus credeciales periódicamente

Te recomendamos renovar tus credenciales de forma frecuente para evitar posibles vulnerabilidades. 

Renueva tus credenciales de forma simple siguiendo estos pasos:

1. Ve al [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app). 
2. Accede a la aplicación cuyas credenciales quieres renovar.
3. Selecciona Credenciales de Producción.
4. Una vez allí, podrás renovar el Access Token y el Client Secret. Haz clic en **Más opciones > Renovar**.

> WARNING 
> 
> Importante
> 
> Cuando renueves tus credenciales de producción, dispondrás de 12 horas durante las cuales quedarán activas las credenciales antiguas. Es importante que renueves las credenciales en tu integración dentro de esta franja de tiempo.
## Comparte tus credenciales por Dashboard

Si necesitas compartir las credenciales de tu aplicación con otras cuentas de Mercado Pago, hazlo de manera segura a través de Tus Aplicaciones. 
Cuando compartes tus credenciales permites que otra cuenta de Mercado Pago las vea y pueda usarlas. Para hacerlo, sigue estos pasos:

1. Ve al [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).
2. Accede a la aplicación cuyas credenciales deseas compartir.
3. Haz clic en **Compartir mis credenciales**.
4. Ingresa los e-mail de las cuentas de Mercado Pago con quien deseas compartir tus credenciales. Se compartirán tanto las de prueba como las de producción. 
5. Para finalizar, haz clic en **Compartir credenciales**. 

Puedes quitar estos permisos cuando quieras desde el panel de Credenciales.

> Una vez que tu integración esté completa, elimina los permisos para compartir credenciales que ya no sean necesarios para garantizar la privacidad y la seguridad.
## Utiliza OAuth para gestionar las credenciales de terceros

OAuth es un protocolo de autorización que permite que las aplicaciones tengan acceso limitado a la información privada de las cuentas de Mercado Pago, a través del protocolo HTTP que introduce una capa de autenticación y autorización en la que solicitas acceso a los recursos protegidos de los vendedores, a través de un token de acceso limitado a una aplicación en particular, sin necesidad de las credenciales de los vendedores a través de los flujos de acceso. 

Para conocer más sobre OAuth, ve a [esta documentación](/developers/es/guides/additional-content/security/oauth/introduction).