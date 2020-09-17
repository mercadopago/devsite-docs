
# Requisitos previos para comenzar

## Consideraciones y restricciones

----[mla]----
Hay que tener en cuenta ciertas particularidades y restricciones para comenzar a recibir pagos: 

* __Montos mínimos y máximos permitidos__. El monto mínimo permitido para crear una suscripción es de $ 2 y el máximo es de $ 250.000.
* __Regulación de UIF__: Estamos adecuados a la normativa 76 de la UIF (Unidad de Información Financiera), que exige que solo podrán operar aquellos sellers que hayan declarado una determinada información personal y jurídica.
Si aún no has validado tu identidad, hazlo desde __<a href="https://www.mercadopago[FAKER][URL][DOMAIN]/subscriptions" target="_blank">suscripciones__</a>.

> Si ingresas al link y ves al panel de suscripciones, significa que ya completaste tus datos previamente y estás listo para operar en este flujo.

------------

----[mlb]----

Ten en cuenta que el monto mínimo permitido para crear una suscripción es de R$ 0.5 y el máximo es de R$ 50.000.

------------

----[mlm]----
Hay que tener en cuenta ciertas particularidades y restricciones para comenzar a recibir pagos: 

* __Montos mínimos y máximos permitidos.__ El monto mínimo permitido para crear una suscripción es de $ 10 y el máximo es de R$ 200.000.
* __Regulación de IFPE__: Debido a la regulación impuesta por IFPE (Instituciones de Fondos de Pago Electrónico) no estamos habilitados a operar con dinero en cuenta como medio de pago.
Los únicos medios de pago aceptados serán tarjeta de crédito y débito.

------------

## Primeros pasos

### Acceso a cuenta de Mercado Pago o Mercado Libre
Para poder comenzar la integración, es necesario contar con una cuenta de Mercado Pago o Mercado Libre.

Si aún no tienes una, puedes <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/" target="_blank">crear una cuenta en Mercado Pago</a> cuando quieras.

### Usa nuestras librerías oficiales

Intégrate con nuestra <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/sdks/official/js/" target="_blank">SDK Javascript de Mercado Pago</a>  que te permite crear un token de pago y enviar los datos de las tarjetas a tu backend de forma segura. 

### Utiliza los usuarios de prueba 

Comienza a familiarizarte con la API o prueba tu integración, utilizando usuarios de prueba.

### Crear usuarios de prueba

Ejecuta el siguiente curl para generar un usuario de prueba:

[[[
```curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=PROD_ACCESS_TOKEN" \
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
    "email": "test_user_123456@testuser.com"
}
```

> WARNING 
> 
> Importante
> 
> * Tanto el comprador como el vendedor deben ser usuarios de prueba.
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el email y password de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * Para hacer pagos de prueba, te recomendamos usar montos bajos.
> * Los montos deben respetar los valores mínimos y máximos para cada medio de pago. 

------------
### Próximos pasos
> LEFT_BUTTON_REQUIRED_ES
>
> Integrar suscripciones
>
> Elige tu forma de integrar y comienza a recibir pagos recurrentes.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/integration/)
