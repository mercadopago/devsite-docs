# Integra la API de Integraciones

Sigue estos pasos para empezar a integrar la API de Integraciones a tus Puntos de Venta.

## 1. Obtén las credenciales de identificación

### Accede a una cuenta de Mercado Pago

Para poder comenzar la integración, es necesario contar con una cuenta de Mercado Pago o Mercado Libre.
Puedes [Ingresar](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/pre-requisites)
a una cuenta ya existente o [Crear una cuenta nueva](https://www.mercadopago[FAKER][URL][DOMAIN]).

### Crea una aplicación

Luego, necesitarás crear una aplicación para obtener las credenciales. Es fácil, te contamos cómo hacerlo:

1. Ingresa a [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
1. Dentro de la sección **Tus aplicaciones**, haz clic en el signo "+" para crear tu primera aplicación, o elige “Crear nueva aplicación” si ya tienes otras.
1. Ponle un nombre a tu aplicación con el que puedas identificarla más adelante.
1. Elige "Mercado Pago Point" como producto que vas a integrar.
1. Acepta nuestros Términos y Condiciones. 

¡Y listo!

> NOTE
>
> Nota
>
> Si vas a operar en nombre de otros vendedores, puedes gestionar la vinculación de manera segura integrando [OAuth]](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth).

### Accede a las credenciales de tu aplicación

Una vez que tengas una aplicación creada, podrás acceder a [tus credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials). Con ellas puedes conectar una integración a tu cuenta y configurarla a tu manera.

### Genera usuarios de prueba

Puedes probar tus integraciones en un ambiente controlado con usuarios de prueba. Puedes crearlos usando el siguiente comando:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${PROD_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":----[mla]----"MLA"------------ ----[mlb]----"MLB""------------ ----[mlm]----"MLM"------------}'
```
Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Ten en cuenta que los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago. 



## 2. Asocia tu dispositivo Point a tu cuenta de Mercado Pago

Ahora vas a vincular tu dispositivo Point a tu cuenta de Mercado Pago. Para eso, necesitas contar con nuestra aplicación en tu celular. Puedes obtenerla para sistemas operativos [iOS](https://itunes.apple.com/ar/app/mercado-pago/id925436649?mt=8) y [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=es_419).
También deberás contar con un dispositivo Point.

### Escanea el código QR de tu dispositivo Point

Primero, inicia sesión en la aplicación de Mercado Pago. Luego, oprime en el ícono QR y escanea el código que aparece al encender tu dispositivo Point. Y listo, tu dispositivo Point quedará vinculado a tu cuenta.

![Qr Point Scan](/images/mobile/point-qr-scan.png)

### Configura tu tienda y tu caja

Una vez que hayas vinculado tu dispositivo Point a tu cuenta de Mercado Pago, debes completar los datos de tu negocio y configurar tu caja. 

----[mla, mlm]----
![Locales y Cajas](/images/mobile/tienda-caja.es.png)
------------

----[mlb]----
![Locales y Cajas](/images/mobile/tienda-caja.pt.png)
------------

### Activa el modo integrado en tu dispositivo Point

> NOTE
>
> Recurso en desarrollo
>
> Consulta el manual de [Configuración inicial Point Plus](https://docs.google.com/document/d/19s6PCYe2aQBIkVctrBid74YhFvj5--skeaGb6dpv0Gs/edit?usp=sharing)que te permitirá asociar su dispositivo Point Plus a tu cuenta de Mercado Pago.

## 3. Prepara y configura tus notificaciones de Webhook

Si quieres, puedes recibir notificaciones de Webhooks. Estas se envían desde nuestra API de Integraciones a tu sistema receptor mediante una llamada ´HTTP POST´ en relación a los cambios de estado que presente una intención de pago.

Para integrar las notificaciones Webhook, pueden consultar [esta documentación](https://www.mercadopago.com.ar/developers/es/guides/notifications/webhooks)

### Registra y valida tu webhook

Una vez tengas listo tu sistema webhook puedes registrarlo en nuestra API de Integraciones de la siguiente manera:

``` curl
curl --location --request PATCH 'https://api.mercadopago.com/point/integration-api/integrators' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "webhook": "http://your.server.ip.address:port/webhook"
}'
```

La respuesta será un `HTTP 204 No Content`.


Luego, deberás validar tus notificaciones Webhook. Esta petición es necesaria para que Mercado Pago Point pueda validar que el sistema webhook configurado le pertenece realmente al integrador, esto es requerido para evitar ataques de amplificación.

``` curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/integrators/check' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}'
```

La respuesta será nuevamente un `HTTP 204 No Content`.

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Comienza a procesar tus pagos
>
> Crea una intención de pago y asígnala a un dispositivo Point.
>
> [Comienza a procesar tus pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/create-payment-intent)






