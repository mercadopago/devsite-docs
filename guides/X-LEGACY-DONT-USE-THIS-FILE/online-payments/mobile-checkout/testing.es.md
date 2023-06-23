# Prueba tu integración

Es muy importante que antes de salir a producción realices pruebas del flujo de pagos, verificando que las configuraciones que realizaste a nivel de preferencia se reflejen efectivamente en el checkout.
Debes verificar que:

+ La información del bien o servicio a pagar es correcta.
+ Se reconoce la cuenta del cliente, porque envías el e-mail.
+ Ofreces la formas de pago que deseas.
+ La experiencia de pagos es la adecuada y se informa el resultado del pago.

## Cómo probar mi integración

**Los usuarios de prueba te permiten probar tu integración** al generar flujos de pagos en una copia exacta de tu integración.

| Tipos de usuarios | Descripción |
| --- | --- |
| Vendedor | Es la cuenta de prueba que usas para **configurar la aplicación y credenciales para el cobro**. |
| Comprador | Es la cuenta de prueba que usas para **probar el proceso de compra**.<br/> |

## Cómo crear usuarios
Para realizar las pruebas **es necesario que tengas como mínimo dos usuarios**: un comprador y un vendedor.

Ejecuta el siguiente curl para generar un usuario de prueba:

### Solicitud

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]","description" : "a description"}'
```

### Respuesta

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

>WARNING
>
>Importante
>
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el _email_ y _password_ de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * Para hacer pagos de prueba te recomendamos usar montos bajos.
> * Tanto el comprador como el vendedor deben ser usuarios de prueba.
> * Usa tarjetas de pruebas, ya que no es posible retirar el dinero.


### Para probar la integración sigue estos pasos:

1. Configura la [Public Key]([FAKER][CREDENTIALS][URL]) del usuario de prueba en tu aplicación.
2. Crea la preferencia en tu servidor con el [Access Token]([FAKER][CREDENTIALS][URL]).
3. Completa los datos del formulario, ingresando los dígitos de una tarjeta de prueba. En fecha de expiración debes ingresar cualquier fecha posterior a la actual y en código de seguridad 3 o 4 dígitos dependiendo de la tarjeta.
4. Para **probar distintos resultados de pago**, ingresa el dato que quieras en el nombre del titular de la tarjeta:


- APRO: Pago aprobado.
- CONT: Pago pendiente.
- OTHE: Rechazado por error general.
- CALL: Rechazado con validación para autorizar.
- FUND: Rechazado por monto insuficiente.
- SECU: Rechazado por código de seguridad inválido.
- EXPI: Rechazado por problema con la fecha de expiración.
- FORM: Rechazado por error en formulario.

## Tarjetas de prueba

Usa estas tarjetas de prueba para probar los diferentes resultados del pago.

----[mla]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------
----[mlb]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 4332 1540 6351 | 123 | 11/25 |
| Visa | 4235 6477 2802 5682 | 123 | 11/25 |
| American Express | 3753 651535 56885 | 1234 | 11/25 |

------------
----[mlc]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5416 7526 0258 2580 | 123 | 11/25 |
| Visa | 4168 8188 4444 7115 | 123 | 11/25 |
| American Express | 3757 781744 61804 | 1234 | 11/25 |

------------
----[mco]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5254 1336 7440 3564 | 123 | 11/25 |
| Visa | 4013 5406 8274 6260 | 123 | 11/25 |
| American Express | 3743 781877 55283 | 1234 | 11/25 |

------------
----[mlm]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Visa | 4075 5957 1648 3764 | 123 | 11/25 |

------------
----[mlu]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |

------------
----[mpe]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4009 1753 3280 6176 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------

También [puedes utilizar tarjetas de prueba de medios de pago locales de cada país](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/local-cards).
