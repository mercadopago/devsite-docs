# Prueba tu integración

Es muy importante que antes de salir a producción realices pruebas del flujo de pagos, verificando que las configuraciones que realizaste a nivel de preferencia se reflejen efectivamente.
Una buena experiencia de tus clientes en el checkout ayuda a mejorar la conversión.

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

## Prueba el flujo de Pago

Cuentas con un par de [credenciales de prueba]([FAKER][CREDENTIALS][URL]), que te permitián probar toda la integración en una réplica exacta del Modo Producción pudiendo simular transacciones utilizando las tarjetas de prueba:

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

## Recibe un pago

Con tu `access_token` y el `card_token` obtenido, podrás hacer la prueba de creación de un pago.

Si al momento de la creación obtienes algún error vinculado al método de pago seleccionado o a las cuentas que están operando, te informaremos con un `HTTP Status 400 Bad Request` y el código detallando el error para que puedas efectuar la correción y reintento del pago.

Prueba todos los escenarios posibles de pago aprobado, pendiente o rechazado. Para ello debes ingresar en el formulario en el campo `card_holder_name` alguno de los siguientes prefijos:

- APRO: Pago aprobado.
- CONT: Pago pendiente.
- OTHE: Rechazado por error general.
- CALL: Rechazado con validación para autorizar.
- FUND: Rechazado por monto insuficiente.
- SECU: Rechazado por código de seguridad inválido.
- EXPI: Rechazado por problema con la fecha de expiración.
- FORM: Rechazado por error en formulario.

En cada caso, debes comunicar a tu cliente el resultado del pago y qué debe hacer como próximo paso.
Para ello te informaremos con un `HTTP Status 201 OK` que el pago ha sido creado correctamente y enviaremos un código de resultado para que puedas redirigir al cliente a la página con el mensaje correcto.

## Verifica haber recibido la notificación Webhook

Mercado Pago te enviará una notificación del evento ocurrido. Valida que la hayas recibido correctamente e impactado en forma correcta en tu sistema de gestión.

### Efectúa la anulación del pago

Realiza la devolución de un pago aprobado o la cancelación de un pago pendiente y verifica que te llegue la notificación con la novedad correspondiente al recurso.

## Prueba la creación de un cliente

Verifica que se haya creado el `customer` con la tarjeta asociada y que sus datos de tarjeta sean recuperados en forma correcta cuando cargues nuevamente el _checkout_.
