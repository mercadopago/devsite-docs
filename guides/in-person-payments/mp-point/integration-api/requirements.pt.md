---
sites_supported:

- mla
- mlb
- mlm

---

# Requisitos previos

Ten en cuenta estos aspectos antes de empezar:

## 1. Obtén las credenciales de identificación para tu integración

#### 1.1 Accede a una cuenta

Para poder comenzar la integración, es necesario **contar con una cuenta de Mercado Pago o Mercado Libre**.
Puedes [Ingresar](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/pre-requisites)
a una cuenta ya existente o [Crear una cuenta nueva](https://www.mercadopago[FAKER][URL][DOMAIN]).

#### 1.2 Crea una aplicación

Necesitarás crear una aplicación por cada solución para tener todo organizado y llevar un control que te facilite la
gestión. Crea una aplicación para obtener credenciales y configurar notificaciones webhooks.

Es fácil, te contamos cómo hacerlo:

1. Ingresa a [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Elige “Nueva aplicación” o “Crear tu primera aplicación”.
3. Ponle un nombre con el que puedas identificarla más adelante.
4. Acepta nuestros Términos y Condiciones. ¡Y listo!

----[mla]----
![Crear Aplicacion](/images/mobile/CrearAppIntegracion.gif)
------------
> NOTE
>
> Nota
>
> Si vas a operar en nombre de otros, puedes trabajar con las credenciales de ellos de una forma más fácil y segura por [Marketplace](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/marketplace/checkout-api/introduction).
>

#### 1.3 Accede a las credenciales de tu aplicación

Una vez que tengas una aplicación
creada, [podrás acceder a las credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials).
Con ellas puedes conectar una integración a tu cuenta y configurarla a tu manera.

#### Generar usuarios de prueba (opcional)

Puedes probar tus integraciones en un ambiente controlado mediante el uso de usuarios de prueba, para crearlos puedes
hacerlo usando el siguiente comando:

----[mlb]----

``` cURL
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${PROD_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test_user"
-d '{"site_id":"MLB"}'
```

------------
----[mla]----

``` cURL
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${PROD_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test_user"
-d '{"site_id":"MLA"}'
```

------------
----[mlm]----

``` cURL
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${PROD_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test_user"
-d '{"site_id":"MLM"}'
```

------------


> WARNING
>
> IMPORTANTE
>
> * En el paso 1.2 te mostramos como obtener el ACCESS_TOKEN de tu nuevo usuario de pruebas.
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el email y password de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * No es posible obtener pagos exitosos con usuarios de pruebas, es por eso que hemos diseñado un [Simulador Point](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/simulator) que te ayudará a depurar la API.

## 2. Asocia tu dispositivo Point a tu cuenta de Mercado Pago
> NOTE
>
> Para poder vincular tu dispositivo Point a tu cuenta de Mercado Pago es necesario descargar la aplicación en tu celular, la puedes encontrar en los marketplaces de iOS y Android.

> [<img src="/mobile/GooglePlayBadge.es.png" alt="Android Play Store" width="200"/>](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=es_419)
> [<img src="/mobile/AppStoreBadge.es.svg" alt="iOS App Store" width="158" style="margin:0.8em"/>](https://itunes.apple.com/ar/app/mercado-pago/id925436649?mt=8)

#### 2.1. Escanea el código QR de tu dispositivo Point
Inicia sesión en la aplicación de Mercado Pago, oprime en el ícono QR y escanea el código que aparece al encender tu dispositivo Point, de esta forma tu dispositivo Point
quedará vinculado a tu cuenta.

![Qr Point Scan](/images/mobile/point-qr-scan.png)

#### 2.2. Configura tu tienda y tu caja

Una vez vinculado el dispositivo Point a tu cuenta de Mercado Pago, debes completar los datos de tu negocio y configurar tu caja.

----[mla]----
![Locales y Cajas](/images/mobile/tienda-caja.es.png)
------------

----[mlb]----
![Locales y Cajas](/images/mobile/tienda-caja.pt.png)
------------

#### 2.3. Activa el modo integrado en tu dispositivo Point
------------------------***PENDIENTE***-------------------


## 3. Prepara y configura tu webhook (opcional)
**¿Qué es un webhook?**
<br/>
Es una notificación que se envía desde nuestra API de Integraciones a tu sistema receptor mediante una llamada HTTP en
relación a los cambios de estado que presente una intención de pago.
<br/>

- **Obtén tu token:** Por medio de este endpoint puedes obtener tu token que te será útil al momento de configurar tu webhook.
``` cURL
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/integrators' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
```
- **Ejemplo de respuesta**

``` json
{
    "token": "0230abf9-79e9-493b-b288-32d123456789",
    "webhook": "",
    "is_valid_webhook": false
}
```

<br/>

**¿Cómo funciona?**

Tu sistema debe exponer un servicio API REST a través de una única URL que permita la comunicación con nuestra API de Integraciones.
Esta URL debe soportar las siguientes operaciones:
- **Validación de seguridad HTTP GET:** Esta operación es requerida para validar que el sistema webhook configurado te pertenece.
  Nuestra API de Integraciones realizará la petición al webhook configurado enviando un `challengeCode` como query param, tu endpoint debe encriptarlo utilizando el algoritmo **HMAC-SHA256**
  y responder con el `challengeCode` encriptado en formato hexadecimal.
  El algoritmo requiere de un `secret` que corresponde al `token` obtenido en el **Paso Anterior** y de un message que corresponde al `challengeCode`.

  - **Ejemplo de respuesta**

  ``` json
  {
     "encrypted_challenge": "32268dfc78fd96b0db37195e278c3a657c0125552f659967c654dbf7f285b004"
  }
  ```
- **Recepción de notificaciones HTTP POST:** Esta operación es necesaria para que el integrador pueda recibir las notificaciones en la plataforma.
  Enviaremos la notificación al webhook configurado cada vez que se genere un cambio de estado referente a una intención de pago.

  - **Ejemplo de notificación enviada a tu webhook**

  ``` json
  {
   "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
   "created_at": "2021-08-22 19:24:14",
   "amount": 1400,
   "payment": {
      "id": 18308029193,
      "type": "credit_card",
      "state": "approved"
   } ,
   "additional_info": {
      "external_reference": "3cc6b09c-eb77-4812-899e-4ff003cd21ed"
   },
   "state": "FINISHED"
  }
  ```

  Campo | Descripción
      ------------------ | -----------------
  id                 | Identificador de la intención de pago
  created_at         | Fecha de creación de la intención de pago
  amount             | Monto total de la intención de pago
  payment.id         | Identificador del pago
  payment.type       | Tipo de tarjeta
  payment.state      | Estado final del pago
  external_reference | Campo de uso exclusivo del integrador para incluir referencias propias de su sistema
  state              | Estado final de la intención de pago

> LEFT_BUTTON_RECOMMENDED_ES
>
> Implementación del algoritmo HMAC-SHA256
>
> Ejemplos del algoritmo HMAC-SHA256 que te pueden ser útiles al momento de crear tu sistema webhook.
>
> [Webhook](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/webhook)

### 3.1. Registra tu webhook
Una vez tengas listo tu sistema webhook puedes registrarlo en nuestra API de Integraciones

``` cURL
curl --location --request PATCH 'https://api.mercadopago.com/point/integration-api/integrators' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "webhook": "http://your.server.ip.address:port/webhook"
}'
```

La respuesta será un `HTTP 204 No Content`.

### 3.2. Valida tu webhook

Esta petición es necesaria para que MercadoPago Point pueda validar que el sistema webhook configurado le pertenece realmente al integrador, esto es requerido para evitar ataques de amplificación.

``` cURL
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/integrators/check' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}'
```

La respuesta será un `HTTP 204 No Content`.


### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Comienza a procesar tus pagos
>
> Una vez completados los pasos anteriores, ya puedes comenzar a cobrar con tu dispositivo Point.
>
> [Configuración API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/create-payment-intent)

> LEFT_BUTTON_RECOMMENDED_ES
>
> Conoce nuestro simulador Point
>
> Haz uso de nuestro Simulador Point para que puedas probar la API de Integraciones sin necesidad de que tengas un dispositivo físico.
>
> [Simulador Point](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/simulator)
