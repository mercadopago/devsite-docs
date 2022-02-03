Para realizar las pruebas **es necesario que tengas como mínimo dos usuarios**: un vendedor y un comprador.

Ejecuta el siguiente curl para generar un usuario de prueba:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_users" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```

La respuesta tendrá una estructura similar al siguiente ejemplo:

```json
{
  "id": 123,
  "nickname": "TEST45I5GYIH",
  "password": "qatest6730",
  "site_status": "active",
  "site_id": "MLA",
  "email": "test_user_123@testuser.com",
  "date_created": "2021-11-04T12:02:35Z",
  "date_last_updated": "2021-11-04T12:02:35Z"
}
```

>WARNING
>
>Importante
>
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el _email_ y _password_ de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * Tanto el comprador como el vendedor deben ser usuarios de prueba.