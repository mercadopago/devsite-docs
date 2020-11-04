---
sites_supported:
  - mla
  - mlm
  - mlb
---

# Prueba tus suscripciones

Te explicamos cómo utilizar nuestras tarjetas y usuarios de prueba para verificar que tus suscripciones sean creadas correctamente.


## Cómo probar tu integración

**Los usuarios de prueba te permiten probar tus suscripciones** al generar flujos de pagos con una copia exacta de tus configuraciones.

Tipos de usuario | Descripción  
--- |	---
Vendedor | Es la cuenta de prueba que usas para configurar la suscripción y credenciales para el cobro.       
Pagador | Es la cuenta de prueba que usas para probar los pagos recurrentes.

## Cómo crear usuarios

Para comenzar, es necesario que tengas como mínimo dos usuarios de prueba: un comprador y un vendedor.

Para configurar la cuenta del vendedor puedes usar las credenciales de prueba de tu usuario. 

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

### Prueba el flujo de pago

#### 1. Configura la suscripción con los datos de tu usuario vendedor

Utiliza la  <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/account/credentials" target="_blank">clave pública de prueba</a> de tu usuario vendedor al momento de crear la suscripción que quieras probar.<br>

#### 2. Realiza un pago con tu usuario comprador

Pruebas con tarjeta de crédito

1. Accede a la suscripción que creaste y quieras revisar.
1. Completa los datos de una **tarjeta de prueba**.
1. Ingresa los datos de tu usuario de prueba pagador.
1. Confirma la compra, ¡y listo!

### Tarjetas de prueba

Tarjeta |   Número  | Código de seguridad   |   Fecha de vencimiento
--- |	--- | --- | --- 
Mastercard       |  5031 7557 3453 0604 |   123 | 11/25            
Visa             |  4509 9535 6623 3704 |   123 | 11/25   
American Express |  3711 803032 57522   |   1234| 11/25   

------------
### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Integración avanzada
>
> Actualiza, modifica o cancela tus suscripciones.
>
> [Integración avanzada](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/advanced-integration/)

> RIGHT_BUTTON
>
> Reintentos de cobros
>
> Por si tienes inconvenientes, te explicamos la lógica de reintentos de cobros. 
>
> [Reintentos de cobros](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/payment-retry/)
