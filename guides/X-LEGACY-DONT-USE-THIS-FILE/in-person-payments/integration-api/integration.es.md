# Integra la API a tus Puntos de Venta

Sigue estos pasos para empezar a integrar la API de Integraciones a tus Puntos de Venta.

## 1. Obtén las credenciales de identificación

### Accede a una cuenta de Mercado Pago

Para poder comenzar la integración, es necesario contar con una cuenta de Mercado Pago o Mercado Libre.
Puedes [Ingresar](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/pre-requisites)
a una cuenta ya existente o [Crear una cuenta nueva](https://www.mercadopago[FAKER][URL][DOMAIN]).

### Crea una aplicación

Luego, necesitarás crear una aplicación para obtener las credenciales. Es fácil, te contamos cómo hacerlo:

1. Ingresa a [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Dentro de la sección **Tus aplicaciones**, haz clic en el signo "+" para crear tu primera aplicación, o elige “Crear nueva aplicación” si ya tienes otras.
3. Ponle un nombre a tu aplicación con el que puedas identificarla más adelante.
4. Elige "Mercado Pago Point" como producto que vas a integrar.
5. Acepta nuestros Términos y Condiciones. 

¡Y listo!

> NOTE
>
> Nota
>
> Si vas a operar en nombre de otros vendedores, puedes gestionar la vinculación de manera segura integrando [OAuth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/introduction).

### Accede a las credenciales de tu aplicación

Una vez que tengas una aplicación creada, podrás acceder a tus credenciales. Puedes encontrarlas en **Detalles de la aplicación > Credenciales** dentro del [Panel del desarrollador](/developers/panel/app). Con ellas puedes conectar una integración a tu cuenta y configurarla a tu manera.

### Genera usuarios de prueba

Puedes probar tus integraciones en un ambiente controlado con usuarios de prueba. Puedes crearlos usando el siguiente comando:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]","description" : "a description"}'
```

Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Ten en cuenta que los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago. 


## 2. Asocia tu dispositivo Point a tu cuenta de Mercado Pago

Ahora vas a vincular tu dispositivo Point a tu cuenta de Mercado Pago. Para eso, necesitas contar con nuestra aplicación en tu celular. Puedes obtenerla para sistemas operativos [iOS](https://itunes.apple.com/ar/app/mercado-pago/id925436649?mt=8) y [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=es_419).
También deberás contar con un dispositivo Point.

### Escanea el código QR de tu dispositivo Point

Primero, inicia sesión en la aplicación de Mercado Pago. Luego, oprime en el ícono QR y escanea el código que aparece al encender tu dispositivo Point. Y listo, tu dispositivo Point quedará vinculado a tu cuenta.


### Configura tu tienda y tu caja

Una vez que hayas vinculado tu dispositivo Point a tu cuenta de Mercado Pago, debes completar los datos de tu negocio y configurar tu caja en el [sitio de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]). Para hacerlo, deberás ingresar en **Tu negocio > Locales y cajas**.

### Activa el modo integrado en tu dispositivo Point

Para integrar tu dispositivo Point con nuestra API es necesario activar el modo operativo punto de venta (PDV). Para lograrlo, ejecuta el siguiente comando:

``` bash
 curl --location --request PATCH 'https://api.mercadopago.com/point/integration-api/devices/{{device.id}}' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "operating_mode": "PDV"
}'
```

Recibirás una respuesta como esta:

``` json 
{
"operating_mode": "PDV"
}
```

> En caso de que requieras utilizar el dispositivo en el modo no integrado debes configurar el campo `operating_mode` con el valor `STANDALONE`.


> PREV_STEP_CARD_ES
>
> Introducción
>
> Lee nuestra introducción a API de Integraciones Point.
>
> [Introducción](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/introduction)

> NEXT_STEP_CARD_ES
>
> Comienza a procesar tus pagos
>
> Crea una intención de pago y asígnala a un dispositivo Point.
>
> [Comienza a procesar tus pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/create-payment-intent)






