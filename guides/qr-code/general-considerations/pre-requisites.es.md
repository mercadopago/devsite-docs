---
sites_supported:
  - mla
  - mpe
  - mco
  - mlu
  - mlm
  - mlc
  - mlb
---

# Requisitos previos para integrarte

## Glosario

Sabemos que algunos términos son nuevos. Antes de empezar, te los dejamos a mano. 

| Término                            | Descripción                                                  |
| -----------------------------------| ------------------------------------------------------------ | 
| Credenciales (Credentials)         | Tus credenciales son las claves que te proporcionamos para que puedas configurar tus integraciones. Para poder encontrarlas, ve a tus [credenciales]([FAKER][CREDENTIALS][URL]) y selecciona las **productivas** en la opción _Checkout personalizado._ |
| `ACCESS_TOKEN` | Es la clave privada de la aplicación para generar pagos, dentro de la sección [credenciales]([FAKER][CREDENTIALS][URL]). Debes usarla para identificarte en tus integraciones. Siempre usa las del Modo Producción. |
| `COLLECTOR_ID` | Es el ID del usuario vendedor en Mercado Pago, son los últimos 9 dígitos del `access_token`, posterior al guión medio. También se lo conoce como `USER_ID` |
| `SPONSOR_ID` | Es el ID del usuario proveedor del sistema integrado con Mercado Pago, son los últimos 9 dígitos del `access_token`, posterior al guión medio. El `sponsor_ID` no puede ser igual al `COLLECTOR_ID`. |
| Sucursal | Es una **tienda física** en la que tus clientes pueden adquirir tus productos o servicios. Puedes tener varias sucursales en una misma cuenta. |
| Caja | Es un **punto de venta** que existe en una sucursal o tienda física. Cada caja tendrá vinculado un código QR unívoco. |
| Orden | Es el pedido realizado por tu cliente. Contiene un listado de productos con su monto asociado.

## Requisitos previos

Para continuar, es necesario realizar el siguiente paso:

**1. Acceso a cuenta de Mercado Pago o Mercado Libre**

Para poder comenzar la integración, es necesario **contar con una cuenta de Mercado Pago o Mercado Libre**. 
Si aún no tienes una, puedes [crear una cuenta de Mercado Pago](https://www.mercadopago.com.ar) cuando quieras.

> NOTE
> 
> Nota
> 
> Si vas a operar en nombre de otros, puedes trabajar con las credenciales de ellos de una forma más fácil y segura por [Marketplace](https://www.mercadopago.com.ar/developers/es/guides/marketplace/api/introduction/).


### Próximos pasos


> LEFT_BUTTON_REQUIRED_ES
>
> Sucursales y Cajas
>
> Para realizar la integración, primero debes configurar tus sucursales y cajas.
>
> [Sucursales y Cajas](https://www.mercadopago.com.ar/developers/es/guides/qr-code/general-considerations/stores-pos/)
