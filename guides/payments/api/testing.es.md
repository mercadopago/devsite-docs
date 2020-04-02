# Prueba tu integración

Te explicamos cómo utilizar nuestras tarjetas y usuarios de prueba para verificar que tus pagos sean creados correctamente y que los mensajes que quieras comunicar sean efectivos.

## Cómo probar tu integración

**Los usuarios de prueba te permiten probar tu integración** al generar flujos de pagos en una copia exacta de tu integración.

Tipos de usuarios | Descripción
------------ | -------------
Vendedor | Es la cuenta de prueba que usas para **configurar la aplicación y credenciales para el cobro.** |
Comprador | Es la cuenta de prueba que usas para **probar el procesa de compra.**<br/>. |

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
"https://api.mercadopago.com/users/test_user?access_token=PROD_ACCESS_TOKEN" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respuesta

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
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

Configura la [clave pública de prueba](https://www.mercadopago.com/mla/account/credentials) de tu usuario vendedor en el frontend de tu aplicación y la [clave privada de prueba](https://www.mercadopago.com/mla/account/credentials) en el backend.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Realiza un pago con tu usuario comprador

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pruebas con tarjeta de crédito

Inicia tu integración configurada con las credenciales de tu usuario de prueba vendedor:

1. Completa los datos de una [tarjeta de prueba](#bookmark_tarjetas_de_prueba).
1. Ingresa el e-mail de tu usuario de prueba comprador.
1. Confirma la compra, ¡y listo!


## Tarjetas de prueba

Tarjeta | Número | CVV | Fecha de vencimiento
------------ | ------------- | ------------- | -------------
Mastercard | 5031 7557 3453 0604 | 123 | 11/25
Visa | 4170 0688 1010 8020 | 123 | 11/25
American Express | 3711 8030 3257 522 | 1234 | 11/25

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
> Ten en cuenta que nos es posible probar el flujo completo para medios de pago en efectivo.


---
### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Manejo de respuestas de error
>
> Ayuda a tus clientes a completar sus pagos sin errores.
>
> [Manejo de respuestas de error](https://www.mercadopago.com.ar/developers/es/guides/payments/api/handling-responses/)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/)
