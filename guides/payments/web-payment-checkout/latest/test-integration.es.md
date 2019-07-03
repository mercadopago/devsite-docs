---
sites_supported:
  - mla
---

# Prueba tu integración

> NOTE
>
> En esta página
>
> * [Cómo probar tu integración](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/test-integration#bookmark_cómo_probar_tu_integración)
> * [Cómo crear usuarios](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/test-integration#bookmark_cómo_crear_usuarios)
> * [Prueba el flujo de pago](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/test-integration#bookmark_prueba_el_flujo_de_pago)
> * [Tarjetas de prueba](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/test-integration#bookmark_tarjetas_de_prueba)
> * [Comenzar a recibir pagos](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/test-integration#bookmark_comenzar_a_recibir_pagos)


## Cómo probar mi integración

Los usuarios de prueba te permiten probar tu Web Checkout al generar flujos de pagos en una copia exacta de tu integración.

Tipos de usuarios de prueba | Descripción
------------ | -------------
Vendedor | Es la cuenta que usas para configurar la aplicación y credenciales para el cobro.
Comprador | Es la cuenta que se usa para probar el procesa de compra.<br/> Existe dos formas de hacer el pago:<br/><br/> **Como usuario invitado:** solo necesitas completar la dirección de correo electrónico.<br/><br/> **Como usuario registrado:** accedes a la cuenta de Mercado Pago con el usuario y clave. En caso de tener disponible dinero en cuenta o tarjetas guardadas, estarán habilitadas como medios de pago.


## Cómo crear usuarios
Para realizar las pruebas es necesario que tengas como mínimo dos usuarios: un comprador y un vendedor.

Ejecuta el siguiente curl para generar un usuario de prueba:

### Solicitud

```curl
curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=TEST-7802846747055705-061416-c0c9b443246bef3a3bab6a19f36c93c0-390383281" \
-d '{"site_id":"MLA"}'
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
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el email y password de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * Para hacer pagos de prueba te recomendamos usar montos bajos.
> * Tanto el comprador como el vendedor deben ser usuarios de prueba.
> * Usa tarjetas de pruebas, ya que no es posible retirar el dinero.


## Prueba el flujo de Pago

### 1. Configura el checkout con los datos de tu usuario vendedor

Configura la preferencia con las <a href="https://www.mercadopago.com/mla/account/credentials" target="_blank"> credenciales</a> del usuario de prueba que quieras usar como vendedor.

### 2. Realiza un pago con tu usuario comprador

#### Comprar como usuario invitado.

Pruebas con tarjeta de crédito.

1. Selecciona Tarjeta como medio de pago.
2. Ingresa los datos de una [tarjeta de prueba](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/advanced-integration#bookmark_tarjetas_de_prueba)
3. Completa el e-mail y ¡listo!<br/><br/>

#### Comprar como usuario registrado (con cuenta de Mercado Pago)
Pruebas con tarjeta de crédito

1. Cierra sesión del usuario de prueba vendedor.
2. Inicia sesión en Mercado Pago con una cuenta de usuario de prueba comprador.
3. Selecciona Tarjeta como medio de pago.
4. Elige una tarjeta guardada o completa los datos con una nueva y ¡listo!


## Tarjetas de prueba

Tarjeta | Número
------------ | -------------
Mastercard | 5031 7557 3453 0604
Visa | 4170 0688 1010 8020
American Express | 3711 8030 3257 522


## Comenzar a recibir pagos

Para empezar a cobrar, debes completar el formulario <a href="https://www.mercadopago.com/mla/account/credentials/" target="_blank"> Quiero ir a producción</a>

Al terminar el formulario, verifica que las credenciales en tu integración sean las de la cuenta que reciba el dinero de las ventas.<br/>

### Próximos pasos

- [Integración avanzada](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/advanced-integration/)
- [Personalizar](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/customizations)
- [Configuraciones](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/configurations)
