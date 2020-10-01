# Prueba tu integración



## Cómo probar mi integración

**Los usuarios de prueba te permiten probar tu Checkout Pro** al generar flujos de pagos en una copia exacta de tu integración.

Tipos de usuarios | Descripción
------------ | -------------
Vendedor | Es la cuenta de prueba que usas para **configurar la aplicación y credenciales para el cobro.**
Comprador | Es la cuenta de prueba que usas para **probar el proceso de compra.**<br/>Existen dos formas de hacer el pago:<br/><br/> **Como usuario invitado:** solo necesitas completar la dirección de correo electrónico.<br/>**Como usuario registrado:** accedes a la cuenta de Mercado Pago con el usuario y clave. En caso de tener disponible dinero en cuenta o tarjetas guardadas, estarán habilitadas como medios de pago.


## Cómo crear usuarios
Para realizar las pruebas **es necesario que tengas como mínimo dos usuarios**: un comprador y un vendedor.

Ejecuta el siguiente curl para generar un usuario de prueba:

### Solicitud

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```


### Respuesta

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
> * Para hacer pagos de prueba te recomendamos usar montos bajos.
> * Tanto el comprador como el vendedor deben ser usuarios de prueba.
> * Usa tarjetas de pruebas, ya que no es posible retirar el dinero.


## Prueba el flujo de pago

### 1. Configura el checkout con los datos de tu usuario vendedor

Genera una preferencia con las <a href="[FAKER][CREDENTIALS][URL]" target="_blank">credenciales</a> del usuario de prueba que quieras usar como vendedor.

### 2. Realiza un pago con tu usuario comprador

#### Comprar como usuario invitado

Pruebas con tarjeta de crédito

Al abrir el checkout creado con los datos de tu usuario vendedor:

1. Selecciona _Tarjeta_ como medio de pago.
2. Ingresa los datos de una [tarjeta de prueba](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/test-integration#bookmark_tarjetas_de_prueba).
3. Completa el e-mail ¡y listo!<br/><br/>

#### Comprar como usuario registrado (con cuenta de Mercado Pago)

Pruebas con tarjeta de crédito

Al abrir el checkout creado con los datos de tu usuario vendedor:

1. Inicia sesión en Mercado Pago con la cuenta de tu usuario de prueba comprador.
2. Selecciona _Tarjeta_ como medio de pago.
3. Elige una tarjeta guardada o completa los datos con una nueva ¡y listo!


## Tarjetas de prueba

----[mla]----

Tarjeta | Número | Código de seguridad | Fecha de vencimiento
:---  | :---: | :---: | :---:
Mastercard | 5031 7557 3453 0604 | 123 | 11/25
Visa | 4509 9535 6623 3704 | 123 | 11/25
American Express | 3711 803032 57522 | 1234 | 11/25

------------
----[mlb]----

Tarjeta | Número | Código de seguridad | Fecha de vencimiento
:---  | :---: | :---: | :---:
Mastercard | 5031 4332 1540 6351 | 123 | 11/25
Visa | 4235 6477 2802 5682 | 123 | 11/25
American Express | 3753 651535 56885 | 1234 | 11/25

------------
----[mlc]----

Tarjeta | Número | Código de seguridad | Fecha de vencimiento
:---  | :---: | :---: | :---:
Mastercard | 5416 7526 0258 2580 | 123 | 11/25
Visa | 4168 8188 4444 7115 | 123 | 11/25
American Express | 3757 781744 61804 | 1234 | 11/25

------------
----[mco]----

Tarjeta | Número | Código de seguridad | Fecha de vencimiento
:---  | :---: | :---: | :---:
Mastercard | 5254 1336 7440 3564 | 123 | 11/25
Visa | 4013 5406 8274 6260 | 123 | 11/25
American Express | 3743 781877 55283 | 1234 | 11/25

------------
----[mlm]----

Tarjeta | Número | Código de seguridad | Fecha de vencimiento
:---  | :---: | :---: | :---:
Mastercard | 5474 9254 3267 0366 | 123 | 11/25
Visa | 4075 5957 1648 3764 | 123 | 11/25

------------
----[mlu]----

Tarjeta | Número | Código de seguridad | Fecha de vencimiento
:---  | :---: | :---: | :---:
Mastercard | 5031 7557 3453 0604 | 123 | 11/25
Visa | 4509 9535 6623 3704 | 123 | 11/25

------------
----[mpe]----

Tarjeta | Número | Código de seguridad | Fecha de vencimiento
:---  | :---: | :---: | :---:
Mastercard | 5031 7557 3453 0604 | 123 | 11/25
Visa | 4009 1753 3280 6176 | 123 | 11/25
American Express | 3711 803032 57522 | 1234 | 11/25

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

## Comenzar a recibir pagos

Para empezar a cobrar, debes <a href="[FAKER][CREDENTIALS][URL]" target="_blank">activar tus credenciales</a>.

Al activarlas, verifica que las credenciales en tu integración sean las de la cuenta que reciba el dinero de las ventas.<br/>

---

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Integración avanzada
>
> Optimiza tu integración y mejora la gestión de tus ventas.
>
> [Integración avanzada](http://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/advanced-integration/)

> RIGHT_BUTTON
>
> Personalizaciones
>
> Adapta el estilo de tu marca en la experiencia de compra.
>
> [Prueba](http://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/customizations/)
