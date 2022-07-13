# Requisitos previos para integrarte


Ten en cuenta estos aspectos antes de empezar:

## 1. Accede a una cuenta

Para poder comenzar la integración, es necesario **contar con una cuenta de Mercado Pago o Mercado Libre**. 

Puedes [Ingresar](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/in-person-payments/qr-code/pre-requisites) a una cuenta que ya exista o [Crear una cuenta nueva](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing).

## 2. Crea una aplicación

Para realizar transacciones a través de la integración de Mercado Pago, se debe crear una credencial. Esta credencial tendrá una identificación y un Access token, solo con este token podrás realizar transacciones utilizando una cuenta de Mercado Pago. 
Crea una aplicación para obtener credenciales y configurar notificaciones webhooks.

Es fácil, te contamos cómo hacerlo:

1. Ingresa a [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Elige “Nueva aplicación” o “Crear tu primera aplicación”.
3. Ponle un nombre con el que puedas identificarla más adelante.
4. Acepta nuestros Términos y Condiciones. ¡Y listo!

Si no tiene ninguna aplicación registrada, [vea el tutorial](https://youtu.be/FB4aL9D0Of4?list=PLCazXKuqZp3hGVY3bBhEO0ItFhIic5UpK).

> NOTE
>
> Nota
>
> En caso de PDV integrador con varias conexiones con cuentas Mercado Pago, ver tema 4 y 5. Atención a la seguridad de su integración e implemente [Oauth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/introduction).


## 3. Generar usuarios de prueba

Para comenzar la integración es necesario que tengas como mínimo dos usuarios: un comprador y un vendedor.

Ejecuta el siguiente comando para generar un usuario de prueba:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]","description" : "a description"}'
```

> NOTE
> 
> Nota
> 
> Las credenciales que utilices deben ser las productivas de la cuenta con la cual vayas a operar.  

Respuesta:

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "site_id": "[FAKER][GLOBALIZE][UPPER_SITE_ID]",
    "description": "a description",
    "email": "test_user_123456@testuser.com",
    "date_created": "2021-11-04T12:02:35Z",
    "date_last_updated": "2021-11-04T12:02:35Z"
}
```

> WARNING
> 
> IMPORTANTE
> 
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el email y password de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * Para hacer pagos de prueba te recomendamos usar montos bajos.
> * Tanto el comprador como el vendedor deben ser usuarios de prueba.
> * Usa tarjetas de pruebas, ya que no es posible retirar el dinero.
> * Video tutorial sobre cómo crear un [usuario de prueba](https://youtu.be/VgXsbJB6rY0?list=PLCazXKuqZp3hGVY3bBhEO0ItFhIic5UpK) 

Una vez creados los usuarios de pruebas, ya puedes comenzar con la integración y crear las sucursales y cajas.

## 4. Cómo obtener tu Access token (OAuth)

Si eres un integrador que trabajará con varios comercios para que operen con Mercado Pago, te recomendamos realizar el proceso 
OAuth - autenticación entre cuentas, este proceso consiste en que el cliente permita que sus datos sean compartidos con un sistema de terceros de forma segura. 
 
El access token no se puede compartir de ninguna otra forma que no sea mediante OAuth. [Mas informaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/qr-code/additional-content/credentials)

## 5. Cómo identificar tu integración (Sponsor ID)

Para identificar las órdenes que son realizadas por tu punto de venta, incluye el Sponsor ID, consulta en las APIs de [órdenes presenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference) cómo enviar esta información.
 
Paso a paso:
> * Crear una cuenta en el portal de Mercado Pago (identificación del Integrador).
> * Obtén la identificación del usuario (Cust ID o User ID) de su cuenta.
> * Incluye el ID de usuario de su cuenta de integrador dentro del sponsor ID del vendedor.
> * Envíe el sponsor ID en todas las transacciones QR. [Ver api](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).


> NEXT_STEP_CARD_ES
>
> Sucursales y Cajas
>
> Para realizar la integración, primero debes configurar tus sucursales y cajas.
>
> [Sucursales y Cajas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/qr-code/stores-pos/introduction)