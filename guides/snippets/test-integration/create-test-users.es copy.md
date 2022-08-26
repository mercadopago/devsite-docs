Para realizar las pruebas **es necesario que tengas como mínimo dos usuarios**:

| Tipo de usuarios de prueba | Descripción |
| --- | --- |
| Vendedor | Es la cuenta que usas para **configurar la aplicación y credenciales para el cobro**. |
| Comprador | Es la cuenta que usas para **probar el proceso de compra.**. |

Ejecuta el siguiente curl para generar un usuario de prueba:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]","description" : "a description"}'
```

La respuesta tendrá una estructura similar al siguiente ejemplo:

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

Para más información sobre los parámetros y respuestas de la API del usuario de prueba, accede a [Referencias API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/test_user/_users_test/post)

> WARNING
>
> Importante
>
> Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos **guardar el email y password de cada uno**.
> <br/>
> Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> <br/>
> Tanto el comprador como el vendedor deben ser usuarios de prueba.