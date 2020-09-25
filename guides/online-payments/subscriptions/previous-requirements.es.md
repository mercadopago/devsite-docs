---
indexable: false
---

# Requisitos previos para comenzar

## Consideraciones y restricciones

----[mla]----
Ten en cuenta que el monto mínimo permitido para crear una suscripción es de $ 2 y el máximo es de $ 250.000.

------------

----[mlb]----
Ten en cuenta que el monto mínimo permitido para crear una suscripción es de R$ 0.5 y el máximo es de R$ 50.000.

------------

----[mlm]----
Ten en cuenta que el monto mínimo permitido para crear una suscripción es de $ 10 y el máximo es de R$ 200.000.

------------

## Primeros pasos

### Acceso a cuenta de Mercado Pago o Mercado Libre
Para poder comenzar la integración, es necesario contar con una cuenta de Mercado Pago o Mercado Libre.

Si aún no tienes una, puedes <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/" target="_blank">crear una cuenta en Mercado Pago</a> cuando quieras.

### Ten a mano tus credenciales

Las credenciales son las claves que te proporcionamos para que puedas configurar tu integración. Para este caso, vas a utilizar una clave pública y otra clave privada.

Para poder encontrarlas, ve la sección de <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/account/credentials/" target="_blank">Credenciales</a>.

>¿Tienes dudas sobre credenciales? Puedes consultar nuestras <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/support/" target="_blank">preguntas frecuentes</a>.


### Usa nuestras librerías oficiales

Intégrate con nuestra <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/sdks/official/js/" target="_blank">SDK Javascript de Mercado Pago</a>  que te permite crear un token de pago y enviar los datos de las tarjetas a tu backend de forma segura. 


### Conoce los usuarios de prueba 

Comienza a familiarizarte con la API o prueba tu integración, utilizando usuarios de prueba.

#### Crear usuarios de prueba

Ejecuta el siguiente curl para generar un usuario de prueba:


[[[
```curl curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer ENV_ACCESS_TOKEN" \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```
]]]

### Respuesta
`HTTP Status 200 OK`
```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_XXXX@testuser.com"
}
```

>WARNING
>
>Importante
>
> * Tanto el comprador como el vendedor deben ser usuarios de prueba.
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el email y password de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * Para hacer pagos de prueba, te recomendamos usar montos bajos.
> * Los montos deben respetar los <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/monto-minimo-maximo-medios-de-pago_620/" target="_blank">valores mínimos y máximos</a> para cada medio de pago. 



------------
### Próximos pasos
> LEFT_BUTTON_REQUIRED_ES
>
> Integrar suscripciones
>
> Elige tu forma de integrar y comienza a recibir pagos recurrentes.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/integration/)
