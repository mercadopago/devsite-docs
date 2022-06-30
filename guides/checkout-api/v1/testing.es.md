# Prueba tu integración

Te explicamos cómo utilizar nuestras tarjetas y usuarios de prueba para verificar que tus pagos sean creados correctamente y que los mensajes que quieras comunicar sean efectivos.

## Cómo probar tu integración

**Los usuarios de prueba te permiten probar tu integración** al generar flujos de pagos en una copia exacta de tu integración.

| Tipos de usuarios | Descripción |
| --- | --- |
| Vendedor | Es la cuenta de prueba que usas para **configurar la aplicación y credenciales para el cobro**. |
| Comprador | Es la cuenta de prueba que usas para **probar el proceso de compra**. |

<br>

> SERVER_SIDE
>
> h2
>
> Cómo crear usuarios

Para comenzar, es necesario que tengas como mínimo dos usuarios de prueba: un comprador y un vendedor.

Ejecuta el siguiente curl para generar un usuario de prueba:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer TEST_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID],"description" : "a description""}'
```


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respuesta

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
> * Tanto el comprador como el vendedor deben ser usuarios de prueba.
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el _email_ y _password_ de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * Para hacer pagos de prueba te recomendamos usar montos bajos.
> * Los montos deben respetar los ----[mla]---- [valores mínimos y máximos](https://www.mercadopago.com.ar/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlm]---- [valores mínimos y máximos](https://www.mercadopago.com.mx/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlu]---- [valores mínimos y máximos](https://www.mercadopago.com.uy/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mco]---- [valores mínimos y máximos](https://www.mercadopago.com.uy/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mpe]---- [valores mínimos y máximos](https://www.mercadopago.com.pe/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlc]---- [valores mínimos y máximos](https://www.mercadopago.cl/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlb]---- [valores mínimos y máximos](https://www.mercadopago.com.br/ajuda/minimo-maximo-posso-pagar_324) ------------ para cada medio de pago.

## Prueba el flujo de pago

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Configura la integración con los datos de tu usuario vendedor

Configura la [clave pública de prueba]([FAKER][CREDENTIALS][URL]) de tu usuario vendedor en el frontend de tu aplicación y la [clave privada de prueba]([FAKER][CREDENTIALS][URL]) en el backend.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Realiza un pago con tu usuario comprador

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pruebas con tarjeta de crédito

Inicia tu integración configurada con las credenciales de tu usuario de prueba vendedor:

1. Completa los datos de una [tarjeta de prueba](#bookmark_tarjetas_de_prueba).
1. Ingresa el e-mail de tu usuario de prueba comprador.
1. Confirma la compra, ¡y listo!


## Tarjetas de prueba

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
| Mastercard |  5808 8877 7464 1586 | 123 | 11/25 |
| Visa | 4104 2962 6235 5432 | 123 | 11/25 |

------------
----[mpe]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4009 1753 3280 6176 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------

Para **probar distintos resultados de pago**, completa el dato que quieras en el nombre del titular de la tarjeta:

- APRO: Pago aprobado.
- CONT: Pago pendiente.
- OTHE: Rechazado por error general.
- CALL: Rechazado con validación para autorizar.
- FUND: Rechazado por monto insuficiente.
- SECU: Rechazado por código de seguridad inválido.
- EXPI: Rechazado por problema con la fecha de expiración.
- FORM: Rechazado por error en formulario.

> WARNING
>
> Importante
>
> Ten en cuenta que no es posible probar el flujo completo para medios de pago en efectivo.

## Comenzar a recibir pagos

Para empezar a cobrar, debes cumplir los [requisitos para salir a producción](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/goto-production) y [activar tus credenciales]([FAKER][CREDENTIALS][URL]).

Antes de activarlas, verifica que las credenciales en tu integración sean las de la cuenta que reciba el dinero de las ventas.<br/>

---
### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Mensajes de respuesta
>
> Ayuda a tus clientes a completar sus pagos sin errores.
>
> [Mensajes de respuesta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/handling-responses)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference)
