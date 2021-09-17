# Prueba tu integración

**Los usuarios de prueba te permiten probar tu Checkout Pro** generando flujos de pagos en una copia exacta de tu integración.

| Tipo de usuarios de prueba | Descripción |
| --- | --- |
| Vendedor | Es la cuenta que usas para **configurar la aplicación y credenciales para el cobro**. |
| Comprador | Es la cuenta que usas para **probar el proceso de compra.**<br/><br/>Existen dos formas de hacer el pago: como **usuario invitado**, completando la dirección de correo electrónico deseado, y como **usuario registrado**, accedendo a una cuenta de Mercado Pago con usuario y clave. En este último escenario se habilitarán como medio de pago las tarjetas previamente guardadas y el saldo disponible en la cuenta. |

## Crea usuarios de prueba

Para realizar las pruebas **es necesario que tengas como mínimo dos usuarios**: un vendedor y un comprador.

Ejecuta el siguiente curl para generar un usuario de prueba:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```
La respuesta tendrá una estructura similar al ejemplo siguiente:

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
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el _email_ y _password_ de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * Tanto el comprador como el vendedor deben ser usuarios de prueba.

## Prueba el flujo de pago

### 1. Configura el checkout con los datos de tu usuario vendedor

Genera una preferencia con las [credenciales]([FAKER][CREDENTIALS][URL]) del usuario de prueba que quieras usar como vendedor.

### 2. Realiza un pago con tu usuario comprador

#### Comprar como usuario invitado

Al abrir el checkout creado con los datos de tu usuario vendedor:

1. Selecciona `Tarjeta` como medio de pago.
2. Ingresa los datos de una [tarjeta de prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/test-integration#bookmark_tarjetas_de_prueba).
3. Completa el e-mail deseado.

#### Comprar como usuario registrado 

Al abrir el checkout creado con los datos de tu usuario vendedor:

1. Inicia sesión en una cuenta Mercado Pago con el usuario de prueba comprador.
2. Selecciona `Tarjeta` como medio de pago.
3. Elige una tarjeta guardada o ingresa los datos de una [tarjeta de prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/test-integration#bookmark_tarjetas_de_prueba).


>WARNING
>
>Importante
>
> * Usa montos bajos para hacer pagos de prueba.
> * Usa siempre tarjetas de pruebas, ya que no es posible retirar el dinero.

### Tarjetas de prueba

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

Para **probar distintos resultados de pago** con Checkout Pro, completa el estado deseado en el nombre del titular de la tarjeta:

| Estado de pago | Descripción |
| --- | --- |
| `APRO` | Pago aprobado |
| `CONT` | Pago pendiente |
| `OTHE` | Rechazado por error general |
| `CALL` | Rechazado con validación para autorizar |
| `FUND` | Rechazado por monto insuficiente | 
| `SECU` | Rechazado por código de seguridad inválido | 
| `EXPI` | Rechazado por problema con la fecha de expiración | 
| `FORM` | Rechazado por error en formulario | 

## Reciba los pagos

Para empezar a cobrar, debes [activar tus credenciales]([FAKER][CREDENTIALS][URL]).

Antes de activarlas, verifica si las credenciales utlizadas en tu integración son las de la cuenta que debería recibir el dinero de las ventas.

---

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Integración avanzada
>
> Optimiza tu integración y mejora la gestión de tus ventas.
>
> [Integración avanzada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/advanced-integration)

> RIGHT_BUTTON
>
> Personalizaciones
>
> Adapta el estilo de tu marca en la experiencia de compra de Checkout Pro.
>
> [Prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/customizations)
